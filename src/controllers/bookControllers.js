const Book = require('../models/book');


exports.createBook = async (req, res) => {
    try {

      //save the request from the client
      const book = new Book(req.body);
      const savedBook = await book.save();
      //201 successfully
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


exports.getOneBook = async (req, res) => {
  try {

    
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
    res.status(404).json({ message: 'Book not found' });
      return;
    }
   res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }

    res.status(204).send(); // 204 No Content status for successful deletion
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, publishedDate } = req.body;

    // Check if the book exists
    const existingBook = await Book.findById(id);
    if (!existingBook) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }

    // Update the book properties
    existingBook.title = title;
    existingBook.author = author;
    existingBook.publishedDate = publishedDate;
    // You can update other fields here

    // Save the updated book
    const updatedBook = await existingBook.save();

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};