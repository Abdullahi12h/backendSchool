const express = require("express");
const router = express.Router();
const Attendance = require("../Models/Attendance");

// Add attendance
router.post("/attendance", async (req, res) => {
  try {
    const { studentId, date, status } = req.body;

    // Check if attendance already exists for that student on that date
    const existing = await Attendance.findOne({ studentId, date });
    if (existing) {
      return res.status(400).json({ message: "Attendance already marked" });
    }

    const attendance = new Attendance({ studentId, date, status });
    await attendance.save();
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all attendance
router.get("/attendance", async (req, res) => {
  try {
    const records = await Attendance.find().populate("studentId");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update attendance (only if date is today)
router.put("/attendance/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const attendance = await Attendance.findById(req.params.id);

    if (!attendance) return res.status(404).json({ message: "Not found" });

    // Check if date is today
    const today = new Date().toISOString().split("T")[0];
    if (attendance.date !== today) {
      return res.status(403).json({ message: "Cannot edit past attendance" });
    }

    attendance.status = status;
    await attendance.save();
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
 
module.exports = router;
