class Bank{
    user =[
        {accountNo:44301,balance:10000,userName:'John',password:'8893'},
        {accountNo:78301,balance:550000,userName:'Geetha',password:'3423'},
        {accountNo:224301,balance:8770000,userName:'Ravi',password:'1234'},
    ];

getBalanceWithoutErrorHandling(accountNo){
    const result = this.user.find((x)=>x.accountNo===accountNo);
    console.log(`Balance:${result.balance},Account Holder:${result.userName}`);
}

//Guard clauses
  getBalance(accountNo,password){
    try{
        const result = this.user.find((x)=>x.accountNo===accountNo);

        if(!result){
            throw  `Invalid Account No ${accountNo}`;

        }

      const isValidPassword =result.password===password;

            if(!isValidPassword){
                throw `Wrong password`;

            }
           
            return `Balance:${result.balance},Account Holder:${result.userName}`;
    }catch(error){
        return error;
        
}finally{
    console.log('Process is completed');
 
    }
  }

}
let stateBank =new Bank();
console.log(stateBank.user);
stateBank.getBalance(224301,'1234');
// stateBank.getBalanceWithoutErrorHandling(44301);
// stateBank.getBalanceWithoutErrorHandling(224301);

const formElement = document.getElementById('formData');
const displayMessage = document.getElementById('displayMessage');

formElement.addEventListener('submit',function(event){
    event.preventDefault();

    const formData = new FormData(this);
    const request = {accountNo:null,password:''};
    formData.forEach((value,key)=>{
        request[key]= value;
    });
    let indianBank=new Bank();
    const response =indianBank.getBalance(Number(request.accountNo),request.password);
    displayMessage.innerHTML=response;
    formElement();
});
