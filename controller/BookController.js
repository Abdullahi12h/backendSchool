const BookModel = require("../Models/BookModel");

// Create
const CreateBook = async (req, res) => {
  try {
    const newBook = new BookModel({
      bookName: req.body.bookName,
      author: req.body.author,
      publicationYear: req.body.publicationYear,
      models: req.body.models,
      img: req.file ? req.file.filename : null, 
    });

    const saved = await newBook.save();
    res.send(saved);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Read
const ReadBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.send(books);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete
const DeleteBook = async (req, res) => {
  try {
    const deleted = await BookModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send({ message: "Book not found" });
    res.send({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { CreateBook, ReadBooks, DeleteBook };
