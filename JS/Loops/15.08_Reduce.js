//  let arr = [1,2,3,4,5]
//  let initialValue = 1;

//  let value = arr.reduce((accumulator, currentValue)=>{
//     return accumulator*currentValue
//  },1)

//  console.log(value);

const val = 5;
let arr = []

for (let i = val; i >= 1 ; i--) {
    arr.push(i)
}

// console.log(arr);

let fact = arr.reduce((acc,cVal)=>{
    return acc*cVal;
},1)
console.log(fact);



 