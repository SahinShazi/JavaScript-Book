# JavaScript Class Methods

---

## Problem 01: Get Method

```javascript
class Player {
  constructor(name, runs, wickets) {
    this.name = name;
    this.runs = runs;
    this.wickets = wickets;
  }
  getRun() {
    return this.runs;
  }
}

const player1 = new Player("Tamim", 500, 100);
const tamimRun = player1.getRun();
console.log(tamimRun);
```

**আউটপুট:**
```
500
```

Method দিয়ে data access করা হচ্ছে।

---

## Problem 02: Update Method

```javascript
class Player {
  constructor(name, runs, wickets) {
    this.name = name;
    this.runs = runs;
    this.wickets = wickets;
  }
  addRun(run) {
    this.runs = this.runs + run;
  }
}

const player1 = new Player("Sahin", 500, 100);
player1.addRun(200);
player1.addRun(200);
console.log(player1);
```

**আউটপুট:**
```javascript
Player { name: 'Sahin', runs: 900, wickets: 100 }
```

**ব্যাখ্যা:**
- প্রথমে: 500 + 200 = 700
- দ্বিতীয়বার: 700 + 200 = 900

---

## Problem 03: Bank Account with Multiple Methods

```javascript
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  
  deposit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
  
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
      return amount;
    } else {
      return "Insufficient Balance";
    }
  }
}

const myAccount = new BankAccount("Sahin", 500);

myAccount.deposit(500);
console.log(myAccount);
// BankAccount { owner: 'Sahin', balance: 1000 }

myAccount.deposit(1000);
console.log(myAccount);
// BankAccount { owner: 'Sahin', balance: 2000 }

console.log(myAccount.withdraw(3000));
// Insufficient Balance

console.log(myAccount.withdraw(500));
// 500

console.log(myAccount);
// BankAccount { owner: 'Sahin', balance: 1500 }
```

**ব্যাখ্যা:**
- `deposit()` - টাকা জমা করে
- `withdraw()` - টাকা তুলতে দেয় (যদি balance থাকে)

---

## Problem 04: Get Name Method

```javascript
class Hotel {
  constructor(name, rooms, nightPrice) {
    this.name = name;
    this.rooms = rooms;
    this.nightPrice = nightPrice;
  }
  getName() {
    return this.name;
  }
}

const hotel = new Hotel("Shamaama", 45, 5000);
const hotelName = hotel.getName();
console.log(hotelName);
```

**আউটপুট:**
```
Shamaama
```

---

## Problem 05: Get Salary Method

```javascript
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

const person1 = new Employee("Sahin", "A", 180000);
console.log(person1.getSalary());
```

**আউটপুট:**
```
180000
```

---

## Problem 06: Library with Array Methods

```javascript
class Library {
  constructor() {
    this.books = [];
  }
  
  addBook(book) {
    this.books.push(book);
  }
  
  hasBook(book) {
    return this.books.includes(book);
  }
}

const library = new Library();
library.addBook("JavaScript");
library.addBook("Python");
library.addBook("Java");
console.log(library);

console.log(library.hasBook("Python"));
console.log(library.hasBook("Java"));
```

**আউটপুট:**
```javascript
Library { books: [ 'JavaScript', 'Python', 'Java' ] }
true
true
```

**ব্যাখ্যা:**
- `addBook()` - array তে book যোগ করে
- `hasBook()` - book আছে কিনা check করে

---

## Problem 07: Shopping Cart

```javascript
class ShoppingCart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }
  
  addToCart(name, price) {
    this.products.push(name);
    this.totalPrice = this.totalPrice + price;
  }
  
  getTotalPrice() {
    return this.totalPrice;
  }
}

const shop1 = new ShoppingCart();
shop1.addToCart("Vivo", 400);
shop1.addToCart("iPhone", 12000);
shop1.addToCart("Oppo", 4400);
console.log(shop1);
```

**আউটপুট:**
```javascript
ShoppingCart {
  products: [ 'Vivo', 'iPhone', 'Oppo' ],
  totalPrice: 16800
}
```

---

## Method Types

### 1. Get Method (Data Return করে)

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
```

### 2. Set/Update Method (Data Change করে)

```javascript
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
```

### 3. Calculation Method (Calculation করে)

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
```

### 4. Validation Method (Check করে)

```javascript
class User {
  constructor(age) {
    this.age = age;
  }
  isAdult() {
    return this.age >= 18;
  }
}
```

---

## Real-World Example: Todo App

```javascript
class TodoList {
  constructor() {
    this.todos = [];
  }
  
  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false
    });
  }
  
  completeTodo(index) {
    if (this.todos[index]) {
      this.todos[index].completed = true;
    }
  }
  
  getTodos() {
    return this.todos;
  }
  
  getCompletedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
}

const myTodos = new TodoList();
myTodos.addTodo("Learn JavaScript");
myTodos.addTodo("Build a project");
myTodos.completeTodo(0);

console.log(myTodos.getTodos());
console.log("Completed:", myTodos.getCompletedCount());
```

---

## Method vs Function

### Function (বাইরে)

```javascript
function greet(name) {
  return `Hello ${name}`;
}
```

### Method (Class এর ভিতরে)

```javascript
class Greeter {
  greet(name) {
    return `Hello ${name}`;
  }
}
```

Method হলো class এর ভিতরের function।

---

## this Keyword in Methods

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  getDetails() {
    return `${this.name} costs ${this.price}`;
  }
  
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100);
  }
}

const laptop = new Product("Laptop", 50000);
console.log(laptop.getDetails());  // Laptop costs 50000

laptop.applyDiscount(10);
console.log(laptop.getDetails());  // Laptop costs 45000
```

`this` দিয়ে class এর properties access করা যায়।

---

## Method Chaining

```javascript
class Calculator {
  constructor() {
    this.value = 0;
  }
  
  add(num) {
    this.value += num;
    return this;  // Return this for chaining
  }
  
  subtract(num) {
    this.value -= num;
    return this;
  }
  
  multiply(num) {
    this.value *= num;
    return this;
  }
  
  getResult() {
    return this.value;
  }
}

const calc = new Calculator();
const result = calc.add(10).subtract(3).multiply(2).getResult();
console.log(result);  // 14
```

---

## মনে রাখার বিষয়

- Method = Class এর ভিতরের function
- `this.property` দিয়ে class property access
- Method return করতে পারে বা নাও করতে পারে
- Method দিয়ে data get, set, calculate, validate করা যায়
- Multiple methods একসাথে থাকতে পারে
- Method chaining করা যায় (return this)