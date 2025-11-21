# JavaScript bind(), call(), apply()

এই তিনটা method দিয়ে আমরা `this` কে control করতে পারি।

---

## Problem 01: bind() Method

```javascript
const team = {
  name: "Argentina",
  players: 20,
  play() {
    console.log(`${this.name} team numbers is ${this.players}.`);
  }
}

team.play();

const tournament = {
  name: "Brazil",
  players: 30
}

const getTour = team.play.bind(tournament);
getTour();
```

**আউটপুট:**
```
Argentina team numbers is 20.
Brazil team numbers is 30.
```

**ব্যাখ্যা:**
- `team.play()` → `this` = team
- `bind(tournament)` → নতুন function তৈরি করে যেখানে `this` = tournament
- `getTour()` → `this` এখন tournament কে point করছে

---

## bind() কি?

`bind()` একটা **নতুন function** তৈরি করে যেখানে `this` permanently set করা থাকে।

### Syntax:
```javascript
const newFunc = originalFunc.bind(newThis);
```

### Example:
```javascript
const person = {
  name: "Sahin",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const anotherPerson = { name: "Kamrul" };

const greetKamrul = person.greet.bind(anotherPerson);
greetKamrul();  // Hello, I'm Kamrul
```

---

## Problem 02: call() Method

```javascript
const car = {
  name: "Car",
  speed: "45km/h",
  price: "10000$",
  drive() {
    console.log(`The ${this.name} price is ${this.price} and the ${this.name} speed is ${this.speed}`);
  }
}

car.drive();

const bike = {
  name: "Bike",
  speed: "70km/h",
  price: "4500$"
}

car.drive.call(bike);

const truck = {
  name: "Truck",
  speed: "60km/h",
  price: "60888$"
}

car.drive.call(truck);
```

**আউটপুট:**
```
The Car price is 10000$ and the Car speed is 45km/h
The Bike price is 4500$ and the Bike speed is 70km/h
The Truck price is 60888$ and the Truck speed is 60km/h
```

**ব্যাখ্যা:**
- `car.drive()` → `this` = car
- `car.drive.call(bike)` → `this` = bike
- `car.drive.call(truck)` → `this` = truck

---

## call() কি?

`call()` একটা function কে **immediately call** করে এবং `this` set করে দেয়।

### Syntax:
```javascript
func.call(newThis, arg1, arg2, ...);
```

### With Arguments:
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person = { name: "Sahin" };

greet.call(person, "Hello", "!");  // Hello, I'm Sahin!
```

---

## Problem 03: apply() Method

```javascript
const employee = {
  name: "John",
  role: "WRKR",
  details() {
    console.log(`My name is ${this.name}, and my role is ${this.role}`);
  }
}

employee.details();

const manager = {
  name: "Ferdous",
  role: "Manager"
}

employee.details.apply(manager);

const own = {
  name: "Sahin",
  role: "CEO"
}

employee.details.apply(own);
```

**আউটপুট:**
```
My name is John, and my role is WRKR
My name is Ferdous, and my role is Manager
My name is Sahin, and my role is CEO
```

**ব্যাখ্যা:**
- `employee.details()` → `this` = employee
- `employee.details.apply(manager)` → `this` = manager
- `employee.details.apply(own)` → `this` = own

---

## apply() কি?

`apply()` হলো `call()` এর মতই, কিন্তু arguments **array** হিসেবে নেয়।

### Syntax:
```javascript
func.apply(newThis, [arg1, arg2, ...]);
```

### With Arguments:
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person = { name: "Sahin" };

greet.apply(person, ["Hello", "!"]);  // Hello, I'm Sahin!
```

---

## Problem 04: apply() with Array

```javascript
const classroom = {
  name: "10MS",
  students: ['Sahin', 'John', 'Rakib'],
  attendance() {
    console.log(`The class name is ${this.name}: ${this.students.join(", ")}`);
  }
}

classroom.attendance();

const lab = {
  name: "Science Lab",
  students: ["Sahin", 'Rashel', 'Nahim', "Maruf", "Ferdus"]
}

classroom.attendance.apply(lab);
```

**আউটপুট:**
```
The class name is 10MS: Sahin, John, Rakib
The class name is Science Lab: Sahin, Rashel, Nahim, Maruf, Ferdus
```

---

## bind vs call vs apply তুলনা

| Method | কখন চলে | Arguments | Return করে |
|--------|---------|-----------|------------|
| `bind()` | পরে call করলে | Individual | নতুন function |
| `call()` | তখনই | Individual | Function এর result |
| `apply()` | তখনই | Array | Function এর result |

---

## Detailed Comparison

### bind() - নতুন Function তৈরি

```javascript
const person = {
  name: "Sahin",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

const anotherPerson = { name: "Kamrul" };

// নতুন function তৈরি
const greetKamrul = person.greet.bind(anotherPerson);

// পরে call করো
greetKamrul();  // Hello, Kamrul
greetKamrul();  // Hello, Kamrul (আবার call করা যায়)
```

### call() - সাথে সাথে Call

```javascript
const person = {
  name: "Sahin",
  greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
};

const anotherPerson = { name: "Kamrul" };

// তখনই call হয়ে যায়
person.greet.call(anotherPerson, "Hello");  // Hello, Kamrul
```

### apply() - Array Arguments

```javascript
const person = {
  name: "Sahin",
  greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
};

const anotherPerson = { name: "Kamrul" };

// Arguments array হিসেবে
person.greet.apply(anotherPerson, ["Hello", "!"]);  // Hello, Kamrul!
```

---

## Real-World Examples

### Example 1: Math.max with Array

```javascript
const numbers = [5, 10, 15, 20, 8];

// apply() ব্যবহার করে
const max = Math.max.apply(null, numbers);
console.log(max);  // 20

// Modern way (spread operator)
const max2 = Math.max(...numbers);
console.log(max2);  // 20
```

### Example 2: Borrowing Methods

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// array1 এর method কে array2 তে use করা
Array.prototype.push.apply(array1, array2);
console.log(array1);  // [1, 2, 3, 4, 5, 6]
```

### Example 3: Button Event Handler

```javascript
const button = {
  text: "Click Me",
  click() {
    console.log(`Button "${this.text}" clicked!`);
  }
};

// DOM element এ bind করা
document.querySelector('button').addEventListener('click', 
  button.click.bind(button)
);
```

---

## কখন কোনটা ব্যবহার করবে?

### bind() ব্যবহার করো যখন:
- পরে call করতে চাও
- Event handler এ
- Callback function এ
- `this` permanently set করতে চাও

```javascript
setTimeout(obj.method.bind(obj), 1000);
```

### call() ব্যবহার করো যখন:
- তখনই call করতে চাও
- কম arguments আছে
- Function borrowing এ

```javascript
func.call(newThis, arg1, arg2);
```

### apply() ব্যবহার করো যখন:
- তখনই call করতে চাও
- Arguments array তে আছে
- Variable number of arguments

```javascript
func.apply(newThis, [arg1, arg2]);
```

---

## Common Use Cases

### 1. Function Borrowing

```javascript
const user = {
  firstName: "Sahin",
  lastName: "Enam"
};

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

console.log(getFullName.call(user));  // Sahin Enam
```

### 2. Constructor Chaining

```javascript
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

const myDog = new Dog("Buddy", "Golden Retriever");
```

### 3. Finding Max/Min in Array

```javascript
const scores = [85, 92, 78, 95, 88];

const maxScore = Math.max.apply(null, scores);
const minScore = Math.min.apply(null, scores);

console.log(maxScore);  // 95
console.log(minScore);  // 78
```

---

## মনে রাখার সহজ উপায়

**bind** = Bind করে রাখো, পরে use করো
```javascript
const boundFunc = func.bind(obj);
boundFunc();  // পরে call
```

**call** = Call করো এখনই, arguments আলাদা আলাদা
```javascript
func.call(obj, arg1, arg2);  // এখনই
```

**apply** = Apply করো এখনই, arguments array তে
```javascript
func.apply(obj, [arg1, arg2]);  // এখনই
```

---

## Key Points

- তিনটাই `this` control করে
- `bind()` নতুন function দেয়
- `call()` এবং `apply()` সাথে সাথে চলে
- `call()` individual arguments নেয়
- `apply()` array arguments নেয়
- Method borrowing এ useful
- Event handlers এ `bind()` বেশি use হয়