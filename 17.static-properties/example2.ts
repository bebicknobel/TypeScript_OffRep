

//IF the varibale is GLobal means same Data Mismatch will happen


class Users{

    name:string;
    static totalUsers:number=0;

    constructor(name:string){

        Users.totalUsers++;
        this.name=name;
   
    }

    getName(){

        return this.name;
    }

    static getTotalUsers(){
      
        return Users.totalUsers;

    } 

}

const userp1=new Users("Alice");
const userp2=new Users("Bob");

console.log('Start user count :',Users.totalUsers);
console.log(userp1.getName());
console.log(userp2.getName());
console.log('End user count :',Users.getTotalUsers());

