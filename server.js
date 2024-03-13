const express = require('express');

//Importing modules from routes folder
const homeRoutes = require('./routes/homeRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

const port = 3000;
app.listen(port,()=>{
    console.log(`The port is running on ${port}`);
});

app.use(express.json()); // Middleware to parse JSON request bodies (POST)
app.use(homeRoutes);
app.use(bookRoutes);