const express = require("express");
const router = express.Router();
const FeeControl = require("../controller/Fee");

// CRUD
router.post("/fee/create", FeeControl.CreateFee);
router.get("/fee/read", FeeControl.ReadFees);
router.put("/fee/update/:id", FeeControl.UpdateFee);
router.delete("/fee/delete/:id", FeeControl.DeleteFee);

module.exports = router;