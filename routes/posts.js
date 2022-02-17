const express = require('express');//requiring express
//connecting to the database new_clist
const db = require('../config/mongoose');
console.log('post hi');
const Todo = require('../models/todo');

const router = express.Router();// setting up the router 

router.use('/',function(req,res){
    Todo.create({
        desc: req.body.name,
        date: req.body.phonenos,
        tag: req.body.category
    }, function(err,newContact){
        if(err){console.log('error in creating a contact!'); return;}
        console.log('********',newContact);
        return res.redirect('back');
    })
    
});
module.exports = router ;//exporting the router
