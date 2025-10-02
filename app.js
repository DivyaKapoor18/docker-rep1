// Load HTTP module
const http = require("http");

// Define server configuration
const hostname = 'localhost';
const port = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send response
  res.end('<h1>Hello World , from Docker!</h1>');
});

// Start server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});