//Generics class or component using again and again 
//<T> - means Type : dataType
//We can Use same class for all datatypes
//Advantges
//1.Avoid Duplicates codes 
//2.Avoid code resuability
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numStack = new Stack();
numStack.push(1);
numStack.push(2);
console.log(numStack.pop());
var stringStack = new Stack();
stringStack.push("Helllo");
stringStack.push("World");
console.log(stringStack.pop());
