// Import the http module from nodejs library
const http = require('http');

// Create a HTTP server using nodejs's built-in http module
const server = http.createServer(handler); // handler function specified to handle incoming requests.

// define the handler function, which handles the incoming request
function handler(req,res) {
    res.write('Welcome to NodeJS');
    res.end();
}

// Specify the port on which we want to host the server
const port = 3000;

// Start the server to listen for incoming request on the specified port
server.listen(port,()=>{
    console.log(`The port is running of ${port}`);
})