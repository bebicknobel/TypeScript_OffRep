//Generics class or component using again and again 
//<T> - means Type : dataType
//We can Use same class for all datatypes
//Advantges
//1.Avoid Duplicates codes 
//2.Avoid code resuability

class Stack<T>{

    private items:T[]=[];

    push(item:T){
     
        this.items.push(item);
    }

    pop(){

        return this.items.pop();
    }

}

const numStack=new  Stack<number>();
numStack.push(1);
numStack.push(2);
console.log(numStack.pop());

const stringStack=new Stack<string>();
stringStack.push("Helllo");
stringStack.push("World");
console.log(stringStack.pop());


