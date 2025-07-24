//Generics class or component using again and again 
//<T> - means Type : dataType
var numberStack = /** @class */ (function () {
    function numberStack() {
        this.items = [];
    }
    numberStack.prototype.push = function (item) {
        this.items.push(item);
    };
    numberStack.prototype.pop = function () {
        return this.items.pop();
    };
    return numberStack;
}());
var stringstack = /** @class */ (function () {
    function stringstack() {
        this.items = [];
    }
    stringstack.prototype.push = function (item) {
        this.items.push(item);
    };
    stringstack.prototype.pop = function () {
        return this.items.pop();
    };
    return stringstack;
}());
var numstack = new numberStack();
numstack.push(1);
numstack.push(2);
console.log(numstack.pop());
var strStack = new stringstack();
strStack.push("Hello");
strStack.push("world");
console.log(strStack.pop());
