const express = require('express');//requiring express
//connecting to the database new_clist
const db = require('../config/mongoose');
console.log('post hi');
const Todo = require('../models/todo');// requiring the todo list


module.exports.home = function(req,res){
    // finding all the lements of todolist
   Todo.find({},function(err,todo){
       if(err){console.log('their is an error:',err);}
       // rendering the list to home
       return res.render('home',{
           title:'hitlist',
           todo_lis: todo
       })
   })
}
// this was just ,eant for testing in development stages
module.exports.secondhome = function(req,res){
    return res.end('<h1>welcome to the school</h1>');
}
//second test 
module.exports.action = function(req,res){
    return res.end('<h1>welcome to the action</h1>');
}