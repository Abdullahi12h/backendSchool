const express = require("express");
const router = express.Router();
const  StudentControl= require("../controller/StudentControl");
router.post("/create/student", StudentControl.CreateStudent);
router.get("/read/student", StudentControl.ReadStudent);
router.get("/read/student/:id", StudentControl.ReadSingleStudent);
router.put("/update/student/:id", StudentControl.UpdateStudent);
router.delete("/delete/student/:id", StudentControl.DeleteStudent);

module.exports = router;