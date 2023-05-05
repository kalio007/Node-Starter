var fs = require('fs');
//we use require to create a module to work with



//reads a file
var readme = fs.readFileSync('ReadMe.txt', 'utf8')
console.log(readme);

//Asynchronous method and it doesnt block the code
// it takes in three conditions

fs.readFile('ReadMe.txt', 'utf8', function(err, data){
    console.log(data);
})




// write a file

// where you want to write it to and then what you want to write
fs.writeFileSync('WriteMe.txt', readme );

// to delete a file 

fs.unlink('WriteMe.txt')

// to add a directory 
fs.mkdir('whatsApp')