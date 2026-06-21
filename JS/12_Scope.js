let a = 200;
const b = 300;
var c = 30;

if (true) {
    let a = 20;
    const b = 30;
    var c = 3;
    // console.log("Inner : ",a,b,c);    
}
// console.log("Outer : ",a,b,c);


function one(){
    let username = "Troy";
    function two(){
        let name = "Hemanth";
        console.log(username);        
    }
    // console.log(name);
    two()    
}
one()