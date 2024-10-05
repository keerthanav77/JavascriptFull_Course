/*
Document object Model(DOM) manipulation
the following the way to selecting & modifying element in DOM
1.getElementById
2.getElementsByClassName
3.getElementByTagName
4.querySelector
5.querySelectorAll
*/


//1.getElementById
//Selects a single element based on its unique id attributes.
const heading =document.getElementById('main-heading');

console.log(heading);

//Finding the value
console.log(heading.innerHTML); //Output the HTML Content inside the element
console.log(heading.textContent); //output the text content inside the element

//Changing values
heading.innerHTML='See, I am from planet earth!';
heading.textContent='See, I am from planet Mars!';

function changeHeading (){
    setTimeout(()=>{
        heading.textContent = 'See, I am from planet Mars!';
    }, 8000);
}
changeHeading();

//2.getElementsByClassName
const listItem =document.getElementsByClassName('list-item');
console.log(listItem);

// console.log(listItem.item(0));
// console.log(listItem.item(0).innerHTML);

for(let i=0; i <listItem.length; i++){
    console.log(listItem.item(i).innerHTML);
}

for(let i=0; i<listItem.length;i++){
    listItem.item(i).innerHTML = `Modifyed item ${i+1}`;
}

const itemsArray = Array.from(listItem);

itemsArray.forEach((item)=>{
    console.log(item.textContent);
});

//3.getElementByTagName
const content =document.getElementById('content').getElementsByTagName('p');
console.log(content);

function contentItenStyle(){
    content.item(0).style.color='brown';
    content.item(1).style.fontSize='14px';
    content.item(2).style.fontWeight='700';
    content.item(3).style.backgroundColor='purple';
}
contentItenStyle();

function contentStyle(){
    for(let i=0; i<content.length;i++){
        content.item(i).style.paddingBottom ='6px';
    }
}
contentStyle();

//Remove element from Dom
const message = document.getElementById('message');
setTimeout(()=>{
    message.remove();
},3000);

//Adding element to Dom
const newParagraph = document.createElement('p');
newParagraph.style.color='green';

newParagraph.classList.add('new-paragraph');

newParagraph.textContent= 'This is the new paragraph added dynamically';
const container = document.getElementById('main');

/*
appendChild(): Adds a new element as the last child of the parent child element.
insertbefore (): Inserts a new new element befor an existing child element .
InsertAdjacentHTML():   Inserts the HTML conetnt at a specified position relative to an element
*/
//container.appendChild(newParagraph);
//container.insertBefore(newParagraph,heading);

container.insertAdjacentHTML('afterbegin','<p>See Me after main begin</p>');
container.insertAdjacentHTML('afterend', '<p>See me after main end</p>');
container.insertAdjacentHTML('beforebegin','<p>See my befor main begin</p>');
container.insertAdjacentHTML('beforeend','<p style="padding-top:20px">See my befor main end</p>');


//4.querySelector
/* Selecting element using queryselector (work both class or id more flexibility)
*/
const subTitle =document.querySelector('#subtitle');
console.log(subTitle);
console.log(subTitle.textContent);

setTimeout(()=>{
    subTitle.textContent='New Subtitle form js';
},4000);

//5.querySelectorAll
//Selecting multiple element using querySelectorAll

const listItemQuery = document.querySelector('.list-item');
console.log(listItemQuery);

listItemQuery.forEach((item,index)=>{
    item.textContent = `Modified Item ${index+2}`;
});




