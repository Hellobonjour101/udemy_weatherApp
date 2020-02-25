class User{
    constructor(username, age){
        //set up properties
        this.username = username;
        this.age = age;
        this.score = 0;
    }
    login(){
        //arrow function을 쓰면 this가 참고하는 것이 object가 아니고, window가 되버린다.
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

const userOne = new User('kim', 12);
const userTwo = new User('lee', 40);
console.log(userOne, userTwo);

//chaining methods w/o 'return this;' statement
// userOne.login();
// userOne.incScore();
// userOne.incScore();
// userTwo.logout();


//chaining methods
userOne.login().incScore().incScore().logout();
