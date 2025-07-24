
//Convert the variable into another data-type
//In TypeScript Automatically find the dataTypes
//but sometimes cant find the data-types means
//it will make it as unknown it cause an error

interface User{

    name:string,
    age:number,

   
}



 const jsonData='{"name":"Alice","age":30}' ;

 const user=JSON.parse(jsonData) as User;

 //console.log(`Name ${user.name},Age : ${user.age},Email : ${user.Email}`);//Email is not there ...It returns Undefined ..
 // Need to call the inteface using KeyWord : as

 console.log(`Name ${user.name},Age : ${user.age}`)