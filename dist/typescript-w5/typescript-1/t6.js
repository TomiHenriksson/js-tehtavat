"use strict";
const reverseArray = (arr) => {
    return arr.reverse();
};
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry", "date"];
const mixedArray = [true, 42, "hello", false];
console.log('reversed array of numbers: ', reverseArray(numberArray));
console.log('reversed array of strings: ', reverseArray(stringArray));
console.log('reversed mixed array: ', reverseArray(mixedArray));
