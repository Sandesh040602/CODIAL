const express = require('express');// requiring express to make the files as scattered as possible
const app = express();
const port = 8000;


app.use('/',require('./routes/index.js'));// this is our link to the router which
//ever link is generating will now go to routes/index.js

app.listen(port,function(err){
    if(err){console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});