
//If we use static functions ..Directly we call the functions or class 
//without creating the object
//Static member cant use the object properties


//using non static function

class User{

    name:string;
    age:number;


    constructor(name:string,age:number){
       
        this.name=name;
        this.age=age;
    }

    isAdult(){
        
        return this.age>=18;

    }

}


const userc=new User("Danie",25);

console.log(userc.isAdult());