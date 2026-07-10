let obj = {
    a : 1,
    b: 2
}

for (const key in obj) {
    // console.log(key,obj[key]);    
}

let map = new Map();
map.set("a",1);
map.set('b',2);

for (const [key,value] in map) {
        console.log(key);
        
}