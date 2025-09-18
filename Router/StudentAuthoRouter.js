
const express = require("express")
const router = express.Router()
const StudentAuthoControl = require("../controller/StudentAuthori")
const { verifyToken, isAdmin } = require("../malware/Auth");

router.post("/create/students", StudentAuthoControl.createstudent)
router.post("/login/students", StudentAuthoControl.studentLogin)
router.get("/read/students", verifyToken, isAdmin, StudentAuthoControl.readstudent)

module.exports = router
