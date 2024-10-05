//Type conversion (manually)
/* Type conversion (also known as type casting) is when you explicitly convert a value from one type to another. Javascript provides several functions for thsi purpose*/


//Type conversion
console.log('Type conversion');

//String to Number
let strNum= '123';
let num = Number(strNum);
console.log(num);
console.log(typeof num);

//Number to String
let num2 = 879;
let str = String(num2);
console.log(str);
console.log(typeof str);

//Boolean to String
let bool = true;
let strBool = String(bool);
console.log(strBool);
console.log(typeof strBool);

//String to Boolean
let strTrue = 'true';
let strFalse = 'gghhhyyy';
let boolTrue = String(strTrue);
let boolFalse = String(strFalse);
console.log(boolFalse);
console.log(boolTrue); //(any empty string is true in Boolean context)

//Parsing integer and float
let floatStr = '124.556';
let intNum = parseInt(floatStr);
console.log(intNum);
let floatNum =parseFloat(floatStr)
console.log(floatNum);

//Type Coercion
console.log('Type Coercion');

//String and Number
let result = '5' + 6;
console.log(result);

let result2 ='7' - 8;
console.log(result2);

let result3 = '9' * 9;
console.log(result3);

let result4 ='8' / 5;
console.log(result4);

//Boolean and Number
let result5 = true + 15;
console.log(result5);

let result6 =false + 13;
console.log(result6);

//Coercion occurs in equality checks (==), but not in strict equality checks(===)
//Equality checks
console.log(1=='7');
console.log(1==='1');
console.log(1===1);
console.log(1==false);
console.log(0===false);



