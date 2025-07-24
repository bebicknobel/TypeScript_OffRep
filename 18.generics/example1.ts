
//Generics class or component using again and again 
//<T> - means Type : dataType


class numberStack{

    items:number[]=[];

     push(item:number){

        this.items.push(item);
     }

     pop(){

       return this.items.pop();
     }
}

class stringstack{

    items:string[]=[];

    push(item:string){

        this.items.push(item);
    }

    pop(){
 
        return this.items.pop();

    }
}

const numstack=new numberStack();
numstack.push(1);
numstack.push(2);
console.log(numstack.pop());

const strStack=new stringstack();
strStack.push("Hello");
strStack.push("world");
console.log(strStack.pop());
