document.addEventListener('DOMContentLoaded',()=>{
const addTransactionBtn = document.getElementById('addTransactionBtn');
const transactionList = document.getElementById('transactionList');
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpensesEl = document.getElementById('totalExpenses');
const balanceEl = document.getElementById('balance');

function displayTransactions(){
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactionList.innerHTML ='';
    transactions.forEach((transaction,index)=>{
        const li = document.createElement('li');

        if(transaction.category==='Income'){
            li.innerHTML=`${transaction.name}-$${transaction.amount.toFixed(2)} (${transaction.category})
            <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>`;

            li.style.backgroundColor= 'Black';
            li.style.color= 'yellow';
        }else{
            li.innerHTML=`${transaction.name}-$${transaction.amount.toFixed(2)} (${transaction.category})
            <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>`;
            li.style.background= '#705814';
            li.style.color= 'white';

        }
        transactionList.appendChild(li);
    });

}
addTransactionBtn.addEventListener('click',addTransaction);


function addTransaction(){
    const name=document.getElementById('transactionName').value;
    const amount =parseFloat(
        document.getElementById('transactionAmount').value
    );
    const category= document.getElementById('transactionCategory').value;

    if( name && !isNaN(amount)){
        const transaction= JSON.parse(localStorage.getItem('transactions'))|| [];
        const newTransaction = {name,amount,category};
        transaction .push(newTransaction);
        localStorage.setItem('transactions',JSON.stringify(transaction));
        displayTransactions();
        updateSummary();
    }

}

function updateSummary(){
    const transactions= JSON.parse(localStorage.getItem('transactions'))|| [];
    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach((transaction)=>{
        if (transaction.category==='Income'){
            totalIncome +=transaction.amount;
        } else {
            totalExpenses +=transaction.amount;
        }
    });
    const balance= totalIncome - totalExpenses;

    totalIncomeEl.textContent = totalIncome.toFixed(2);
    totalExpensesEl.textContent= totalExpenses.toFixed(2);
    balanceEl.textContent= balance.toFixed(2);

}
function deleteTransaction(index){
    const transactions = JSON.parse(localStorage.getItem('transactions'));
    transactions.splice (index,1);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    displayTransactions();
    updateSummary();
}
window.deleteTransaction = deleteTransaction;

displayTransactions();
updateSummary();
});