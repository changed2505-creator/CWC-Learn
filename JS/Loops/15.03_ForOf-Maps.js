let arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i)
}

let map = new Map();
map.set("a",1);
map.set('b',2);
// map.set('a',4);

// console.log(map);

for (const [key,value] of map) {
    // console.log(key);    
}

let obj = {
    a:1,
    b:2
}

for (const [key] of Object) {
    console.log(key);    
}

