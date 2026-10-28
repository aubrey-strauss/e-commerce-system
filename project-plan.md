# Project Plan: E-commerce Product Management System

## What the app does

This application automatically fetches product data from an online API and uses TypeScript to organize it and calculate exact discount amounts. It then figures out the correct sales tax— applying a lower rate specifically for groceries—and displays a price breakdown in the terminal while handling any errors.

## API research

**API:** DummyJSON Products API
- All products: https://dummyjson.com/products
- One product: https://dummyjson.com/products/1

The list comes back as an object with the products inside a `products` array.

## Fields I'll use from each product:

 Field, type, why it's needed:

- `id`, number, track and manage each item
- `title`, string, name of item used when displaying product details
- `description`, string, describes what the item is for
- `category`, string, checking the item to see what tax rate to apply
- `price`, number, price of items, needed to calculate discount
- `discountPercentage`, number, used to calculate total savings
- `stock`, number, shows available quantity to know if it is sold out or not

## What each file does

- `src/models/Product.ts` — primary class that takes API data, sets properties
- `src/utils/discountCalculator.ts` — takes the original price and applies discount
- `src/utils/taxCalculator.ts` — determines two sales tax rates
- `src/utils/errorHandler.ts` — has error class that intercepts problems
- `src/services/apiService.ts` — pulls product listings from the public API URL
- `src/index.ts` — coordinates everything

## Build order

1. taxCalculator.ts (needs nothing)
2. discountCalculator.ts (needs nothing)
3. errorHandler.ts (needs nothing)
4. Product.ts (needs discountCalculator)
5. apiService.ts (needs errorHandler)
6. index.ts (needs apiService, Product, taxCalculator)
7. Compile with `npx tsc`, run with `node dist/index.js`, and fix any errors.
8. Write the README and reflection.

## How I'll handle errors

- Create custom error rules
