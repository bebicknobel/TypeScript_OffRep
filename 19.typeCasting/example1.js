//Convert the variable into another data-type
//In TypeScript Automatically find the dataTypes
//but sometimes cant find the data-types means
//it will make it as unknown it cause an error
var jsonData = '{"name":"Alice","age":30}';
var user = JSON.parse(jsonData);
//console.log(`Name ${user.name},Age : ${user.age},Email : ${user.Email}`);//Email is not there ...It returns Undefined ..
// Need to call the inteface using KeyWord : as
console.log("Name ".concat(user.name, ",Age : ").concat(user.age));
