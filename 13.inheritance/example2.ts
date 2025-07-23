
//using inheritance use keyword : extends
class Person{

    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string,lastName:string,age:number){

        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;

    }
     

     getUser(){
       
          return `Hello ${this.firstName} ${this.lastName}`;
    }

    getUserAge(){

        return`Age ${this.age}`;
    }

}

class Users extends Person{

     constructor(firstName:string,lastName:string,age:number){

        super(firstName,lastName,age);
    }
}


class Admins  extends Person{

    role:string;

    constructor(firstName:string,lastName:string,age:number,role:string){

        super(firstName,lastName,age);
        this.role=role;
    }
    

     getUser(){
       
       return `Hello ${this.firstName} ${this.lastName} , Roll : ${this.role}`;
    }

   manageUsers(){

     return `Managing Users with role ${this.role}`;
   }
}

let userPersons=new Users("Bebick","Nobel",25);
console.log(userPersons.getUser());
console.log(userPersons.getUserAge());

let userAdmins=new Admins ("Akash","Vasanth",26,"optometrist");
console.log(userAdmins.getUser());
console.log(userAdmins.getUserAge());
console.log(userAdmins.manageUsers());


