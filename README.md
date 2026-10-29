# E-commerce Product Management System

A TypeScript command-line app that fetches products from the DummyJSON API, calculates each product's discount and sales tax, and prints a price breakdown in the terminal.

Built for the Per Scholas SBA: TypeScript and Advanced JavaScript.

## Features

- Fetches product data from the [DummyJSON Products API](https://dummyjson.com/docs/products) using `async`/`await`
- `Product` class with `displayDetails()` and `getPriceWithDiscount()` methods
- Discount calculator that returns the dollar amount taken off
- Tax calculator: 4.75% standard rate, 3% for groceries
- Custom `ApiError` class and a `handleError()` function so errors are handled without crashing

## How to run it

1. Install the dependencies:
   ```
   npm install
   ```
2. Compile the TypeScript into JavaScript:
   ```
   npx tsc
   ```
3. Run the app:
   ```
   node dist/index.js
   ```

## Project structure

```
src/
├── models/
│   └── Product.ts            # Product class and ProductData interface
├── services/
│   └── apiService.ts         # Fetches products from the API
├── utils/
│   ├── discountCalculator.ts # Returns the discount in dollars
│   ├── errorHandler.ts       # Custom ApiError class and handleError()
│   └── taxCalculator.ts      # Returns the tax in dollars
└── index.ts                  # Runs the app
```

## What it shows

- The first 5 products with their price, discount, sale price, and tax
- One grocery product, to show the lower 3% tax rate
- A request for a product that doesn't exist (#99999), to show the error handling working

## Technologies

TypeScript, Node.js, DummyJSON API