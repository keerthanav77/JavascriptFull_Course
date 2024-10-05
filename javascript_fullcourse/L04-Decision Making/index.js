//Decision Making if,if...else,else if
console.log('Decision making');

//Example 1: if statement
let temparature = 23;
if (temparature >= 25){
    console.log("It's Hot outside");
}

//Example 2: if...else statement
if(temparature >=25){
    console.log("It's hot outside");
}else{
    console.log("It's cold outside");
}

let isRaining = false;


if(isRaining){
    console.log('Take the umberlla');
}else{
    console.log('you do not a umberlla');
}

//Example 3: else if statement
let time = 19;

if(time <12){
    console.log('Good morning');
}else if(time<18){
    console.log('Good afternoon');
}else{
    console.log('Good evening');
}

//Example$: Nested if statement
//Variable
let age=10;
let isWithParent = true;
let hasIdProof =true;
//Decision logic
if (age >=18){
    if(hasIdProof){
        console.log('You can visit the mall and can watch the movie ');
}else{
    console.log('You can visit the mall');
}
}else{
    if(isWithParent){
        console.log('You can visit play area');
    }else{
        console.log('You are not allowed play area');
    }
}

let day =7;
if(day===1){
    console.log('Monday');
}else if(day===2){
    console.log('Tuesday');
}else if(day===3){
    console.log('Wednesday');
}else if (day===4){
    console.log('Thursday');
}else if (day===5){
    console.log('Friday');
}else if(day===6){
    console.log('Saturday');
}else if (day===7){
    console.log('Sunday');
}else {
    console.log('Invalid day');
}

//Switch statement
switch(day){
    case 1:
        console.log('Monday');
        break;
     case 2:
        console.log('Tuesday');
        break;
     case 3:
        console.log('Wednesday');
        break;
     case 4:
        console.log('Thursday');
        break;
     case 5:
        console.log('Friday');
        break;        
     case 6:
        console.log('Saturday');
        break;
     case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
     
}

let drinkChoice = 'Water';
switch(drinkChoice){
    case 'coffee':
        console.log('you drink coffee');
        break;
     case 'Water':
        console.log('you can drink water');
        break; 
    case 'tea':
        console.log('you can drink tea');
        break; 
     default:
        console.log('Choose the drink') ;   
}

//Ternary operator
let isAdmin = false;
 
// if(isAdmin){
//     console.log('am Admin');
// }else{
//     console.log('am User');
// }

let userRole = isAdmin? 'am admin': 'am User';
console.log(userRole);

let mark =90;
let result = mark >=50? 'pass': 'fail';
console.log(result);