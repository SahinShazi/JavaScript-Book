# Shopping Cart System - Complete Guide

---

## Project Overview

এটা একটা simple shopping cart system যেখানে:
- Products থেকে cart এ add করা যায়
- Cart দেখা যায়
- Order place করা যায়

---

## Initial Data

### Products এবং Cart Setup

```javascript
let products = [
  { id: 1, name: "Smartphone", price: 200, stock: 10 },
  { id: 2, name: "Laptop", price: 800, stock: 5 }
];

let cart = [];
let orders = [];
```

**ব্যাখ্যা:**

- **products array:** সব available products এর list
  - প্রতিটা product এ `id`, `name`, `price`, এবং `stock` আছে
- **cart array:** User যা cart এ add করবে সেগুলো এখানে থাকবে
- **orders array:** User order করলে সেগুলো এখানে save হবে

**Initial State:**
```
Products:
  - Smartphone: $200, Stock: 10
  - Laptop: $800, Stock: 5

Cart: Empty []
Orders: Empty []
```

---

## Task 1: Add to Cart Function

### Function Code

```javascript
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);

  if (!product) {
    return "Product not found.";
  }

  if (product.stock < quantity) {
    return "Not enough stock.";
  }

  // stock কমানো
  product.stock -= quantity;

  // cart item বানানো
  const cartItem = {
    productId: product.id,
    quantity: quantity,
    price: product.price
  };

  cart.push(cartItem);

  return `${product.name} added to cart. Quantity: ${quantity}`;
}
```

### Step by Step ব্যাখ্যা

#### Step 1: Product খুঁজে বের করা

```javascript
const product = products.find(p => p.id === productId);
```

**কিভাবে কাজ করে:**
- `products.find()` array তে search করে
- `p => p.id === productId` - যে product এর id match করে সেটা return করে
- যদি না পায় তাহলে `undefined` return করে

**Example:**
```javascript
addToCart(1, 2);  // productId = 1

// products.find() চলছে:
// p = {id: 1, name: "Smartphone", ...}
// p.id === 1? YES! → এই product টা return হবে
```

#### Step 2: Product Validation

```javascript
if (!product) {
  return "Product not found.";
}
```

**কিভাবে কাজ করে:**
- যদি product না পাওয়া যায় (undefined), error message return করে
- Function execution এখানেই শেষ হয়ে যায়

**Example:**
```javascript
addToCart(999, 1);  // ID 999 exist করে না

// product = undefined
// !product = true
// Return: "Product not found."
```

#### Step 3: Stock Validation

```javascript
if (product.stock < quantity) {
  return "Not enough stock.";
}
```

**কিভাবে কাজ করে:**
- Product এর stock check করে
- যদি চাওয়া quantity stock এর থেকে বেশি হয়, error message return করে

**Example:**
```javascript
// Smartphone stock: 10
addToCart(1, 15);  // 15 চাইছে কিন্তু stock আছে 10

// product.stock (10) < quantity (15)? YES
// Return: "Not enough stock."
```

#### Step 4: Stock কমানো

```javascript
product.stock -= quantity;
```

**কিভাবে কাজ করে:**
- Product এর stock থেকে quantity বিয়োগ করে
- `product.stock -= quantity` মানে `product.stock = product.stock - quantity`

**Example:**
```javascript
// Before:
// Smartphone stock: 10

addToCart(1, 2);  // 2 টা কিনছে

// product.stock -= 2
// 10 - 2 = 8

// After:
// Smartphone stock: 8
```

#### Step 5: Cart Item তৈরি করা

```javascript
const cartItem = {
  productId: product.id,
  quantity: quantity,
  price: product.price
};
```

**কিভাবে কাজ করে:**
- একটা new object create করে
- এতে product এর id, quantity, এবং price থাকে

**Example:**
```javascript
addToCart(1, 2);

// cartItem = {
//   productId: 1,
//   quantity: 2,
//   price: 200
// }
```

#### Step 6: Cart এ Add করা

```javascript
cart.push(cartItem);
```

**কিভাবে কাজ করে:**
- `push()` method দিয়ে cart array তে নতুন item add হয়

**Example:**
```javascript
// Before:
// cart = []

addToCart(1, 2);

// After:
// cart = [
//   { productId: 1, quantity: 2, price: 200 }
// ]
```

#### Step 7: Success Message

```javascript
return `${product.name} added to cart. Quantity: ${quantity}`;
```

**কিভাবে কাজ করে:**
- Template literal দিয়ে dynamic message তৈরি করে
- Product এর name এবং quantity show করে

**Example:**
```javascript
addToCart(1, 2);

// Return: "Smartphone added to cart. Quantity: 2"
```

### Complete Flow Example

```javascript
// Initial State:
products = [
  { id: 1, name: "Smartphone", price: 200, stock: 10 }
];
cart = [];

// Call:
addToCart(1, 2);

// Step 1: Find product → Found {id: 1, name: "Smartphone", ...}
// Step 2: Check if exists → Yes
// Step 3: Check stock (10 >= 2) → Yes, enough stock
// Step 4: Update stock → 10 - 2 = 8
// Step 5: Create cart item → {productId: 1, quantity: 2, price: 200}
// Step 6: Add to cart → cart = [{productId: 1, quantity: 2, price: 200}]
// Step 7: Return message → "Smartphone added to cart. Quantity: 2"

// Final State:
products = [
  { id: 1, name: "Smartphone", price: 200, stock: 8 }
];
cart = [
  { productId: 1, quantity: 2, price: 200 }
];
```

---

## Task 2: View Cart Function

### Function Code

```javascript
function viewCart() {
  if (cart.length === 0) {
    console.log("Cart is empty.");
    return;
  }

  cart.forEach(item => {
    console.log(item);
  });
}
```

### Step by Step ব্যাখ্যা

#### Step 1: Empty Cart Check

```javascript
if (cart.length === 0) {
  console.log("Cart is empty.");
  return;
}
```

**কিভাবে কাজ করে:**
- `cart.length` দিয়ে cart এ কয়টা item আছে check করে
- যদি 0 হয় (empty), message show করে এবং function শেষ

**Example:**
```javascript
cart = [];
viewCart();

// cart.length = 0
// Output: "Cart is empty."
// Function ends
```

#### Step 2: Display Cart Items

```javascript
cart.forEach(item => {
  console.log(item);
});
```

**কিভাবে কাজ করে:**
- `forEach()` loop দিয়ে cart এর প্রতিটা item iterate করে
- প্রতিটা item console এ print করে

**Example:**
```javascript
cart = [
  { productId: 1, quantity: 2, price: 200 },
  { productId: 2, quantity: 1, price: 800 }
];

viewCart();

// Output:
// { productId: 1, quantity: 2, price: 200 }
// { productId: 2, quantity: 1, price: 800 }
```

### Complete Flow Example

```javascript
// Scenario 1: Empty Cart
cart = [];
viewCart();
// Output: "Cart is empty."

// Scenario 2: Cart with Items
cart = [
  { productId: 1, quantity: 2, price: 200 }
];
viewCart();
// Output: { productId: 1, quantity: 2, price: 200 }
```

---

## Task 3: Place Order Function

### Function Code

```javascript
function placeOrder() {
  if (cart.length === 0) {
    return "Your cart is empty.";
  }

  let totalPrice = 0;

  for (let item of cart) {
    totalPrice += item.quantity * item.price;
  }

  const order = {
    totalPrice: totalPrice
  };

  orders.push(order);

  // cart খালি করা
  cart.length = 0;

  return "Order placed.";
}
```

### Step by Step ব্যাখ্যা

#### Step 1: Empty Cart Check

```javascript
if (cart.length === 0) {
  return "Your cart is empty.";
}
```

**কিভাবে কাজ করে:**
- Cart empty কিনা check করে
- Empty হলে order করা যাবে না, error message return করে

**Example:**
```javascript
cart = [];
placeOrder();

// Return: "Your cart is empty."
```

#### Step 2: Total Price Calculate করা

```javascript
let totalPrice = 0;

for (let item of cart) {
  totalPrice += item.quantity * item.price;
}
```

**কিভাবে কাজ করে:**
- `totalPrice` variable 0 দিয়ে শুরু
- `for...of` loop দিয়ে cart এর প্রতিটা item iterate করে
- প্রতিটা item এর `quantity * price` calculate করে total এ যোগ করে

**Example:**
```javascript
cart = [
  { productId: 1, quantity: 2, price: 200 },  // 2 * 200 = 400
  { productId: 2, quantity: 1, price: 800 }   // 1 * 800 = 800
];

// Iteration 1:
// item = {productId: 1, quantity: 2, price: 200}
// totalPrice += 2 * 200
// totalPrice = 0 + 400 = 400

// Iteration 2:
// item = {productId: 2, quantity: 1, price: 800}
// totalPrice += 1 * 800
// totalPrice = 400 + 800 = 1200

// Final: totalPrice = 1200
```

#### Step 3: Order Object তৈরি করা

```javascript
const order = {
  totalPrice: totalPrice
};
```

**কিভাবে কাজ করে:**
- একটা new order object create করে
- এতে total price store করে

**Example:**
```javascript
// totalPrice = 1200

const order = {
  totalPrice: 1200
};
```

#### Step 4: Orders Array তে Add করা

```javascript
orders.push(order);
```

**কিভাবে কাজ করে:**
- `push()` দিয়ে orders array তে নতুন order add করে

**Example:**
```javascript
// Before:
// orders = []

orders.push({ totalPrice: 1200 });

// After:
// orders = [
//   { totalPrice: 1200 }
// ]
```

#### Step 5: Cart খালি করা

```javascript
cart.length = 0;
```

**কিভাবে কাজ করে:**
- Array এর length 0 করে দিলে array empty হয়ে যায়
- Order complete হয়ে গেছে তাই cart এখন empty

**Example:**
```javascript
// Before:
// cart = [
//   { productId: 1, quantity: 2, price: 200 },
//   { productId: 2, quantity: 1, price: 800 }
// ]

cart.length = 0;

// After:
// cart = []
```

#### Step 6: Success Message

```javascript
return "Order placed.";
```

**কিভাবে কাজ করে:**
- Success message return করে

### Complete Flow Example

```javascript
// Initial State:
cart = [
  { productId: 1, quantity: 2, price: 200 },
  { productId: 2, quantity: 1, price: 800 }
];
orders = [];

// Call:
placeOrder();

// Step 1: Check if cart empty → No, cart has 2 items
// Step 2: Calculate total
//   - Item 1: 2 * 200 = 400
//   - Item 2: 1 * 800 = 800
//   - Total: 1200
// Step 3: Create order → {totalPrice: 1200}
// Step 4: Add to orders → orders = [{totalPrice: 1200}]
// Step 5: Empty cart → cart = []
// Step 6: Return → "Order placed."

// Final State:
cart = [];
orders = [
  { totalPrice: 1200 }
];
```

---

## Complete Example Call

### Full Code Execution

```javascript
// Initial State
let products = [
  { id: 1, name: "Smartphone", price: 200, stock: 10 },
  { id: 2, name: "Laptop", price: 800, stock: 5 }
];

let cart = [];
let orders = [];

// Add products to cart
addToCart(1, 2);
addToCart(2, 1);

// View cart
viewCart();

// Place order
placeOrder();

// View orders
console.log(orders);
```

### Execution Step by Step

#### Step 1: addToCart(1, 2)

```javascript
addToCart(1, 2);  // Smartphone, quantity 2

// Process:
// - Find product: {id: 1, name: "Smartphone", price: 200, stock: 10}
// - Check stock: 10 >= 2 ✅
// - Update stock: 10 - 2 = 8
// - Add to cart: {productId: 1, quantity: 2, price: 200}

// Output: "Smartphone added to cart. Quantity: 2"
```

**After Step 1:**
```javascript
products = [
  { id: 1, name: "Smartphone", price: 200, stock: 8 },  // stock updated
  { id: 2, name: "Laptop", price: 800, stock: 5 }
];

cart = [
  { productId: 1, quantity: 2, price: 200 }
];
```

#### Step 2: addToCart(2, 1)

```javascript
addToCart(2, 1);  // Laptop, quantity 1

// Process:
// - Find product: {id: 2, name: "Laptop", price: 800, stock: 5}
// - Check stock: 5 >= 1 ✅
// - Update stock: 5 - 1 = 4
// - Add to cart: {productId: 2, quantity: 1, price: 800}

// Output: "Laptop added to cart. Quantity: 1"
```

**After Step 2:**
```javascript
products = [
  { id: 1, name: "Smartphone", price: 200, stock: 8 },
  { id: 2, name: "Laptop", price: 800, stock: 4 }  // stock updated
];

cart = [
  { productId: 1, quantity: 2, price: 200 },
  { productId: 2, quantity: 1, price: 800 }
];
```

#### Step 3: viewCart()

```javascript
viewCart();

// Process:
// - Check if empty: No (2 items)
// - forEach item → console.log(item)

// Output:
// { productId: 1, quantity: 2, price: 200 }
// { productId: 2, quantity: 1, price: 800 }
```

#### Step 4: placeOrder()

```javascript
placeOrder();

// Process:
// - Check if cart empty: No
// - Calculate total:
//   → Item 1: 2 * 200 = 400
//   → Item 2: 1 * 800 = 800
//   → Total: 1200
// - Create order: {totalPrice: 1200}
// - Add to orders
// - Empty cart

// Output: "Order placed."
```

**After Step 4:**
```javascript
cart = [];  // Empty

orders = [
  { totalPrice: 1200 }
];
```

#### Step 5: console.log(orders)

```javascript
console.log(orders);

// Output:
// [
//   { totalPrice: 1200 }
// ]
```

### Complete Console Output

```
Smartphone added to cart. Quantity: 2
Laptop added to cart. Quantity: 1
{ productId: 1, quantity: 2, price: 200 }
{ productId: 2, quantity: 1, price: 800 }
Order placed.
[
  { totalPrice: 1200 }
]
```

### Final State

```javascript
products = [
  { id: 1, name: "Smartphone", price: 200, stock: 8 },   // 10 → 8
  { id: 2, name: "Laptop", price: 800, stock: 4 }        // 5 → 4
];

cart = [];  // Empty after order

orders = [
  { totalPrice: 1200 }  // 400 + 800
];
```

---

## Visual Summary

### Before Any Action
```
Products:
├─ Smartphone: $200, Stock: 10
└─ Laptop: $800, Stock: 5

Cart: []
Orders: []
```

### After addToCart(1, 2)
```
Products:
├─ Smartphone: $200, Stock: 8 ← (10 - 2)
└─ Laptop: $800, Stock: 5

Cart: 
└─ Smartphone x2 = $400

Orders: []
```

### After addToCart(2, 1)
```
Products:
├─ Smartphone: $200, Stock: 8
└─ Laptop: $800, Stock: 4 ← (5 - 1)

Cart: 
├─ Smartphone x2 = $400
└─ Laptop x1 = $800

Orders: []
```

### After placeOrder()
```
Products:
├─ Smartphone: $200, Stock: 8
└─ Laptop: $800, Stock: 4

Cart: [] ← Empty

Orders:
└─ Order #1: $1200 (400 + 800)
```

---

## Key Points

✅ **addToCart()** - Product cart এ add করে এবং stock কমায়  
✅ **products.find()** - Specific product খুঁজে বের করে  
✅ **Validation** - Product exists কিনা এবং stock আছে কিনা check করে  
✅ **product.stock -= quantity** - Stock থেকে quantity বিয়োগ করে  
✅ **cart.push()** - Cart array তে নতুন item add করে  
✅ **viewCart()** - Cart এর সব items display করে  
✅ **forEach()** - Array এর প্রতিটা element iterate করে  
✅ **placeOrder()** - Total calculate করে, order create করে এবং cart empty করে  
✅ **for...of loop** - Cart items iterate করে total price calculate করতে  
✅ **cart.length = 0** - Array খালি করার সহজ উপায়  

এই shopping cart system practice করো - array methods এবং object manipulation এর perfect example! 🛒🚀