// middleware is the code before the output and the input 
// its a middle man

//we use .use
// we use nextto move unto th enext function
app.use('/ass', function(req, res, next){
    console.log(req.url);
    next();
})

// but we use exprss.static('assets')
// it serves up static files to the client
//express.static() requires no next() as it serves static filesin the assests like styles.css
app.use('/assets', express.static('assets'))