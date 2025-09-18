const express = require("express")
const router = express.Router()
const AssignmentController = require("../controller/Assignment")
const uploadImage = require("../malware/uploadImage")

router.post("/create/Assignment", uploadImage.single("prImage"), AssignmentController.createAssignment)

// get
router.post("/read/Assignment", AssignmentController.readAssignment)

// readsingledata
router.get("/readSingle/Assignment/:id", AssignmentController.readSingleAssignment)

// updateProduct

router.put("/update/Assignment/:id",uploadImage.single("prImage"), AssignmentController.updateAssignment)

// deleteProduct
router.delete("/delete/Assignment/:id", AssignmentController.deleteAssignment)

module.exports = router
