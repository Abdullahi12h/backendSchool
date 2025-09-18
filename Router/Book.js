const express = require("express");
const router = express.Router();
const BookController = require("../controller/BookController");
const upload = require("../malware/uploadImage")

// Add Book
router.post("/create/book", upload.single("img"), BookController.CreateBook);

// Read all books
router.get("/read/books", BookController.ReadBooks);

// Delete single book
router.delete("/book/delete/:id", BookController.DeleteBook);

module.exports = router
