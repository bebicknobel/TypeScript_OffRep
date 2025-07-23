var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//using inheritance use keyword : extends
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getUser = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getUserAge = function () {
        return "Age ".concat(this.age);
    };
    return Person;
}());
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return Users;
}(Person));
var Admins = /** @class */ (function (_super) {
    __extends(Admins, _super);
    function Admins(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admins.prototype.getUser = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, " , Roll : ").concat(this.role);
    };
    Admins.prototype.manageUsers = function () {
        return "Managing Users with role ".concat(this.role);
    };
    return Admins;
}(Person));
var userPersons = new Users("Bebick", "Nobel", 25);
console.log(userPersons.getUser());
console.log(userPersons.getUserAge());
var userAdmins = new Admins("Akash", "Vasanth", 26, "optometrist");
console.log(userAdmins.getUser());
console.log(userAdmins.getUserAge());
console.log(userAdmins.manageUsers());
