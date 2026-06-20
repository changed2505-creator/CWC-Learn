let arr1 = ["abc","def","ghi"];
let arr2 = ["jkl","mno","pqr"];

// const arr = arr1.push(arr2);
// console.log(arr);
// console.log(arr1)

// const arr = arr1.concat(arr2);
// console.log(arr);
// console.log(arr1)

// let arr = [...arr1,...arr2]
// console.log(arr);

let another_arr = [1,2,[3,4],[5,6,[7,8]]];
let readable_arr = another_arr.flat(Infinity);
console.log(readable_arr);
