
//Without class 

 let user1={firstName:"Bebick",lastName:"Nobel",age:24}

 let user2={firstName:"Magesh",lastName:"Robin",age:35}


 function greetUser(user:{firstName:string,lastName:string}){

    return `Hello ${user.firstName} ${user.lastName}`;

 }


 function getUserAge(user:{age:number}){
     
    return user.age;
 }

 console.log(greetUser(user1));
 console.log(getUserAge(user1));

 console.log(greetUser(user2));
 console.log(getUserAge(user2));