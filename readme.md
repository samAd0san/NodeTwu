# Implementing NodeJS server 
### commit 1
1. node -v
2. npm init -y
3. import http module
4. declare a server from http
5. define the handler function
6. specify the port
7. start the server - node server.js
8. To access the server http://localhost:3000

### commit 2
1. same as above, added url/path in the handler function

### commit 3
1. Install express - npm install express
2. .gitignore to ignore specific files
3. Install nodemon - npm i nodemon (if not installed)
4. create seperate handler for every routes/paths
5. use get() for handling http request
6. nodemon server.js

### commit 4
1. create a controller module (folder), add the handler files in it.
2. import the controller module to server.js and assign routes.
3. install postman application from browser

### commit 5
1. create a routes module (folder), add the routes files in it.
2. import the routes module to sever.js and remove ctrl module since
   the routes module will handle it.
3. const router = express.Router();

### commit 6
1. CRUD Operations

### commit 7
1. DataBase Drivers - It is a s/w component which allows applications to interact with the database,
acts as a bridge b/w application and a database
2. Install mongodb from browser
3. Install the mongo shell 
4. npm install mongoose
5. In the server.js file
   const mongoose = require('mongoose')
6. mongoose.connect('mongodb://localhost:27017/<db-name>'); 
   It is used to establish a connection between a Node.js application and a MongoDB database using Mongoose, which is an ODM (Object Data Modeling) library for MongoDB and Node.js.
7.    