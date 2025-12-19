# JavaScript IIFE

**IIFE = Immediately Invoked Function Expression**

---

## Question 1: IIFE কি জিনিস?

### সহজ ভাষায়:

IIFE (Immediately Invoked Function Expression) হলো JavaScript এর এমন একটি function যা তৈরি করার সাথে সাথেই নিজে নিজেই execute হয়ে যায়।

**অন্য নাম:** Self-executing anonymous function

### IIFE এর মূল ধারণা:

#### 1. Function তৈরি
একটি function লেখা হয়, যা সাধারণত কোনো নামবিহীন (anonymous) হয়।

#### 2. Scope তৈরি
এই function টি একটি নিজস্ব (private) scope তৈরি করে, যেখানে variable গুলো বাইরে থেকে access করা যায় না।

#### 3. তাৎক্ষণিক Call
Function টি লেখার পরপরই `()` বন্ধনী ব্যবহার করে call করা হয়, যাতে এটি সাথে সাথে run করে।

### Basic Example:

```javascript
(function() {
  // এই code টি লেখা হওয়ার সাথে সাথে run করবে
  let message = "Hello from IIFE!";
  console.log(message);  // Hello from IIFE!
})();

// console.log(message);  // Error! 'message' global নয়
```

**ব্যাখ্যা:**
- `(function() { ... })` - Function কে expression এ পরিণত করে
- `()` - Function কে call করে

---

## IIFE এর Structure

### Pattern 1: Traditional IIFE

```javascript
(function() {
  console.log("IIFE running!");
})();
```

### Pattern 2: Alternative Syntax

```javascript
(function() {
  console.log("IIFE running!");
}());
```

উভয়ই একই কাজ করে, শুধু `()` এর position আলাদা।

---

## কাজের ক্ষেত্র:

### 1. Global Scope রক্ষা

```javascript
// Without IIFE - Global pollution
var counter = 0;
counter++;
console.log(counter);  // 1

// With IIFE - No global pollution
(function() {
  var counter = 0;
  counter++;
  console.log(counter);  // 1
})();

// console.log(counter);  // Error or undefined
```

### 2. Private Variables

```javascript
var module = (function() {
  let privateVar = "I'm private!";
  
  return {
    getPrivate: function() {
      return privateVar;
    }
  };
})();

console.log(module.getPrivate());  // I'm private!
// console.log(privateVar);  // Error!
```

### 3. Module তৈরি

```javascript
var calculator = (function() {
  let result = 0;
  
  return {
    add: function(num) {
      result += num;
      return this;
    },
    subtract: function(num) {
      result -= num;
      return this;
    },
    getResult: function() {
      return result;
    }
  };
})();

calculator.add(10).subtract(3);
console.log(calculator.getResult());  // 7
```

---

## Problem 01: Basic IIFE

```javascript
(function() {
    let massage = "I am isolated from outer scope.";
    console.log(massage);
})();
```

**আউটপুট:**
```
I am isolated from outer scope.
```

**ব্যাখ্যা:**
- Function তৈরির সাথে সাথে execute হয়েছে
- `massage` variable শুধু এই function এর ভিতরে accessible
- বাইরে থেকে `massage` access করা যাবে না

---

## Problem 02: Arrow Function IIFE

```javascript
(() => {
    let massage = "borrow from arrow.";
    console.log(massage);
})();
```

**আউটপুট:**
```
borrow from arrow.
```

**ব্যাখ্যা:**
- Arrow function দিয়েও IIFE বানানো যায়
- Same behavior, modern syntax
- Cleaner code

---

## Problem 03: IIFE with Parameters

```javascript
(function(kelvin) {
    let celsius = kelvin - 273.15;
    console.log("The Celsius is: " + celsius);
})(40);
```

**আউটপুট:**
```
The Celsius is: -233.15
```

**ব্যাখ্যা:**
- IIFE তে parameter pass করা যায়
- `40` kelvin হিসেবে pass হয়েছে
- Function ভিতরে celsius calculate করেছে

### আরও উদাহরণ:

```javascript
(function(name, age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
})("Sahin", 25);

// Output: Hello Sahin, you are 25 years old.
```

---

## IIFE এর বিভিন্ন রূপ

### 1. Named IIFE

```javascript
(function myIIFE() {
    console.log("Named IIFE");
})();
```

### 2. Arrow Function IIFE

```javascript
(() => {
    console.log("Arrow IIFE");
})();
```

### 3. Async IIFE

```javascript
(async () => {
    const data = await fetchData();
    console.log(data);
})();
```

### 4. IIFE with Return

```javascript
const result = (function() {
    return "Returned value";
})();

console.log(result);  // Returned value
```

---

## Real-World Examples

### Example 1: Counter Module

```javascript
const counter = (function() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getCount());   // 2
// console.log(count);  // Error! Private variable
```

### Example 2: Config Setup

```javascript
(function(config) {
    console.log("App initialized with:");
    console.log("API:", config.api);
    console.log("Version:", config.version);
})({
    api: "https://api.example.com",
    version: "1.0.0"
});
```

### Example 3: jQuery Plugin Pattern

```javascript
(function($) {
    // $ এখন jQuery কে refer করছে
    $.fn.myPlugin = function() {
        return this.each(function() {
            $(this).css("color", "red");
        });
    };
})(jQuery);
```

---

## কখন IIFE ব্যবহার করবে?

### ✅ ব্যবহার করো যখন:

1. **Global scope থেকে রক্ষা করতে:**
```javascript
(function() {
    let temp = "This won't pollute global";
})();
```

2. **Private variables চাই:**
```javascript
const module = (function() {
    let private = "secret";
    return { getPrivate: () => private };
})();
```

3. **One-time initialization:**
```javascript
(function() {
    console.log("App initialized!");
    // Setup code...
})();
```

4. **Module pattern:**
```javascript
const myModule = (function() {
    // Private
    let data = [];
    
    // Public
    return {
        add: (item) => data.push(item),
        get: () => data
    };
})();
```

---

## Before vs After IIFE

### Before (Without IIFE):

```javascript
var counter = 0;
function increment() {
    counter++;
}
function getCounter() {
    return counter;
}

// counter বাইরে থেকে change করা যায়!
counter = 999;  // Oops!
```

### After (With IIFE):

```javascript
var counterModule = (function() {
    var counter = 0;  // Private!
    
    return {
        increment: function() {
            counter++;
        },
        getCounter: function() {
            return counter;
        }
    };
})();

// counter = 999;  // Error! Access করা যাবে না
counterModule.increment();
console.log(counterModule.getCounter());  // 1
```

---

## Common Patterns

### Pattern 1: Revealing Module

```javascript
const myModule = (function() {
    let privateVar = "Private";
    
    function privateMethod() {
        console.log("Private method");
    }
    
    function publicMethod() {
        console.log("Public method");
    }
    
    return {
        public: publicMethod
    };
})();

myModule.public();  // Works
// myModule.privateMethod();  // Error!
```

### Pattern 2: Multiple Returns

```javascript
const math = (function() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b
    };
})();

console.log(math.add(5, 3));  // 8
```

---

## IIFE vs Regular Function

| বৈশিষ্ট্য | Regular Function | IIFE |
|---------|-----------------|------|
| Execution | Call করতে হয় | Automatic |
| Scope | Global/Local | Always Local |
| Reusable | হ্যাঁ | না |
| Privacy | না | হ্যাঁ |
| Use Case | Multiple calls | One-time setup |

---

## মনে রাখার সহজ উপায়

**IIFE = "বানাও এবং তৎক্ষণাৎ চালাও"**

```javascript
// Step 1: Wrap in ()
(function() {
    // Code
})

// Step 2: Call করো ()
();

// Complete:
(function() {
    // Code
})();
```

**Formula:**
```
(function() { code })();
     ↑              ↑
   Wrap it      Call it
```

---

## Key Points

- IIFE = Immediately Invoked Function Expression
- তৈরির সাথে সাথে execute হয়
- Private scope তৈরি করে
- Global pollution এড়ায়
- Module pattern এ ব্যবহার হয়
- Arrow function দিয়েও করা যায়
- Parameter pass করা যায়
- One-time initialization এর জন্য perfect
- Modern JavaScript এ `let/const` এবং modules আছে, কিন্তু IIFE এখনো useful

**মনে রাখো:** 
```javascript
(function() { /* Run immediately */ })();
```