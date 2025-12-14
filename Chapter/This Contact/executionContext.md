# Execution Context এর গোমর ফাঁস

তুই যখন একটা function কে call করিস, তোর মনে হতে পারে, জাস্ট call করলাম আর output দিয়ে দিলো। তবে বিষয়টা অত সিম্পল হলেও তলে তলে অনেক কিছু ঘটতে থাকে, যা তোর খালি চোখে পড়ে না।

---

## Global Context

কোড শুরু হওয়ার একদম শুরুতে JavaScript **Global Execution Context** তৈরি করে। যেটার মধ্যে:

- সব global variable
- সব global function
- JavaScript এর built-in function (যেমন `setTimeout`, `console.log`)

এগুলো global scope এ ready করে রাখে।

### Global Context কি?

এই global context হলো JavaScript program এর সবচেয়ে বড় এবং main scope। এখানে declare করা যেকোনো variable, function, object global context এর অন্তর্ভুক্ত।

### Global Context এর নাম Environment অনুযায়ী:

| Environment | Global Context এর নাম |
|-------------|----------------------|
| Browser | `window` |
| Node.js | `global` |
| ES2020+ (সব জায়গায়) | `globalThis` |

### Example:

```javascript
// Browser এ
console.log(window);  // Global object

var name = "Sahin";
console.log(window.name);  // Sahin

// Node.js এ
console.log(global);

// Modern way (সব জায়গায়)
console.log(globalThis);
```

---

## Function Declare

কোড চলতে চলতে যখন একটা function পায়, তখন JavaScript ওই function এর **reference** তৈরি করে।

**কিন্তু:**
- Function execute করে না বা call করে না
- ভিতরে কী হবে, সেটাও check করে না

**কারণ:**
Function কে কে কীভাবে call করবে বা কোন situation এ call করবে, সেটা অনুসারে ভিতরের জিনিস change হতে পারে। অর্থাৎ **context** change হতে পারে। তাই function call না করা পর্যন্ত function এর ভিতরের কিছুই ঘটবে না।

### Function Reference মানে:

Function এর reference তৈরি করা মানে হলো ওই function কোথায় আছে, সেটা memory তে উল্লেখ করে রাখা।

### Example:

```javascript
// এই মুহূর্তে শুধু reference তৈরি হলো
function greet(name) {
  console.log(`Hello, ${name}`);
}

// এখনো execute হয়নি
// Call করলে তখন execute হবে
greet("Sahin");  // এখন execute হলো
```

---

## Function Execution Context

কোনো একটা function কে call করলে একদম first কাজ হচ্ছে এই function এর জন্য নতুন একটা **Execution Context** তৈরি করা।

এই Execution Context হলো কোন context এ function run হবে, সেটা ঠিক করা।

তখন ঠিক করে:
- এই function এর কী কী আছে
- কী কী করতে পারবে
- কয়টা parameter আছে
- Function কী কী variable access করতে পারবে
- তার scope, scope chain - সব

ঠিক করার কাজ call করার পর শুরু হয়।

---

## Execution Context তৈরি হয় দুইটা ধাপে

### 1. Creation Phase (তৈরির ধাপ)

একটা Execution Context তৈরি হলে ছোট করে বললে কয়েকটা কাজ হয়:

#### ১. Arguments সেট করা
যে যে argument pass করছে, সেই অনুসারে function এর parameter গুলোর মান set করে।

```javascript
function add(a, b) {
  return a + b;
}

add(5, 3);
// Creation phase এ: a = 5, b = 3 set হয়
```

#### ২. Hoisting করা
যা যা hoisting করা দরকার, সব hoisting করে ফেলে।

```javascript
function test() {
  console.log(x);  // undefined (hoisted)
  var x = 10;
}
```

#### ৩. let/const এর জায়গা Reserved
`let` এবং `const` দিয়ে declare করা variable গুলোর জন্য memory তে জায়গা ঠিক করে রাখে। তবে সেগুলোকে initialize করে না; বরং সেগুলোকে **Temporal Dead Zone (TDZ)** এ রেখে দেয়।

```javascript
function test() {
  console.log(x);  // ReferenceError (TDZ)
  let x = 10;
}
```

#### ৪. var কে undefined দেয়
`var` দিয়ে declare করা variable গুলোকে `undefined` মান দিয়ে উপরে তুলে নেয় এবং তাদের initialize করে।

```javascript
function test() {
  console.log(x);  // undefined
  var x = 10;
}
```

#### ৫. Scope Chain তৈরি
কোডের scope আর scope chain তৈরি করে। যাতে outer scope বা global scope এর variable access করতে পারে।

```javascript
let global = "I'm global";

function outer() {
  let outerVar = "I'm outer";
  
  function inner() {
    let innerVar = "I'm inner";
    console.log(global);    // Access করতে পারে
    console.log(outerVar);  // Access করতে পারে
    console.log(innerVar);  // Access করতে পারে
  }
  
  inner();
}

outer();
```

#### ৬. this এর মান ঠিক করা
Function call করার ধরন অনুসারে ঠিক করে, `this` এর মান কী হবে।

```javascript
const obj = {
  name: "Sahin",
  greet() {
    console.log(this.name);  // Creation phase এ this = obj
  }
};

obj.greet();
```

---

### 2. Execution Phase (চালানোর ধাপ)

এখন code টা execute করা শুরু হবে। তখন:
- প্রতিটা variable তার আসল value পাবে
- Function চলবে
- আর সব calculation বা logic execute হবে

```javascript
function calculate(a, b) {
  let result = a + b;  // Execution phase এ result = 8
  return result;
}

calculate(5, 3);
```

---

## Visual Representation

### Example Code:

```javascript
let globalVar = "Global";

function outer(x) {
  let outerVar = "Outer";
  
  function inner(y) {
    let innerVar = "Inner";
    console.log(globalVar, outerVar, innerVar, x, y);
  }
  
  inner(20);
}

outer(10);
```

### Execution Contexts:

```
1. Global Execution Context
   - globalVar = "Global"
   - outer = function reference
   
2. outer() Execution Context
   - x = 10
   - outerVar = "Outer"
   - inner = function reference
   - scope chain: outer → global
   
3. inner() Execution Context
   - y = 20
   - innerVar = "Inner"
   - scope chain: inner → outer → global
```

---

## Practice Questions

### Question 1: Execution Context কী জিনিস? এইটা কীভাবে কাজ করে?

**Answer:**

**Execution Context** হলো একটা environment যেখানে JavaScript code execute হয়।

**সহজ ভাষায়:**
- যখন code run হয়, তখন JavaScript একটা "box" তৈরি করে
- এই box এর ভিতরে সব variable, function থাকে
- এই box টাই হলো Execution Context

**কিভাবে কাজ করে:**

1. **Creation Phase:**
   - Variable declare হয়
   - Function reference তৈরি হয়
   - Scope chain setup হয়
   - `this` binding হয়

2. **Execution Phase:**
   - Code line by line চলে
   - Variable এ value assign হয়
   - Function execute হয়

**Example:**

```javascript
// Global Execution Context তৈরি হলো
let name = "Sahin";

function greet() {
  // greet() Execution Context তৈরি হলো
  let greeting = "Hello";
  console.log(greeting + " " + name);
}

greet();  // Function call করলে নতুন Context তৈরি হয়
```

**Flow:**

```
1. Global EC তৈরি
   ↓
2. name variable memory তে
   ↓
3. greet function reference তৈরি
   ↓
4. greet() call
   ↓
5. greet() এর জন্য নতুন EC তৈরি
   ↓
6. greeting variable memory তে
   ↓
7. console.log execute
   ↓
8. greet() EC শেষ
   ↓
9. Global EC এ ফিরে আসা
```

---

### Question 2: গ্লোবাল কনটেক্সটের কাজ কী? এইটা কেন দরকার পড়ে?

**Answer:**

**গ্লোবাল Context এর কাজ:**

1. **Base Environment তৈরি:**
   - Program শুরু হওয়ার সাথে সাথে তৈরি হয়
   - সব code এর জন্য foundation

2. **Global Variables এবং Functions রাখা:**
   ```javascript
   let globalVar = "Available everywhere";
   
   function globalFunc() {
     console.log("I'm global");
   }
   ```

3. **Built-in Objects Provide করা:**
   - `console`
   - `setTimeout`
   - `fetch`
   - `Math`
   - `Array`, `Object` etc.

4. **Default this Binding:**
   ```javascript
   console.log(this);  // Global object (window/global/globalThis)
   ```

**কেন দরকার:**

#### ১. সবকিছুর Starting Point
```javascript
// এই code চালানোর জন্য প্রথমে Global Context লাগে
console.log("Hello");  // console global context এ আছে
```

#### ২. Shared Resources
```javascript
// সব function একই global variable access করতে পারে
let counter = 0;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}
```

#### ৩. Program Flow Control
```javascript
// Global context program এর main flow control করে
let isLoggedIn = false;

function login() {
  isLoggedIn = true;
}

function checkAccess() {
  if (isLoggedIn) {
    console.log("Access granted");
  }
}
```

#### ৪. Scope Chain এর Root
```javascript
let global = "I'm global";

function outer() {
  let outerVar = "I'm outer";
  
  function inner() {
    console.log(global);  // Scope chain ধরে global এ পৌঁছায়
  }
  
  inner();
}
```

**না থাকলে কি হতো:**
- Variable কোথায় store হবে?
- Built-in functions কিভাবে access করবে?
- Different functions কিভাবে data share করবে?
- Program flow কে handle করবে?

---

## Call Stack এবং Execution Context

### Call Stack কি?

Call Stack হলো একটা stack যেখানে Execution Contexts রাখা হয়।

```javascript
function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
  third();
}

function third() {
  console.log("Third");
}

first();
```

**Call Stack:**

```
1. Global EC
   ↓
2. Global EC → first() EC
   ↓
3. Global EC → first() EC → second() EC
   ↓
4. Global EC → first() EC → second() EC → third() EC
   ↓
5. Global EC → first() EC → second() EC (third শেষ)
   ↓
6. Global EC → first() EC (second শেষ)
   ↓
7. Global EC (first শেষ)
```

---

## মনে রাখার সহজ উপায়

### Execution Context = কাজের পরিবেশ

```
একটা function call করা = একটা নতুন office খোলা

Office এ যা থাকে:
- Desk (variables)
- Files (data)
- Phone (outer scope access)
- Boss (this)

কাজ শেষ = Office বন্ধ
```

### Creation vs Execution

```
Creation Phase = Setup করা
- Furniture সাজানো
- File arrange করা
- Phone connection করা

Execution Phase = কাজ করা
- File দেখা
- Phone call করা
- কাজ complete করা
```

---

## Key Points

- **Global Context** = Program এর base
- **Function Context** = প্রতিটি function call এ নতুন
- **Creation Phase** = Setup
- **Execution Phase** = Run
- **Call Stack** = Context গুলো stack এ
- **Scope Chain** = Variable access এর chain
- **this** = Context অনুযায়ী binding