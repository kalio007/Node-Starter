var express = require('express');
var app = express();

// app.get('./', function(req, res){
//     res.send()
// })

// set-up template Engine
app.set('view engine', 'ejs');
// static files 
app.use('./assets', express.static('./public'))

//listen to port
app.listen(3000);
