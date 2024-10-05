// localStorage.setItem('username1','John');
// localStorage.setItem('username2','Ravi');

// const usernameOne=localStorage.getItem('username1');
// console.log(usernameOne);

// localStorage.removeItem('username1');

// localStorage.clear();

// sessionStorage.setItem('day','white');
// sessionStorage.setItem('night','black');

// const theme=sessionStorage.getItem('day');
// console.log(theme);

// sessionStorage.removeItem('day');
// sessionStorage.clear();

const user={
    id:1,
    name:'john',
    age:30,
};
localStorage.setItem('user',JSON.stringify(user));

const lsUser = JSON.parse(localStorage('user'));
console.log(lsUser);