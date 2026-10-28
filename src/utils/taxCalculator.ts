//  Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3% (coverted to decimals)
const standardTaxRate = 0.0475;
const groceryTaxRate = 0.03;

//Create a calculateTax() function to handle tax calculations for products.
export function calculateTax(price: number, category: string): number {
    let rate: number;

// Products with a category of “groceries” should only be taxed at 3%.
    if (category === "groceries") {
        rate = groceryTaxRate;
    } else {
        rate = standardTaxRate;
    }

const tax = price * rate;
return Math.round(tax *100) / 100;
}


