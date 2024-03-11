// Importing express.js modules in the node.js
const express = require('express');

/* express() is used to define routes, middleware, and other settings for handling HTTP requests
and responses within a Node.js environment.*/
const app = express();

const port = 3000;
app.listen(port,()=>{
    console.log(`The port is running on ${port}`);
})

/* Previous in a single handler we were configuring all the different routes/paths, Now to make
it more organised we will create seperate handler for every different routes/paths*/

function handlerHome(req,res) {
    res.send('KORENO HOME PAGE DESU');
    // no need to add res.end() since express will handle it by itself
}

function handlerBooks(req,res){
    const books = [
        {id:1, name:'Atomic Habis'},
        {id:2, name:'RichDad PoorDad'},
    ];

    // Serialization
    res.json(books);
}

function handlerAuthors(req,res){
    const authors = ['James Clear','David Guetta'];
    res.json(authors);
}

// syntax - get(path,handler_function), It is use to retrieve the elements
app.get('/',handlerHome);
app.get('/books',handlerBooks);
app.get('/authors',handlerAuthors);