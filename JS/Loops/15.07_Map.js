let arr = [1,2,3,4,5];

let value = arr.map((e)=>{
    return e*3;
}).filter((ele)=>{
    return ele>10;
})
// console.log(value);

let val = arr.map((e)=>{
    return e>3;
})
console.log(val);
