const mongoose = require('mongoose');
// creating a database and a schema for our todo list with following datatypes


const todoSchema = new mongoose.Schema({
    desc:{
        type: String,
        required: true
    },
    tag:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
        }

});

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;
console.log('we are the best');