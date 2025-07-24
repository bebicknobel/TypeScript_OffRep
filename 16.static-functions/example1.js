//If we use static functions ..Directly we call the functions or class 
//without creating the object
//Static member cant use the object properties
//using non static function
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return User;
}());
var userc = new User("Danie", 25);
console.log(userc.isAdult());
