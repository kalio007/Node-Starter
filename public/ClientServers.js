/// clients and servers
// request and Responses

// protocol is a set of communication rules to be obeyed when communicating

// client is identified by it IP address 
// a socket a channel for the communocation for the cleint and the server
// http is the protocol the sever and client obey for communication

// ftp- file transfer protocol

// TCP handles the transer of the information packets
//http gives the structure, tcp handles the transfer

//Port listen for request made for it


///////////////////////////////////////////////////////////////
//Making a server
var http = require('http');
 
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'} )
    res.end('hey Kalio'); // to end the responses
});
// req object get the info of what is requested from our server
// res object responds to the server

// we send and recieve with headers
// the headers tells the server what the information is about

//200 status if everything is okay
//404 if the page cannot be found
// content type could be Json, plain text

server.listen(3000, '127.0.0.1')
console.log('hey listening to port 3000')
