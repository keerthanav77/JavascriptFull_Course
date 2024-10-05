//Dtatypes
//javascript is Dynamic typing
//Primitive and Non-primitive type

//Primitive Data types
//1.Number -Represents both integer and floating numbers
let age = 26;
console.log(age);
console.log(typeof age);

let price = 4789.33;
console.log(price);
console.log(typeof price);

age ='24'
console.log(age);
console.log(typeof age);

//2.String -Represents a sequence of charecters
let greeting ='Hello world!';
console.log(greeting);
console.log(typeof greeting);

//3. Boolean - Represents a logicals entity and can have  two values: true or false
let isActive =true;
console.log(isActive);
let hasLicences =false;
console.log(isActive);
console.log(hasLicences);

//4.Undefined -A variable that has been declared but not assigned a value.
let uninitialized;
console.log(uninitialized);

//5.Null - Represents the intentional absence of any object value
let box =null;
console.log(box); 

//6.Symbol - Represents a unique and immutables value, often used as object property keys.
let unique = Symbol('keys');
console.log(unique);

//BigInt - Represents whole numbers larger than 2*53 -1 (the largest number Javascript)
let largeNumber = BigInt(88338373822);
let largerNumber = 88338373822n; //using the n notation
console.log(largeNumber);
console.log(largerNumber);

//Non -Primitive Data types
//1.Objects
//* Represents a collection of properties , each consisting of key (usually a string) and a values (which cab be any data type,including another objects).*/

let person ={
    name:'john',
    age : 29,
    isEmployed:true,

};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isEmployed);

let emptyObject = {};
console.log(emptyObject);

//2.Array
//A.Special type of object used for storing ordered collections of values.
let numbers= [1,2,3,4,5];
console.log(numbers);

let mixedData = [1,"two",true, null];
console.log(mixedData);

//3.Function
//A Special type of object that is callable and can perform an action.
function invite(){
    console.log('You are the invited to the office');
}
invite();

//4.Dta - A built- in object for handling dates and times.
let now = new Date();
console.log(now);