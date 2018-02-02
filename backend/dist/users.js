"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return (another !== undefined) && (another.email === this.email) && (another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "thiago@gmail.com": new User('thiago@gmail.com', 'Thiago', 'thiago123'),
    "thalita@gmail.com": new User('thalita@gmail.com', 'Thalita', 'thalita123'),
    "caroline@gmail.com": new User('caroline@gmail.com', 'Caroline', 'caroline123')
};
