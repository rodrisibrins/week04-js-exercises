//6.a)
function addNumbers(numOne, numTwo) {
    var add = numOne + numTwo;
    return add;
}
var numbersTotal = addNumbers(50, 50);
console.log('Exercise 6.a:', numbersTotal);
//6.b)
function addNumbers(numOne, numTwo) {
    if (isNaN(numOne) || isNaN(numTwo)) {
        alert('Exercise 6.b: One of the parameters is not a number');
        return NaN;
    } else {
        var add = numOne + numTwo;
        return add;
    }
}
var checkAddNumbers = addNumbers('string', 2);
console.log('Exercise 6.b:', checkAddNumbers);
//6.c)
function validateInteger(number1) {
    if (Number.isInteger(number1)) {
        return true;
    }
}
var testInteger = validateInteger(5);
console.log('Exercise 6.c:', testInteger);
//6.d)
function secondAddNumbers(numOne, numTwo) {
    if (isNaN(numOne) || isNaN(numTwo)) {
        alert('Exercise 6.d: One of the parameters is not a number');
        return NaN;
    } else if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        alert('Exercise 6.d: The parameters are not integers');
        return parseInt(numOne), parseInt(numTwo);
    } else {
        var add = numOne + numTwo;
        return add;
    }
}
var numToInteger = secondAddNumbers(2, 4.5);
console.log('Exercise 6.d:', numToInteger);
//6.e)
function validateIsNumber(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert('Exercise 6.e: One of the parameters is not a number');
        return console.log('Exercise 6.e:', NaN);
    }
}
function thirdAddNumber(c, d) {
    validateIsNumber(c, d);
    var total = c + d;
    return total;
}
var nestedFunctions = thirdAddNumber('string', 50);
console.log('Exercise 6.e:', nestedFunctions);