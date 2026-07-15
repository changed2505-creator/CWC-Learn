let arr = [1, "Hi", 4]

let obj = {
    a: 1,
    b: "array",
    c: function () {
        // console.log(`Value of b is : ${this.b}`);
    }
}

Object.prototype.me = function () {
    // console.log(`You can't see me!!!`);
}

Array.prototype.you = function () {
    // console.log(`I can see you!!!`);
}

// obj.me()
// arr.me()
// arr.you()
// obj.you()

// ____________________________________________old

let user = {
    name : "Hitesh",
    age : 35
}
let details = {
    email : "hitesh@gmail.com",
    address : "....."
}
let family = {
    wife : "Urumila",
    son : "Rajesh",
    __proto__ : details
}

// console.log(family.email);
// details.__proto__ = user
// console.log(details.name);

// ______________________________________________new

Object.setPrototypeOf(details,user)
// console.log(details.name);


// _________________________________________________Problem


let name = "Aarthi    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
    
}

name.trueLength()
"Shubham".trueLength()