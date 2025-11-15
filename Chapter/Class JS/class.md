# JavaScript Class

---

## Example 01: Basic Class

```javascript
class Player {
  constructor(name, runs, wickets) {
    this.name = name;
    this.runs = runs;
    this.wickets = wickets;
  }
}

const sahin = new Player("Sahin", 500, 20);
console.log(sahin);

const rakib = new Player("Rakib", 50, 2);
console.log(rakib);
```

**আউটপুট:**
```javascript
Player { name: 'Sahin', runs: 500, wickets: 20 }
Player { name: 'Rakib', runs: 50, wickets: 2 }
```

**ব্যাখ্যা:**
- `class Player` - একটা template
- `constructor` - object তৈরি করার সময় চলে
- `new Player()` - নতুন object তৈরি

---

## Example 02: Default Value সহ

```javascript
class FoodOrder {
  constructor(customer, food, price) {
    this.vendor = 'Panda';  // Default value
    this.customer = customer;
    this.food = food;
    this.price = price;
  }
}

const order1 = new FoodOrder("Sahin", "Pizza", 1300);
const order2 = new FoodOrder("Hassan", "Burger", 34000);

console.log(order1);
console.log(order2);
```

**আউটপুট:**
```javascript
FoodOrder { vendor: 'Panda', customer: 'Sahin', food: 'Pizza', price: 1300 }
FoodOrder { vendor: 'Panda', customer: 'Hassan', food: 'Burger', price: 34000 }
```

### instanceof Check

```javascript
console.log(order1 instanceof FoodOrder);  // true
console.log({age: 19} instanceof FoodOrder);  // false
```

`instanceof` check করে object কোন class থেকে তৈরি।

---

## Problem 01: Class vs Object

**Class:**
- একটি template যা থেকে একই টাইপের একাধিক object তৈরি করা যায়
- প্রতিটি object এর মধ্যে একই বৈশিষ্ট্য থাকবে
- বড় data management এর জন্য সুবিধাজনক

**Object:**
- নিজেদের মতো customize করে তৈরি করা
- প্রতিটি object আলাদাভাবে তৈরি করতে হয়
- অনেক বড় data management এর জন্য সুবিধার না

**উদাহরণ:**

```javascript
// Class - Template
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// Object - Manual
const car3 = {brand: "Toyota", model: "Corolla"};
const car4 = {brand: "Honda", model: "Civic"};
```

---

## Problem 02: Instance কি?

আমরা যখন `class` keyword ব্যবহার করে কোন একটা template তৈরি করি তখন সেটা একটা template হিসেবে থাকে। যখন আমরা `new` keyword ব্যবহার করে ওই class থেকে কোন একটা object তৈরি করি তখন সেটা আগের class template এর instance হয়।

**সহজ কথায়:**
কোন একটা template থেকে তৈরি একটা object কে ওই template এর instance বলে।

```javascript
class Phone {
  constructor(brand) {
    this.brand = brand;
  }
}

const myPhone = new Phone("Samsung");
// myPhone হলো Phone class এর একটা instance
```

---

## Problem 03: Vehicle Class

```javascript
class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const bmwx5 = new Vehicle("BMW", "X5", 60000);
const tesla = new Vehicle("Tesla", "Model3", 40000);

console.log(bmwx5);
console.log(tesla);
```

**আউটপুট:**
```javascript
Vehicle { brand: 'BMW', model: 'X5', price: 60000 }
Vehicle { brand: 'Tesla', model: 'Model3', price: 40000 }
```

---

## Problem 04: Worker Class

```javascript
class Worker {
  constructor(id, name, hoursWorked) {
    this.id = id;
    this.name = name;
    this.hoursWorked = hoursWorked;
  }
}

const rasel = new Worker(101, "Rasel", 40);
console.log(rasel);
```

**আউটপুট:**
```javascript
Worker { id: 101, name: 'Rasel', hoursWorked: 40 }
```

---

## Problem 05: Library Class with instanceof

```javascript
class Library {
  constructor(name, books, location) {
    this.name = name;
    this.books = books;
    this.location = location;
  }
}

const newLibrary = new Library("Central Library", 1000, "Dhaka");
console.log(newLibrary);

console.log(newLibrary instanceof Library);
```

**আউটপুট:**
```javascript
Library { name: 'Central Library', books: 1000, location: 'Dhaka' }
true
```

---

## Problem 06: Empty Array Property

```javascript
class Classroom {
  constructor(section, teacher) {
    this.students = [];  // Empty array
    this.section = section;
    this.teacher = teacher;
  }
}

const teacher1 = new Classroom("A", "Mr. Plumber");
console.log(teacher1);
```

**আউটপুট:**
```javascript
Classroom { students: [], section: 'A', teacher: 'Mr. Plumber' }
```

---

## Problem 07: Product Class

```javascript
class Product {
  constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}

const product1 = new Product("Mobile", "Electronic", 50);
console.log(product1);
```

**আউটপুট:**
```javascript
Product { name: 'Mobile', category: 'Electronic', stock: 50 }
```

---

## Problem 08: Ignoring Parameter

```javascript
class Product {
  constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = 0;  // Always 0, parameter ignored
  }
}

const product1 = new Product("Mobile", "Electronic", 50);
console.log(product1);
```

**আউটপুট:**
```javascript
Product { name: 'Mobile', category: 'Electronic', stock: 0 }
```

**লক্ষ্য করো:** parameter এ 50 দিলেও stock সবসময় 0 হচ্ছে।

---

## Class এর গুরুত্বপূর্ণ বিষয়

### 1. Constructor

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

Constructor object তৈরি হওয়ার সময় automatically চলে।

### 2. this Keyword

```javascript
class User {
  constructor(name) {
    this.name = name;  // this = current object
  }
}
```

`this` মানে current object।

### 3. Multiple Objects

```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
}

const s1 = new Student("Sahin");
const s2 = new Student("Kamrul");
const s3 = new Student("Rasel");
```

একই class থেকে অনেকগুলো object তৈরি করা যায়।

### 4. Default Values

```javascript
class Config {
  constructor(name) {
    this.name = name;
    this.version = "1.0";  // Default
    this.active = true;    // Default
  }
}
```

---

## Class Methods (Bonus)

Class এ function ও থাকতে পারে:

```javascript
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  
  add() {
    return this.num1 + this.num2;
  }
  
  multiply() {
    return this.num1 * this.num2;
  }
}

const calc = new Calculator(5, 3);
console.log(calc.add());       // 8
console.log(calc.multiply());  // 15
```

---

## মনে রাখার বিষয়

- `class` = Template তৈরি করে
- `constructor` = Object তৈরির সময় চলে
- `new` = নতুন object তৈরি করে
- `this` = Current object
- `instanceof` = Object কোন class থেকে এসেছে check করে
- Default value দেওয়া যায়
- একই class থেকে অনেক object তৈরি করা যায়