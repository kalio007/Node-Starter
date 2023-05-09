// on the sevrer terminal we can always see what the clint is requesting for and sever 
// them their request this is where routing takes place 

// i believe this was the idea od useParams

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    // the else statement is to route the page to a differnt page
    // application/json type because thats what we sending to the browser
    var myObj = {
        name: 'kalio',
        job: 'tech',
        age: 20
    };
    res.end(JSON.stringify(myObj))
    // .end expectes a string or a buffer and not just any response
})