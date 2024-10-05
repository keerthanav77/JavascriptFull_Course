let person ={
    name:'John',
    age:46,
    id:1,
    isEmployeed:true,
};

console.log(person);
console.log(person.name);
console.log(person.age);

//Adding a new property
person.city ='newyork';
console.log(person);

//Modifying an existing property
person.age =25;
console.log(person);

//Object with method
let car ={
    brand:'bmw',
    model:'Camry',
    year:2028,
    displayInfo: function(){
        return `${this .model} ${this.brand} ${this.year}`;
    },
};
console.log(car);
console.log(car.displayInfo());

//Destructuring assignment
let students ={
    studentName:'keerthana',
    age:26,
    course:'B.Tech',
};
let {studentName,age,course}= students;
console.log(studentName);
console.log(age);
console.log(course);

//Nested Complex objects
let hotel ={
    hotelName:'SSR',
    location:'Chennai',
    owner:{
       name:'Kumar',
       age:50,
       contact:{
        phoneNo:'0993459699',
        email:'kumar@gmail.com,'
    },
    
},
menu:[
    {dish:'idly',price:30, spicy:true},
    {dish:'dosa',price:50, spicy:false},
    {dish:'pongal',price:20, spicy:true},

],
   
};
console.log(hotel);

//Accessing properties of the nested objects
console.log(`Welcome to ${hotel.hotelName} in ${hotel.location}`);
console.log(`Owned by ${hotel.owner.name}, age ${hotel.age}`);
console.log(
    `contact:${hotel.owner.contact.email}, ${hotel.owner.contact.phoneNo}`);

hotel.menu.forEach((item)=>{
    console.log(`${item.dish} ${item.price},${item.spicy ? 'spicy':'not spicy'}`);
});

//Destructure owner object
let {
    name:ownerName,
    age:ownerAge,
    contact:{email:ownerEmail,phoneNo:ownerPhone},
} =hotel.owner;

//Output details about the hotel
console.log(`Owned by ${ownerName}, age ${ownerAge}`);
console.log(
    `contact:${ownerEmail}, ${ownerPhone}`);

    //Output the menu items using destructuring with forEach
    hotel.menu.forEach(({dish,price,spicy})=>{
        console.log(`${dish} ${price},${spicy ?'spicy': 'Not spicy'}`);
    });

//    //example:1 
// let bike={
//     bikeModel:'R15',
//     bikeColor:'Black',
// }
// console.log('bikeColor');

//example:2
// let bike={
//     bikeModel:'R15',
//     bikeColor:'Black',
//     displayInfo: function(){
//         return  `${this.bikeColor} `;
//     },
// };
// console.log(bike);
// console.log(bike.displayInfo());

let bike={
       bikeModel:'R15',
       bikeColor:'Black',
    }
     console.log(bike.bikeColor);
