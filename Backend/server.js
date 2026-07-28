import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { analyzeAnswers } from "./gemini.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());





app.get("/", (req, res) => {
    res.send("AI Server is Running...");
});

app.post("/api/analyze", async (req, res) => {

    try {

        const { exams } = req.body;

        if (!exams) {
            return res.status(400).json({
                error: "No exams received."
            });
        }

        const result = await analyzeAnswers(exams);

        res.json({
            success: true,
            analysis: result
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            error: "Failed to analyze answers."
        });

    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`✅ Server running on http://localhost:${PORT}`);

});