function Proto(num) {
    return num*5;
}

Proto.power = 10;

// console.log(Proto(6));
// console.log(Proto.power);
// console.log(Proto.prototype);

function user(name,age) {
    this.name = name;
    this.age = age;
}

user.prototype.addAge = function(){
    this.age++
}
user.prototype.printName = function(){
    console.log(`Name : ${this.name}`);    
}

let aging = new user("Joker",25)
let aging1 = user("Batman",30)

aging.printName()