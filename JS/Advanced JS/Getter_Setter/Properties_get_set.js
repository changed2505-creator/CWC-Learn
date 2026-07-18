function user(name, email, password) {
    this._name = name;
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (val) {
            this._password = val
        }
    })
}

let userCall = new user("Rohan", "Me@gmail.com", "RoHaN@123")
console.log(userCall.password);
