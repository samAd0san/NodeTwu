// Implementing routes in nodeJS server
const http = require('http');

const server = http.createServer(handler);

// Through the handler function we are adding paths/url in the nodeJS server
function handler(req,res) {
    // req.url in Node.js represents the URL path of the incoming HTTP request.
    switch(req.url) {
        // This is home page if no url/path is given
        case '/':
        case '/home':
            res.write('KORENO HOME PAGE DESU');
            res.end();
            break;

        case '/books': // This is redirected when given path localhost:3000/books
            const books = [
                {id:1, name:'Atomic Habis', price:499},
                {id:2, name:'RichDad PoorDad',price:399},
                {id:3, name:'Power of Subconcious Mind',price:299},
            ];

            res.write(JSON.stringify(books));
            res.end();
            break;

        case '/authors': // This is redirected when given path localhost:3000/authors
            const authors = ['James Clear','David Guetta','Joe Rogan'];

            res.write(JSON.stringify(authors));
            // res.write(authors); // won't work
            res.end();
            break;

        default: // If the url requested does not exist 
            res.write('Not Found');
            res.end();
            break;
    }
}

const port = 3000;

server.listen(port,()=>{
    console.log(`The port is running on ${port}`);
})