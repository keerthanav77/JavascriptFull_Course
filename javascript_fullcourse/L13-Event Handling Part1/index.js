const button = document.getElementById('button');

console.log(button);

button.addEventListener('click',()=>{
    alert('Button Clicked');
});

button.addEventListener('mouseover',()=>{
    button.classList.add('buttonHover');
});

button.addEventListener('mouseout',()=>{
    button.classList.remove('buttonHover');
});

// button.addEventListener('keydown',(event)=>{
//     if(event.key ==='Enter'){
//         alert('Enter key is pressed!');
//     }
// });

// button.addEventListener('keypress',(event)=>{
//     if(event.key ==='Enter'){
//         alert('Enter key is pressed!');
//     }
// });

button.addEventListener('keyup',(event)=>{
    if(event.key ==='Enter'){
        alert('Enter key is pressed!');
    }
});

document.addEventListener('keydown',(Event)=>{
    if(Event.shiftKey){
        alert('Shift key pressed!');
    }
});

document.addEventListener('keydown',(Event)=>{
    if(Event.ctrlKey){
        alert('ctrl key pressed!');
    }
    if(Event.key >='a'&& Event.key<='z'){
        alert(`Alphabetical key '${Event.key}'pressed!`);
    }

    if(Event.key >='0'&& Event.key<='9'){
        alert(`Number key '${Event.key}'pressed!`);
    }
});