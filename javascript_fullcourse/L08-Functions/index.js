//Functions
//Functions are pieces of code that we can reuse again and again in our code

//Functions Declaration -Javascript Hoisting
/*A function declaration defines a named function. It's hoisted meaning you can call it before it's defined */

// console.log('We are developers, we love to find the bugs');
// console.log('We are developers, we love to find the bugs');
// console.log('We are developers, we love to find the bugs');
// console.log('We are developers, we love to find the bugs');

function displayMessage(){
    console.log('We are developers, we love to find the bugs');

}
//Calling the function
displayMessage();

//Function Parameters and arguments
/* Functions can take parameters, which act as placeholders for the values that will be passed to the function.the passing value is called a arguments */

//parameter
function greet(username){
    console.log('Hello' + username + '!');
}
//argument
greet('John');
greet('sanjay');

function greetUser(firstname,lastname){
    console.log(`Hello, ${firstname} ${lastname}`);
}
greetUser('johan' ,'malli');
greetUser('KAVI', 'maggi');

function math(x,y,z){
    console.log(x+y+z);
}
   math(50,5,88);

   //Default Parameter
   function printer(color='Black'){
    console.log(`Print document in ${color} color`);
   }
   printer('Blue');
   printer();
   printer('Red');

   //Function with return type
   function add(a,b){
    return a+b;
   }
   let sum = add(50, 90);
   console.log(sum);

   /////////////////////////////////////////////////////

   //Function Expression
   /* A function expression defines a function inside an expression it's not hoisted, so you can't call it before it's defined */

   const morning= function(){
    console.log('Good morning everyone');
   }
   morning();

   //With Argument
   const morningWithName =function(name){
    console.log(`Good morning ${name}`);
   };
   morningWithName('Vinith');
   morningWithName('seela');

   //Function Expression with return type
   const multiply =function(a,b){
    return a*b;

   };
   const product = multiply(7,3);
   console.log(product);

   //////////////////////////////////////////////////////////

   //Arrow Function
   //Arrow function provide a concise syntax and do not bind their own 'this'. they are not hoisted*/

   const evening =()=>{
    console.log('Good evening everyone!');
   };
   evening();

   //With Argument
   const eveningWithName =(name)=>{
    console.log('Good evening'+ name + '!');
   };
   eveningWithName('jessi');

   //Arrow function with return type
   const subtract =(a,b)=>{
    return a-b;
   };
   console.log(subtract(2,8));

   //Shorter way
   const subtractNumber =(x,y)=> x-y;
   console.log(subtractNumber(8 ,6));

   //Function calling other function
   function welcomeShoper(name){
    console.log(`Welcome , ${name}! Enjoy your shoping `);
   }
   function main(name){
    let shopperName = name;
    welcomeShoper(shopperName);
   }
   main('Geetha');

   //Anonymouse function: Later on course on Arrays

   setTimeout(()=>{
    console.log('Anonymouse function executed');
   },2000);

   /**Scope of variable will on functions and loops 
    var: Function scoped
    let: Block scoped
    const:Block scoped
    */

    function demo(){
        var a= 20;
        console.log(a);

        if (true){
            var x= 'var';
            let y= 'let';
            const z = 'const';
            console.log(x);
            console.log(y);
            console.log(z);

        }

            // console.log(x);
            // console.log(y);
            // console.log(z);
    }
demo();
//console.log(a); after the function calling will not work
