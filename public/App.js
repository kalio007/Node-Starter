// ////////////////////////////////////////////////////

// console.log('hello Google')


// //Global objects

// // set timeout
// setTimeout(function(){
//     console.log('countdown to three')
// }, 3000)

// //setInterval
// var time = 0;
// // i set the global function to a variable then 
// // set a function that closes the terminal"clearInterval"
// var timer = setInterval(function(){
//     time += 2
//     console.log( time + `seconds has passed`)
//     if (time > 5){
//         clearInterval(timer)
//     }
// }, 3000)

// /////////////////////////////////////////////////////////////////////////

// // what dir are you in? use the code below
// console.log(__dirname);
// // for filename?
// console.log(__filename);


// // noraml function statement
// function sayHi(){
//     console.log(`say hi`)
// }
// sayHi();

// // function expression

// var sayBye = function(){
//     console.log(`Say Bye`)
// };
// sayBye();

// // calling a function into another function

// function callAnother(fun){
//     fun();
// }
// callAnother(sayBye)

// using the require() function to pull data from a different file/location

require('./Count')

