//Without class 
var user1 = { firstName: "Bebick", lastName: "Nobel", age: 24 };
var user2 = { firstName: "Magesh", lastName: "Robin", age: 35 };
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(user1));
console.log(getUserAge(user1));
console.log(greetUser(user2));
console.log(getUserAge(user2));
