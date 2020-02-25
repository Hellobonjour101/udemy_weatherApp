class User{
    constructor(username, age){
        //set up properties
        this.username = username;
        this.age = age;
    }
}

const userOne = new User('kim', 12);
const userTwo = new User('lee', 40);
console.log(userOne, userTwo);

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' keyowrd to the new empty object
// 3 - it calls the constructor function to 'build' the object


//And whenever we create an object like this 
//we say that we are creating an instance of the User class 
//the instance refers to the individual object that we actually create using the class.