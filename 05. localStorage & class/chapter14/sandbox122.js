//constructor function

function User(username, age){
    this.username = username;
    this.age = age;
    this.login = function(){
        console.log(`${this.username} has logged in`);
    }
} 
// class User{
//     constructor(username, age){
//         //set up properties
//         this.username = username;
//         this.age = age;
//     }
// }

const userOne = new User('kim', 12);
const userTwo = new User('lee', 40);
console.log(userOne, userTwo);
userOne.login();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' keyowrd to the new empty object
// 3 - it calls the constructor function to 'build' the object
