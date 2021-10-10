//6.a)
function addNumbers(numOne, numTwo) {
    var add = numOne + numTwo;
    return add;
}

var numbersTotal = addNumbers(50, 50);
console.log('Exercise 6.a:', numbersTotal);

//6.b)
function checkIsNumber(numOne, numTwo) {
    if (isNaN(numOne) || isNaN(numTwo)) {
        alert('Exercise 6.b: One of the parameters is not a number');
        return NaN;
    } else {
        var add = numOne + numTwo;
        return add;
    }
}

var checkAddNumbers = checkIsNumber('string', 2);
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
function isNotNumberOrInteger(numOne, numTwo) {
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

var numToInteger = isNotNumberOrInteger(2, 4.5);
console.log('Exercise 6.d:', numToInteger);

//6.e)
function validateIsNumber(numberOne, numberTwo) {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        alert('Exercise 6.e: One of the parameters is not a number');
        return NaN;
    } else {
        var add = numberOne + numberTwo;
        return add;
    }
}

function newAddNumber(c, d) {
    console.log('Exercise 6.e:', validateIsNumber(c, d));
}

newAddNumber('Hello World', 500);

