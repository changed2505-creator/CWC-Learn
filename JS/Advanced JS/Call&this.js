function name(userName) {
    this.userName = userName
}

function user(userName, age, email) {
    name.call(this, userName)

    this.age = age
    this.email = email
}

let details = new user("Taj",26,"Taj454@gmail.com")
console.log(details);
