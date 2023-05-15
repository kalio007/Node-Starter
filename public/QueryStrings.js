//it is a form of query
// additional data added to the site request
//it starts with the question mark ?
// it is seperated by & if there is more to it

// mysite.com/blogs/new
`mysite.com/contact?person=kalio&dept=electricalElectronics`

app.get('./', function(req,res){
    console.log(req.query)
})

// .query in node handles the query string 
// rwad up POST and Body-Parser