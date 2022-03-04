const express = require('express');
const router  = express.Router();
const { getTodo, getTodoById,  createTodo , updateTodo, deleteTodo} = require('../controllers/todoController.js');

//getting all todos from database
router.get('/', getTodo);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)


module.exports = router;