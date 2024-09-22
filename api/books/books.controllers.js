const Book = require("../../model/Schema");

exports.booksCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.booksDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const foundBook = await Book.findById(id);
    if (foundBook) {
      await foundBook.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.booksUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const foundBook = await Book.findById(id);
    if (foundBook) {
      await foundBook.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.booksGet = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.booksGetOne = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
