# JavaScript this Keyword

---

## Case 01: Global Context

```javascript
console.log(this);
```

**আউটপুট (Browser):**
```
Window {...}
```

**আউটপুট (Node.js):**
```
{}
```

Browser এ `this` = `window` object।

---

## Case 02: Object Method

```javascript
const a = {
  name: "Alex",
  score: 100,
  showScore() {
    console.log(this.name);
  }
};

a.showScore();
```

**আউটপুট:**
```
Alex
```

**ব্যাখ্যা:** Object এর method এ `this` = সেই object।

---

## Case 03: Class Method

```javascript
class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  
  showDetails() {
    console.log(this.name);
    console.log(this.level);
  }
}

const v = new Player("Alex", 10);
v.showDetails();
```

**আউটপুট:**
```
Alex
10
```

**ব্যাখ্যা:** Class এর method এ `this` = current instance।

---

## Case 04: Regular Function

```javascript
function doSomething(number) {
  console.log(this);
}

doSomething();
```

**আউটপুট (Browser):**
```
Window {...}
```

**আউটপুট (Strict Mode):**
```
undefined
```

Regular function এ `this` = global object (non-strict mode)।

---

## Case 05: Constructor Function

```javascript
function Person(name) {
  this.name = name;
}

const user = new Person("Alex");
console.log(user.name);
```

**আউটপুট:**
```
Alex
```

**ব্যাখ্যা:** `new` keyword দিয়ে call করলে `this` = নতুন object।

---

## Case 06: Event Listener

```html
<button id="get-user">Click Me</button>
```

```javascript
document.getElementById("get-user").addEventListener("click", function() {
  console.log(this);
});
```

**আউটপুট:**
```
<button id="get-user">Click Me</button>
```

**ব্যাখ্যা:** Event listener এ `this` = যে element এ click হয়েছে।

---

## Case 07: Arrow Function

```javascript
const person = {
  name: "John",
  greet: () => {
    return `Hello, I am ${this.name}`;
  }
};

console.log(person.greet());
```

**আউটপুট:**
```
Hello, I am undefined
```

**ব্যাখ্যা:** Arrow function নিজের `this` তৈরি করে না, parent এর `this` use করে।

---

## Case 08: Strict Mode

```javascript
"use strict";
function test() {
  console.log(this);
}

test();
```

**আউটপুট:**
```
undefined
```

**ব্যাখ্যা:** Strict mode এ regular function এ `this` = `undefined`।

---

## Practice Questions

### Question 1: ব্রাউজারে window অবজেক্ট কী?

**Answer:**

ব্রাউজারের screen এ তুমি যা যা করতে পার সেটা সবকিছুর "বড় বস" হলো `window` object।

**সহজ ভাষায়:**

ব্রাউজার যখন webpage run করে, তখন JavaScript কে একটা বড় environment দেয় যেখানে variable, function, DOM, API, storage—সব থাকে। সেই environment-ই `window`।

**মানে:**
`window` হলো পুরো ব্রাউজারের জন্য global object।

**ওই object এর ভেতরেই থাকে:**

- `document` (HTML access করার entry gate)
- `console`
- `localStorage` / `sessionStorage`
- `alert()`, `setTimeout()`, `setInterval()`
- `fetch()`
- `history`
- `location`
- সমস্ত global variable এবং function

**উদাহরণ:**

```javascript
// এই তিনটা একই
window.alert("Hello");
alert("Hello");

window.console.log("Hi");
console.log("Hi");

var name = "Sahin";
console.log(window.name);  // Sahin
```

---

### Question 2: Browser এ console.log(this) এর Output

```javascript
console.log(this);
```

**Output:**
```
Window {...}
```

**ব্যাখ্যা:**

Global context এ `this` browser এ `window` object কে point করে।

```javascript
console.log(this === window);  // true
```

---

### Question 3: Normal Function vs Arrow Function এ this

**হ্যাঁ, অনেক পার্থক্য আছে!**

### Normal Function

```javascript
const person = {
  name: "Sahin",
  greet: function() {
    console.log(this.name);
  }
};

person.greet();  // Sahin
```

**ব্যাখ্যা:** Normal function এ `this` = যে object থেকে call করা হয়েছে।

### Arrow Function

```javascript
const person = {
  name: "Sahin",
  greet: () => {
    console.log(this.name);
  }
};

person.greet();  // undefined
```

**ব্যাখ্যা:** Arrow function নিজের `this` তৈরি করে না। Parent এর `this` use করে।

### Side by Side Comparison

```javascript
const obj = {
  name: "Sahin",
  
  // Normal function
  method1: function() {
    console.log(this.name);  // Sahin
  },
  
  // Arrow function
  method2: () => {
    console.log(this.name);  // undefined
  }
};

obj.method1();  // Sahin
obj.method2();  // undefined
```

### সঠিক ব্যবহার:

```javascript
const person = {
  name: "Sahin",
  hobbies: ["coding", "reading"],
  
  // Normal function - object method এর জন্য
  showName: function() {
    console.log(this.name);
  },
  
  // Arrow function - callback এর জন্য
  showHobbies: function() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  }
};

person.showName();      // Sahin
person.showHobbies();   
// Sahin likes coding
// Sahin likes reading
```

---

## this কখন কি হয়?

| Context | this এর মান |
|---------|-------------|
| Global (Browser) | `window` |
| Global (Node.js) | `{}` |
| Object Method | Object itself |
| Class Method | Instance |
| Regular Function | `window` (non-strict) / `undefined` (strict) |
| Arrow Function | Parent এর this |
| Event Listener | Element যেটাতে event হয়েছে |
| Constructor (`new`) | নতুন object |

---

## Common this Problems

### Problem 1: Losing this

```javascript
const person = {
  name: "Sahin",
  greet: function() {
    console.log(this.name);
  }
};

person.greet();  // Sahin

const greetFunc = person.greet;
greetFunc();  // undefined
```

**সমাধান - bind():**

```javascript
const greetFunc = person.greet.bind(person);
greetFunc();  // Sahin
```

### Problem 2: setTimeout এ this

```javascript
const person = {
  name: "Sahin",
  greet: function() {
    setTimeout(function() {
      console.log(this.name);  // undefined
    }, 1000);
  }
};

person.greet();
```

**সমাধান - Arrow Function:**

```javascript
const person = {
  name: "Sahin",
  greet: function() {
    setTimeout(() => {
      console.log(this.name);  // Sahin
    }, 1000);
  }
};

person.greet();
```

### Problem 3: Event Listener এ Arrow Function

```javascript
const button = document.querySelector('button');

// ভুল - this পাবে না
button.addEventListener('click', () => {
  console.log(this);  // Window
});

// সঠিক - element পাবে
button.addEventListener('click', function() {
  console.log(this);  // <button>
});
```

---

## this Control করার উপায়

### 1. bind()

```javascript
const person = { name: "Sahin" };

function greet() {
  console.log(this.name);
}

const boundGreet = greet.bind(person);
boundGreet();  // Sahin
```

### 2. call()

```javascript
const person = { name: "Sahin" };

function greet(age) {
  console.log(`${this.name} is ${age} years old`);
}

greet.call(person, 25);  // Sahin is 25 years old
```

### 3. apply()

```javascript
const person = { name: "Sahin" };

function greet(age, city) {
  console.log(`${this.name} is ${age} years old from ${city}`);
}

greet.apply(person, [25, "Dhaka"]);
// Sahin is 25 years old from Dhaka
```

---

## মনে রাখার সহজ উপায়

### 1. Object Method → Object

```javascript
obj.method()  // this = obj
```

### 2. Alone → Window (or undefined in strict)

```javascript
function test() {}
test()  // this = window
```

### 3. Arrow → Parent's this

```javascript
() => {}  // this = parent এর this
```

### 4. Event → Element

```javascript
element.addEventListener('click', function() {})
// this = element
```

### 5. new → New Object

```javascript
new Constructor()  // this = নতুন object
```

---

## মনে রাখার বিষয়

- `this` context এর উপর depend করে
- Arrow function এ নিজের `this` নেই
- Object method এ normal function use করো
- Callback এ arrow function use করো
- Event listener এ normal function use করো
- `bind()`, `call()`, `apply()` দিয়ে control করা যায়