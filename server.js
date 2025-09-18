const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const StudentRouter = require("./Router/StudentRouter");
const TeacherRouter = require("./Router/TeacherRouter");
const AssignmentRouter = require("./Router/AssignmentRouter");
const BookRouter = require("./Router/Book");
const feeRouter = require("./Router/Fee");
const ExamRouter = require("./Router/ExamRouter");
const AdminRouter = require("./Router/AdminRouter");

const StudentAuthoRouter = require("./Router/StudentAuthoRouter"); // ✅ typo saxay
const attendanceRouter = require("./Router/attendanceRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use(StudentRouter);
app.use(TeacherRouter);
app.use(AssignmentRouter);
app.use(BookRouter);
app.use(feeRouter);
app.use(ExamRouter);
app.use(AdminRouter);
app.use(attendanceRouter);

app.use(StudentAuthoRouter); // ✅ variable sax ah

// Static folders
app.use("/allImages", express.static("images"));
app.use("/allImages", express.static("document"));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/School")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(6200, () => console.log("✅ Server running on port 6200"));
