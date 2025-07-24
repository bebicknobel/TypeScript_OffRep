//without Acces MOdifiers
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    return user;
}());
var user1 = new user("Danie", 25);
console.log(user1.name);
console.log(user1.age);
