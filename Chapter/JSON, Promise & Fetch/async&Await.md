# JavaScript async-await

---

## Example 01: Basic async-await

### Normal Function

```javascript
async function fetchData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

### Arrow Function

```javascript
const fetchData = async() => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

**আউটপুট:** User এর data console এ দেখাবে।

---

## Problem 01: async-await কেন ব্যবহার করা হয়?

**Answer:** 

async-await তখন ব্যবহার করা হয় যখন আমরা চাই আমাদের কোড সুন্দর হোক, পড়তে যাতে কষ্ট না হয়, ম্যানেজ করতে যাতে সহজ হয়।

- `async` একটি ফাংশনকে asynchronous ফাংশনে রূপান্তর করে। এই async ফাংশন promise return করে।
- `await` কোনো promise শেষ হওয়ার জন্য অপেক্ষা করে।

### Promise vs async-await তুলনা:

**Promise (then-catch):**
```javascript
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

**async-await (পড়তে সহজ):**
```javascript
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}
```

---

## Problem 02: fetchUser Function

```javascript
const fetchUsers = async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users/2';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error("Error:", error);
  }
}

fetchUsers();
```

**আউটপুট:** User ID 2 এর data।

---

## Problem 03: Callback Hell কী?

**Answer:** 

Callback hell বা Pyramid of Doom হলো কোড লেখার এমন একটা style যেটা পড়তে এবং ম্যানেজ করতে অনেক কষ্ট হয়!

### Callback Hell এর উদাহরণ:

```javascript
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        console.log(d);
      });
    });
  });
});
```

### সমাধান - async-await:

```javascript
async function getAllData() {
  const a = await getData();
  const b = await getMoreData(a);
  const c = await getMoreData(b);
  const d = await getMoreData(c);
  console.log(d);
}
```

অনেক পরিষ্কার এবং পড়তে সহজ!

---

## Problem 04: Callback vs async-await

### Callback Style (.then-catch)

```javascript
const url = "https://jsonplaceholder.typicode.com/posts?userId=1";

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### async-await Style

```javascript
const getPost = async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error('Error:', error);
  }
}

getPost();
```

**আউটপুট:** User 1 এর সব posts।

---

## Problem 05: try-catch-finally সহ

```javascript
const getCom = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/comments";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error("Error:", error);
  }
  finally {
    console.log("Request complete.");
  }
}

getCom();
```

**আউটপুট:** 
- সব comments
- শেষে "Request complete."

`finally` সবসময় চলবে, error থাকুক বা না থাকুক।

---

## Problem 06: Dynamic URL with Parameter

```javascript
async function getUser(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error("Error:", error);
  }
}

getUser(4);
```

**আউটপুট:** User ID 4 এর data।

Template string `` `${id}` `` দিয়ে dynamic করা হয়েছে।

---

## async-await এর Rules

### 1. async function সবসময় Promise return করে

```javascript
async function test() {
  return "Hello";
}

test().then(result => console.log(result)); // Hello
```

### 2. await শুধু async function এর ভিতরে কাজ করে

```javascript
// ভুল
function test() {
  await fetch(url); // Error!
}

// সঠিক
async function test() {
  await fetch(url); // ঠিক আছে
}
```

### 3. Multiple await একসাথে

```javascript
async function getData() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();
  
  console.log(user, posts, comments);
}
```

---

## Parallel vs Sequential

### Sequential (একটার পর একটা)

```javascript
async function getData() {
  const user = await fetchUser();     // 2 sec
  const posts = await fetchPosts();   // 2 sec
  // Total: 4 seconds
}
```

### Parallel (একসাথে)

```javascript
async function getData() {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
  // Total: 2 seconds (যেটা বেশি সময় নেয়)
}
```

---

## Real Examples

### Example 1: Multiple API Calls

```javascript
async function getUserWithPosts(userId) {
  try {
    // User data আনা
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userRes.json();
    
    // Posts আনা
    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await postsRes.json();
    
    console.log('User:', user.name);
    console.log('Total posts:', posts.length);
  } catch(error) {
    console.error('Error:', error);
  }
}

getUserWithPosts(1);
```

### Example 2: Error Handling Different Types

```javascript
async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data');
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log(data);
  } catch(error) {
    if (error.message.includes('HTTP error')) {
      console.log('Server error');
    } else {
      console.log('Network error');
    }
  }
}
```

### Example 3: Loading State

```javascript
async function loadData() {
  let loading = true;
  console.log('Loading...');
  
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('Data loaded:', data);
  } catch(error) {
    console.error('Error:', error);
  } finally {
    loading = false;
    console.log('Loading complete');
  }
}
```

---

## মনে রাখার বিষয়

- `async` function সবসময় Promise return করে
- `await` শুধু `async` function এ কাজ করে
- `await` promise শেষ হওয়ার জন্য অপেক্ষা করে
- সবসময় `try-catch` দিয়ে error handle করো
- `finally` cleanup এর জন্য ভালো
- Sequential vs Parallel বুঝে ব্যবহার করো
- Template string দিয়ে dynamic URL বানাও