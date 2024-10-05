class bankAccount{
    #balance; //private field

    constructor(initialBalance){
        this.#balance=initialBalance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance +=amount;
            console.log(`Deposited ${amount}.New balance ${this.#balance}`);
        }else{
            console.log(`Invalid deposit amount`);
        }
    }

withdraw(amount){
    if(amount >0 && amount<=this. #balance){
        this.#balance -=amount;
        console.log(`withdraw ${amount}. New balance${this.#balance}`);
    } else{
        console.log(`Insufficient funds or invalid amount`);
    }
 }

 getBalance(){
    return this.#balance;
 }
}

let savingAccount=new bankAccount(1000);

savingAccount.deposit(500);
savingAccount.withdraw(200);

savingAccount.withdraw(3000);
savingAccount.deposit(-1000);

//savingAccount.#balance =10000;

savingAccount.log(savingAccount.getBalance());
