const FeeModel = require("../Models/Fee");
const StudentModel = require("../Models/StudentModel");

// Create Fee
const CreateFee = async (req, res) => {
  try {
    const { studentId, amount, month, paidDate } = req.body;
    const newFee = new FeeModel({ student: studentId, amount, month, paidDate });
    await newFee.save();
    res.send(newFee);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Read All Fees
const ReadFees = async (req, res) => {
  try {
    const data = await FeeModel.find().populate("student");
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Update Fee
const UpdateFee = async (req, res) => {
  try {
    const updated = await FeeModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Delete Fee
const DeleteFee = async (req, res) => {
  try {
    await FeeModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Fee deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = { CreateFee, ReadFees, UpdateFee, DeleteFee };