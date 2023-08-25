const numbers = [];

for (i=1; i<6; i++)  {
    userN = +prompt(`enter a number: ${i} / 5:  `);
    numbers.push(userN);
}

console.log(numbers);


num = +prompt('enter a number')
if (numbers.includes(num))  {
    console.log(`${num} is found in the array!`);
} else {
    console.log(`${num} is not found in the array!`);
}

numbers.pop();
console.log(numbers);

