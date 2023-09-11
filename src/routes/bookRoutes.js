const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

//these are paths to your resources (with http request methods)
router.post('/create', bookController.createBook);
router.get('/All', bookController.getAllBooks);
router.get('/:id', bookController.getOneBook);
router.delete('/:id', bookController.deleteOneBook);
router.put('/:id', bookController.updateOneBook);

// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;