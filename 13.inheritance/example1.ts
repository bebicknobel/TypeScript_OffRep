


//without inheritance

class users{

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

class Admin {

    firstName:string;
    lastName:string;
    age:number;
    roll:string;

        constructor(firstName:string,lastName:string,age:number,roll:string){
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.roll=roll;
        }


      getUser(){
       
          return `Hello ${this.firstName} ${this.lastName}, Roll : ${this.roll}`;
       }
    
      getUserAge(){

        return`Age ${this.age}`;
    } 


}

let userPerson=new users("Bebick","Nobel",25);
console.log(userPerson.getUser());
console.log(userPerson.getUserAge());


let userAdmin=new Admin("Akash","Vasanth",26,"optometrist");
console.log(userAdmin.getUser());
console.log(userAdmin.getUserAge());