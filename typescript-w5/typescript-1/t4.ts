// TODO Define the 'ElectronicDevice' interface (or type)
 type ElectronicDevice = {
    type: 'electronic',
    brand: edBrand,
    model: edModel
};
// Define the 'Book' interface (or type)
type Book1 = {
    type: 'book',
    title: bTitle,
    author: bAuthor
}

type edBrand = string;
type edModel = string;
type bTitle = string;
type bAuthor = string;

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book1;


// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
    // TODO: Prompt user for electronic device details (brand and model)
    const brandP = prompt('Enter device brand. ') || 'Unknown';
    const modelP = prompt('Enter device model. ') || 'Unknown';
    const electronicDevice: ElectronicDevice = {
        type: 'electronic',
        brand: brandP,
        model: modelP
    }
    return electronicDevice
  }
  
  function createBook(): Book1 {
    // TODO: Prompt user for book details (title and author)
    const titleB = prompt('Enter book title. ') || 'Unknown';
    const authorB = prompt('Enter book author. ') || 'Unknown';
    const book: Book1 = {
        type: 'book',
        title: titleB,
        author: authorB
    }
    return book
  }
  
  // Create instances of 'Product'
  const electronicProduct = createElectronicDevice();
  const bookProduct = createBook();
  
  // Display the details of each product
  function displayProductDetails(product: Product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
      console.log(`Brand: ${product.brand}`);
      console.log(`Model: ${product.model}`);
    } else {
      console.log(`Title: ${product.title}`);
      console.log(`Author: ${product.author}`);
    }
  }
  
  console.log('Electronic Device Details:');
  displayProductDetails(electronicProduct);
  
  console.log();
  
  console.log('Book Details:');
  displayProductDetails(bookProduct);