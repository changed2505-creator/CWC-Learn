function testAdd(num1,num2){
    // console.log(num1+num2);   
    return num1+num2 ; 
}

let addValue = testAdd(4,3)
// console.log(addValue);

function userLogin(userName){
    // if(userName === undefined || userName === "")
    if(!userName)        {
        // console.log("Enter a username!!!");
        return     
    }
    else{
       return `${userName} has logged in...`
    }    
}

// console.log(userLogin(""))


function addEnteredAgruments(...value){
    return value;
}
// console.log(addEnteredAgruments(10,20,30,40,500));


const user = {
    name : "Lohith",
    age : 34
}

function passingObjects(anyObject){
    // console.log(`Username is ${anyObject.name} and users age is ${anyObject.age}`);    
}
// Requires typechecking before calling the function

passingObjects(user);


function handlingArrays(anyArr){
    return anyArr[0];
}

console.log(handlingArrays([10,20,20,30]));