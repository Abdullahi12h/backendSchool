const express = require("express");
const router = express.Router();
const  TeacherControl= require("../controller/TeacherControl");
router.post("/create/Teacher", TeacherControl.CreateTeacher);
router.get("/read/Teacher",TeacherControl.ReadTeacher);
router.get("/read/Teacher/:id", TeacherControl.ReadSingleTeacher);
router.put("/update/Teacher/:id", TeacherControl.UpdateTeacher);
router.delete("/delete/Teacher/:id", TeacherControl.DeleteTeacher);

module.exports = router;
