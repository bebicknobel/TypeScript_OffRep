


//Merging two types is called Intersection-Types 
//using keyword : type


interface Employee{

    name:string;
    age:number;
}

interface Admin{

    isAdmin:boolean;
    accessLevel:number;
}

type EmployeeAdmin=Employee & Admin;

let employeeAdmins:EmployeeAdmin={

   name:"ALice",
   age:25,
   isAdmin:true,
   accessLevel:5

}

console.log(employeeAdmins.name);
console.log(employeeAdmins.age);
console.log(employeeAdmins.isAdmin);
console.log(employeeAdmins.accessLevel);




