// let promise =new Promise((resolve,reject)=>{
    
//     let data = '0';
    
//     if(typeof data==='number'){
//         resolve('Success');
//     }else{
//         reject('Failed');
//     }
// });

// promise.then((result)=>{
//     console.log(`On Resolve:${result}`);
// }).catch((error)=>{
//     console.log(`On Reject:${error}`);
// });

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         console.log('Fetching data....');

//         setTimeout(()=>{
//             const data={id:1, name:'jon'};

//             const randomValue = Math.random();
//             console.log(`random Value ${randomValue}`);
//             const success = randomValue >0.2;

//             if(success){
//                 resolve(data);

//             }else{
//                 reject('Failed to fetch data');
//             }

//         },2000);
//     });
// }
// fetchData()
// .then((result)=>{
//     console.log('Data Fetched:',result);
// })
// .catch((error)=>{
//     console.log('Error:', error);
// });

let promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Promise 1 resolved');
    },2000);
});
let promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Promise 2 resolved');
    },1000);
});
let promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Promise 3 resolved');
    },3000);
});

// promise1.then((result)=>{
//     console.log(result);
// });

// promise2.then((result)=>{
//     console.log(result);
// });

// promise3.then((result)=>{
//     console.log(result);
// });

//Using promise.all to call all promise together
// Promise.all([promise1,promise2,promise3]).then((result)=>{
//     console.log('All Promise resolved', result);
// })
// .catch((error)=>{
//     console.log(error);
// });


//Using promise.race to return as soon as the first promise completed
Promise.race([promise1,promise2,promise3]).then((result)=>{
    console.log('All Promise resolved', result);
})
.catch((error)=>{
    console.log(error);
});