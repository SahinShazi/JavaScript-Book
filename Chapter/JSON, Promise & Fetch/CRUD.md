# JavaScript CRUD Operations

---

## Example 01: Read/Get - Data পড়া

```javascript
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**আউটপুট:** সব users এর list আসবে।

---

## Example 02: Create/Post - নতুন Data তৈরি

```javascript
const url = 'https://jsonplaceholder.typicode.com/users';

const user = {
  name: "Sahin",
  email: 'rksahinrone@gmail.com'
};

const options = {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-type': 'application/json',
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**আউটপুট:** নতুন user এর data return হবে।

---

## Example 03: Update/Put - সম্পূর্ণ Update

```javascript
const url = 'https://jsonplaceholder.typicode.com/users/2';

const users = {
  name: "Sahin Enam",
  email: 'sahin.enam@gmail.com'
};

const options = {
  method: 'PUT',
  body: JSON.stringify(users),
  headers: {
    "Content-type": "application/json",
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**আউটপুট:** Updated user data আসবে।

---

## Example 04: Delete - Data মুছে ফেলা

```javascript
const url = 'https://jsonplaceholder.typicode.com/users/1';

const options = {
  method: "DELETE",
};

fetch(url, options)
  .then(res => res.json())
  .then(data => console.log('Deleted:', data))
  .catch(error => console.error(error));
```

**আউটপুট:** Empty object `{}` return হবে।

---

## Practice Questions

### ১. প্রোফাইল সিঙ্গেল নাকি মেরিড, এই টাইপের ডাটা চেইঞ্জ করলে PUT না PATCH হবে?

**Answer:** PATCH ব্যবহার করা উচিত, কারণ এটি ডাটার একটি নির্দিষ্ট অংশ আপডেট করে। PUT সম্পূর্ণ রিসোর্স প্রতিস্থাপন করে, যেখানে PATCH শুধুমাত্র ডাটার একটি অংশ সংশোধন করে।

**উদাহরণ:**
```javascript
// PATCH - শুধু status change
fetch('https://api.example.com/users/1', {
  method: 'PATCH',
  body: JSON.stringify({ status: 'married' }),
  headers: { 'Content-type': 'application/json' }
})
```

---

### ২. ডাটাবেজে নতুন ইনফরমেশন যোগ করার জন্য কোন HTTP মেথড ব্যবহৃত হয়?

**Answer:** POST HTTP মেথড ব্যবহার করা হয়। এই মেথডটি সার্ভারে নতুন ডেটা, যেমন নাম, ইমেইল বা অন্যান্য তথ্য যোগ করার জন্য ব্যবহৃত হয়।

---

### ৩. একটা ওয়েবসাইটে যখন ভিডিও দেখতে যাবি, তখন কী ধরনের অপারেশন হয়?

**Answer:** HTTP এর GET method ব্যবহার করে ডাটা বা ভিডিও সার্ভার থেকে আনা হয়। এবং সেটা আমরা user interface হিসেবে ভিডিও দেখতে পারি।

---

### ৪. CRUD কী জিনিস?

**Answer:** CRUD হলো 'Create', 'Read', 'Update', এবং 'Delete' - এই চারটি মৌলিক অপারেশনের সংক্ষিপ্ত রূপ, যা ডেটাবেসে ডেটা পরিচালনা করতে ব্যবহৃত হয়।

| অপারেশন | HTTP Method | কাজ |
|---------|-------------|-----|
| Create | POST | নতুন data তৈরি |
| Read | GET | Data পড়া |
| Update | PUT/PATCH | Data আপডেট |
| Delete | DELETE | Data মুছে ফেলা |

---

### ৫. HTTP-এর মেথড কী কী আছে? কোনটা কী কাজ করে?

**Answer:** 

- **GET** - সার্ভার থেকে ডাটা আনার জন্য
- **POST** - সার্ভারে ডাটা পাঠানোর জন্য
- **PUT** - সার্ভারের কোন একটা জিনিস সম্পূর্ণভাবে আপডেট করা
- **PATCH** - সার্ভারের কোন একটা ডেটা আংশিক আপডেট করা
- **DELETE** - সার্ভার থেকে ডাটা মুছে ফেলা

---

## PUT vs PATCH পার্থক্য

### PUT - সম্পূর্ণ Replace

```javascript
// পুরো user object replace হবে
fetch('https://api.example.com/users/1', {
  method: 'PUT',
  body: JSON.stringify({
    name: "Sahin",
    email: "sahin@gmail.com",
    age: 25,
    city: "Dhaka"
  }),
  headers: { 'Content-type': 'application/json' }
})
```

### PATCH - আংশিক Update

```javascript
// শুধু name change হবে, বাকি সব same থাকবে
fetch('https://api.example.com/users/1', {
  method: 'PATCH',
  body: JSON.stringify({
    name: "Sahin Updated"
  }),
  headers: { 'Content-type': 'application/json' }
})
```

---

## CRUD এর সহজ উদাহরণ

### একটা Todo App এ CRUD:

```javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Create - নতুন todo যোগ করা
async function addTodo() {
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ title: 'New Task', completed: false }),
    headers: { 'Content-type': 'application/json' }
  });
  const data = await response.json();
  console.log('Added:', data);
}

// Read - সব todo দেখা
async function getTodos() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log('All Todos:', data);
}

// Update - todo edit করা
async function updateTodo() {
  const response = await fetch(`${apiUrl}/1`, {
    method: 'PUT',
    body: JSON.stringify({ title: 'Updated Task', completed: true }),
    headers: { 'Content-type': 'application/json' }
  });
  const data = await response.json();
  console.log('Updated:', data);
}

// Delete - todo মুছে ফেলা
async function deleteTodo() {
  const response = await fetch(`${apiUrl}/1`, {
    method: 'DELETE'
  });
  console.log('Deleted');
}
```

---

## মনে রাখার সহজ উপায়

**CRUD = Create, Read, Update, Delete**

- **C** = POST (নতুন বানাও)
- **R** = GET (পড়ো/দেখো)
- **U** = PUT/PATCH (পরিবর্তন করো)
- **D** = DELETE (মুছে ফেলো)

**PUT vs PATCH:**
- PUT = পুরোটা বদলাও
- PATCH = একটু বদলাও