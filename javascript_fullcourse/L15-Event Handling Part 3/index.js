const feedbackForm =document.getElementById('feedbackForm');
const responseDiv = document.getElementById('response');

console.log(feedbackForm);

feedbackForm.addEventListener('submit',function(Event){
    Event.preventDefault();

    const formData = new FormData(this);
    console.log(formData);

    const formDataJson ={};
    formData.forEach((value,key)=>{
        formDataJson[key]= value;
    })
    console.log(formDataJson);

    const jsonString = JSON.stringify(formDataJson,null,2);
    responseDiv.innerHTML = `<pre>${jsonString}</pre>`;

    feedbackForm.reset();
});

