// function greetUser(user:{firstName:string,lastName:string}){
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function userLogDetails(user) {
    console.log("User : ".concat(user.firstName, " ").concat(user.middleName, "  ").concat(user.lastName, " , Age : ").concat(user.age));
}
var user1 = { firstName: "Bebick", lastName: "Nobel", age: 25, middleName: "Danie" };
var user2 = { firstName: "Danie", lastName: "Djo", age: 25 };
console.log(greetUser(user2));
userLogDetails(user1);
