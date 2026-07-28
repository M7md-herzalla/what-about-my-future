// فتح وإغلاق القائمة على الموبايل
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// تبديل الوضع الليلي / النهاري
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

// تحميل الثيم المحفوظ عند فتح الصفحة (أو حسب إعدادات النظام)
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

htmlEl.setAttribute('data-theme', initialTheme);
if (themeToggle) {
  themeToggle.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    htmlEl.setAttribute('data-theme', newTheme);
    themeToggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', newTheme);
  });
}

// ==========================
// Development Settings
// ==========================

const DEV_MODE = false;
const SHOW_AI_BUTTON_ALWAYS = false;
const SHOW_CONSOLE_LOGS = true;



let currentExamType = "";
let currentQuestionIndex = 0;
let answers = [];

function areAllExamsCompleted(completedExams) {
  const requiredExamTypes = Object.keys(exams);

  const completedExamTypes = new Set(
    completedExams
      .map(exam => exam.examType)
      .filter(Boolean)
  );

  return requiredExamTypes.every(
    examType => completedExamTypes.has(examType)
  );
}

function startExam(examType) {
  currentExamType = examType;
  currentQuestionIndex = 0;
  answers = [];

  renderQuestion();

  document.getElementById("examArea").scrollIntoView({
    behavior: "smooth"
  });
}

function renderQuestion() {
  const exam = exams[currentExamType];
  const question = exam.questions[currentQuestionIndex];
  const totalQuestions = exam.questions.length;

  const progress =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const savedAnswer =
    answers[currentQuestionIndex]?.value;

  // اختيار مقياس الإجابة المناسب للاختبار الحالي
  const selectedScale = answerScales[exam.scale];

  // إنشاء خيارات الإجابة بشكل تلقائي
  const optionsHtml = Object.entries(selectedScale)
    .map(([value, label]) => {
      return `
        <label>
          <input
            type="radio"
            name="answer"
            value="${value}"
            ${
              savedAnswer === Number(value)
                ? "checked"
                : ""
            }
          >
          ${label}
        </label>
      `;
    })
    .join("");

  document.getElementById("examArea").innerHTML = `
    <div class="exam-box">

      <div class="exam-header">

        <div>
          <h2>${exam.title}</h2>

          ${
            exam.description
              ? `
                <p class="exam-description">
                  ${exam.description}
                </p>
              `
              : ""
          }
        </div>

        <span class="progress-text">
          السؤال ${currentQuestionIndex + 1}
          من ${totalQuestions}
        </span>

      </div>

      <div class="progress-bar">
        <div
          class="progress-fill"
          style="width: ${progress}%"
        ></div>
      </div>

      <h3 class="question-title">
        ${question.text}
      </h3>

      <div class="options">
        ${optionsHtml}
      </div>

      <div class="exam-buttons">

        <button
          onclick="previousQuestion()"
          ${
            currentQuestionIndex === 0
              ? "disabled"
              : ""
          }
        >
          السابق
        </button>

        ${
          currentQuestionIndex === totalQuestions - 1
            ? `
              <button
                class="finish-exam-btn"
                onclick="finishExam()"
              >
                أنهيت الامتحان
              </button>
            `
            : `
              <button onclick="nextQuestion()">
                التالي
              </button>
            `
        }

      </div>

    </div>
  `;
}
function saveAnswer() {
  const selectedAnswer = document.querySelector(
    'input[name="answer"]:checked'
  );

  if (!selectedAnswer) {
    alert("يرجى اختيار إجابة قبل المتابعة.");
    return false;
  }

  const exam = exams[currentExamType];
  const question = exam.questions[currentQuestionIndex];
  const selectedScale = answerScales[exam.scale];

  const value = Number(selectedAnswer.value);

  answers[currentQuestionIndex] = {
   questionId:
  question.id ??
  `${currentExamType}-${currentQuestionIndex + 1}`,
    question: question.text,
    dimension: question.dimension,
    reverse: question.reverse === true,
    answer: selectedScale[value],
    value: value
  };

  return true;
}

function nextQuestion() {
  if (!saveAnswer()) return;

  currentQuestionIndex++;
  renderQuestion();

  document.getElementById("examArea").scrollIntoView({
    behavior: "smooth"
  });
}

function previousQuestion() {
    saveSelectedAnswer();
  currentQuestionIndex--;
  renderQuestion();
}
function saveSelectedAnswer() {
  const selectedAnswer = document.querySelector(
    'input[name="answer"]:checked'
  );

  if (!selectedAnswer) {
    return;
  }

  const exam = exams[currentExamType];
  const question = exam.questions[currentQuestionIndex];
  const selectedScale = answerScales[exam.scale];

  const value = Number(selectedAnswer.value);

  answers[currentQuestionIndex] = {
  questionId:
    question.id ??
    `${currentExamType}-${currentQuestionIndex + 1}`,

  question: question.text,
  dimension: question.dimension,
  reverse: question.reverse === true,
  answer: selectedScale[value],
  value: value
};
}

function finishExam() {
  if (!saveAnswer()) return;

  const exam = exams[currentExamType];

  const examResult = {
    examName: exam.title,
    examType: currentExamType,
    answers: answers
  };

  let completedExams =
    JSON.parse(
      localStorage.getItem("completedExams")
    ) || [];

  // حذف النتيجة القديمة لنفس الاختبار
  completedExams = completedExams.filter(
    completedExam =>
      completedExam.examType !== currentExamType
  );

  // إضافة النتيجة الجديدة
  completedExams.push(examResult);

  // الحفظ مرة واحدة فقط
  localStorage.setItem(
    "completedExams",
    JSON.stringify(completedExams)
  );

  const examButton = document.querySelector(
    `[onclick="startExam('${currentExamType}')"]`
  );

  if (examButton) {
    examButton.textContent = "✅ أنهيت الاختبار";
    examButton.classList.add("exam-completed");
    examButton.disabled = true;
  }

  const requiredExamTypes = Object.keys(exams);

  const completedExamTypes = new Set(
    completedExams.map(
      completedExam => completedExam.examType
    )
  );

  const allExamsCompleted =
    requiredExamTypes.every(
      examType =>
        completedExamTypes.has(examType)
    );

  const showAnalysisButton =
    SHOW_AI_BUTTON_ALWAYS ||
    allExamsCompleted;

  if (SHOW_CONSOLE_LOGS) {
    console.log(
      "Completed exams:",
      completedExams
    );

    console.log(
      "Completed exam types:",
      [...completedExamTypes]
    );

    console.log(
      "All exams completed:",
      allExamsCompleted
    );
  }

  document.getElementById(
    "examArea"
  ).innerHTML = `
    <div class="result-box">

      <h2>
        تم إنهاء ${exam.title} بنجاح
      </h2>

      <p>
        تم حفظ إجاباتك بنجاح.
      </p>

      <p>
        يمكنك الآن العودة لإكمال بقية الاختبارات،
        وبعد إنهاء جميع الاختبارات سيقوم الذكاء
        الاصطناعي بتحليل إجاباتك واقتراح أفضل
        التخصصات المناسبة لك.
      </p>

      <br>

      ${
        showAnalysisButton
          ? `
            <button
              class="finish-exam-btn"
              onclick="analyzeResults()"
            >
              🧠 تحليل النتائج بالذكاء الاصطناعي
            </button>
          `
          : `
            <button
              class="finish-exam-btn"
              onclick="window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })"
            >
              العودة للاختبارات
            </button>
          `
      }

    </div>
  `;

  checkCompletedExams();
}

async function analyzeResults() {

  const completedExams =
    JSON.parse(

      
      localStorage.getItem("completedExams")
    ) || [];
const examArea = document.getElementById("examArea");
  const loader =
    document.getElementById("analysisLoader");

  const resultSection =
    document.getElementById("analysisResult");

  const progressBar =
    document.getElementById("analysisProgressBar");

  const progressText =
    document.getElementById("analysisProgressText");

  const statusText =
    document.getElementById("analysisStatus");

  let progress = 0;
  let progressTimer;

  try {
 examArea.style.display = "none";
  loader.style.display = "block";
  resultSection.style.display = "none";

  loader.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  progressBar.style.width = "0%";
  progressText.textContent = "0%";
    progressTimer = setInterval(() => {

      if (progress < 90) {
        progress += 2;
      }

      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;

      if (progress < 25) {
        statusText.textContent =
          "يتم تجهيز بيانات الاختبارات...";
      } else if (progress < 45) {
        statusText.textContent =
          "يتم تحليل الميول والقدرات...";
      } else if (progress < 65) {
        statusText.textContent =
          "يتم دراسة الشخصية وأسلوب التعلم...";
      } else if (progress < 85) {
        statusText.textContent =
          "يتم مطابقة النتائج مع التخصصات...";
      } else {
        statusText.textContent =
          "يتم إعداد التقرير النهائي...";
      }

    }, 250);

    console.log(completedExams);

    const response = await fetch(
      "http://localhost:3000/api/analyze",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          exams: completedExams
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Server Error"
      );
    }

    clearInterval(progressTimer);

    progressBar.style.width = "100%";
    progressText.textContent = "100%";
    statusText.textContent =
      "اكتمل التحليل بنجاح.";

    await new Promise(resolve =>
      setTimeout(resolve, 600)
    );

    loader.style.display = "none";
    resultSection.style.display = "block";

   resultSection.innerHTML = renderAnalysisReport(data.analysis);

    resultSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  } catch (error) {

  clearInterval(progressTimer);

  console.error(error);

  examArea.style.display = "block";
  loader.style.display = "none";
  resultSection.style.display = "none";

  alert(
    error.message ||
    "حدث خطأ أثناء الاتصال بالذكاء الاصطناعي."
  );
}
  

}
function renderAnalysisReport(analysis) {
  const {
    studentProfile,
    strengths,
    developmentAreas,
    recommendedMajors,
    developmentPlan,
    disclaimer
  } = analysis;

  return `
    <div class="analysis-report">

      <div class="report-header">
        <h2>تقرير التحليل الأكاديمي</h2>
        <p>
          تحليل شامل لميولك وقدراتك وشخصيتك وأسلوب تعلمك.
        </p>
      </div>

      <section class="report-section">
        <h3>الملخص العام</h3>
        <p>${studentProfile.summary}</p>
      </section>

      <div class="profile-grid">

        <section class="profile-card">
          <h3>أسلوب التفكير</h3>
          <p>${studentProfile.thinkingStyle}</p>
        </section>

        <section class="profile-card">
          <h3>أسلوب التعلم</h3>
          <p>${studentProfile.learningStyle}</p>
        </section>

        <section class="profile-card">
          <h3>بيئة الدراسة والعمل المناسبة</h3>
          <p>${studentProfile.workEnvironment}</p>
        </section>

      </div>

      <div class="report-columns">

        <section class="report-section">
          <h3>نقاط القوة</h3>

          <ul class="report-list">
            ${strengths
              .map(item => `<li>${item}</li>`)
              .join("")}
          </ul>
        </section>

        <section class="report-section">
          <h3>مجالات التطوير</h3>

          <ul class="report-list">
            ${developmentAreas
              .map(item => `<li>${item}</li>`)
              .join("")}
          </ul>
        </section>

      </div>

      <section class="report-section majors-section">
        <h3>أفضل التخصصات المقترحة</h3>

        <div class="majors-grid">

          ${recommendedMajors
            .map(major => `
              <article class="major-card">

                <div class="major-card-header">
                  <span class="major-rank">
                    ${major.rank}
                  </span>

                  <div>
                    <h4>${major.major}</h4>
                    <span class="score-text">
                      نسبة التوافق: ${major.compatibilityScore}%
                    </span>
                  </div>
                </div>

                <div class="score-bar">
                  <div
                    class="score-fill"
                    style="width: ${major.compatibilityScore}%"
                  ></div>
                </div>

                <div class="major-content">
                  <h5>سبب الترشيح</h5>
                  <p>${major.reason}</p>

                  <h5>المهارات المطلوبة</h5>
                  <ul>
                    ${major.requiredSkills
                      .map(skill => `<li>${skill}</li>`)
                      .join("")}
                  </ul>

                  <h5>المسارات المهنية</h5>
                  <ul>
                    ${major.careerPaths
                      .map(path => `<li>${path}</li>`)
                      .join("")}
                  </ul>
                </div>

              </article>
            `)
            .join("")}

        </div>
      </section>

      <section class="report-section">
        <h3>خطة التطوير المقترحة</h3>

        <ol class="development-plan">
          ${developmentPlan
            .map(step => `<li>${step}</li>`)
            .join("")}
        </ol>
      </section>

      <section class="report-disclaimer">
        <h3>تنبيه مهم</h3>
        <p>${disclaimer}</p>
      </section>

    </div>
  `;
}
function formatAnalysisText(text) {
  return text
    .replace(/^####\s+(.*)$/gm, "<h4>$1</h4>")
    .replace(/^###\s+(.*)$/gm, "<h3>$1</h3>")
    .replace(/^##\s+(.*)$/gm, "<h2>$1</h2>")
    .replace(/^#\s+(.*)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/^\*\s+(.*)$/gm, "<li>$1</li>")
    .replace(/^-+\s*$/gm, "<hr>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
}
function checkCompletedExams() {

    const completedExams =
        JSON.parse(localStorage.getItem("completedExams")) || [];

    const aiSection = document.getElementById("aiSection");

    if (completedExams.length >= 5 && aiSection) {
        aiSection.style.display = "block";
    }

}
// localStorage.removeItem("completedExams")
const devAiButton = document.getElementById("devAiButton");

if (devAiButton) {
  devAiButton.style.display = DEV_MODE ? "block" : "none";
}
checkCompletedExams();
