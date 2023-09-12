"use strict";
function lengthOrSquare(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (typeof value === 'number') {
        return Math.pow(value, 2);
    }
    else {
        return null;
    }
}
const userInput1 = prompt('Enter a value: ( string or number ) ');
let parsedValue;
if (userInput1 !== null && !isNaN(parseFloat(userInput1))) {
    parsedValue = parseFloat(userInput1);
}
else {
    parsedValue = userInput1;
}
const result1 = lengthOrSquare(parsedValue);
console.log(typeof result1);
console.log(result1);
