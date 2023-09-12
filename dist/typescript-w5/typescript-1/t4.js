"use strict";
function createElectronicDevice() {
    const brandP = prompt('Enter device brand. ') || 'Unknown';
    const modelP = prompt('Enter device model. ') || 'Unknown';
    const electronicDevice = {
        type: 'electronic',
        brand: brandP,
        model: modelP
    };
    return electronicDevice;
}
function createBook() {
    const titleB = prompt('Enter book title. ') || 'Unknown';
    const authorB = prompt('Enter book author. ') || 'Unknown';
    const book = {
        type: 'book',
        title: titleB,
        author: authorB
    };
    return book;
}
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
