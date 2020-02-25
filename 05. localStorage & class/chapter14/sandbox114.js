//01. store data in local storage
localStorage.setItem('name','mario');
localStorage.setItem('age',50);

//02. get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

//03. update data
// localStorage.setItem('name','luigi');
// localStorage.setItem('age','20');

// name = localStorage.getItem('name');
// age = localStorage.getItem('age');
// console.log(name, age);


//04. delete data from local Storage
//localStorage.removeItem('name');
localStorage.clear();
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name,age);