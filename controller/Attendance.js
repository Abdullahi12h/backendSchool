const Attendance = require("../Models/Attendance");
const Student = require("../models/StudentModel");

// GET attendance by date
exports.getAttendanceByDate = async (req, res) => {
  try {
    const { date } = req.params;

    // Fetch existing attendance
    const attendanceList = await Attendance.find({ date }).populate("student");

    if (attendanceList.length === 0) {
      // Haddii uusan jirin, soo qaado dhammaan ardayda
      const students = await Student.find();
      const emptyAttendance = students.map((stu) => ({
        student: stu,
        status: null,
        _id: stu._id,
        createdAt: new Date(),
      }));
      return res.json(emptyAttendance);
    }

    res.json(attendanceList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST mark attendance
exports.markAttendance = async (req, res) => {
  try {
    const { studentId, status, date } = req.body;

    let attendance = await Attendance.findOne({ student: studentId, date });

    if (attendance) {
      attendance.status = status;
      await attendance.save();
    } else {
      attendance = new Attendance({ student: studentId, status, date });
      await attendance.save();
    }

    res.json({ message: "Attendance marked successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
