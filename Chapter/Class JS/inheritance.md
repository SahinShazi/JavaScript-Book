# JavaScript Inheritance

---

## Problem 01: Gadget Inheritance

### Parent Class

```javascript
class Gadget {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
```

### Child Class: Laptop

```javascript
class Laptop extends Gadget {
  constructor(brand, model, price, keyboardLight) {
    super(brand, model, price);
    this.keyboardLight = keyboardLight;
  }
}

const myLaptop = new Laptop("Dell", "XPS 15", 15000, true);
console.log(myLaptop.brand);           // Dell
console.log(myLaptop.model);           // XPS 15
console.log(myLaptop.price);           // 15000
console.log(myLaptop.keyboardLight);   // true
```

### Child Class: Phone

```javascript
class Phone extends Gadget {
  constructor(brand, model, price, hasFaceUnlock) {
    super(brand, model, price);
    this.hasFaceUnlock = hasFaceUnlock;
  }
}

const myPhone = new Phone("Apple", "iPhone 14", 999, true);
console.log(myPhone.brand);          // Apple
console.log(myPhone.hasFaceUnlock);  // true
```

### Child Class: Tablet

```javascript
class Tablet extends Gadget {
  constructor(brand, model, price, hasPen) {
    super(brand, model, price);
    this.hasPen = hasPen;
  }
}

const myTablet = new Tablet("Samsung", "Galaxy Tab S8", 700, true);
console.log(myTablet.brand);   // Samsung
console.log(myTablet.hasPen);  // true
```

**ব্যাখ্যা:**
- `extends` - Parent class থেকে inherit করে
- `super()` - Parent এর constructor call করে
- Laptop, Phone, Tablet সবাই Gadget এর properties পায়

---

## Problem 02: Inheritance কি?

Inheritance হল, যখন কোন parent class থেকে কোন property নিয়ে কোন child class এ ব্যবহার করা হয় তখন সেটাকে inheritance বলে। 

**সহজ কথায়:** Parent class থেকে যে অধিকার পায় child class সেটাই inheritance।

### উদাহরণ:

```javascript
// Parent
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Child - Person এর সব কিছু পায়
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}

const student = new Student("Sahin", "A");
console.log(student.name);   // Parent থেকে পাওয়া
console.log(student.grade);  // নিজের property
```

---

## Problem 03: Inheritance কেন ব্যবহার করি?

এমন কিছু class property আছে যেগুলো সবগুলো class এই same অর্থাৎ repeat হয়। ঐরকম property গুলোকে একটা parent class এর ভিতরে রাখা হয় এবং সেখান থেকে `extends` keyword এর মাধ্যমে child class এ ব্যবহার করা হয়।

### Without Inheritance (Code Repeat):

```javascript
class Laptop {
  constructor(brand, model, price, keyboardLight) {
    this.brand = brand;      // Repeat
    this.model = model;      // Repeat
    this.price = price;      // Repeat
    this.keyboardLight = keyboardLight;
  }
}

class Phone {
  constructor(brand, model, price, hasFaceUnlock) {
    this.brand = brand;      // Repeat
    this.model = model;      // Repeat
    this.price = price;      // Repeat
    this.hasFaceUnlock = hasFaceUnlock;
  }
}
```

### With Inheritance (No Repeat):

```javascript
class Gadget {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

class Laptop extends Gadget {
  constructor(brand, model, price, keyboardLight) {
    super(brand, model, price);  // Parent থেকে নিলাম
    this.keyboardLight = keyboardLight;
  }
}

class Phone extends Gadget {
  constructor(brand, model, price, hasFaceUnlock) {
    super(brand, model, price);  // Parent থেকে নিলাম
    this.hasFaceUnlock = hasFaceUnlock;
  }
}
```

---

## Problem 04: Vehicle Inheritance

### Parent Class

```javascript
class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
```

### Child Class: Bus

```javascript
class Bus extends Vehicle {
  constructor(brand, model, price, chaka) {
    super(brand, model, price);
    this.chaka = chaka;
  }
}

const myBus = new Bus("ABC", "XY12", 4829, 4);
console.log(myBus.brand);   // ABC
console.log(myBus.chaka);   // 4
console.log(myBus.price);   // 4829
```

### Child Class: Truck

```javascript
class Truck extends Vehicle {
  constructor(brand, model, price, size) {
    super(brand, model, price);
    this.size = size;
  }
}

const myTruck = new Truck("VBV", "ZT12", 4000, "123*474");
console.log(myTruck.brand);  // VBV
console.log(myTruck.size);   // 123*474
```

### Child Class: Bike

```javascript
class Bike extends Vehicle {
  constructor(brand, model, price, engine) {
    super(brand, model, price);
    this.engine = engine;
  }
}

const myBike = new Bike("GGHH", "GJ173", 88000, "V8");
console.log(myBike.brand);   // GGHH
console.log(myBike.engine);  // V8
```

---

## Problem 05: Animal Inheritance

### Parent Class

```javascript
class Perani {
  constructor(name, place, child) {
    this.name = name;
    this.place = place;
    this.child = child;
  }
}
```

### Child Class: Animal

```javascript
class Animal extends Perani {
  constructor(name, place, child, hasFood) {
    super(name, place, child);
    this.hasFood = hasFood;
  }
}

const myAni = new Animal("Gsh", "bagan", 5, false);
console.log(myAni.name);   // Gsh
console.log(myAni.child);  // 5
```

### Child Class: Bird

```javascript
class Bird extends Perani {
  constructor(name, place, child, hasPhaka) {
    super(name, place, child);
    this.hasPhaka = hasPhaka;
  }
}

const myB = new Bird("hafj", "bgan", 10, true);
console.log(myB.name);      // hafj
console.log(myB.hasPhaka);  // true
```

### Child Class: Fish

```javascript
class Fish extends Perani {
  constructor(name, place, child, hasWater) {
    super(name, place, child);
    this.hasWater = hasWater;
  }
}

const myF = new Fish("Mas", "water", 638, true);
console.log(myF.name);      // Mas
console.log(myF.hasWater);  // true
```

---

## Problem 06: Furniture Inheritance

### Parent Class

```javascript
class Furniture {
  constructor(quantity, type, item) {
    this.quantity = quantity;
    this.type = type;
    this.item = item;
  }
}
```

### Child Class: Chair

```javascript
class Chair extends Furniture {
  constructor(quantity, type, item, hasKat) {
    super(quantity, type, item);
    this.hasKat = hasKat;
  }
}

const myChair = new Chair("70%", "kat", 6, "Yes");
console.log(myChair.quantity);  // 70%
console.log(myChair.item);      // 6
console.log(myChair.hasKat);    // Yes
console.log(myChair.type);      // kat
```

### Child Class: Table

```javascript
class Table extends Furniture {
  constructor(quantity, type, item, hasChak) {
    super(quantity, type, item);
    this.hasChak = hasChak;
  }
}

const myT = new Table("100%", "bgan", 10, true);
console.log(myT.quantity);  // 100%
console.log(myT.item);      // 10
```

---

## Problem 07: DRY Principle

**DRY** মানে হলো **"Don't Repeat Yourself"**।

একই code বার বার লিখা যাবে না।

### Without DRY (Bad):

```javascript
class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

class Bike {
  constructor(brand, model, price) {
    this.brand = brand;  // Repeat!
    this.model = model;  // Repeat!
    this.price = price;  // Repeat!
  }
}
```

### With DRY (Good):

```javascript
class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

class Car extends Vehicle {}
class Bike extends Vehicle {}
```

Inheritance ব্যবহার করে DRY principle follow করা হয়।

---

## Inheritance এর Key Points

### 1. extends Keyword

```javascript
class Child extends Parent {
  // Child এখন Parent এর সব কিছু পায়
}
```

### 2. super() Call

```javascript
class Child extends Parent {
  constructor(param1, param2) {
    super(param1);  // Parent এর constructor
    this.param2 = param2;  // Child এর নিজের
  }
}
```

### 3. Method Inheritance

```javascript
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {}

const child = new Child();
child.greet();  // Hello from Parent
```

---

## Real-World Example: User System

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  constructor(name, email, permissions) {
    super(name, email);
    this.permissions = permissions;
  }
  
  deleteUser() {
    console.log("User deleted");
  }
}

class Customer extends User {
  constructor(name, email, cart) {
    super(name, email);
    this.cart = cart;
  }
  
  addToCart(item) {
    this.cart.push(item);
  }
}

const admin = new Admin("Sahin", "sahin@example.com", ["read", "write"]);
admin.login();  // Parent method
admin.deleteUser();  // Own method

const customer = new Customer("Kamrul", "kamrul@example.com", []);
customer.login();  // Parent method
customer.addToCart("Laptop");  // Own method
```

---

## মনে রাখার বিষয়

- `extends` - Parent থেকে inherit করে
- `super()` - Parent constructor call করে
- Child class, Parent এর সব properties এবং methods পায়
- Code repeat এড়ানোর জন্য inheritance ব্যবহার করি
- DRY = Don't Repeat Yourself
- একটা parent, অনেকগুলো child থাকতে পারে