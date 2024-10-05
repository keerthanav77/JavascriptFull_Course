/*
An array is a data structure that can hold multiple values at once.
These values can be of any type.including numbers,strings,objects or even other arrays .
Arraya in javascript are zero -indexed ,meaning the first element is at index 0 */

//Using square brackets
let fruits = ['Apple','Orange','Cherry'];
console.log(fruits);

//Accessing the array elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Change the value in array
fruits[1]='Banana';
console.log(fruits);

/*  Using fpr loop tpo print array wioth hard- coded condition it will create issue if condition is like i< 5 */

for (let i=0; i<3; i++){
    console.log(fruits[i]);
}

/*
To avoid hard -coded condition switch to array methods */

//To avoid hard -coded condition sitch to array method */

//We can use array length
console.log(fruits.length);

for (let i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}

//More array methods
let box =['books', 'pen','pencil'];
console.log(box);

/* Add element to array adds one or more elements to the end of an array and returns the new lenghth of the array
*/

box.push('toy');
console.log(box);

/*
Remove element from array 
Remove the last element from an array and returns the element. */

box.pop();
console.log(box);

/* Adds one or more elements to the begining of an array and returns the new length of the array */
box.unshift('Map');
console.log(box);

/* Removes the first element from an array and returns that element.
*/
box.shift();
console.log(box);

//Anonymous function
box.forEach(function(x, index){
    console.log(x, index);
});

box.forEach((x, index)=>{
    console.log(x, index);
})
//Combining arrays
let containerOne =['Tv', 'Laptop'];
let containeTwo =['playstore', 'app'];

console.log(containerOne);
console.log(containeTwo);

let container = containerOne.concat(containeTwo);
console.log(container);

//Finding an element index,if not found it will return -1
let searchValue = 'Laptop'
let index =container.indexOf('Laptop'); 
console.log(index);

if (index >=0){
    console.log(`Index of laptop${searchValue} is ${index}`);

}else{
    console.log(`What are you searching for not available`);
}

//Array with mixed data types
let mixedData =[
    10,
    3.5,
     'Homelander',
     'Starlight',
      true,
      false,
      undefined,
      null,
      NaN
    ];
    console.log(mixedData);

   let result= mixedData.includes('Starlight');
   console.log(result);

   //another short method

console.log(mixedData.includes('Starlight'));
console.log(mixedData.includes(88));

let numbers = [99,55,3,7,88,];
console.log(numbers);

//Array of Employee objects
let employee =[
    {id:15, name:'john',age:76},
    {id:1, name:'david',age:56},

];
console.log(employee);

employee.forEach((employee =>{
    console.log(employee);

}));


employee.forEach((employee)=>{
    console.log(`Employee id:${employee.id}`);
    console.log(`Employee name: ${employee.name}`);
    console.log(`Employee age: ${employee.age}`);
    console.log(`---------`);
})

//Fliters
let employeeDetails=employee.find((x)=>x.id===2);
console.log(employee);

let x= employee.filter((x)=> x.age >56);
console.log(x);

//Map
let y =employee.map((employeeDetails)=>{
    console.log(
        `Name:${employeeDetails.name},DOB:${new Date().getFullYear()-employeeDetails.age}`
    );

});






