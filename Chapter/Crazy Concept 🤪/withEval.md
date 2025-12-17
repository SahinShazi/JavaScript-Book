# JavaScript with এবং eval

---

## Question 1: with কী? এটা কী কাজ করে?

### with Statement কি?

`with` statement একটা object এর properties কে shorthand এ access করার জন্য ব্যবহার করা হতো।

### Syntax:

```javascript
with (object) {
  // object এর properties সরাসরি লেখা যায়
}
```

### Example:

```javascript
const person = {
  name: "Sahin",
  age: 25,
  city: "Dhaka"
};

// with ছাড়া
console.log(person.name);
console.log(person.age);
console.log(person.city);

// with সহ
with (person) {
  console.log(name);   // person.name
  console.log(age);    // person.age
  console.log(city);   // person.city
}
```

**দেখতে সহজ মনে হলেও...**

---

## with কেন ব্যবহার করা উচিত না?

### ❌ Problem 1: Confusing এবং Ambiguous

```javascript
let name = "Global Name";

const person = {
  name: "Sahin",
  age: 25
};

with (person) {
  console.log(name);  // কোনটা? Global name নাকি person.name?
  console.log(age);   // এটা person.age
  console.log(city);  // এটা কি? Error হবে!
}
```

**সমস্যা:** Code পড়ে বোঝা যায় না কোন variable কোথা থেকে আসছে।

### ❌ Problem 2: Performance Issue

```javascript
with (obj) {
  // JavaScript engine optimize করতে পারে না
  // প্রতিবার property lookup করতে হয়
  x = 1;
  y = 2;
  z = 3;
}
```

JavaScript engine এর জন্য optimization করা কঠিন হয়ে যায়।

### ❌ Problem 3: Strict Mode এ Banned

```javascript
"use strict";

with (obj) {  // SyntaxError!
  // Code...
}
```

Strict mode এ `with` statement একদম কাজ করে না।

### ❌ Problem 4: Scope Pollution

```javascript
const config = {
  host: "localhost",
  port: 3000
};

with (config) {
  host = "example.com";  // config.host update?
  timeout = 5000;        // নতুন global variable তৈরি হলো!
}

console.log(window.timeout);  // 5000 (Accidental global!)
```

---

## with এর বিকল্প

### ✅ Destructuring ব্যবহার করো:

```javascript
const person = {
  name: "Sahin",
  age: 25,
  city: "Dhaka"
};

// Modern way
const { name, age, city } = person;

console.log(name);   // Sahin
console.log(age);    // 25
console.log(city);   // Dhaka
```

### ✅ Variable এ রাখো:

```javascript
const p = person;

console.log(p.name);
console.log(p.age);
console.log(p.city);
```

---

## Question 2: eval() কী জিনিস? এইটা কেন ইউজ করা উচিত না?

### eval() কি?

`eval()` function একটা string কে JavaScript code হিসেবে execute করে।

### Syntax:

```javascript
eval(string);
```

### Example:

```javascript
// String কে code হিসেবে চালানো
eval("console.log('Hello')");  // Hello

let x = 10;
eval("x = x + 5");
console.log(x);  // 15

// Expression evaluate করা
let result = eval("2 + 3 * 4");
console.log(result);  // 14
```

---

## eval() কেন খুবই বিপজ্জনক?

### 🚨 Problem 1: Security Risk (সবচেয়ে বড় সমস্যা)

```javascript
// User input থেকে code
let userInput = prompt("Enter code:");
eval(userInput);  // ভয়ংকর!

// যদি user এটা লেখে:
// "alert(document.cookie)"  // Cookie চুরি!
// "window.location = 'http://malicious.com'"  // Redirect!
// "localStorage.clear()"  // Data মুছে ফেলা!
```

**Hacker যা ইচ্ছা code run করতে পারবে!**

### 🚨 Problem 2: Performance Issue

```javascript
// eval() খুবই slow
for (let i = 0; i < 1000; i++) {
  eval("let x = " + i);  // প্রতিবার parse এবং compile
}

// Normal way অনেক fast
for (let i = 0; i < 1000; i++) {
  let x = i;
}
```

JavaScript engine optimization করতে পারে না।

### 🚨 Problem 3: Debugging কঠিন

```javascript
eval("function test() { console.log('test'); }");
test();  // কোথায় error হলে debugger এ দেখা যায় না
```

Error tracking এবং debugging প্রায় impossible।

### 🚨 Problem 4: Scope Problems

```javascript
function test() {
  let x = 10;
  eval("console.log(x)");  // 10 (local scope access করছে)
  eval("var y = 20");      // Function scope এ y তৈরি হলো
  console.log(y);          // 20
}

test();
console.log(y);  // ReferenceError (কিন্তু confusing!)
```

---

## eval() এর বিকল্প

### ✅ JSON Parse করতে:

```javascript
// ভুল
let obj = eval("({name: 'Sahin', age: 25})");

// সঠিক
let jsonString = '{"name": "Sahin", "age": 25}';
let obj = JSON.parse(jsonString);
```

### ✅ Math Expression এর জন্য:

```javascript
// ভুল
let result = eval("2 + 3 * 4");

// সঠিক - Function ব্যবহার করো
function calculate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return 0;
  }
}
```

### ✅ Dynamic Property Access:

```javascript
const obj = { name: "Sahin", age: 25 };

// ভুল
let prop = "name";
let value = eval("obj." + prop);

// সঠিক
let value = obj[prop];
```

### ✅ Function Constructor (কিন্তু এটাও এড়িয়ে চলো):

```javascript
// eval এর চেয়ে একটু ভালো, কিন্তু এখনো বিপজ্জনক
let func = new Function('a', 'b', 'return a + b');
console.log(func(2, 3));  // 5
```

---

## Real-World দুর্ঘটনা

### Example 1: XSS Attack

```javascript
// একটা comment section
function displayComment(comment) {
  eval("document.write('" + comment + "')");
}

// Hacker এটা comment করে:
// "<script>alert(document.cookie)</script>"
// সব user এর cookie চুরি!
```

### Example 2: Code Injection

```javascript
// Calculator app
function calculate(expression) {
  return eval(expression);  // বিপজ্জনক!
}

// User লেখে: "alert('Hacked'); 2+2"
calculate("alert('Hacked'); 2+2");  // Code inject হয়ে গেলো!
```

---

## কখনো কখনো eval প্রয়োজন? (খুবই বিরল)

### শুধুমাত্র এই ক্ষেত্রে:

1. **নিজের লেখা trusted code** (user input না)
2. **Development tools** তৈরি করতে
3. **REPL environments** (Node.js console)

কিন্তু 99.99% ক্ষেত্রে **আরও ভালো বিকল্প আছে!**

---

## Safe Alternatives

### 1. JSON.parse() for Data

```javascript
// Data parse করতে
const data = JSON.parse('{"name": "Sahin"}');
```

### 2. Function for Calculations

```javascript
// Math expression
function safeMath(a, b, op) {
  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
  };
  return operations[op](a, b);
}
```

### 3. Template Literals

```javascript
// String interpolation
const name = "Sahin";
const greeting = `Hello, ${name}!`;  // eval এর দরকার নেই
```

### 4. Object Property Access

```javascript
// Dynamic property
const obj = { name: "Sahin" };
const prop = "name";
const value = obj[prop];  // eval দরকার নেই
```

---

## Comparison Table

| Feature | with | eval() |
|---------|------|--------|
| Security | ⚠️ Confusing | 🚨 Very Dangerous |
| Performance | ❌ Slow | ❌ Very Slow |
| Strict Mode | ❌ Banned | ✅ Works (but don't use!) |
| Debugging | ⚠️ Hard | ❌ Very Hard |
| Use in Production | ❌ Never | ❌ Never |

---

## Best Practices

### ✅ করো:

```javascript
// Destructuring
const { name, age } = person;

// JSON.parse
const data = JSON.parse(jsonString);

// Bracket notation
const value = obj[propertyName];

// Template literals
const message = `Hello, ${name}`;
```

### ❌ করো না:

```javascript
// with statement
with (obj) { /* ... */ }

// eval() with user input
eval(userInput);

// eval() for calculations
eval("2 + 2");

// eval() for JSON
eval("({name: 'test'})");
```

---

## মনে রাখার সহজ উপায়

### with:
```
with = "ভুলে যাও এটা আছে"
Modern JavaScript এ এর কোনো জায়গা নেই
```

### eval():
```
eval = evil (খারাপ)
eval() = "Security nightmare"
কখনো ব্যবহার করো না!
```

---

## Key Points

### with:
- Object property shorthand করার জন্য
- Confusing এবং ambiguous
- Performance সমস্যা
- Strict mode এ banned
- **বিকল্প:** Destructuring

### eval():
- String কে code হিসেবে run করে
- **Security risk** (সবচেয়ে বড় সমস্যা)
- Performance issue
- Debugging impossible
- **বিকল্প:** JSON.parse, Function, Template literals

### মূল কথা:
**with এবং eval() - দুটোই আধুনিক JavaScript এ ব্যবহার করা উচিত না!**