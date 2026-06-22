let arr = [1,2,3,4,5,6,7,8]

// let value = arr.filter((ele)=>{
//     return ele>3
// })
// console.log(value);

let newArr = []
let val = arr.forEach((ele)=>{
    if(ele>4){
        newArr.push(ele)
    }
})
console.log(newArr);
