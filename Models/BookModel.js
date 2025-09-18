const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
img: { type: String, required: true },

});

module.exports = mongoose.model("Book", BookSchema);
