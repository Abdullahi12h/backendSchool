const express = require("express");
const router = express.Router();
const { createExam, readExams, updateExam, deleteExam } = require("../controller/Exam");

// Create exam
router.post("/create/exam", createExam);

// Read all exams (admin)
router.get("/read/exam", readExams);

// Update exam
router.put("/update/exam/:id", updateExam);

// Delete exam
router.delete("/delete/exam/:id", deleteExam);

// Get exams by studentId (for student login)
router.get("/student/:id", async (req, res) => {
  try {
    const exams = await Exam.find({ student: req.params.id }).populate("student");
    res.json(exams);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
