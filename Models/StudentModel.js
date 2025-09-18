const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  GuardianName: { type: String, required: true },
  Gender: { type: String, required: true },
  Phonenumber: { type: Number, required: true },
  Class: { type: String, required: true },
});

// Haddii model horey u jiray, isticmaal; haddii kale abuuro
module.exports = mongoose.models.Student || mongoose.model("Student", studentSchema);
