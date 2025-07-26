var concatStrings = function (a, b, c) {
    return a + b + c;
};
console.log(concatStrings("a", "b", "c"));
//In Type-Script it shows error we need to give all the parameters.
//In case if we want to give like this ..we Need to use optional Parameters - ?
//console.log(concatStrings("a","b"));
console.log(concatStrings("a", "b"));
