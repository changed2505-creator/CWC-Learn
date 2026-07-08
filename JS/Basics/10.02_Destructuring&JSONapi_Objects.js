let obj = {
    name : "Hemanth",
    age : 22,
    isMale : true,
    homeTown : "Manglore"
}

const {homeTown : home} = obj;
console.log(home);

let arr = [1,2,3,4,5,66];
const [o,t,th] = arr;
console.log(th);
