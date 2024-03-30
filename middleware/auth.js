// Creating middleware for basic authentication
function basicAuth(req,res,next) {
    const authHeader = req.headers.authorization;

    // The credentials are automatically encoded in the Base64 format
    console.log(authHeader); // Basic YWRtaW46cGFzc3dvcmQ=

    // If the user does not give the credentials
    if(!authHeader){
        res.status(404).send('Not Found');
    }

    const authToken = authHeader.split(' '); // [ 'Basic', 'YWRtaW46cGFzc3dvcmQ=' ]

    // This line decodes the base64 encoded string into a buffer
    /* Decoding a string in a buffer means converting raw binary data stored in the buffer into a human-readable format */
    // Go to -> https://www.base64decode.org/ -> DECODE -> YWRtaW46cGFzc3dvcmQ= 
    const buf = Buffer.from(authToken[1], 'base64'); // 'YWRtaW46cGFzc3dvcmQ=' ---> <Buffer 61 64 6d 69 6e 3a 70 61 73 73 77 6f 72 64>
    const decoded = buf.toString(); // admin:password
    const tokens = decoded.split(':'); // [ 'admin', 'password' ]
    const [username,password] = tokens; // username = 'admin' & password = 'password'

    if(username === 'admin' && password === 'password') {
        next();
    }else{
        res.status(401).send('Unauthorized');
    }
}

module.exports = {
    basicAuth,
}