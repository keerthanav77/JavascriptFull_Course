//Object Issue: Code repetation with individual objects
let person1 ={
    firstName:'john',
    lastName:'Doe',
    dob:1992,
    phoneNo:132456677,
    isEmployed:true,
    getDetails: function(){
        const age= new Date().getFullYear()-this.dob;
         
        console.log(
            `${this.firstName} is ${this.lastName} is ${age} old and contact no is ${this.phoneNo}`
        );
    },
    getEmploymentStatus: function(){
        console.log(
            `${this.firstName} ${this.isEmployed}? 'employed': 'unemployed'}`
        );
    }

};

console.log(person1);
person1.getDetails();
person1.getEmploymentStatus();


let person2 ={
    firstName:'Albert',
    lastName:'D',
    dob:1992,
    phoneNo:132456677,
    isEmployed:true,
    getDetails: function(){
        const age= new Date().getFullYear()-this.dob;
         
        console.log(
            `${this.firstName} is ${this.lastName} is ${age} old and contact no is ${this.phoneNo}`
        );
    },
    getEmploymentStatus: function(){
        console.log(
            `${this.firstName} ${this.isEmployed}? 'employed': 'unemployed'}`
        );
    }

};

console.log(person2);
person2.getDetails();
person2.getEmploymentStatus();

class person3{
    constructor(firstName,lastName,dob,phoneNo,isEmployed){
        this.firstName =firstName;
        this.lastName=lastName;
        this.dob=dob;
        this.phoneNo=phoneNo;
        this.isEmployed=isEmployed;

    }
    getDetails(){
        const age= new Date().getFullYear()-this.dob;
         
        console.log(
            `${this.firstName} is ${this.lastName} is ${age} old and contact no is ${this.phoneNo}`
        );
    }
    getEmploymentStatus(){
        console.log(
            `${this.firstName} ${this.lastName} ${this.isEmployed}? 'employed': 'unemployed'}`
        );
    }
    

}

let anni =new person3('star','Light',1997,25551566,true);
anni.getDetails();
anni.getEmploymentStatus();

let homelander= new person3('Antony','J',1988,777654444,false);
homelander.getDetails();
homelander.getEmploymentStatus();