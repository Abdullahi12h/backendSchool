const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  totalMarks: { type: Number, required: true },
  examClass: { type: String, required: true }, // ✅ fasalka imtixaanka
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
});

module.exports = mongoose.model("Exam", ExamSchema);
