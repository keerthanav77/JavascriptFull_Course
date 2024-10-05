function fetchData(){
return new Promise((resolve)=>{
    setTimeout(()=>{
        const data= {id:1,name:'john'};
        resolve(data);
    },2000);
});
}
fetchData().then((result)=>{
    console.log(result);
});

fetchData().then((result)=>{
    console.log(result);
});

//Without async
function getUser(){
    console.log('Fetching Data...');
    try{
        const data = fetchData();
        console.log('Data fetched:',data);
}catch (error){
    console.log(error);
}
}

getUser();

async function getAsyncUser(){
    console.log('Fetching Data...');
    try{
        const data = await fetchData();
        console.log('Data fetched:',data);
}catch (error){
    console.log(error);
}
}
getAsyncUser();

