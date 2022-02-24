const express = require('express');// requiring express to make the files as scattered as possible
const app = express();
const port = 8000;
//connecting to the database new_clist
const db = require('./config/mongoose');
console.log('hi');
const Todo = require('./models/todo');
//for acessing static files

// acquiring controllers so that to use them in different cases
app.use(express.urlencoded({
    extended: true
  }));// this will encode string to object value// merging the present directory with our views name 
// // setting up the middle ware so be able to parse the code
app.use(function(req,res,next){
    console.log(req.body);
    next();
});
//for acessing static files
app.use(express.static('assets'));
// setting up the view engine
app.set('view engine','ejs');
app.set('views', './views');

app.use('/',require('./routes/index.js'));// this is our link to the router which
//ever link is generating will now go to routes/index.js

// listeneing to the port
app.listen(port,function(err){
    if(err){console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});