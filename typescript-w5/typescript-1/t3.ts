type BookTitle = string | null;
type BookAuthor = string | null;
type BookPublicationYear = number | null;

type Book = {
    bookTitle: BookTitle,
    bookAuthor: BookAuthor,
    bookPublicationYear: BookPublicationYear,
}

function promptForBook(): Book {
    // TODO: Prompt user for book details (title, author, publication year)
    const bookTitle = prompt('Enter Book Title: ') || "Unknown";
    const bookAuthor = prompt('Enter Book Author: ') || "Unknown";
    let bookPublicationYearS = prompt('Enter Book Publication Year: ');
    
    let bookPublicationYear: BookPublicationYear;
    if (bookPublicationYearS === null) {
        bookPublicationYear = null;
    } else {
        bookPublicationYear = parseInt(bookPublicationYearS, 10);
        if (isNaN(bookPublicationYear)) {
            bookPublicationYear = null;
        }
    }

    // TODO: Create an object of type 'Book' with the entered values
    const book: Book = {
        bookTitle,
        bookAuthor,
        bookPublicationYear
    };

    return book;
}

  
  // TODO: Call the promptForBook function to get the book details
  const bookDetails = promptForBook();
  
  // TODO: Display the details of the book object to the user
  console.log("Book Details:");
  console.log(`Title: ${bookDetails.bookTitle}`);
  console.log(`Author: ${bookDetails.bookAuthor}`);
  console.log(`Publication Year: ${bookDetails.bookPublicationYear}`);
  