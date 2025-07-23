//without inheritance
var users = /** @class */ (function () {
    function users(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    users.prototype.getUser = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    users.prototype.getUserAge = function () {
        return "Age ".concat(this.age);
    };
    return users;
}());
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName, age, roll) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.roll = roll;
    }
    Admin.prototype.getUser = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ", Roll : ").concat(this.roll);
    };
    Admin.prototype.getUserAge = function () {
        return "Age ".concat(this.age);
    };
    return Admin;
}());
var userPerson = new users("Bebick", "Nobel", 25);
console.log(userPerson.getUser());
console.log(userPerson.getUserAge());
var userAdmin = new Admin("Akash", "Vasanth", 26, "optometrist");
console.log(userAdmin.getUser());
console.log(userAdmin.getUserAge());
