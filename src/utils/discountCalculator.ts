// Return how many dollars the discount takes off of the product price
export function calculateDiscount(price: number, discountPercentage: number): number {

    // discountPercentage comes from API as a percentage so divide by 100 
    const discount = price * (discountPercentage / 100);

    // rounds to cents
    return Math.round(discount * 100) / 100;
}