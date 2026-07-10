//  let arr = [1,2,3,4,5]
//  let initialValue = 1;

//  let value = arr.reduce((accumulator, currentValue)=>{
//     return accumulator*currentValue
//  },1)

//  console.log(value);

const val = 5;
let arr = []
let a=1;

for(let i = val; i >= 1 ; i--) {
    // arr.push(i) 
    a=a*i;
}
console.log(a);


// console.log(arr);

let fact = arr.reduce((acc,cVal)=>{
    return acc*cVal;
},1)
// console.log(fact);



 