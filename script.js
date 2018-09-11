//  Intro to Node.js

// Blocking Code, This kind of code goes in order from what you assign
/*var contents = fs.readFilesSync('/etc.hosts');
console.log(contents);
console.log('Doing something else');
*/


// Non Blocking uses the call back method and it uses the functions for the call back and to read the file.
/*
 fs.readfile('/etc/hosts', function(err, contents) {
     console.log(contents);
 });

console.log('Doing something else');

*/

// call the hello.js / hello world using Node

var http = require('http'); // This is used to require modules
/*
http.createServer(function(requests, responce) {
    responce.writeHead(200); // Used for the status code in the header
    responce.write("Hello, this is dog."); // For responce body
    responce.end(); // Closing the connection
  
  }).listen(8080); // Listen for connections on this port 
console.log('Listen on the port 8080...');
});  
*/   
   
   
/*   
   // Using another one for a Longer Running Process
  http.createServer(function(requests, responce) {
   responce.writeHead(200);
   responce.write("Dog is running.");
   setTimeout(function() { // Represents a longer running process
       responce.write("Dog is done.");
       responce.end();
   }, 5000); // The meaning of "5000", is when its 5000ms it equals to 5 sec
   
   
});
*/

// Events Tutorial

//  The DOM triggers certain events such as click, submit and hover 


/*

// Custom Event Emitters
var EventEmitter = require("events").EventEmitter; // Calls the Event
var logger = new EventEmitter();

logger.on('error', function(message){
    console.log('ERR:' + message); // Listens to the error event
});
logger.emit('error', 'Spilled Milk');

// Breaking It Down 
// Alternate Syntax

http.createServer(function(request, responce){});


//^ Same as the one above
//var server = http.createServer();
//server.on('request', function(requests, responce){});
To close the server .. use server.on('close', function(requests, responce){})
// This is how we add event listeners


*/

