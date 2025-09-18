// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const Student = require("../Models/StudentModel");

// // POST /register/create
// router.post("/create", async (req, res) => {
//   try {
//     const { name, email, password, Class } = req.body;

//     // check required fields manually
//     if (!name || !email || !password || !Class) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // create new student
//     const student = await Student.create({
//       name,
//       email,
//       password: hashedPassword,
//       Class
//     });

//     res.status(201).json({
//       message: "Student registered successfully",
//       student
//     });
//   } catch (err) {
//     console.error("Register Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
