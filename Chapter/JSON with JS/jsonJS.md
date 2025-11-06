# JavaScript JSON Guide

---

## Example 01: Basic JSON Conversion

### Object থেকে JSON String

```javascript
const user = {
  id: 1,
  name: 'Sahin',
  job: 'Web'
}

const userJSON = JSON.stringify(user);
console.log(userJSON);
```

**আউটপুট:**
```json
{"id":1,"name":"Sahin","job":"Web"}
```

দেখো, এটা একটা string হয়ে গেছে। সব কিছু ডাবল কোটে আছে।

---

## Example 02: Complex Object থেকে JSON

### Nested Object Convert করা

```javascript
const shop = {
  owner: "Alia",
  address: {
    street: "kochukhet voot er goli",
    city: "ranbir",
    county: "BD"
  },
  products: ["laptop", "mic", 'monitor', "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false
};

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
```

**আউটপুট:**
```json
{"owner":"Alia","address":{"street":"kochukhet voot er goli","city":"ranbir","county":"BD"},"products":["laptop","mic","monitor","keyboard"],"revenue":45000,"isOpen":true,"isNew":false}
```

### আবার Object এ ফিরিয়ে আনা

```javascript
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
```

এখন আবার normal JavaScript object হয়ে গেছে।

---

## Question 01: জাভাস্ক্রিপ্ট অবজেক্ট ও JSON এর পার্থক্য

JSON আর জাভাস্ক্রিপ্ট অবজেক্ট এর মধ্যে কিছু পার্থক্য রয়েছে।

**১. Property নামের ফরম্যাট:**
- JSON স্ট্রিং এর প্রপার্টি নামগুলো ডাবল কোটেশনে থাকে। জাভাস্ক্রিপ্টে থাকে না।

```javascript
// JavaScript Object
const user = {
  name: "Sahin",  // কোট ছাড়াই চলে
  age: 25
}

// JSON String
const userJSON = '{"name":"Sahin","age":25}';  // সব কিছু ডাবল কোটে
```

**২. Function থাকতে পারে না:**
- জাভাস্ক্রিপ্ট এর অবজেক্ট এর মধ্যে কোন প্রোপার্টির মান হিসেবে ফাংশন থাকতে পারে (যেটাকে আমরা মেথড বলে থাকি)। 
- তবে JSON এর মধ্যে ভ্যালু হিসেবে string, সংখ্যা, boolean, array, object থাকতে পারে। তবে ফাংশন থাকে না।

```javascript
// JavaScript Object - function থাকতে পারে
const user = {
  name: "Sahin",
  greet: function() {
    console.log("Hello");
  }
}

// JSON - function থাকতে পারে না
const userJSON = '{"name":"Sahin"}';  // greet function নেই
```

**৩. Quote এর ধরন:**
- জাভাস্ক্রিপ্ট অবজেক্ট লেখার সময় স্ট্রিং মানের জন্য সিঙ্গেল কোটেশন ব্যবহার করতে পারি।
- তবে JSON এর স্ট্রিং মানের জন্য ডাবল কোটেশন ব্যবহার করতে হয়।

```javascript
// JavaScript - single বা double যেকোনো একটা
const user = {
  name: 'Sahin',  // single quote
  city: "Dhaka"   // double quote
}

// JSON - শুধু double quote
const userJSON = '{"name":"Sahin","city":"Dhaka"}';
```

### পার্থক্য টেবিল:

| বৈশিষ্ট্য | JavaScript Object | JSON |
|---------|------------------|------|
| Property নাম | Quote লাগে না | ডাবল কোট লাগবে |
| String value | Single/Double কোট | শুধু ডাবল কোট |
| Function | থাকতে পারে | থাকতে পারে না |
| undefined | থাকতে পারে | থাকতে পারে না |
| Comments | দেওয়া যায় | দেওয়া যায় না |

---

## Problem 02: User Object with Order History

```javascript
const user = {
    name: "Sahin",
    email: "rksahinrone@gmail.com",
    address: "Bhola",
    orderHistory: ["Apple", "Banana", "Mango"]
}

const userJSON = JSON.stringify(user);
console.log(userJSON);
```

**আউটপুট:**
```json
{"name":"Sahin","email":"rksahinrone@gmail.com","address":"Bhola","orderHistory":["Apple","Banana","Mango"]}
```

---

## Problem 03: Shopping Cart

```javascript
const shoppingCart = {
    products: ["Phone", "Apple", "TV", "Watch", "Headphones"],
    totalPrice: 4000,
    user: {
        name: "Rhat",
        id: 173849829739,
        contact: 01838040051
    }
}

const shoppingJSON = JSON.stringify(shoppingCart);
console.log(shoppingJSON);
```

**আউটপুট:**
```json
{"products":["Phone","Apple","TV","Watch","Headphones"],"totalPrice":4000,"user":{"name":"Rhat","id":173849829739,"contact":1838040051}}
```

---

## Problem 04: Weather Forecast

```javascript
const weather = {
  city: "Dhaka",
  temperature: 28,
  humidity: 75,
  forecast: [
    { day: "আজ", temp: 28 },
    { day: "কাল", temp: 30 },
    { day: "পরশু", temp: 29 },
    { day: "আগামীকাল ২", temp: 31 },
    { day: "আগামীকাল ৩", temp: 32 },
    { day: "আগামীকাল ৪", temp: 33 },
    { day: "আগামীকাল ৫", temp: 34 }
  ]
};

const weatherJSON = JSON.stringify(weather);
console.log(weatherJSON);
```

**আউটপুট:**
```json
{"city":"Dhaka","temperature":28,"humidity":75,"forecast":[{"day":"আজ","temp":28},{"day":"কাল","temp":30},...]}
```

---

## Problem 05: Movie Details

```javascript
const movie = {
    title: "Topan",
    release: 2025,
    actors: ["Shakib", "Naika", "Rasel"],
    rating: 4.5
}

// Object থেকে JSON
const movieJSON = JSON.stringify(movie);
console.log(movieJSON);

// আবার JSON থেকে Object
const movieObj = JSON.parse(movieJSON);
console.log(movieObj);
```

**JSON Output:**
```json
{"title":"Topan","release":2025,"actors":["Shakib","Naika","Rasel"],"rating":4.5}
```

**Object Output:**
```javascript
{
  title: 'Topan',
  release: 2025,
  actors: [ 'Shakib', 'Naika', 'Rasel' ],
  rating: 4.5
}
```

---

## Problem 06: Project Management System

```javascript
const projects = [
  {
    name: "E-Commerce Website",
    description: "An online store for electronics and accessories.",
    teamMembers: ["Rahim", "Karim", "Amina"],
    deadline: "2025-12-31",
    tasks: [
      { 
          title: "Design UI",
          assignee: "Amina", 
          status: "Completed" 
      },
      { 
          title: "Develop Backend",
          assignee: "Karim", 
          status: "In Progress" 
      },
      { 
          title: "Setup Payment Gateway", 
          assignee: "Rahim", 
          status: "Pending"
      }
    ]
  },
  {
    name: "Mobile App",
    description: "A mobile app for food delivery service.",
    teamMembers: ["Tuhin", "Rafi", "Mona"],
    deadline: "2026-01-15",
    tasks: [
      { 
          title: "Create API", 
          assignee: "Tuhin", 
          status: "Completed" 
      },
      { 
          title: "Design App Layout", 
          assignee: "Mona", 
          status: "In Progress" 
      },
      { 
          title: "Testing", 
          assignee: "Rafi", 
          status: "Pending" 
      }
    ]
  }
];

const projectsJSON = JSON.stringify(projects);
console.log(projectsJSON);

console.log(JSON.parse(projectsJSON));
```

একটা complex nested structure - array এর মধ্যে object, object এর মধ্যে array। সব কিছু JSON এ convert হবে।

---

## Problem 07: Learning Platform Courses

```javascript
const courses = [
  {
    title: "JavaScript for Beginners",
    instructor: "Rahim Ahmed",
    duration: "6 hours",
    lessons: [
      { name: "Introduction to JavaScript", duration: "45 min", difficulty: "Beginner" },
      { name: "Variables and Data Types", duration: "1 hour", difficulty: "Beginner" },
      { name: "Functions and Loops", duration: "1.5 hours", difficulty: "Intermediate" }
    ]
  },
  {
    title: "Python Programming Masterclass",
    instructor: "Karim Hasan",
    duration: "10 hours",
    lessons: [
      { name: "Python Basics", duration: "1 hour", difficulty: "Beginner" },
      { name: "Object-Oriented Programming", duration: "2 hours", difficulty: "Intermediate" },
      { name: "File Handling and Error Management", duration: "1.5 hours", difficulty: "Advanced" }
    ]
  },
  {
    title: "Web Development Bootcamp",
    instructor: "Amina Sultana",
    duration: "12 hours",
    lessons: [
      { name: "HTML & CSS Fundamentals", duration: "2 hours", difficulty: "Beginner" },
      { name: "JavaScript Essentials", duration: "3 hours", difficulty: "Intermediate" },
      { name: "Backend with Node.js", duration: "4 hours", difficulty: "Advanced" }
    ]
  }
];

const jsonData = JSON.stringify(courses, null, 2);
console.log(jsonData);
```

**Note:** `JSON.stringify(courses, null, 2)` এখানে `2` মানে হলো 2 space indent করে সুন্দর করে দেখাবে।

**Formatted Output:**
```json
[
  {
    "title": "JavaScript for Beginners",
    "instructor": "Rahim Ahmed",
    "duration": "6 hours",
    "lessons": [
      {
        "name": "Introduction to JavaScript",
        "duration": "45 min",
        "difficulty": "Beginner"
      }
    ]
  }
]
```

---

## Problem 08: Product Reviews

```javascript
const productReviews = [
  {
    productName: "Wireless Headphones",
    reviewer: {
      name: "Rahim Ahmed",
      email: "rahim@example.com"
    },
    rating: 4.5,
    reviewText: "Sound quality is amazing, battery backup is great!"
  },
  {
    productName: "Smart Watch",
    reviewer: {
      name: "Karim Hasan",
      email: "karim@example.com"
    },
    rating: 4.0,
    reviewText: "Good value for money. Heart rate sensor works fine."
  },
  {
    productName: "Gaming Mouse",
    reviewer: {
      name: "Amina Sultana",
      email: "amina@example.com"
    },
    rating: 5.0,
    reviewText: "Very responsive and ergonomic design. Loved it!"
  }
];

// Object থেকে JSON
const productsJSON = JSON.stringify(productReviews, null, 2);
console.log(productsJSON);

// আবার JSON থেকে Array
const productsArray = JSON.parse(productsJSON);
console.log(productsArray);
```

---

## JSON Methods চিট শিট

### JSON.stringify() - Object থেকে JSON

```javascript
const obj = { name: "Sahin", age: 25 };

// Basic
const json1 = JSON.stringify(obj);
// Output: {"name":"Sahin","age":25}

// With indentation (সুন্দর করে)
const json2 = JSON.stringify(obj, null, 2);
// Output:
// {
//   "name": "Sahin",
//   "age": 25
// }

// With replacer (নির্দিষ্ট property)
const json3 = JSON.stringify(obj, ['name']);
// Output: {"name":"Sahin"}
```

### JSON.parse() - JSON থেকে Object

```javascript
const jsonString = '{"name":"Sahin","age":25}';

const obj = JSON.parse(jsonString);
console.log(obj.name);  // Sahin
console.log(obj.age);   // 25
```

---

## Common Use Cases

### ১. Local Storage এ Data Save করা

```javascript
const user = {
    name: "Sahin",
    email: "sahin@example.com"
};

// Save করার সময়
localStorage.setItem('user', JSON.stringify(user));

// পড়ার সময়
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name);
```

### ২. API তে Data পাঠানো

```javascript
const orderData = {
    product: "Phone",
    quantity: 2,
    price: 50000
};

fetch('https://api.example.com/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
});
```

### ৩. API থেকে Data নেওয়া

```javascript
fetch('https://api.example.com/users')
    .then(response => response.json())  // JSON.parse() এর মত
    .then(data => {
        console.log(data);
    });
```

---

## কিছু Important টিপস

### ১. Function Convert হয় না

```javascript
const obj = {
    name: "Sahin",
    greet: function() {
        console.log("Hello");
    }
};

const json = JSON.stringify(obj);
console.log(json);
// Output: {"name":"Sahin"}
// greet function হারিয়ে গেছে!
```

### ২. undefined Convert হয় না

```javascript
const obj = {
    name: "Sahin",
    age: undefined,
    city: "Dhaka"
};

const json = JSON.stringify(obj);
console.log(json);
// Output: {"name":"Sahin","city":"Dhaka"}
// age হারিয়ে গেছে!
```

### ৩. Date Object String হয়ে যায়

```javascript
const obj = {
    name: "Sahin",
    createdAt: new Date()
};

const json = JSON.stringify(obj);
console.log(json);
// Output: {"name":"Sahin","createdAt":"2025-11-06T10:30:00.000Z"}
```

### ৪. Circular Reference Error দেয়

```javascript
const obj = { name: "Sahin" };
obj.self = obj;  // নিজেকে নিজে point করছে

// JSON.stringify(obj);  // Error!
```

---

## মনে রাখার বিষয়

- `JSON.stringify()` - Object থেকে JSON string
- `JSON.parse()` - JSON string থেকে Object
- JSON এ property নাম ডাবল কোটে থাকে
- JSON এ function থাকতে পারে না
- undefined, function, symbol - এগুলো JSON এ convert হয় না
- Pretty print করতে: `JSON.stringify(obj, null, 2)`