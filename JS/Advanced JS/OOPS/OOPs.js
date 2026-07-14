let obj = {
    name:"myName",
    age:34,
    schoolName:"JNV",
    getMySchoolDetails:function(){
        console.log(this.schoolName);        
    }
}
// console.log(obj.getMySchoolDetails());
// console.log(this);

function users(name,age,isAlive) {
    this.name = name
    this.age = age
    this.isAlive = isAlive

    return this
    
}

let user1 = new users("Hi",23,true)
let user2 = new users("Bye",65,false)
console.log(user1);
console.log(user2);
