class user {
    constructor(username) {
        this.username = username;
    }
    logUser() {
        return `Username is : ${this.username}`
    }
}

class details extends user {
    constructor(username, age, email) {
        super(username)
        this.age = age;
        this.email = email;
    }

    userInfo() {
        return `${this.username} is ${this.age} years old and his email is ${this.email}`
    }
}

let userDetails = new details("Hitesh",43,"Hitesh@google.com")
let uD = new user("Rithesh")

// console.log(userDetails.userInfo());
// console.log(userDetails.logUser());
// console.log(uD.logUser());

console.log(userDetails instanceof details );



