

class Users{

    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string,lastName:string,age:number){

        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    getUsers(){

       
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    getUserAge(){
    
        return `Age : ${this.age}`;
    }

}

//Creating Instance or object

let userPerson1=new Users("Bebick","Nobel",24);

let userPerson2=new Users("Akash","Vasanth",26);

console.log(userPerson1.getUsers());
console.log(userPerson2.getUserAge());