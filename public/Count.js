// creating a module

var counter = function(arr){
    return `there are ` + arr.length + ` elements in this array`; 
}
console.log(counter(['kalio', 'Princewill']));

// a different way of exporting a variable
module.export.adder = function(a,b){
    return `the sum of the numbers is ${a*b}`;
}

const pi = 3.142;
// to export a particular area of the 
// module.exports = counter;


// to export its properties
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

// this below also works for an export
module.export = {
    counter: counter,
    adder: adder,
    pi: pi
};