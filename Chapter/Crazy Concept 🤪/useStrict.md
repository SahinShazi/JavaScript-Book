# JavaScript Strict Mode

**"use strict"** - JavaScript এর একটা safer এবং cleaner version!

---

## Strict Mode কি?

Strict mode হলো JavaScript এর একটা special mode যেটা code কে আরও strict করে check করে এবং অনেক silent errors কে actual errors এ পরিণত করে।

### কিভাবে Enable করবে:

```javascript
"use strict";

// এখন থেকে strict mode চালু
x = 10;  // Error! (var/let/const ছাড়া variable declare করা যাবে না)
```

---

## Strict Mode কেন ইউজ করা হয়?

### 1. **Silent Errors কে Prevent করে**

#### Without Strict Mode:
```javascript
x = 10;  // কোনো error নেই, global variable তৈরি হয়ে যায়
console.log(x);  // 10
```

#### With Strict Mode:
```javascript
"use strict";
x = 10;  // ReferenceError: x is not defined
```

### 2. **Common Mistakes Catch করে**

```javascript
"use strict";

// Duplicate parameter names
function sum(a, a, c) {  // SyntaxError!
    return a + a + c;
}

// Delete করা যাবে না
var x = 10;
delete x;  // SyntaxError!

// with statement banned
with (Math) {  // SyntaxError!
    x = cos(2);
}
```

### 3. **Future JavaScript এর জন্য Reserved Words রক্ষা করে**

```javascript
"use strict";

var let = 10;        // SyntaxError!
var static = 20;     // SyntaxError!
var interface = 30;  // SyntaxError!
```

### 4. **this Binding Safe করে**

#### Without Strict Mode:
```javascript
function test() {
    console.log(this);  // Window object (global)
}
test();
```

#### With Strict Mode:
```javascript
"use strict";

function test() {
    console.log(this);  // undefined
}
test();
```

### 5. **Security Improve করে**

```javascript
"use strict";

function secureFunction() {
    // arguments.callee এবং arguments.caller banned
    console.log(arguments.callee);  // TypeError!
}
```

---

## Strict Mode Enable করার দুই উপায়

### 1. Global Scope এ

```javascript
"use strict";

// পুরো file এ strict mode
x = 10;  // Error!

function test() {
    y = 20;  // Error!
}
```

### 2. Function Scope এ

```javascript
function myFunction() {
    "use strict";
    
    // শুধু এই function এ strict mode
    x = 10;  // Error!
}

// Function এর বাইরে strict mode নেই
y = 20;  // কোনো error নেই
```

---

## Strict Mode এ যা যা নিষিদ্ধ

### 1. Variable Declaration ছাড়া Assignment

```javascript
"use strict";

x = 10;  // ReferenceError
var y = 20;  // ✓ সঠিক
```

### 2. Read-only Properties এ Write করা

```javascript
"use strict";

const obj = {};
Object.defineProperty(obj, "x", { value: 10, writable: false });

obj.x = 20;  // TypeError!
```

### 3. Getter-only Properties এ Assignment

```javascript
"use strict";

const obj = {
    get x() { return 10; }
};

obj.x = 20;  // TypeError!
```

### 4. Non-extensible Object এ Property Add

```javascript
"use strict";

const obj = {};
Object.preventExtensions(obj);

obj.newProp = "value";  // TypeError!
```

### 5. Delete করা যাবে না

```javascript
"use strict";

var x = 10;
delete x;  // SyntaxError!

function test() {}
delete test;  // SyntaxError!
```

### 6. Duplicate Parameter Names

```javascript
"use strict";

function sum(a, a, c) {  // SyntaxError!
    return a + a + c;
}
```

### 7. Octal Literals

```javascript
"use strict";

var x = 010;  // SyntaxError! (octal)
var y = 0o10; // ✓ সঠিক (ES6 octal)
```

### 8. with Statement

```javascript
"use strict";

with (Math) {  // SyntaxError!
    x = cos(2);
}
```

### 9. eval() এর Local Scope

```javascript
"use strict";

eval("var x = 10");
console.log(x);  // ReferenceError! (x eval এর local scope এ)
```

---

## Real-World Examples

### Example 1: Preventing Typos

```javascript
"use strict";

let userName = "Sahin";

// Typo করলে error দিবে
userNam = "Kamrul";  // ReferenceError!
// Without strict: নতুন global variable তৈরি হতো
```

### Example 2: Safe Object Manipulation

```javascript
"use strict";

const config = Object.freeze({
    apiUrl: "https://api.example.com",
    timeout: 5000
});

// Accidentally change করতে চাইলে error
config.apiUrl = "https://hack.com";  // TypeError!
```

### Example 3: Function Context

```javascript
"use strict";

const user = {
    name: "Sahin",
    greet: function() {
        console.log(this.name);
    }
};

const greetFunc = user.greet;
greetFunc();  // TypeError! this is undefined
// Without strict: this = window
```

---

## Strict Mode vs Non-Strict Mode

### Comparison Table:

| Behavior | Non-Strict | Strict |
|----------|-----------|--------|
| Variable without declaration | Creates global | Error |
| Delete variable | Silently fails | Error |
| Duplicate parameters | Allowed | Error |
| Octal numbers (010) | Allowed | Error |
| `this` in function | `window` | `undefined` |
| `with` statement | Allowed | Error |
| Reserved keywords as vars | Allowed | Error |
| `eval` scope | Global | Local |

---

## Modern JavaScript এ Strict Mode

### ES6 Modules:
```javascript
// ES6 module automatically strict mode এ চলে
export function myFunc() {
    x = 10;  // Error! (strict mode automatic)
}
```

### Classes:
```javascript
// Classes automatically strict mode এ চলে
class MyClass {
    constructor() {
        x = 10;  // Error! (strict mode automatic)
    }
}
```

---

## Common Mistakes Strict Mode Catches

### Mistake 1: Accidental Globals

```javascript
"use strict";

function calculate() {
    result = 10 * 20;  // Error!
    // var/let/const ভুলে গেছি
}
```

### Mistake 2: Wrong Property Assignment

```javascript
"use strict";

NaN = 5;  // TypeError!
undefined = 10;  // TypeError!
Infinity = 20;  // TypeError!
```

### Mistake 3: Function Parameter Issues

```javascript
"use strict";

function test(x, x) {  // SyntaxError!
    return x + x;
}
```

---

## Best Practices

### ✅ সবসময় Strict Mode ব্যবহার করো

```javascript
"use strict";

// Your code...
```

### ✅ File এর Top এ রাখো

```javascript
"use strict";  // সবার আগে

const x = 10;
// Rest of code...
```

### ✅ Function Scope এও Use করতে পারো

```javascript
function myFunction() {
    "use strict";
    
    // Strict code
}

function anotherFunction() {
    // Non-strict code (not recommended)
}
```

### ✅ Modern Development

```javascript
// ES6 modules এ automatic strict mode
// .mjs files বা type="module"

export function myFunc() {
    // Already in strict mode
}
```

---

## When NOT to Use Strict Mode

### ⚠️ Old Legacy Code এ সাবধান

```javascript
// Old code যেটা strict mode এ break করতে পারে
function oldCode() {
    // with statement ব্যবহার করছে
    // eval() global scope এ dependency আছে
    // etc.
}

// এরকম ক্ষেত্রে gradually migrate করো
```

---

## Debugging with Strict Mode

### Error Messages আরও Clear

```javascript
"use strict";

function divide(a, b) {
    rsult = a / b;  // ReferenceError: rsult is not defined
    // Typo easily catch হয়ে যাবে
    return rsult;
}
```

Without strict mode: `rsult` global হয়ে যেতো, bug hidden থাকতো!

---

## Browser Support

সব modern browsers strict mode support করে:
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Opera ✓

Internet Explorer 10+ থেকে support আছে।

---

## Quick Reference

### Enable Strict Mode:
```javascript
"use strict";  // Global

function test() {
    "use strict";  // Function scope
}
```

### What Changes:
- No implicit globals
- No silent errors
- Safer `this` binding
- Reserved words protected
- Better error messages
- Security improvements

### Automatic Strict Mode:
- ES6 Modules
- ES6 Classes
- `type="module"` scripts

---

## মনে রাখার সহজ উপায়

```
"use strict" = "Be Strict!"

Without strict = খারাপ জিনিস silent error
With strict = খারাপ জিনিস actual error

Silent error = Bug লুকিয়ে থাকে
Actual error = Bug immediately ধরা পড়ে

More errors = Better code!
```

**Rule of Thumb:**
```javascript
"use strict";  // সবসময় ব্যবহার করো!
```

---

## Key Points

- **"use strict"** enables strict mode
- Catches common mistakes
- Prevents silent errors
- Safer `this` binding
- Reserved words protected
- Better security
- ES6 modules automatic strict
- Classes automatic strict
- Always use in new code
- Top of file or function
- Better error messages
- Industry best practice

**মনে রাখো:** Strict mode তোমার friend, enemy না! এটা তোমাকে better code লিখতে সাহায্য করে। 🚀