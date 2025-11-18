# JavaScript Prototypal Inheritance

---

## Question 1: জাভাস্ক্রিপ্টে ইনহেরিটেন্স কীভাবে কাজ করে?

### Answer:

জাভাস্ক্রিপ্টে ইনহেরিটেন্স প্রোটোটাইপ-ভিত্তিক, যেখানে একটি object অন্য object এর বৈশিষ্ট্য এবং পদ্ধতিগুলি উত্তরাধিকার সূত্রে পায়। 

এটি **প্রোটোটাইপ চেইন** এর মাধ্যমে কাজ করে:
- প্রতিটি object এর একটি prototype থাকে
- সেই prototype এর আবার একটি prototype থাকে
- এভাবে একটা chain তৈরি হয়

যখন কোনও object এ একটি method বা property access করা হয়:
1. প্রথমে object এর নিজের মধ্যে খোঁজা হয়
2. না পেলে prototype এ খোঁজা হয়
3. এভাবে prototype chain ধরে উপরে উঠতে থাকে
4. যতক্ষণ না পাওয়া যায় বা chain শেষ হয়

### উদাহরণ:

```javascript
const animal = {
  eat() {
    console.log("Eating...");
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log("Barking...");
};

dog.bark();  // Barking... (নিজের method)
dog.eat();   // Eating... (prototype থেকে পাওয়া)
```

**Prototype Chain:**
```
dog → animal → Object.prototype → null
```

---

## Question 2: প্রোটোটাইপিক্যাল ইনহেরিটেন্স কী জিনিস?

### Answer:

প্রোটোটাইপিক্যাল ইনহেরিটেন্স জাভাস্ক্রিপ্টের object system এর আসল magic।

**সহজ ভাষায়:**
- একটা object আরেকটা object এর গুণাগুণ (property এবং method) ব্যবহার করতে পারে
- সরাসরি copy ছাড়াই
- অর্থাৎ বাপের জ্ঞান ছেলের মাথায় এসে যায়, কিন্তু বইটা ছেলের হাতে তুলে দিতে হয় না

### কিভাবে কাজ করে:

জাভাস্ক্রিপ্টে object তৈরি হলে সেটা একটা prototype এর সাথে connected থাকে। যখন তুমি কোনো object এ এমন কোনো property বা method খুঁজো যা সেখানে নেই, জাভাস্ক্রিপ্ট বলে:

> "আচ্ছা দেখি তার prototype এর মধ্যে আছে কিনা।"

সেখানে না পেলে আবার সেই prototype এর prototype এ খোঁজে... এভাবে লম্বা সারি তৈরি হয়, যাকে বলে **Prototype Chain**।

### উদাহরণ:

```javascript
const parent = {
  greet() {
    return "Hello!";
  }
};

const child = Object.create(parent);
console.log(child.greet());  // Hello!
```

**ব্যাখ্যা:**
- `child` object এর ভেতরে `greet()` নেই
- তারপরও `child.greet()` কাজ করে
- কারণ `child` তার prototype (parent) থেকে method টা পেয়ে যায়

**Chain:**
```
child → parent → Object.prototype → null
```

### Class দিয়েও Same System:

```javascript
class Animal {
  walk() {
    console.log("Walking...");
  }
}

const dog = new Animal();
dog.walk();  // parent class থেকে inherit
```

বাইরে থেকে দেখে মনে হয় class inheritance, কিন্তু ভেতরে ভেতরে:
```javascript
dog.__proto__ === Animal.prototype  // true
```

মানে আবার সেই prototypical inheritance!

### সংক্ষেপে:

- Object আরেক object থেকে গুণাগুণ নেয়
- Copy লাগে না, link দিয়েই পাওয়া যায়
- সারিবদ্ধভাবে "prototype chain" ধরে খোঁজ চলে

এই system টাই জাভাস্ক্রিপ্টকে flexible, dynamic আর conceptually আলাদা করে।

---

## Question 3: Person Object এবং Prototype Check

### Answer:

```javascript
const person = {
  name: "Sahin"
};

// Step 1: প্রোটোটাইপ দেখানো
console.log(person.__proto__);

// Step 2: প্রোটোটাইপের মেথড ব্যবহার
const result = person.hasOwnProperty("name");
console.log(result);  // true
```

**আউটপুট:**
```javascript
// Step 1 এর output:
{
  constructor: ƒ Object()
  hasOwnProperty: ƒ hasOwnProperty()
  toString: ƒ toString()
  valueOf: ƒ valueOf()
  // ... আরও methods
}

// Step 2 এর output:
true
```

**ব্যাখ্যা:**
- `person` object এর নিজের কোনো method নেই
- কিন্তু prototype এ অনেক method আছে
- `hasOwnProperty()` একটা prototype method
- এটা check করে property object এর নিজের কিনা

### আরও Examples:

```javascript
const person = {
  name: "Sahin"
};

// Prototype methods ব্যবহার
console.log(person.toString());        // [object Object]
console.log(person.valueOf());         // {name: "Sahin"}
console.log(person.hasOwnProperty("name"));  // true
console.log(person.hasOwnProperty("age"));   // false
```

---

## Question 4: toString Method Without Writing

### Question:
তুই `student` নামে একটা object বানাইলি। এই object এর মধ্যে কোনো `toString` নামে method লিখলি না। তাহলে তুই কি `student.toString()` use করতে পারবি? কেন পারবি?

### Answer:

হ্যাঁ, পারবো! যদিও `student` object এর ভিতরে `toString` method লেখা নেই, তারপরও `student.toString()` কাজ করবে।

**কারণ:** জাভাস্ক্রিপ্ট prototype chain এর উপর দিয়ে `Object.prototype` থেকে `toString` method inherit করে নেয়।

### উদাহরণ:

```javascript
const student = {
  name: "Sahin",
  age: 20
};

// toString method নেই, তবুও কাজ করবে
console.log(student.toString());  // [object Object]
```

**কিভাবে পাওয়া যায়:**

```
student object
    ↓ (খুঁজলো, নেই)
student.__proto__ (Object.prototype)
    ↓ (পেয়ে গেলো!)
toString() method
```

### Proof:

```javascript
const student = {
  name: "Sahin"
};

// student এর নিজের কিনা check
console.log(student.hasOwnProperty("toString"));  // false

// Prototype এ আছে কিনা check
console.log(student.__proto__.hasOwnProperty("toString"));  // true

// Use করা যায়
console.log(student.toString());  // [object Object]
```

### Custom toString:

```javascript
const student = {
  name: "Sahin",
  age: 20,
  toString() {
    return `Student: ${this.name}, Age: ${this.age}`;
  }
};

console.log(student.toString());
// Student: Sahin, Age: 20
```

এখন নিজের `toString` আছে, তাই prototype এর টা use হবে না।

---

## Prototype Chain Visualization

```javascript
const obj = { name: "Sahin" };

console.log(obj.__proto__ === Object.prototype);  // true
console.log(Object.prototype.__proto__);  // null
```

**Visual:**
```
obj
 │
 └──> Object.prototype
        │
        └──> null
```

### Class এর ক্ষেত্রে:

```javascript
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const myDog = new Dog();
```

**Prototype Chain:**
```
myDog
 │
 └──> Dog.prototype
       │
       └──> Animal.prototype
             │
             └──> Object.prototype
                   │
                   └──> null
```

---

## Common Prototype Methods

### 1. hasOwnProperty()

```javascript
const obj = { name: "Sahin" };
console.log(obj.hasOwnProperty("name"));      // true
console.log(obj.hasOwnProperty("toString"));  // false
```

### 2. toString()

```javascript
const obj = { name: "Sahin" };
console.log(obj.toString());  // [object Object]
```

### 3. valueOf()

```javascript
const obj = { value: 42 };
console.log(obj.valueOf());  // { value: 42 }
```

### 4. isPrototypeOf()

```javascript
const parent = { name: "Parent" };
const child = Object.create(parent);

console.log(parent.isPrototypeOf(child));  // true
```

---

## মনে রাখার বিষয়

- JavaScript এ inheritance হয় prototype দিয়ে
- Prototype chain = object → prototype → prototype → ... → null
- Object এ method না থাকলে prototype chain ধরে খোঁজা হয়
- `Object.prototype` এ অনেক built-in methods আছে
- `__proto__` দিয়ে prototype access করা যায়
- নিজের property check: `hasOwnProperty()`
- Class syntax ও internally prototype use করে