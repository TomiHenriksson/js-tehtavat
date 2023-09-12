"use strict";
const squareRoot = (num) => {
    if (num === undefined || num === null) {
        return 'Input is undefined or null';
    }
    else if (num < 0) {
        return 'Cannot calculate square root of a negative number.';
    }
    const sqrt = Math.sqrt(num);
    return sqrt;
};
const userInput = prompt('Enter a number');
const numberInput = userInput ? parseFloat(userInput) : undefined;
const result = squareRoot(numberInput);
console.log(result);
