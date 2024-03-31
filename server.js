const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

//Importing modules from routes folder
const homeRoutes = require('./routes/homeRoutes');
const bookRoutes = require('./routes/bookRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const auth = require('./middleware/auth');

const app = express();

const port = 3000;
app.listen(port,()=>{
    console.log(`The port is running on ${port}`);
});

// Different levels of loggings in morgan 
/* app.use(morgan('tiny'));
app.use(morgan('short'));
app.use(morgan('common'));
app.use(morgan('dev'));
app.use(morgan('combined')); */

// Saving the 'combined' level logging in the /logs/request.logs file
// a -> appends all the logs to requset.log file
// const fsStream = fs.createWriteStream(__dirname + "/logs/request.log", {flags : 'a'});   

/* If the directory does not already exist, it first checks for its existence using fs.existsSync(). If the directory doesn't
exist, it creates the directory using fs.mkdirSync(). This is typically done to ensure that a logs directory exists before
logging any data to files within it. */
const logsDir = path.join(__dirname,'logs');
if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir);
}
const fsStream = fs.createWriteStream(path.join(__dirname,'logs','app.log'), {flags : 'a'});
app.use(morgan('combined',{ stream : fsStream }));

app.use(express.json()); // Middleware to parse JSON request bodies (POST)

mongoose.connect('mongodb://localhost:27017/play-db');
console.log('db Connected');

app.use(homeRoutes);
app.use('/api/v1/users',userRoutes);

// app.use(auth.basicAuth);
app.use(auth.tokenAuth);

app.use(bookRoutes);
app.use('/api/v1/products',productRoutes);

app.use((req,res)=>{
    res.status(404).send('Not Found');
})