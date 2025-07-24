
//IF the varibale is GLobal means same Data Mismatch will happen


class Userss{

    name:string;

    constructor(name:string){
       
        this.name=name;
   
    }

    getName(){

        return this.name;
    }
}

let totalUsers=0;

function createUser(name:string){

    totalUsers++;
    return new Userss(name);
}

let user1=createUser("Alice");
let user2=createUser("Bob");

console.log(user1.getName());
console.log(user2.getName());
console.log(totalUsers);

