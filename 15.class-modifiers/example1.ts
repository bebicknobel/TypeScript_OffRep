
//without Acces MOdifiers...We can access the properties 
//THats make some error so that we neeed to the access modifiers
class user{

    name:string;
    age:number;


    constructor(name:string,age:number){
       
        this.name=name;
        this.age=age;
    }

}


const user1=new user("Danie",25);

console.log(user1.name);
console.log(user1.age);