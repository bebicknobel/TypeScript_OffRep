//IF the varibale is GLobal means same Data Mismatch will happen
var Users = /** @class */ (function () {
    function Users(name) {
        Users.totalUsers++;
        this.name = name;
    }
    Users.prototype.getName = function () {
        return this.name;
    };
    Users.getTotalUsers = function () {
        return Users.totalUsers;
    };
    Users.totalUsers = 0;
    return Users;
}());
var userp1 = new Users("Alice");
var userp2 = new Users("Bob");
console.log('Start user count :', Users.totalUsers);
console.log(userp1.getName());
console.log(userp2.getName());
console.log('End user count :', Users.getTotalUsers());
