const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({

  Name: { type: String, required: true },
  Qualification: { type: String, required: true },
  Joining: { type: String, required: true },
  Gender: { type: String, required: true },
  Phone: { type: Number, required: true },
  Class: { type: String, required: true },
  Course: { type: String, required: true },
});

module.exports = mongoose.model("Teacher", TeacherSchema);
