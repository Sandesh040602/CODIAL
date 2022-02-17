const express = require('express');//requiring express
//connecting to the database new_clist
const db = require('../config/mongoose');
console.log('post hi');
const Todo = require('../models/todo');


module.exports.home = function(req,res){
   Todo.find({},function(err,todo){
       if(err){console.log('their is an error:',err);}
       return res.render('home',{
           title:'hitlist',
           todo_lis: todo
       })
   })
}
module.exports.secondhome = function(req,res){
    return res.end('<h1>welcome to the school</h1>');
}
module.exports.action = function(req,res){
    return res.end('<h1>welcome to the action</h1>');
}