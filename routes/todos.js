const express = require('express');
const router  = express.Router();
const {getTodo,getTodoById,  createTodo} = require('../controllers/todoController.js');

//getting all todos from database
router.get('/', getTodo);
router.get('/:id', getTodoById);
router.post('/', createTodo);

module.exports = router;