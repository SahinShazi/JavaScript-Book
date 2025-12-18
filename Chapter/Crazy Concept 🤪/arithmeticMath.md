# JavaScript don't understand math!

---

## Problem: 0.1 + 0.2 কেন 0.3 হয় না?

### দেখো কি হয়:

```javascript
console.log(0.1 + 0.2);  // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false
```

**😱 কি!? Math ভুল?**

---

## কারণ: Floating Point Representation

JavaScript (এবং প্রায় সব programming language) **binary** তে number store করে। কিন্তু কিছু decimal numbers binary তে **exact** represent করা যায় না!

### সহজ উদাহরণ:

Decimal তে `1/3 = 0.33333...` (infinite)  
Binary তেও `0.1` এবং `0.2` infinite!

```
0.1 (decimal) = 0.0001100110011001100... (binary, infinite)
0.2 (decimal) = 0.0011001100110011001... (binary, infinite)
```

Computer memory finite, তাই **round off** করতে হয়।

---

## আরও উদাহরণ:

```javascript
console.log(0.1 + 0.2);           // 0.30000000000000004
console.log(0.3 - 0.1);           // 0.19999999999999998
console.log(0.7 + 0.1);           // 0.7999999999999999
console.log(0.2 + 0.4);           // 0.6000000000000001
console.log(9.7 + 0.3);           // 10.000000000000002

// আরও মজার
console.log(0.1 + 0.1 + 0.1);     // 0.30000000000000004
console.log(0.3 === 0.1 + 0.1 + 0.1);  // false
```

---

## Solution গুলো:

### Solution 1: toFixed() ব্যবহার

```javascript
let result = 0.1 + 0.2;
console.log(result.toFixed(1));  // "0.3" (string)
console.log(Number(result.toFixed(1)));  // 0.3 (number)

// বা
console.log(parseFloat((0.1 + 0.2).toFixed(10)));  // 0.3
```

### Solution 2: Epsilon Comparison

```javascript
function areEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(areEqual(0.1 + 0.2, 0.3));  // true
```

**Number.EPSILON** = সবচেয়ে ছোট difference যা JavaScript detect করতে পারে।

### Solution 3: Multiply করে Integer বানাও

```javascript
// Decimal এড়াতে integer এ convert করো
function add(a, b) {
  return (a * 10 + b * 10) / 10;
}

console.log(add(0.1, 0.2));  // 0.3
```

### Solution 4: Math Libraries

```javascript
// decimal.js, big.js এর মত library
// npm install decimal.js

import Decimal from 'decimal.js';

let a = new Decimal(0.1);
let b = new Decimal(0.2);
console.log(a.plus(b).toString());  // "0.3"
```

---

## Real-World Example: Money Calculation

### ❌ ভুল:

```javascript
let price1 = 10.10;
let price2 = 20.20;
let total = price1 + price2;

console.log(total);  // 30.299999999999997 (Wrong!)
```

### ✅ সঠিক:

```javascript
// Cents এ convert করো (integer)
let price1 = 1010;  // 10.10 dollars = 1010 cents
let price2 = 2020;  // 20.20 dollars = 2020 cents
let total = price1 + price2;

console.log(total / 100);  // 30.3 dollars
```

অথবা:

```javascript
let price1 = 10.10;
let price2 = 20.20;
let total = (price1 * 100 + price2 * 100) / 100;

console.log(total.toFixed(2));  // "30.30"
```

---

## কোন Numbers সমস্যা করে?

### ✅ নিরাপদ (Integer):

```javascript
console.log(1 + 2);      // 3 ✓
console.log(10 - 5);     // 5 ✓
console.log(100 * 2);    // 200 ✓
console.log(0.5 + 0.5);  // 1 ✓ (binary তে exact)
```

### ⚠️ সমস্যা (Floating Point):

```javascript
console.log(0.1 + 0.2);   // 0.30000000000000004 ✗
console.log(0.7 + 0.1);   // 0.7999999999999999 ✗
console.log(0.3 - 0.1);   // 0.19999999999999998 ✗
```

---

## IEEE 754 Standard

সব modern programming languages এই same standard follow করে:

```javascript
// Python
>>> 0.1 + 0.2
0.30000000000000004

// Java
0.1 + 0.2 = 0.30000000000000004

// C++
0.1 + 0.2 = 0.30000000000000004
```

**এটা bug না, এটা computer এর limitation!**

---

## Practical Tips

### 1. Money/Currency এর জন্য:

```javascript
// Cents এ রাখো
const price = 1999;  // $19.99
const display = (price / 100).toFixed(2);  // "19.99"
```

### 2. Comparison এর জন্য:

```javascript
// Direct comparison করো না
if (0.1 + 0.2 === 0.3) { }  // ❌ কাজ করবে না

// Epsilon দিয়ে compare করো
if (Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) { }  // ✅
```

### 3. Display এর জন্য:

```javascript
let num = 0.1 + 0.2;
console.log(num.toFixed(2));  // "0.30"
```

### 4. Calculation এর জন্য:

```javascript
// Integer এ convert করো
function addDecimals(a, b, decimals = 2) {
  const multiplier = Math.pow(10, decimals);
  return (Math.round(a * multiplier) + Math.round(b * multiplier)) / multiplier;
}

console.log(addDecimals(0.1, 0.2));  // 0.3
```

---

## Number.EPSILON কি?

```javascript
console.log(Number.EPSILON);  // 2.220446049250313e-16

// এটা হলো সবচেয়ে ছোট difference
function numbersAreEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(numbersAreEqual(0.1 + 0.2, 0.3));  // true
```

---

## আরও Weird Examples:

```javascript
console.log(0.1 * 0.1);           // 0.010000000000000002
console.log(0.58 * 100);          // 57.99999999999999
console.log(1.0 - 0.9);           // 0.09999999999999998

// Very large numbers
console.log(9999999999999999);    // 10000000000000000 (rounded!)
console.log(99999999999999999);   // 100000000000000000

// Safe integer limit
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
```

---

## Quick Reference

### সমস্যা এড়াতে:

| Situation | Solution |
|-----------|----------|
| Money | Cents এ store করো |
| Display | `.toFixed()` ব্যবহার করো |
| Comparison | Epsilon দিয়ে compare করো |
| Precision needed | Library ব্যবহার করো |
| Simple math | Integer এ convert করো |

---

## মনে রাখার সহজ উপায়

```
Computer মানুষ না, robot!
Robot binary তে চিন্তা করে।
Decimal → Binary = কখনো কখনো infinite
Infinite → Computer = Round off করতে হয়
Round off = Tiny error
Tiny error + Tiny error = 0.30000000000000004
```

**সমাধান:** 
- Integer ব্যবহার করো যখন পারো
- Decimal এর জন্য `.toFixed()` বা library
- Direct comparison না, epsilon দিয়ে compare

---

## Key Points

- 0.1 + 0.2 = 0.30000000000000004 (bug না, computer limitation)
- Binary representation এর সমস্যা
- IEEE 754 standard (সব language এ same)
- Money calculation এ সাবধান
- `.toFixed()` display এর জন্য
- `Number.EPSILON` comparison এর জন্য
- Integer ব্যবহার করো যখন পারো
- Precision দরকার হলে library ব্যবহার করো

**মনে রাখো:** JavaScript bad at math না, সব computer-ই এরকম!