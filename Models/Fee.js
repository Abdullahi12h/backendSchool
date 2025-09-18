const mongoose = require("mongoose");

const FeeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  amount: { type: Number, required: true },
  month: { type: String, required: true }, // e.g. "September"
  paidDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Fee", FeeSchema);