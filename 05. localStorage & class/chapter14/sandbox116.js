//Object Literal : 객체 생성과 할당 

const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    }
};
console.log(userOne);


//Object constructor : 객체 생성한 후 할당 (Constructor는 무조건 대문자로 시작)
const userTwo = new Object();
userTwo.username = 'mario';
userTwo.email = 'mario@thenetninja.co.uk';
userTwo.login = function(){console.log('the user logged in')};
userTwo.logout = function(){console.log('the user logged out')};

console.log(userTwo);
