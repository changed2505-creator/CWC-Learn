class user {
    constructor(userName, age, password) {
        this.username = userName;
        this.age = age;
        this.password = password;
    }
    passwordEncrypt() {
        return this.password
    }
    capitalizeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

let userDetails = new user("Harish", 45, "Harish@123")

// console.log(userDetails.passwordEncrypt());
// console.log(userDetails.capitalizeUsername());


// ___________________________________________________________functional approach

function user1(userName, age, password) {
    this.username = userName;
    this.age = age;
    this.password = password;
}

user1.prototype.passwordEncrypt = function () {
    return this.password
}
user1.prototype.capitalizeUsername = function () {
    return `${this.username.toUpperCase()}`
}

let details = new user1("Rohith", 35, "Rohith@123")

console.log(details.passwordEncrypt());
console.log(details.capitalizeUsername());
