// Web Server Application

// import reqired module
var http = require("http");

// create server
http.createServer((request, response) => {
  // Send the HTTP Header
     // HTTP Status code: 200 : OK
     // content-type: text/plain
   response.writeHeader(200, {'content-type': 'text/plain'});
  // return response body
   response.end("Server Mode Activated!!");
}).listen(8081)

// display message to the console
console.log("Mesh Server running at http://127.0.0.1:8081/");
