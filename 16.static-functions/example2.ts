
//If we use static functions ..Directly we call the functions or class 
//without creating the object
//Static member cant use the object properties

//Using Static Member

class Userss{

    name:string;
    age:number;


    constructor(name:string,age:number){
       
        this.name=name;
        this.age=age;
    }

    static isAdult(age:number){
        //can't acces the object properties
        //return this.age>=18;
         return  age>=18;

    }

}

console.log(Userss.isAdult(30),'30');
console.log(Userss.isAdult(15),'15');