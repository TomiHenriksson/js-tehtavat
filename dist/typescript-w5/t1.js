"use strict";
const cart = [];
while (true) {
    const itemName = prompt('enter item name');
    if (itemName === null || itemName === "") {
        break;
    }
    const itemPriceInput = prompt('enter item price');
    if (itemPriceInput === null) {
        break;
    }
    const itemPrice = parseFloat(itemPriceInput);
    const itemQuantityInput = prompt('enter item quantity');
    if (itemQuantityInput === null) {
        break;
    }
    const itemQuantity = parseInt(itemQuantityInput);
    const item = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };
    const newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
