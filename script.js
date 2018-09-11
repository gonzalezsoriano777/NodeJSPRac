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


/*

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
});

*/

// Socket.io Tutorial

/*


// Building a Chat browser... 

// to install the socket.io use
npm install --save socket.io

// app.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
    console.log('Client connected...');
    
    
    // emit the 'messages' event on the client
    client.emit('message', {hello: 'world' });
});

// Sending messages to server

io.on('connection', function(client){
    client.on('message', function(data){
        console.log(data);
    }),
});

// Broadcasting Messages

io.on('connection', function(client){
    client.on('message', function(data) {
        client.broadcast.emit("messages", data);
    });
});     // broadcast message to all other clients connected

// Now its time to use a proper name for the client.. using the 'join' method in Node
io.on('connection', function(client){
    client.on('join', function(name){
        client.nickname = name; // set the nickname associated with this client
    });
    
    client.on('messages', function(data){
        var nickname = client.nickname; // get the nickname of this client before broadcasting message
        
        client.broadcast.emit("message", nickname + ": " + message);
                            // send the same message back to our client
    })
});

*/
// Websockets allows us to create connection with clients in the server


// Persisting Data

/*
// Storing Messages 
var messages = "";

var storeMessage = function(name, data){
    message.push({name: name, data: data}); // add message to end of array
    if(message.length > 10) {
        messages.shift(); // if more than 10 messages long, remove the first one
    }
    
    
   io.sockets.on('connection', function(client){
       client.on('join', function(name){
       client.on("message", function(message){
           client.get("nickname", function(error, name){
               client.broadcast.emit("message", name + ": " + message);
               
           });
       });
   }); 
   });
   
   // Persisting Stores
   /*
   
   Databases such as 
   MongoDB
   CouchDB
   PostgreSQL
   Memcached
   Riak
                All Considered Non-blocking drivers
                
    // Redis
var redis = require('redis');
var client = redis.createClient();
    
    client.set("message1", "hello, yes this is dog");
    client.set("message2", "hello, no this is spider");
    
    
}

client.get("message1", function(err, reply){
    console.log(reply);
});

// Redis Lists: Pushing

var message = "Hello, this is dog";
client.lpush("message", message, function(err, reply){
    console.log(reply)
});             // replies with list length

// Using the LPUSH and LTRIM Method
var message = "Hello, this is dog";
client.lpush("message", message, function(err, reply){
    client.ltrim("messages", 0, 1);
});

// Retrieving from list
client.lrange("message", 0, -1, function(err, messages){
    console.log(messages);
})

// Converting StoreMessage

var redisClient = redisClient = redis.createClient();

var storeMessage = function(name, data){
    var message = JSON.stringify({name: name, data: data});
                    // need to turn object into string to store in redis
                    
                    
                    redisClient.lpush("message", message, function(err, responce){
                        redisClient.ltrim("messages", 0, 9);
                    });
}

// Output From list

client.on('join', function(name){
redisClient.lrange("message", 0, -1, function(err, message){
  message = message.reverse(); // reverse so they are emitted in correct order  
    messages.forEach(function(message){
        message = JSON.parse(message); // parse into JSON object
        client.emit("message", message.name + ": " + message.data);
    });
});
});

// Adding Chatters 
client.on('join', function(name){
    // notify pther clients a chatter has joined
    client.broadcast.emit("add chatter", name);
    redisClients.sadd("chatters", name);
}); // add name to chatter set

// What if theres already users in the chat room?
// Using 'Adding Chatters (CONT)'

client.on('join', function(name){
    client.broadcast.emit("add chatter", name);
    redisClient.smembers('names', function(err, names){
    names.forEach(function(name){
        client.emit('add chatter', name);
    });
    
    //emit all the currently logged in chatters 
    //to the newly connected client    
        
        
        
        redisClient.sadd("chatters", name); // sadd is a set of unique data in which shows whos in the chatbox (used for the browser example)
    });
})

// How to remove chatter

client.on('disconnect', function(name){
    client.get('nickname', function(err, name){
        client.broadcast.emit("remove chatter", name);
        
        redisClient.srem("chatters", name);
    });

});            
  
   */
   
    




