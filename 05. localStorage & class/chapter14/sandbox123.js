//prototype

function User(username, age){
    this.username = username;
    this.age = age;
} 

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
}
User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
}

const userOne = new User('kim', 12);
const userTwo = new User('lee', 40);
console.log(userOne, userTwo);
// userOne.login();
// userOne.logout();

userOne.login().logout();
