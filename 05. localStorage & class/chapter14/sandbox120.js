class User{
    constructor(username, age){
        //set up properties
        this.username = username;
        this.age = age;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}.`);
        return this;
    }
}

class Admin extends User{
    constructor(username, age, title){
        super(username, age);
        this.title = title;
    }

    deleteUser(user){
        users = users.filter(u => {
            return u.username !== user.username;
        })
    }
}

const userOne = new User('kim', 12);
const userTwo = new User('lee', 40);
const userThree = new Admin('choi', 30, 'teacher');

console.log(userThree);
