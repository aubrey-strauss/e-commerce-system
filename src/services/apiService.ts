import { ProductData } from "../models/Product";
import { ApiError, handleError } from "../utils/errorHandler";

// Web address for DummyJSON's products
const baseUrl = "https://dummyjson.com/products";

// Fetches full list of products from API 
export async function fetchAllProducts(): Promise<ProductData[]> {
    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new ApiError("Could not load products.");
        }

        const data = await response.json();
        return data.products;
    } catch (error) {
        handleError(error);
        return [];
    }
}

// Fetches one product by its id number
// Returns the product, or null ("nothing") if something goes wrong.
export async function fetchProductById(id: number): Promise<ProductData | null> {
    try {
        const response = await fetch(baseUrl + "/" + id);

        if (!response.ok) {
            throw new ApiError("Could not find product " + id + ".");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        handleError(error);
        return null;
    }
}
}


