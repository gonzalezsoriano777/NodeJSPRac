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

// Streams Tutorial

/*

// Streaming Responce
                
                //Readable Stream  //Writeable Stream
http.createServer(function(request, responce){
    responce.writeHead(200);
    responce.write("<p>Dog is running.</p>");
    setTimeOut(function(){
        responce.write("<p>Dog is done.</p>");
        responce.end();
    }, 5000);
    
}).listen(8080);
// Browser recieves "Dog is running", once reading it, it closes it.


// How to Read From the Requests
// Readable Stream "EventEmitter" emits 'readable' and 'end'

http.createServer(function(requests, responce){
    responce.writeHead(200);
    request.on('readable', function(){
        var chunk = null;
        while (null !== (chunk = requests.read())) {
            responce.write(chunk);
        }
    });
    request.on('end', function(){
        responce.end();
    });
}).listen(8080) 

// Reading and Writing a File

var fs = require('fs');

var file = fs.createReadStream("readme.md");
var newFile = fs.createWriteStream("readme_copy.md");

file.pipe(newFile);

// Using this, we can also upload files

var http = require("http");
http.createServer(function(request, responce){
    var newFile = fs.createWriteStream("readme_copy.md");
    
    request.on('end', function(){
        responce.end('uploaded!');
        });
    }).listen(8080);
// using the curl method which is overall a tool used 
//"to transfer data from or to a server, using the following protocals, http, https, FILE" etc.

$ curl --upload-file readme.md "http.//localhost:8080"

// File Uploading Progress
$ curl --upload-file readme.md "http.//localhost:8080"

http.createServer(function(request, responce){
var newFile = fs.createWriteStream("readme_copy.md");
    // var fileBytes = requests.headers['content-length'];
    // var uploadedBytes = 0;
    
    requests.on('readable', function(){
        var chunk = null;
        while(null !== (chunk = requests.read())){
            uploadedBytes += ch
        }
    });
    requests.pipe(newFile); .. Takes care of the actual Upload
    
    ...
    
}).listen(8080);

*/


// Modules Tutorial

/*

// Creating a Module

// Custom_hello.js
var hello = function() {
    console.log("hello");
}
module.exports = hello;

// custom_goodbye.js
exports.goodbye = function() {
    console.log("bye!");
}

// app.js
var hello = require('./custom_hello');
var gb = require('./custom_goodbye');

hello();
gb.goodbye();

var makeRequests = require('./make_requests');

makeRequests("Here's looking at you, kid");
makeRequests("Hello , this is a dog");

// To make 2 out of 3 modules acceptable you would use exports."var name" = "var name"

// Making HTTP Requests
var http = require('http');

var message = "Here's looking at you, kid.";

var options = {
host: 'localhost', port: 8080, path: '/', method: 'POST'
    }

var request = http.request(options, function(responce){
    responce.on('data', function(data){
        console.log(data); // logs responce body
    });
});
requests.write(message); // begins requests

// Make Requests
var http = require('http');

var makeRequests = function(message) {
    ...
}

module.exports = makeRequests;

// Requests Search 

var make_Requests = require('./make_requests')// look in same directory
var make_Requests = require('../make_requests')// look in parent directory
var make_Requests = require('/Users/eric/nodes/make_requests')


var make_Requests = require('make_requests')

// NPM, is the package manager for node. 
//Comes with Node. 
//Module Repository.
// Dependency Management
// Easily publish modules

// To install the NPM Module all you have to do is type
$ npm install request

// Always define the dependencies
// Example
{
 dependencies: {
     connect: "1.8.7"
     the 1 is the major version
     the 8 is the minor version
     and the 7 is the patch version
 }   
}

*/

// Express Tutorial

/*

-Used for Easy route URLs to callbacks
-Middleware (from Connect)
-Enviroment based configuration
-Redirection helpers
-File Uploads

*/

var express = require('express'); // installs the module and adds to package.json
var app = express();

app.get('/', function(request, responce){
    responce.sendFile(__dirname + "/index.html");
});

app.lisent(8080);

// Express Routes

var requests = require('request');
var url = require('url');

app.get('/tweets/:username', function(req, responce){
    var username = req.params.username;
    
    options = {
        protocol: "http:",
        host: 'api.twitter.com',
        pathname: '/1/statuses/user_timeline.json', 
        query: { screen_name: username, count: 10}
    }
    var twitterUrl = url.format(options);
    request(twitterUrl).pipe(responce);
});

// To organize ExpressRoutes, you can download another npm
// Called npm install prettyjson

// Express Templates
app.get('/tweets/:username', function(req, responce){
    ...
    request(url, function(err, res, body){
        var tweets = JSON.parse(body);
        responce.locals = {tweets, name: username};
        responce.render('tweets.ejs');
    })
})









/**/




