// function with default values
var myCheckFunction1 = function (number1, number2) {
    if (number1 === void 0) { number1 = 12; }
    if (number2 === void 0) { number2 = 13; }
    console.log(number1);
    return number1 + number2;
};
// Functional with optional values
var myCheckFunction = function (number1, number2) {
    if (number1 === void 0) { number1 = 12; }
    console.log(number1);
    return number1 + number2;
};
//Rest Parameters
var mycheckFunction3 = function (name) {
    var nextData = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nextData[_i - 1] = arguments[_i];
    }
    return name + " " + nextData.join(" ");
};
console.log(mycheckFunction3("aa", "bb", "cc", "dd"));
