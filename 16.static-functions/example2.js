//If we use static functions ..Directly we call the functions or class 
//without creating the object
//Static member cant use the object properties
//Using Static Member
var Userss = /** @class */ (function () {
    function Userss(name, age) {
        this.name = name;
        this.age = age;
    }
    Userss.isAdult = function (age) {
        //can't acces the object properties
        //return this.age>=18;
        return age >= 18;
    };
    return Userss;
}());
console.log(Userss.isAdult(30), '30');
console.log(Userss.isAdult(15), '15');
