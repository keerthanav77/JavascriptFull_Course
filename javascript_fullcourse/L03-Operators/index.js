//Operators
/*
1.Arithmatic operators
2.Assignment operators
3.Comparison operators
4.Logical operators
5.String operators
*/

//1.Arithmatic operators - Arithmatic operators are used to perform basic mathematicals operations
//1.1) Addition (+)
console.error('Arithmetic operators');
let sum = 5+8;
console.log('Addition:',sum);

//1.2)Subtraction(-)
let difference = 10-3;
console.log("Subtraction:",difference);

//1.3)Multiplication(*)
let product = 2*9;
console.log('Multiplication:',product);

//1.4)Division(/)
let x=12/4;
console.log('Division:',x);

//1.5)Modulus (%)
let remainder= 10% 5;
console.log('Modulus:',remainder);

//1.6)Exponentiation (**)
let power= 4**5;
console.log('Exponentiation:',power);

//1.7)Increment(++)
let counterOne = 7;
counterOne++;
console.log('Increment:',counterOne);

//1.8)Decrement(--)
let counter = 6;
counter--;
console.log('Decrement:',counter);


//Assignment Operaters - Assignment operaters are used to assign values to variables.
//2.1)Assignment (=)
console.error('Assignment Operators');
let z = 10;
console.log('Assignment:',z);

//2.2) Addition Assignment(+=)
z +=5;
console.log('Addition Assignment:',z);

//Subtraction Assignment (-=:)
z -=5;
console.log('Subtraction Assignment:',z)

//Multiplication Assignment(*=)
z *=2;
console.log('Multiplication Assignment:',z);

//Division Assignment (/=)
z /=2;
console.log('Division Assignment:',z);

//2.5)Modulus Assignment(%=)
z %=3;
console.log('Modulus Assignment:',z);

//2.7) Exponentiation Assignment (**=)
let y= 2;
y **=8;
console.log('Exponentiation Assignment:',y);

//3.Comparison Operators - Comparison operators are used to compare two values
console.error('Comparison Operators');
//3.1)Equal (==)
console.log('Equal 5==5:',5==5);
console.log("Equal 5=='5':",5=='5'); //type coercion

//3.2)Strict equal(===)
console.log("Equal 5==='5':",5==='5'); //false no type coercion

//3.4)Not Equal(!=)
console.log("Not Equal 6!='5':",6!='5'); //type coercion

//3.5)Strict Not equal (!==)
console.log("Not equal 4!=='4':", 4!=='4'); //type coercion


//3.6)Greater than(>)
console.log('Greater Than 10>4:', 10 > 4);

//3.7)Less Than(<)
console.log('Less Than 8<22:', 8<22);

//3.8) Greater Than or Equal (>=)
console.log('Greater than or qual 10>=10:', 10>=10);

//3.9Less Than or equal (<=)
console.log('Less than or qual 10<=10:', 10<=10);


//4.1) Logical operators - logical operators are used to combine multiple condition
console.log('Logical operators');
console.log('AND', true && false);
console.log('AND', false && true);
console.log('AND', false && false);
console.log('AND', true && true);

//4.2)Logical OR (||)
console.log('OR', true|| false);
console.log('OR', false|| true);
console.log('OR', true|| true);
console.log('OR', false|| false);


//4.3)Logical Not (!)
console.log('NOT', !true);
console.log('NOT', !false);

//Example
let haveIdProof = false;
let isAdult = true;

if(haveIdProof && isAdult){
    console.log('you are allowed to enter party');
}else{
    console.log('you are not allowed to the party');
}

 //5.String Operators
 console. error('String Operators');
 console.log('Hello world');

 //String Concatenation
 let str ="Hello" + ' '+"world";
 console.log(str);
 str += ' How are you?';
 console.log(str);

 //String with Different Quotes
 console.log("I'm getting 'better' day by day");

 let message= "I'm" + ' getting'+ "'better'" + 'day by day';
 console.log(message);

 console.log('I\'m getting "better" day by day');

 let userDetails={
    id:1,
    name: 'Keerthana',

 };
//Concatenation with object properties
console.log('Welcome'+ userDetails.name + 'your id is' + userDetails.id);

//Template literal
console.log(`Welcome ${userDetails.name} your id is ${userDetails.id}`);

//Order prcedence
console.error('Operator Order prcedence');
console.log(2 +4 *3); //4*3 = 12 +2 = 14
console.log((2 +4) *3);  //2 + 4 = 6*3 = 18

//New example with -and/
console.log(10-2/2); //2/2 =1, then 10-1 =9
console.log(10-2/2); //10-2=8, then 8/2=4

//Additional combined example
console.log((8/2) * (2+2)); // 2+2 =4, 8/2=4, then 4*4 =16






  





