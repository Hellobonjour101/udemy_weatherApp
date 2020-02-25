function User(username, age){
    this.username = username;
    this.age = age;
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
};

function Admin(username, age, title){
    User.call(this, username, age);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){

};

const userOne = new User('kim', 18);
const userTwo = new User('lee', 39);
const userThree = new Admin('choi', 60, 'teacher');


console.log(userOne, userTwo, userThree);



