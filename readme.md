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

### commit 8
1. CRUD in MongoDb.
2. Used Async/Await.

### commit 9
1. A repository layer is an abstraction that separates database operations from the rest of the application logic.
2. Added repository layer to refactor the code.

### commit 10
1. Implementing Pagination
2. page     elements         skip
	 1:    1 - 10 (1-1) * 10 = 0 (skip)
	 2:    11 - 20 (2-1) * 10 = 10 (skip)
	 3:    21 - 30 (3-1) * 10 = 20 (skip)
	 4:    31 - 40 (4-1) * 10 = 30 (skip)

### commit 11 
1. Added Pagination meta data
- Total no of rows and pages

### commit 12
1. Search via model and brand 
2. Implemented using RegExp in productRepo.js

### commit 13
http://localhost:3000/api/v1/products/page/1/size/10?search=apple&model=IphoneX&sort=discount&direction=desc
http://localhost:3000/api/products/page/2/size/10?sort=discount&direction=desc
1. Sorting via attributes i.e in asc/desc order

### commit 14
1. Refactoring get endpoint, property destructure

### commit 15
1. Implementing SIGNUP 
2. Preventing duplicate email input by the user

### commit 16
1. npm install bcrypt
2. hashing the password using bcrypt (SIGNUP)
3. Implementing SIGNIN

### commit 17
Basic Authentication
1. middleware/auth.js
2. server.js (add middleware)
3. Now, in postman (GET)
Authorization -> basic auth -> username = admin , password = password
URL: //localhost:3000/books or products
- we can access '/' and 'signin' 'signup' endpoint without authentication

### commit 18
Token Authentication
1. install jwt 
   npm i jsonwebtoken
2. create config/index.js -> for env variable i.e secret key
3. To generate Temparory tokens 
   jwt.sign(payload,jwtSecretKey,expiry date)
4. To verify The token (which is passed in Bearer token)
   jwt.verify(generatedToken,jwtSecretKey,callback(err,decoded))
5. To send Request in postman
   5.1 - (POST) /signin, enter credentials, the token will be generated, copy the generated token.
   5.2 - (GET) goto Authorization -> type (Bearer Token) -> paste token
   5.3 - (GET) access endpoint /books or /products

### commit 19
Authorizing (giving permission) to the user to delete the product, setting the role - 'Admin'
1. add role in userModel
2. jwt.sign
3. jwt.verify
4. productRoutes.js 

- Steps to execute
1. create the user 
2. first signin (if tokenAuth) via post
3. then cp the token and paste in Authorization -> bearer token
4. access /products endpoint
5. try to perform (DELETE) operation if the user role is admin

### commit 20
Request logging
- We are adding all the 'logs' to the /MainFolder/logs/request.log file, to track all the HTTP req
of the users.
1. Request logging is the process of capturing and recording information about incoming HTTP
requests to a server for monitoring, debugging, and analysis purposes.
2. npm i morgan
3. Morgan is a middleware for request logging in Node.js web applications, providing customizable
logging formats and destinations.
- There are 5 levels of logging in morgan -> 1.tiny 2.Short 3.common 4.dev 5.combined
4. createWriteStream function in the fs module of Node.js creates a writable stream for writing
data to a specified file.