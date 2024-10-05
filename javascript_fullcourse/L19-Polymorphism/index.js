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

        //Overriding the getDetails method
        getDetails(){
            const age= new Date().getFullYear()- this.dob;

            console.log(
                `${this.firstName} ${this.lastName} is ${age} years old,work as a ${this.jobTitle} at ${this.CompanyName}`
            );
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
    Employee1.getDetails();


    class Student extends person{
        constructor(
            firstName,
            lastName,
            dob,
            phoneNo,
            isEmployed,
            school,
            grade
            
        ){
                super(firstName,lastName,dob,phoneNo,isEmployed,school,grade);
                this.school=school;
                this. grade=grade;
            }
    
            //Overriding the getDetails method
            getDetails(){
                const age= new Date().getFullYear()- this.dob;
    
                console.log(
                    `${this.firstName} ${this.lastName} is ${age} years old, studied in grade ${this.grade} at ${this.school} contact no is ${this.phoneNo}`
                );
            }
        getJobDetails(){
            console.log(
                `${this.firstName} ${this.lastName} work as a ${this.jobTitle} at ${this.CompanyName}`
            );
            }
        }
    

let student = new Student(
    'Lakshimi',
    'priya',
    1996,
    776655255252,
    true,
    'Sunrise school',
    '10th'
);
student.getDetails();
