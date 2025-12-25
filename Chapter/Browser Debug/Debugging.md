# Debugging - Complete Guide

---

## Debugging কি?

**Bug (বাগ)** = Code এর মধ্যে সমস্যা বা error  
**Debugging (ডিবাগিং)** = Bug খুঁজে বের করে সেটা fix করা

প্রতিটা developer এর code এ bug থাকে। Professional developer হতে হলে debugging জানা অবশ্যই দরকার।

---

## 1. console.log() দিয়ে Debugging

### console.log() কি?

সবচেয়ে সহজ এবং common debugging method। Code এর বিভিন্ন জায়গায় `console.log()` বসিয়ে variable এর value check করা।

### Example 1: Basic Debugging

**Problem Code:**
```javascript
function multiply(x, y) {
    const result = x + y;  // ভুল: + দিয়ে গুণ হয় না!
    return result;
}

console.log(multiply(5, 2));  // Output: 7 (ভুল! 10 হওয়ার কথা)
```

**Debugging with console.log:**
```javascript
function multiply(x, y) {
    console.log("X:", x);           // Check: x এর value কত?
    console.log("Y:", y);           // Check: y এর value কত?
    const result = x + y;
    console.log("Result:", result); // Check: result কত হচ্ছে?
    return result;
}

multiply(5, 2);
```

**Console Output:**
```
X: 5
Y: 2
Result: 7  ← এখানে problem! 7 আসা উচিত না
```

**সমস্যা খুঁজে পাওয়া:**
- X এবং Y ঠিক আছে (5 এবং 2)
- কিন্তু result 7 হচ্ছে (5 + 2)
- বুঝা যাচ্ছে `+` operator ব্যবহার করা হয়েছে `*` এর বদলে

**Fixed Code:**
```javascript
function multiply(x, y) {
    console.log("X:", x);
    console.log("Y:", y);
    const result = x * y;  // ✅ Fix: * দিয়ে গুণ করা হলো
    console.log("Result:", result);
    return result;
}

multiply(5, 2);
```

**Console Output (Fixed):**
```
X: 5
Y: 2
Result: 10  ✅ Correct!
```

### Example 2: Array Debugging

**Problem Code:**
```javascript
function getTotal(prices) {
    let total = 0;
    for (let i = 0; i <= prices.length; i++) {  // Bug আছে!
        total += prices[i];
    }
    return total;
}

let prices = [100, 200, 300];
console.log(getTotal(prices));  // Output: NaN (ভুল!)
```

**Debugging with console.log:**
```javascript
function getTotal(prices) {
    let total = 0;
    console.log("Prices array:", prices);
    console.log("Array length:", prices.length);
    
    for (let i = 0; i <= prices.length; i++) {
        console.log("Index:", i);
        console.log("Price at index:", prices[i]);
        total += prices[i];
        console.log("Total so far:", total);
    }
    return total;
}

let prices = [100, 200, 300];
getTotal(prices);
```

**Console Output:**
```
Prices array: [100, 200, 300]
Array length: 3
Index: 0
Price at index: 100
Total so far: 100
Index: 1
Price at index: 200
Total so far: 300
Index: 2
Price at index: 300
Total so far: 600
Index: 3
Price at index: undefined  ← Problem!
Total so far: NaN
```

**সমস্যা খুঁজে পাওয়া:**
- Index 3 এ গিয়ে `undefined` পাচ্ছে
- কারণ: `i <= prices.length` (0, 1, 2, 3 পর্যন্ত যাচ্ছে)
- কিন্তু array এ শুধু 0, 1, 2 index আছে

**Fixed Code:**
```javascript
function getTotal(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {  // ✅ Fix: <= এর বদলে <
        total += prices[i];
    }
    return total;
}

let prices = [100, 200, 300];
console.log(getTotal(prices));  // Output: 600 ✅
```

---

## 2. Breakpoint দিয়ে Debugging

### Breakpoint কি?

Breakpoint হলো code execution থামানোর একটা point। Code চলতে চলতে একটা specific line এ গিয়ে থেমে যায়, তখন সব variable এর value check করা যায়।

### Example: Breakpoint Set করা

**Code:**
```javascript
function calculateDiscount(price, discountPercent) {
    let discount = price * discountPercent / 100;
    let finalPrice = price - discount;
    return finalPrice;
}

let result = calculateDiscount(1000, 20);
console.log(result);
```

**Breakpoint সেট করার Steps:**

1. **Browser DevTools খোলো:** F12 বা Right Click → Inspect
2. **Sources Tab এ যাও**
3. **JavaScript file খোলো**
4. **Line number এ click করো** (যেমন: line 2 - discount calculation এর line)
5. **Blue dot দেখা যাবে** - এটা breakpoint

**Code Execute করো:**
1. Page reload করো বা function call করো
2. Code line 2 এ এসে থেমে যাবে
3. **Scope panel এ** সব variable দেখা যাবে:

```
Scope Variables:
price: 1000
discountPercent: 20
discount: (not yet calculated)
finalPrice: (not yet calculated)
```

4. **Step Over button (⤵)** click করো
5. একটা একটা করে line execute হবে এবং variable update হবে:

```
After Step 1:
discount: 200

After Step 2:
finalPrice: 800
```

**Before Breakpoint:**
```
Code চলছে কিন্তু কিছু দেখা যাচ্ছে না
```

**After Breakpoint:**
```
Code থেমে গেছে
সব variable এর value দেখা যাচ্ছে
Step by step execute করা যাচ্ছে
```

---

## 3. debugger Statement

### debugger কি?

`debugger` keyword code এ লিখে দিলে browser automatically সেই line এ breakpoint set করে দেয়।

### Example 1: Basic debugger

**Code:**
```javascript
function divide(a, b) {
    debugger;  // এখানে code থেমে যাবে
    
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    
    let result = a / b;
    return result;
}

console.log(divide(10, 2));
```

**কিভাবে কাজ করে:**

1. Code চলতে চলতে `debugger` line এ এসে থেমে যাবে
2. DevTools automatically খুলে যাবে
3. Variable values check করতে পারবে:
```
Scope:
a: 10
b: 2
result: (not yet calculated)
```
4. Step by step execute করতে পারবে

### Example 2: Conditional debugger

**Code:**
```javascript
function processNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            debugger;  // শুধু negative number পেলে থামবে
        }
        console.log(numbers[i] * 2);
    }
}

processNumbers([5, 10, -3, 20]);
```

**কিভাবে কাজ করে:**

1. 5 → Output: 10 (no stop)
2. 10 → Output: 20 (no stop)
3. -3 → **Code থেমে যাবে** (negative number পেয়েছে)
4. Variable check করতে পারবে:
```
i: 2
numbers[i]: -3
```

**Before debugger line:**
```
Code normally চলছে
```

**At debugger line:**
```
Code stop হয়ে গেছে
DevTools খুলে গেছে
Variables inspect করা যাচ্ছে
```

---

## 4. Call Stack

### Call Stack কি?

Call Stack দেখায় কোন function কোথা থেকে call হয়েছে। Function call এর পুরো chain দেখা যায়।

### Example: Call Stack দেখা

**Code:**
```javascript
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    debugger;  // এখানে থামবে
    console.log("Third function");
}

first();
```

**Call Stack (DevTools এ):**
```
Call Stack:
  third()         ← Currently here
  second()        ← Called by second
  first()         ← Called by first
  (anonymous)     ← Global scope
```

**কিভাবে কাজ করে:**

1. `first()` call হয়েছে
2. `first()` এর ভিতর থেকে `second()` call হয়েছে
3. `second()` এর ভিতর থেকে `third()` call হয়েছে
4. `third()` এ debugger পেয়ে code থেমে গেছে
5. Call Stack দেখে বোঝা যাচ্ছে function call এর পুরো path

### Example 2: Nested Function Calls

**Code:**
```javascript
function calculateTotal(price, quantity) {
    let subtotal = calculateSubtotal(price, quantity);
    let tax = calculateTax(subtotal);
    debugger;  // এখানে Call Stack দেখো
    return subtotal + tax;
}

function calculateSubtotal(price, quantity) {
    return price * quantity;
}

function calculateTax(amount) {
    return amount * 0.1;
}

calculateTotal(100, 5);
```

**Call Stack:**
```
calculateTotal(price: 100, quantity: 5)
  ↓ called
calculateSubtotal(price: 100, quantity: 5) → returned 500
  ↓ then called
calculateTax(amount: 500) → returned 50
  ↓ back to
calculateTotal (debugger line)
```

**Variables at debugger:**
```
subtotal: 500
tax: 50
price: 100
quantity: 5
```

---

## 5. Error Messages পড়া

### Common Error Types

### Error 1: ReferenceError

**Code:**
```javascript
function greet() {
    console.log(username);  // username declare করা হয়নি!
}

greet();
```

**Error Message:**
```
❌ Uncaught ReferenceError: username is not defined
    at greet (script.js:2)
```

**Error বুঝা:**
- `ReferenceError` = Variable exist করে না
- `username is not defined` = username variable declare করা হয়নি
- `at greet (script.js:2)` = greet function এর line 2 তে error

**Fix:**
```javascript
function greet() {
    let username = "Alice";  // ✅ Variable declare করা হলো
    console.log(username);
}

greet();
```

### Error 2: TypeError

**Code:**
```javascript
let user = null;
console.log(user.name);  // null এর property access করা যায় না!
```

**Error Message:**
```
❌ Uncaught TypeError: Cannot read property 'name' of null
    at <anonymous>:2
```

**Error বুঝা:**
- `TypeError` = Wrong type operation করা হয়েছে
- `Cannot read property 'name' of null` = null এর property access করার চেষ্টা

**Fix:**
```javascript
let user = null;
if (user !== null) {  // ✅ Check করা হলো
    console.log(user.name);
} else {
    console.log("User is null");
}
```

### Error 3: SyntaxError

**Code:**
```javascript
function add(a, b {  // ) missing!
    return a + b;
}
```

**Error Message:**
```
❌ Uncaught SyntaxError: Unexpected token '{'
```

**Error বুঝা:**
- `SyntaxError` = Code এর syntax ভুল
- `Unexpected token '{'` = `{` এর আগে `)` missing

**Fix:**
```javascript
function add(a, b) {  // ✅ ) যোগ করা হলো
    return a + b;
}
```

---

## Debugging Process - Step by Step

### Step 1: Error Message পড়া

```javascript
function divide(a, b) {
    return a / b;
}

console.log(divide(10, 0));  // Infinity (ভুল না কিন্তু unexpected)
```

**Error না কিন্তু unexpected behavior**

### Step 2: Problem Isolation করা

**বড় Code:**
```javascript
function processOrder(cart, user, payment) {
    let total = calculateTotal(cart);        // এখানে সমস্যা?
    let discount = applyDiscount(user);      // নাকি এখানে?
    let final = processPayment(payment);     // নাকি এখানে?
    return final;
}
```

**Isolate করা:**
```javascript
// প্রথমে শুধু calculateTotal test করো
let cart = [100, 200, 300];
console.log(calculateTotal(cart));

// তারপর applyDiscount
console.log(applyDiscount(user));

// এভাবে একটা একটা করে
```

### Step 3: Small Parts এ Test করা

**Original Code:**
```javascript
function complexCalculation(data) {
    let step1 = data.map(x => x * 2);
    let step2 = step1.filter(x => x > 10);
    let step3 = step2.reduce((a, b) => a + b, 0);
    return step3;
}
```

**Small Parts এ ভাগ করা:**
```javascript
function complexCalculation(data) {
    console.log("Original data:", data);
    
    let step1 = data.map(x => x * 2);
    console.log("After map:", step1);
    
    let step2 = step1.filter(x => x > 10);
    console.log("After filter:", step2);
    
    let step3 = step2.reduce((a, b) => a + b, 0);
    console.log("After reduce:", step3);
    
    return step3;
}

complexCalculation([2, 5, 8, 12]);
```

**Console Output:**
```
Original data: [2, 5, 8, 12]
After map: [4, 10, 16, 24]
After filter: [16, 24]
After reduce: 40
```

### Step 4: Tools ব্যবহার করা

**DevTools + Breakpoint + debugger:**
```javascript
function findUser(users, id) {
    debugger;  // Tool 1: debugger
    
    for (let i = 0; i < users.length; i++) {
        console.log("Checking user:", users[i]);  // Tool 2: console.log
        
        if (users[i].id === id) {
            return users[i];
        }
    }
    
    return null;
}
```

### Step 5: Documentation দেখা

**MDN Web Docs বা Official Documentation**

যদি বুঝতে না পারো:
- `Array.filter()` কিভাবে কাজ করে?
- `fetch()` এ কোন parameters লাগে?
- `setTimeout()` এর syntax কি?

Documentation দেখে proper usage জানতে পারবে।

---

## Complete Debugging Example

### Problem: Shopping Cart Total Calculation

**Buggy Code:**
```javascript
function calculateCartTotal(items) {
    let total = 0;
    for (let i = 0; i <= items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return total;
}

let cart = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Pants", price: 800, quantity: 1 }
];

console.log(calculateCartTotal(cart));  // Output: NaN
```

### Debugging Steps:

**Step 1: Add console.log:**
```javascript
function calculateCartTotal(items) {
    console.log("Cart items:", items);
    let total = 0;
    
    for (let i = 0; i <= items.length; i++) {
        console.log("Index:", i);
        console.log("Item:", items[i]);
        console.log("Price:", items[i]?.price);
        console.log("Quantity:", items[i]?.quantity);
        
        total += items[i].price * items[i].quantity;
        console.log("Total so far:", total);
    }
    return total;
}
```

**Console Output:**
```
Cart items: [Object, Object]
Index: 0
Item: {name: "Shirt", price: 500, quantity: 2}
Price: 500
Quantity: 2
Total so far: 1000
Index: 1
Item: {name: "Pants", price: 800, quantity: 1}
Price: 800
Quantity: 1
Total so far: 1800
Index: 2
Item: undefined  ← Problem!
Price: undefined
Quantity: undefined
Total so far: NaN
```

**Problem খুঁজে পাওয়া:** `i <= items.length` হওয়ার কারণে extra iteration হচ্ছে

**Step 2: Fix করা:**
```javascript
function calculateCartTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {  // ✅ Fix
        total += items[i].price * items[i].quantity;
    }
    return total;
}

let cart = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Pants", price: 800, quantity: 1 }
];

console.log(calculateCartTotal(cart));  // Output: 1800 ✅
```

---

## Debugging Checklist

```
✅ Error message পড়ে বুঝেছি কি?
✅ console.log() দিয়ে values check করেছি কি?
✅ Breakpoint বা debugger ব্যবহার করেছি কি?
✅ Call Stack দেখেছি কি?
✅ Code কে small parts এ ভেঙ্গে test করেছি কি?
✅ Variable names সঠিক আছে কি?
✅ Loop condition ঠিক আছে কি?
✅ Array/Object properly access করছি কি?
✅ Function properly call করছি কি?
✅ Documentation check করেছি কি?
```

---

## Key Points

✅ **Bug** - Code এর মধ্যে সমস্যা বা error  
✅ **Debugging** - Bug খুঁজে বের করে fix করা  
✅ **console.log()** - Variable এর value check করার সবচেয়ে সহজ উপায়  
✅ **Breakpoint** - Code execution থামিয়ে step by step debug করা  
✅ **debugger** - Code এ `debugger` keyword লিখে automatic breakpoint set করা  
✅ **Call Stack** - Function call এর পুরো chain দেখা  
✅ **Error Message** - Error type এবং line number থেকে problem বুঝা  
✅ **Problem Isolation** - বড় code কে ছোট parts এ ভেঙ্গে test করা  
✅ **DevTools** - Browser এর Sources tab debugging এর জন্য খুবই powerful  
✅ **Documentation** - বুঝতে না পারলে official docs দেখা  

Debugging practice করো - এটা একজন developer এর most important skill! 🐛 → 🚀