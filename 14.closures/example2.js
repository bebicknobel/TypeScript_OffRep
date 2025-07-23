//It is also called as Encapsulation
function createCounter() {
    var counterValue = 0;
    return {
        increamentCounter: function () {
            return counterValue++;
        },
        getCounterVal: function () {
            return counterValue;
        }
    };
}
var counter1 = createCounter();
counter1.increamentCounter();
counter1.increamentCounter();
counter1.increamentCounter();
console.log(counter1.getCounterVal());
