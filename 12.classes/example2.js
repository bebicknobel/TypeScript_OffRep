var Users = /** @class */ (function () {
    function Users(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Users.prototype.getUsers = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    Users.prototype.getUserAge = function () {
        return "Age : ".concat(this.age);
    };
    return Users;
}());
//Creating Instance or object
var userPerson1 = new Users("Bebick", "Nobel", 24);
var userPerson2 = new Users("Akash", "Vasanth", 26);
console.log(userPerson1.getUsers());
console.log(userPerson2.getUserAge());
