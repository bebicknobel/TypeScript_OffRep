
//With Access Modifiers
//we need to access the properties using getter and setter methods
class Users{

    private  name:string;
    private  age:number;


    constructor(name:string,age:number){
       
        this.name=name;
        this.age=age;
    }

    //Getter Methods
    public getName(){

        return this.name;
    }

    public getAge(){

        return this.age;
    }

    //setter Methods
    public setName(name:string){

        this.name=name;
    }

    public setAge(age:number){
      
        if(age>0){
             this.age=age;
        }
       

    }



}


const userPerson=new Users("Danie",25);

console.log(userPerson.getName());
console.log(userPerson.getAge());


userPerson.setName("Bebick");
userPerson.setAge(-10);

console.log(userPerson.getName());
console.log(userPerson.getAge());
