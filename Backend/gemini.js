import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { buildAnalysisPrompt } from "./prompts/analysisPrompt.js";

dotenv.config();

const RECOMMENDED_MAJORS_COUNT = 10;

if (!process.env.GEMINI_API_KEY) {
  throw new Error(
    "GEMINI_API_KEY is missing. Please add it to the .env file."
  );
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * Removes Markdown code blocks that Gemini may add around JSON.
 *
 * @param {string} text
 * @returns {string}
 */
function cleanJsonResponse(text) {
  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
}

/**
 * Checks that a value is a non-empty string.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isNonEmptyString(value) {
  return (
    typeof value === "string" &&
    value.trim() !== ""
  );
}

/**
 * Checks that a value is an array containing non-empty strings.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isValidStringArray(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(isNonEmptyString)
  );
}

/**
 * Sorts recommended majors by compatibility score
 * and assigns ranks automatically.
 *
 * @param {object} analysis
 * @returns {object}
 */
function normalizeAnalysisResult(analysis) {
  if (!Array.isArray(analysis.recommendedMajors)) {
    return analysis;
  }

  analysis.recommendedMajors =
    analysis.recommendedMajors
      .sort(
        (a, b) =>
          Number(b.compatibilityScore) -
          Number(a.compatibilityScore)
      )
      .map((major, index) => ({
        ...major,
        rank: index + 1,
      }));

  return analysis;
}

/**
 * Validates the structure of the AI analysis.
 *
 * @param {object} analysis
 */
function validateAnalysisStructure(analysis) {
  if (
    !analysis ||
    typeof analysis !== "object" ||
    Array.isArray(analysis)
  ) {
    throw new Error(
      "AI response is not a valid object."
    );
  }

  // ==========================
  // Student Profile
  // ==========================

  if (
    !analysis.studentProfile ||
    typeof analysis.studentProfile !== "object"
  ) {
    throw new Error(
      "AI response is missing studentProfile."
    );
  }

  const requiredProfileFields = [
    "summary",
    "thinkingStyle",
    "learningStyle",
    "workEnvironment",
  ];

  requiredProfileFields.forEach((field) => {
    if (
      !isNonEmptyString(
        analysis.studentProfile[field]
      )
    ) {
      throw new Error(
        `studentProfile.${field} is missing or invalid.`
      );
    }
  });

  // ==========================
  // Strengths
  // ==========================

  if (!isValidStringArray(analysis.strengths)) {
    throw new Error(
      "AI response strengths must be a non-empty string array."
    );
  }

  if (analysis.strengths.length < 3) {
    throw new Error(
      "AI response must contain at least three strengths."
    );
  }

  // ==========================
  // Development Areas
  // ==========================

  if (
    !isValidStringArray(
      analysis.developmentAreas
    )
  ) {
    throw new Error(
      "AI response developmentAreas must be a non-empty string array."
    );
  }

  if (analysis.developmentAreas.length < 2) {
    throw new Error(
      "AI response must contain at least two development areas."
    );
  }

  // ==========================
  // Recommended Majors
  // ==========================

  if (
    !Array.isArray(
      analysis.recommendedMajors
    )
  ) {
    throw new Error(
      "AI response recommendedMajors must be an array."
    );
  }

  if (
    analysis.recommendedMajors.length !==
    RECOMMENDED_MAJORS_COUNT
  ) {
    throw new Error(
      `AI response must contain exactly ${RECOMMENDED_MAJORS_COUNT} recommended majors, but received ${analysis.recommendedMajors.length}.`
    );
  }

  analysis.recommendedMajors.forEach(
    (major, index) => {
      const position = index + 1;

      if (
        !major ||
        typeof major !== "object" ||
        Array.isArray(major)
      ) {
        throw new Error(
          `Recommended major ${position} is invalid.`
        );
      }

      if (!isNonEmptyString(major.major)) {
        throw new Error(
          `Recommended major ${position} does not have a valid name.`
        );
      }

      if (
        !Number.isInteger(
          major.compatibilityScore
        ) ||
        major.compatibilityScore < 0 ||
        major.compatibilityScore > 100
      ) {
        throw new Error(
          `Compatibility score for major ${position} is invalid.`
        );
      }

      if (!isNonEmptyString(major.reason)) {
        throw new Error(
          `Reason for major ${position} is missing or invalid.`
        );
      }

      if (
        !isValidStringArray(
          major.requiredSkills
        )
      ) {
        throw new Error(
          `Required skills for major ${position} are invalid.`
        );
      }

      if (
        !isValidStringArray(
          major.careerPaths
        )
      ) {
        throw new Error(
          `Career paths for major ${position} are invalid.`
        );
      }

      if (major.rank !== position) {
        throw new Error(
          `Rank for major ${position} is invalid.`
        );
      }
    }
  );

  // ==========================
  // Duplicate Major Detection
  // ==========================

  const normalizedMajorNames =
    analysis.recommendedMajors.map(
      (major) =>
        major.major
          .trim()
          .toLowerCase()
          .replace(/\s+/g, " ")
    );

  const uniqueMajorNames = new Set(
    normalizedMajorNames
  );

  if (
    uniqueMajorNames.size !==
    normalizedMajorNames.length
  ) {
    throw new Error(
      "AI response contains duplicate recommended majors."
    );
  }

  // ==========================
  // Development Plan
  // ==========================

  if (
    !isValidStringArray(
      analysis.developmentPlan
    )
  ) {
    throw new Error(
      "AI response developmentPlan must be a non-empty string array."
    );
  }

  if (analysis.developmentPlan.length < 3) {
    throw new Error(
      "AI response must contain at least three development plan steps."
    );
  }

  // ==========================
  // Disclaimer
  // ==========================

  if (!isNonEmptyString(analysis.disclaimer)) {
    throw new Error(
      "AI response is missing a valid disclaimer."
    );
  }
}

/**
 * Sends completed exams to Gemini and returns
 * a structured academic analysis.
 *
 * @param {Array} completedExams
 * @returns {Promise<object>}
 */
export async function analyzeAnswers(
  completedExams
) {
  if (
    !Array.isArray(completedExams) ||
    completedExams.length === 0
  ) {
    throw new Error(
      "completedExams must be a non-empty array."
    );
  }

  console.log(
    "Received exams:",
    completedExams
  );

  const prompt =
    buildAnalysisPrompt(completedExams);

  try {
    const response =
      await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
      });

    const responseText = response.text;

    if (
      !responseText ||
      typeof responseText !== "string"
    ) {
      throw new Error(
        "Gemini returned an empty response."
      );
    }

    const cleanedText =
      cleanJsonResponse(responseText);

    let parsedResult;

    try {
      parsedResult =
        JSON.parse(cleanedText);
    } catch (parseError) {
      console.error(
        "Invalid Gemini JSON response:",
        cleanedText
      );

      throw new Error(
        "Gemini returned an invalid JSON response."
      );
    }

    // ترتيب التخصصات بحسب النسبة
    // وإعادة ترقيمها من 1 إلى 10
    parsedResult =
      normalizeAnalysisResult(parsedResult);

    // التحقق من صحة النتيجة
    validateAnalysisStructure(parsedResult);

    console.log(
      "Validated AI analysis:",
      parsedResult
    );

    return parsedResult;
  } catch (error) {
    console.error(
      "Gemini analysis error:",
      error
    );

    throw new Error(
      error.message ||
      "An error occurred while analyzing the exams."
    );
  }
}