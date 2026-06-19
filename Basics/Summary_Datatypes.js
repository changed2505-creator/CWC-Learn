const a = Symbol("123");
const b = Symbol("123");

console.log(a==b);

let fun = function Hi() {
    console.log("Hello");
}

console.log(typeof fun)