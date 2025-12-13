# JavaScript Hoisting

---

## Problem 01: let দিয়ে Hoisting

```javascript
comments = 21;
let comments = 20;
```

**Error:**
```
Uncaught ReferenceError: Cannot access 'comments' before initialization
```

**ব্যাখ্যা:**
- `let` hoisting হয়, কিন্তু Temporal Dead Zone (TDZ) এ থাকে
- Declaration এর আগে access করা যায় না
- Initialize না হওয়া পর্যন্ত use করা যাবে না

---

## Problem 02: const দিয়ে Hoisting

```javascript
views = views / 2;
const views = 200000;
```

**Error:**
```
Uncaught ReferenceError: Cannot access 'views' before initialization
```

**ব্যাখ্যা:**
- `const` ও `let` এর মতই TDZ এ থাকে
- Declaration এর আগে কোনোভাবে access করা যায় না
- `const` এর ক্ষেত্রে initialization বাধ্যতামূলক

---

## Problem 03: Temporal Dead Zone (TDZ) কি এবং কেন গুরুত্বপূর্ণ?

### TDZ কি?

**Temporal Dead Zone (TDZ)** হলো সেই সময়কাল যখন একটা variable hoisted হয়েছে কিন্তু এখনও initialized হয়নি। এই সময়ে variable কে access করা যায় না।

### Visual Example:

```javascript
// TDZ শুরু
console.log(name);  // Error! TDZ এ আছে

// TDZ শেষ
let name = "Sahin";  // এখন initialized
console.log(name);   // Sahin - এখন ঠিক আছে
```

### Detailed Example:

```javascript
{
  // TDZ শুরু (block শুরু থেকে)
  console.log(a);  // ReferenceError
  console.log(b);  // ReferenceError
  
  let a = 10;      // TDZ শেষ for 'a'
  const b = 20;    // TDZ শেষ for 'b'
  
  console.log(a);  // 10
  console.log(b);  // 20
}
```

### কেন গুরুত্বপূর্ণ?

1. **Bugs এড়ায়:**
```javascript
// TDZ না থাকলে এরকম bug হতে পারে
let price = 100;

function calculatePrice() {
  console.log(price);  // undefined হতো (confusing)
  let price = 200;
}
```

2. **Clear Error দেয়:**
```javascript
console.log(x);  // ReferenceError (পরিষ্কার error)
let x = 10;
```

3. **Code Quality উন্নত করে:**
- Variable declare করার আগে use করা থেকে বিরত রাখে
- Code আরও predictable হয়

---

## Problem 04: Function Expression এ Hoisting

### কেন Initialization এর আগে Call করা যায় না?

**Function Declaration:**
```javascript
// কাজ করবে
greet();

function greet() {
  console.log("Hello!");
}
```

**Function Expression:**
```javascript
// Error!
greet();  // TypeError: greet is not a function

var greet = function() {
  console.log("Hello!");
};
```

### কারণ:

Function expression আসলে একটা variable assignment। Hoisting হলে:

```javascript
// JavaScript এটাকে এভাবে দেখে:
var greet;  // hoisted, কিন্তু undefined

greet();    // undefined() call করার চেষ্টা - Error!

greet = function() {
  console.log("Hello!");
};
```

### let/const দিয়ে Function Expression:

```javascript
// Error!
greet();  // ReferenceError: Cannot access 'greet' before initialization

let greet = function() {
  console.log("Hello!");
};
```

এখানে TDZ এর কারণে আরও আগেই error দেয়।

### Arrow Function ও Same:

```javascript
// Error!
greet();

const greet = () => {
  console.log("Hello!");
};
```

---

## Problem 05: var এর Hoisting Behavior

### var কিভাবে Hoisting হয়:

```javascript
console.log(name);  // undefined
var name = "Sahin";
console.log(name);  // Sahin
```

**JavaScript এটাকে এভাবে দেখে:**

```javascript
var name;           // Declaration hoisted
console.log(name);  // undefined
name = "Sahin";     // Assignment থেকে যায়
console.log(name);  // Sahin
```

### বিস্তারিত উদাহরণ:

#### Example 1: Basic Hoisting

```javascript
console.log(age);  // undefined
var age = 25;
console.log(age);  // 25

// Actually:
var age;
console.log(age);  // undefined
age = 25;
console.log(age);  // 25
```

#### Example 2: Function Scope

```javascript
function test() {
  console.log(x);  // undefined
  var x = 10;
  console.log(x);  // 10
}

test();
```

#### Example 3: Re-declaration

```javascript
var name = "Sahin";
var name = "Kamrul";  // কোনো error নেই
console.log(name);    // Kamrul
```

#### Example 4: Loop এ var

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);  // 3, 3, 3
  }, 100);
}

// কারণ: var function-scoped, block-scoped না
```

### var এর সমস্যা:

```javascript
// সমস্যা 1: Accidental Global
function test() {
  x = 10;  // var ভুলে গেলে global হয়ে যায়
}
test();
console.log(x);  // 10

// সমস্যা 2: Re-declaration
var count = 5;
var count = 10;  // কোনো warning নেই

// সমস্যা 3: No Block Scope
if (true) {
  var secret = "password";
}
console.log(secret);  // password (বাইরে access হয়!)
```

---

## Problem 06: let vs var Hoisting Behavior

### না, একই না!

| বৈশিষ্ট্য | var | let |
|---------|-----|-----|
| Hoisting | হয় | হয় |
| Initial Value | undefined | TDZ (No access) |
| Declaration আগে Access | undefined পাবে | ReferenceError |
| Re-declaration | পারবে | পারবে না |
| Scope | Function-scoped | Block-scoped |

### Side by Side Comparison:

#### var:
```javascript
console.log(x);  // undefined
var x = 10;
console.log(x);  // 10
```

#### let:
```javascript
console.log(y);  // ReferenceError
let y = 10;
console.log(y);  // 10
```

### Block Scope পার্থক্য:

#### var (Function Scope):
```javascript
if (true) {
  var name = "Sahin";
}
console.log(name);  // Sahin (বাইরে access হয়)
```

#### let (Block Scope):
```javascript
if (true) {
  let name = "Sahin";
}
console.log(name);  // ReferenceError (বাইরে access হয় না)
```

### Loop এ পার্থক্য:

#### var:
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3
```

#### let:
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2
```

---

## Hoisting সব ক্ষেত্রে

### 1. Variable Hoisting

```javascript
// var
console.log(a);  // undefined
var a = 10;

// let
console.log(b);  // ReferenceError
let b = 20;

// const
console.log(c);  // ReferenceError
const c = 30;
```

### 2. Function Declaration Hoisting

```javascript
// কাজ করবে
greet();

function greet() {
  console.log("Hello!");
}
```

### 3. Function Expression Hoisting

```javascript
// Error
greet();

var greet = function() {
  console.log("Hello!");
};
```

### 4. Class Hoisting

```javascript
// Error
const obj = new MyClass();

class MyClass {
  constructor() {
    this.name = "Test";
  }
}
```

---

## Best Practices

### ✅ করো:

1. **let/const ব্যবহার করো:**
```javascript
let count = 0;
const MAX = 100;
```

2. **Top এ declare করো:**
```javascript
function test() {
  let x = 10;
  let y = 20;
  
  // code...
}
```

3. **Use করার আগে declare করো:**
```javascript
let name = "Sahin";
console.log(name);  // সঠিক
```

### ❌ করো না:

1. **var ব্যবহার:**
```javascript
var x = 10;  // এড়িয়ে চলো
```

2. **Declare আগে use:**
```javascript
console.log(name);  // ভুল
let name = "Sahin";
```

3. **Global variables তৈরি:**
```javascript
function test() {
  x = 10;  // var/let/const ছাড়া
}
```

---

## মনে রাখার সহজ উপায়

### Hoisting মানে:

**"উপরে তোলা"** - Declaration গুলো code এর top এ উঠে যায়

### Rule of Thumb:

```javascript
// var: উপরে তুলে undefined দেয়
var x;
console.log(x);  // undefined
x = 10;

// let/const: উপরে তোলে কিন্তু TDZ এ রাখে
// TDZ থেকে বের না হওয়া পর্যন্ত access করা যায় না
let y = 20;
```

### সহজ মনে রাখার ছবি:

```
var:
Declaration ↑ (undefined সহ)
Assignment ↓ (যেখানে আছে সেখানেই)

let/const:
Declaration ↑ (TDZ এ)
Assignment ↓ (যেখানে আছে সেখানেই)
```

---

## Key Points

- Hoisting = Declaration উপরে উঠে যায়
- `var` = undefined হয়ে hoist হয়
- `let/const` = TDZ এ hoist হয়
- Function declaration পুরোপুরি hoist হয়
- Function expression variable হিসেবে hoist হয়
- TDZ bugs প্রতিরোধ করে
- সবসময় `let/const` ব্যবহার করো