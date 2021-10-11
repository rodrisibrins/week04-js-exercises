//6.a)
function addNumbers(numOne, numTwo) {
    var add = numOne + numTwo;
    return add;
}

var numbersTotal = addNumbers(50, 50);
console.log('Exercise 6.a:', numbersTotal);

//6.b)
function checkIsNumber(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        alert('Exercise 6.b: One of the parameters is not a number');
        return NaN;
    } else {
        var add = numOne + numTwo;
        return add;
    }
}

var checkAddNumbers = checkIsNumber('100', 2);
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
    if (typeof numOne !== 'number' || typeof numOne !== 'number') {
        alert('Exercise 6.d: One of the parameters is not a number');
        return NaN;
    } else if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        alert('Exercise 6.d: The parameters are not integers');
        return parseInt(numOne), parseInt(numTwo);
    } else {
        var total = numOne + numTwo;
        return total;
    }
}

var numToInteger = isNotNumberOrInteger(2, 4.5);
console.log('Exercise 6.d:', numToInteger);

//6.e)
function validateIsNumber(numberOne, numberTwo) {
    if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
        alert('Exercise 6.e: One of the parameters is not a number');
        return NaN;
    } else {
        var amount = numberOne + numberTwo;
        return amount;
    }
}

function newAddNumber(c, d) {
    console.log('Exercise 6.e:', validateIsNumber(c, d));
}

newAddNumber('Hello World', 500);

