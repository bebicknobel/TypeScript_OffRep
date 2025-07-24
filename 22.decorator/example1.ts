
class Calculator{

    add(a:number,b:number){
  
        console.log(`Calling add Method using arguments  ${a} and ${b} `);
        const result=a+b;
        console.log(`Result : ${result}`);

        return result;
    }

    substract(a:number,b:number){

        console.log(`Calling Substract Method using arguments  ${a} and ${b}`);
        const result=a-b;
        console.log(`Result : ${result}`);

        return result;

    }
}

const calc=new Calculator();
 calc.add(25,5);
 calc.substract(25,5);