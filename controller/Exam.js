const Exam = require("../Models/Exammodel");

// Create Exam
const createExam = async (req, res) => {
  try {
    const { subject, date, totalMarks, examClass, studentId } = req.body;

    const exam = new Exam({
      subject,
      date,
      totalMarks,
      examClass,          // ✅ ku dar
      student: studentId, // ✅ connect to student
    });

    await exam.save();
    res.status(201).json(exam);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All Exams
const readExams = async (req, res) => {
  try {
    const exams = await Exam.find().populate("student");
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Exam
const updateExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exam);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Exam
const deleteExam = async (req, res) => {
  try {
    await Exam.findByIdAndDelete(req.params.id);
    res.json({ message: "Exam deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createExam, readExams, updateExam, deleteExam };
