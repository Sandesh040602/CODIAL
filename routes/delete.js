const express = require('express');//requiring express
//connecting to the database new_clist
const db = require('../config/mongoose');
console.log('delete hi');
const Todo = require('../models/todo');
const app = express();

app.use(express.urlencoded({
    extended: true
  }));
const router = express.Router();// setting up the router 

router.use('/',function(req,res){
    Todo.deleteMany({
        _id : req.body.di
    },
    function(err,newContact){
        if(err){console.log('erroroin deleteing amny objrct:',err); return;}
        console.log('***',newContact);
        return res.redirect('back');
    })
    
});
module.exports = router ;//exporting the router
