class user {
    constructor(username) {
        this.username = username
    }

    userName(){
        return `${this.userName}`
    }
}

class details extends user{
    constructor(username,age){
        super(username);
        this.age = age;
    }

    ageOfUser(){
        return `${this.username}'s age is ${this.age}`
    }

     static mapID(){
        return Math.floor(Math.random()*100 + 1)
    }
}

let call2 = new details("Harry", 35)
let call1 = new user("Johny")

console.log(call2.mapID());
