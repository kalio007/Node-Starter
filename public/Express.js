const express = require('express');
const app = express(); //now we have access to all of express functions
//Http methods 
//GET, app.get
// POST, app.post
// DELETE, app.delete
// PUT.

// to respond to a get request
app.get('/', function(req, res){
    res.send('this is the home page');
});
app.get('/contact', function(req, res){
    res.send('this is the contact Page');
});
app.get('/profile/:id', function(res, req){
    res.send('your request with such id' + req.params.id);
    // params stores the parameter
})

app.listen(3000);
// <% this is to pass ajavascript
// <%= this is to pass an object