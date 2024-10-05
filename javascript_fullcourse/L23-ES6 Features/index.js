/*
Arrow Functions
Variable Declarations
Template Literals
Object Parameters
Default parameters
Spread operators
*/

//ES5 =>ES6

//ES5
// function add(a,b){
//     return a+b;
// }

//ES6
const add = (a,b)=>a-b;

//ES5
var num1 =10;
//ES6
let num2 =20;
const PI=3.145;

//ES5
var name = 'Alice';
console.log('Hello,'+ name+'!');

//ES6
console.log(`Hello ,${name}!`);

//ES5
var userOne = {firstName:'John', latName:'Deo'};
console.log(userOne.firstName);
console.log(userOne.latName);

//ES6
var userTwo = {firstName:'John', latName:'Deo'};
const {firstName,latName}=userTwo;

console.log(firstName);
console.log(latName);

//ES5
function greet(name){
    name=name || 'Guest';
    console.log('Hello,' + name+ '!');
}
   greet('keerthana');

//ES6
   function greetUser(name = 'Guest'){
    console.log(`Hello, ${name}!`);
   }
   greetUser('Keerthana');

//ES5
let x=[1,2,3];
let y=[4,5,6];
let z= x.concat(y);
console.log(z);

//ES6
let combined = [...x , ...y];
console.log(combined);



