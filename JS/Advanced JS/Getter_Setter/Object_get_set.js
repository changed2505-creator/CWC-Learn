let user = {
    _name : "harsh",
    _email : "Harsh02@gmail.com",
    _password : "Harsh@123",

    get password(){
        return this._password.toUpperCase()
    },

    set password(val){
        this._password = val
    }
}

let callUser = Object.create(user)
console.log(callUser.password);
