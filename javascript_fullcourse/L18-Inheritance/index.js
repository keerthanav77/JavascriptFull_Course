class person{
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
            `${this.firstName} ${this.lastName} ${this.isEmployed? 'employed': 'unemployed'}`
        );
    }
    

}

class Employee extends person{
    constructor(
        firstName,
        lastName,
        dob,
        phoneNo,
        isEmployed,
        jobTitle,
        CompanyName
    ){
            super(firstName,lastName,dob,phoneNo,isEmployed,jobTitle,CompanyName);
            this.jobTitle=jobTitle;
            this. CompanyName=CompanyName;
        }
        getJobDetails(){
            console.log(
                `${this.firstName} ${this.lastName} work as a ${this.jobTitle} at ${this.CompanyName}`
        );
        }
    }
let Employee1 =new Employee(
    'Arun',
    'kumar',
    1990,
    98877365522,
    true,
    'Software developer',
    'Tech corp'

    );
    Employee1.getJobDetails();
    Employee1.getEmploymentStatus();
    Employee1.getDetails();

let employee2 = new Employee(
    'Lakshimi',
    'priya',
    1996,
    776655255252,
    true,
    'Project manager',
    'innovate ltd'
);
employee2.getDetails();
employee2.getEmploymentStatus();