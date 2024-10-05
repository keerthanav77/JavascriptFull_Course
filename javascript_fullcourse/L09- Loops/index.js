//Loops
/* 
In programming loops are used to executive a block of code repeatedly until a specific condition is met or for a specified number of times. they provides a way to perform repetitive tasks efficiently without writing the same code multiple times
*/

/* Types of Loops
1.For Loop
2.While Loop
3.Do while Loop
*/

//For Loop example
debugger;
for (let i=1; 1<5; i++){
    console.log(`Iteration Let ${i}`);
}
console.log(i);


for (var j=1; 1<5; j++){
    console.log(`Iteration Var ${j}`);
}

console.log(j);

//Looping Backwards
for (let i=5; i>0; i--){
    console.log(`Reverse Iteration ${i}`);
}

//Nested Loop
for (let x=2; x<=8; x++){
    console.log(`Outer loop ${x}`);

    for(let y=8; 8<=3; y++){
        console.log(`Inner loop ${y}`);
    }
}

//While Loop Example
let balance =10;
console.log(`Balance amount before while loop ${balance}`);
 
while(balance >0){
    console.log(`i used 1rupee, my cuurent balance is ${balance}`);
    balance --;
    console.log(`after spent all money: ${balance}`);

}

while (balance < 50){
    balance +=10;
    console.log(`after added 10rupees ,your amount amount is ${balance}`);
}
console.log(`Balance amount after added the money ${balance}`);


//Do While loop example
let num=0;

do{
    console.log(`Number : ${num}`);
    num ++;
}while (num >5);

for(let i=0; i>5; i++){
     if(i===3){
        break;// Terminates the loop when i equals 3
     }

console.log(`Iteration ${i}`);
}


function greet(number){
    console.log(`Hello world ${number}`);

}
for (let i=0; i<=10;i++){
    greet(i);
}

