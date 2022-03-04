const mongoose = require('mongoose');
const { findById } = require('../models/todoModel.js');
const Todo = require('../models/todoModel.js');

exports.getTodo = async(req , res)=>{
    const todos = await Todo.find();
    res.status(200).json(todos);

}

 exports.getTodoById = async(req,res,next)=>{
     const id = req.params.id;
     const todo = await Todo.findById(id);
     if(todo!==null){
         res.status(200).json(todo);
     }else{
         res.status(404).json({"message":"Todo not found"})
     }
  
     next();
 };

exports.createTodo = async(req, res)=>{
  const newTodo = new Todo({
      todo: req.body.todo,
      active: req.body.active,
  });
  try{
      const newtodo = await newTodo.save();
      res.status(200).json(newtodo);
  }catch(err){
      res.status(500).json({message:err.message});
  }

}

