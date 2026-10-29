// Import the product classes, tax calculator, and API service.
import { Product } from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";
import { fetchAllProducts, fetchProductById } from "./services/apiService";

// Runs the whole app
async function main(): Promise<void> {
    const productList = await fetchAllProducts();

    // Use asynchronous functions to fetch product data and display it.
    for (const data of productList.slice(0, 5)) {
        // Create instances of Product by fetching product data from the API.
        const product = new Product(data);
        product.displayDetails();

        // OOP (encapsulation): the product calculates its own sale price
        const salePrice = product.getPriceWithDiscount();
        const tax = calculateTax(salePrice, product.category);

        console.log("Sale price: $" + salePrice);
        console.log("Tax: $" + tax);
        console.log("");
    }

    // Add grocery item to display the difference in tax
    // Checked DummyJSON for a grocery item number (16)
    const groceryData = await fetchProductById(16);
    if (groceryData !== null) {
        const grocery = new Product(groceryData);
        grocery.displayDetails();
        console.log("Sale price: $" + grocery.getPriceWithDiscount());
        console.log("Tax (groceries 3%): $" + calculateTax(grocery.getPriceWithDiscount(), grocery.category));
        console.log("");
    }

    // Demonstrate error handling: ask for a product that doesn't exist
    console.log("Testing error handling...");
    const missingProduct = await fetchProductById(99999);

    if (missingProduct === null) {
        console.log("No product found.");
    }
}

// Start the app
main();
