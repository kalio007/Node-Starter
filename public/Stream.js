var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + 'ReadMe.txt');

myReadStream.on('data', function(chunk){
    console.log('newchuck recieved');
    console.log(chunk);
})
//
// createReadStream and CreateWriteStream
// BUffer and Streams 
//Pipes ".pipe" pipe from a readable steam to a readable stream