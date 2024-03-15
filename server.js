const express = require('express');
const mongoose = require('mongoose');

//Importing modules from routes folder
const homeRoutes = require('./routes/homeRoutes');
const bookRoutes = require('./routes/bookRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

const port = 3000;
app.listen(port,()=>{
    console.log(`The port is running on ${port}`);
});

app.use(express.json()); // Middleware to parse JSON request bodies (POST)
mongoose.connect('mongodb://localhost:27017/play-db');
app.use(homeRoutes);
app.use(bookRoutes);
app.use('/api/products',productRoutes);