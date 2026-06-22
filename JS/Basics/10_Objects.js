const mySymbol = Symbol("key1");
const mySymbolTwo = Symbol("key2");

const obj = {
    name : "hemanth",
    Age : 26,
    Location : "Banglore",
    Email : "Troy123@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Mon","Tue","Thu"],
    mySymbol : "myKey1",
    [mySymbolTwo] : "myKey2"
}

// console.log(obj.Email);
// console.log(obj["Email"]);

// console.log(obj.mySymbol,typeof(obj.mySymbol));
// console.log(obj[mySymbolTwo],typeof Object.getOwnPropertySymbols(obj)[0]);

// obj.name = "Bhuvith";
// console.log(obj);
// Object.freeze(obj);
// obj.name = "Rohith";
// console.log(obj);

obj.greeting = function test() {
    console.log("Hi");
}
obj.greet = function testing() {
    console.log(`Hi ${this.name}`);
}

console.log(obj);
console.log(obj.greeting);
console.log(obj.greeting());
console.log(obj.greet());






