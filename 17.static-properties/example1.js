//IF the varibale is GLobal means same Data Mismatch will happen
var Userss = /** @class */ (function () {
    function Userss(name) {
        this.name = name;
    }
    Userss.prototype.getName = function () {
        return this.name;
    };
    return Userss;
}());
var totalUsers = 0;
function createUser(name) {
    totalUsers++;
    return new Userss(name);
}
var user1 = createUser("Alice");
var user2 = createUser("Bob");
console.log(user1.getName());
console.log(user2.getName());
console.log(totalUsers);
