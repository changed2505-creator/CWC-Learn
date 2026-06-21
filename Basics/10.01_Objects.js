// const userEntry = new Object();
const userEntry = {}; 
userEntry.name = "Hemanth",
userEntry.Age = 24;
userEntry.isLoggedIn = true;

// console.log(userEntry);


const regularUser = {
    email : "jdksjk@gmail.com",
    fullname :{
        userFullname :{
            firstName : "Troy",
            lastName : "Ritzz"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {a:1,b:2};
const obj2 = {c:"Hi",d:"Bye"};
let obj3 = {obj1,obj2};
const obj4 = Object.assign({},obj1,obj2);

// console.log(obj4);

// console.log(userEntry);
// console.log(Object.keys(userEntry));
// console.log(Object.values(userEntry));
// console.log(Object.entries(userEntry));

console.log(userEntry.hasOwnProperty("name"));
console.log(userEntry.hasOwnProperty("surName"));


 