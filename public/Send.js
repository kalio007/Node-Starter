/// sevring Json to the Client

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    // application/json type because thats what we sending to the browser
    var myObj = {
        name: 'kalio',
        job: 'tech',
        age: 20
    };
    res.end(JSON.stringify(myObj))
    // .end expectes a string or a buffer and not just any response
})