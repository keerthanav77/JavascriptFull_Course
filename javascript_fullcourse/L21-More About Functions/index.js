/*
Higher-order functions:
Functions that take other functions as argument or return them as results
*/


function startEngine(){
    return `Engine is started`;
}
//Higher-order functions
function drive(driverName,engine){
    const message = engine();

    console.log(`${message} by ${driverName}`);
}
drive('Alex',startEngine);

//Pure functions
function add(a,b){
    return a+b;
}
console.log(add(2,4));
console.log(add(2,4));
console.log(add(2,4));

//Impure function
let counter=0;
function increment(value){
    counter +=value;
    return counter;
}
console.log(increment(2));
console.log(increment(2));
console.log(increment(2));