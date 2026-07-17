let pie = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(pie);


let obj = {
    name : "Harry",
    age : 45,
    Role : "Developer"
}

let prop = Object.getOwnPropertyDescriptor(obj, "age");
console.log(prop);

Object.defineProperty(obj,"age",{
    enumerable:false
})

let prop1 = Object.getOwnPropertyDescriptor(obj, "age");
console.log(prop1);

// for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`);    
// }

for (const [key,value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`)
}
