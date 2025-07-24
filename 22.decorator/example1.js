var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        console.log("Calling add Method using arguments  ".concat(a, " and ").concat(b, " "));
        var result = a + b;
        console.log("Result : ".concat(result));
        return result;
    };
    Calculator.prototype.substract = function (a, b) {
        console.log("Calling Substract Method using arguments  ".concat(a, " and ").concat(b));
        var result = a - b;
        console.log("Result : ".concat(result));
        return result;
    };
    return Calculator;
}());
var calc = new Calculator();
calc.add(25, 5);
calc.substract(25, 5);
