// Import the 'http' module to create a web server
const http = require('http');

// Import custom data from a local file named 'D2_data'
const data = require('./D2_data');

// Create an HTTP server that listens for incoming requests
http.createServer((req, res) => {
    // Set the response HTTP header with a 200 status code and JSON content type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    // Write the imported data to the response in JSON string format
    res.write(JSON.stringify(data));
    
    // End the response to signal that no more data will be sent
    res.end();
    
// The server listens for incoming requests on port 60666
}).listen(60666);
