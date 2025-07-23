var concatString = function (a, b, c) {
    if (c === void 0) { c = "cat"; }
    return a + b + c;
};
console.log(concatString("a", "b", "d"));
//We cant do this right ...In that case 
//We need to give default parameter
console.log(concatString("a", "b"));
