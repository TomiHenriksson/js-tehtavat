"use strict";
function promptForBook() {
    const bookTitle = prompt('Enter Book Title: ') || "Unknown";
    const bookAuthor = prompt('Enter Book Author: ') || "Unknown";
    let bookPublicationYearS = prompt('Enter Book Publication Year: ');
    let bookPublicationYear;
    if (bookPublicationYearS === null) {
        bookPublicationYear = null;
    }
    else {
        bookPublicationYear = parseInt(bookPublicationYearS, 10);
        if (isNaN(bookPublicationYear)) {
            bookPublicationYear = null;
        }
    }
    const book = {
        bookTitle,
        bookAuthor,
        bookPublicationYear
    };
    return book;
}
const bookDetails = promptForBook();
console.log("Book Details:");
console.log(`Title: ${bookDetails.bookTitle}`);
console.log(`Author: ${bookDetails.bookAuthor}`);
console.log(`Publication Year: ${bookDetails.bookPublicationYear}`);
