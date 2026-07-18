class User {
    constructor(name,email,password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    get password(){
        return `Coke${this._password.toUpperCase()}Drink`
    }

    set password(val){
        this._password = val;
    }

}

let callUser = new User("John","Ucan'tCme123@gmail.com","JohnCena@555")
console.log(callUser.password);
