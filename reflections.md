# Reflection: E-commerce Product Management System

## How I used TypeScript and classes

- I added type annotations to my variables, function inputs, and return values (like `price: number` and `category: string`) so TypeScript could catch mistakes before the code ran. 
- I created a `ProductData` interface to describe the shape of the raw data from DummyJSON, and a `Product` class as the blueprint for each product. The constructor is the setup code that runs automatically when I write `new Product(data)`; it copies each field from the API data into `this` product. 
- The class also has methods, `displayDetails()` and `getPriceWithDiscount()`, so the product does its own work. 

## Challenges and how I solved them

- Making a project plan first (a fields table, a file list, and a build order) really helped to keep me on track. 
- The ternary (`? :`) in my tax calculator confused me, so I switched to a regular if/else that is easier for me to read. 
- The rounding line `Math.round(tax * 100) / 100` made sense once I understood it converts to cents, rounds off messy decimals like 4.749999, and converts back to dollars. 
- The backticks and dollar signs in `displayDetails()` also tripped me up until I learned that `$` only fills in a blank when it is followed by `{`. 
- Finally, red squiggles under `import` and `export` turned out to be a settings problem, not my code. Setting `verbatimModuleSyntax` to `false` in `tsconfig.json` and restarting the TS Server fixed it. This step is what confused me the most. 

## Async code and error handling

- My `apiService.ts` functions are `async` and use `await` on both `fetch()` and `response.json()`. Since `fetch` does not throw on a 404, I check `response.ok` and throw my own error. 
- I built a custom `ApiError` class that extends `Error`. 
- The hardest part was `super(message)`: the parent class has to do its standard setup before my class adds its custom name, explained to me like a franchise getting corporate's setup before adding its own touches. 
- My `try/catch` blocks prints a message instead of crashing, and I request a product that doesn't exist on purpose to show it working.
