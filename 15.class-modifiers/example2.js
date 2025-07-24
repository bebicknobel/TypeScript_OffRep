//With Access Modifiers
//we need to access the properties using getter and setter methods
var Users = /** @class */ (function () {
    function Users(name, age) {
        this.name = name;
        this.age = age;
    }
    //Getter Methods
    Users.prototype.getName = function () {
        return this.name;
    };
    Users.prototype.getAge = function () {
        return this.age;
    };
    //setter Methods
    Users.prototype.setName = function (name) {
        this.name = name;
    };
    Users.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
    };
    return Users;
}());
var userPerson = new Users("Danie", 25);
console.log(userPerson.getName());
console.log(userPerson.getAge());
userPerson.setName("Bebick");
userPerson.setAge(-10);
console.log(userPerson.getName());
console.log(userPerson.getAge());
