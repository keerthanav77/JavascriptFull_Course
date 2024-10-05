//Truthy and Falsy Values
console.log('Truthy and Falsy Values');

//Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

//Truthy values
console.log(Boolean(188));
console.log(Boolean(-8));
console.log(Boolean(true));
console.log(Boolean('hello'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {}));


let cash=0;
if(cash){
   if(cash>100){
    console.log('You can buy burger with drinks');
   }else{
    console.log('You can buy burger');
   }
}else{
    console.log("You don't have enough money for shopping");
}

let age= 26;
console.log(age);
if (age){
    console.log('Age is defined');
}else{
    console.log("Age is undefined");
}

let hasPermission =false;
if(hasPermission){
    console.log("You have permission");
}else{
    console.log("You don't have permiision");
}
