const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const vegatables = [];


console.log(`Fruits: ${fruits}`);
console.log(`Length of Fruits: ${fruits.length}`);
console.log(`Element at Index 2: ${fruits[2]}`);
const last = fruits.slice(-1);
console.log(`Last Element of Fruits: ${last}`);

for (i=0; i<=2; i++) {
    let enterV = prompt('enter vegetable: ')
    vegatables.push(enterV);
    console.log(`Vegetables: ${vegatables[i]}`);
}

console.log(`Lenght of Vegetables: ${vegatables.length}`)



