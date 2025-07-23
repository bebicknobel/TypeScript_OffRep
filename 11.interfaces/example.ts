
// function greetUser(user:{firstName:string,lastName:string}){

//     return `Hello ${user.firstName} ${user.lastName}`
// }

// function userLogDetails(user:{firstName:string,lastName:string,age:number}){

//     console.log(`User : ${user.firstName}  ${user.lastName} , Age : ${user.age}`)
// }

// //Drawbacks if we need another we parmeter means..Again need add the parameter in all function 
// //For that we need to use interface

// let user1={firstName:"Bebick",lastName:"Nobel",age:24};

// console.log(greetUser(user1));

// userLogDetails(user1);

interface User{

    firstName:string,
    lastName:string,
    age:number
    middleName?:string
}


   function greetUser(user:User){

       return `Hello ${user.firstName} ${user.lastName}`;

   }

   function userLogDetails(user:User){
        
         console.log(`User : ${user.firstName} ${user.middleName}  ${user.lastName} , Age : ${user.age}`)

   }

   let user1={firstName:"Bebick",lastName:"Nobel",age:25,middleName:"Danie"};
   let user2={firstName:"Danie",lastName:"Djo",age:25}

   console.log(greetUser(user2));

   userLogDetails(user1);


   //using Interface we can use like object