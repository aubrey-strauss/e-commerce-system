import { calculateDiscount } from "../utils/discountCalculator";

// Describes raw data coming from API
export interface ProductData {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    stock: number;
}

// Blueprint for one product in the store
export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    stock: number;

    // Code that runs when a new product is created
    constructor(data: ProductData) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.stock = data.stock;
    }

    // Prints this product's details to the terminal
    displayDetails(): void {
        console.log(`Product #${this.id}: ${this.title}`);
        console.log(`Category: ${this.category}`);
        console.log(`Description: ${this.description}`);
        console.log(`Price: $${this.price}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`In stock: ${this.stock}`);
    }
    // Returns the price after the discount is taken off
    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return Math.round((this.price - discountAmount) * 100) / 100;
    }

}