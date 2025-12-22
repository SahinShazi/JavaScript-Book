# Web API - Complete Guide

---

## Web API কি?

Web API হলো browser এর built-in features যেগুলো দিয়ে আমরা web page এর সাথে interact করতে পারি। এগুলো JavaScript এর মাধ্যমে ব্যবহার করা হয়।

---

## 1. DOM (Document Object Model)

### DOM কি?

DOM হলো HTML document এর একটা tree structure। JavaScript দিয়ে HTML elements access এবং manipulate করার জন্য DOM ব্যবহার করা হয়।

### Basic DOM Methods:

```javascript
// Element select করা
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');

// Content change করা
element.innerText = 'New Text';
element.innerHTML = '<strong>Bold Text</strong>';

// Style change করা
element.style.color = 'red';
element.style.backgroundColor = 'yellow';

// Class add/remove করা
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
```

### Example: Button Click এ Text Change

```html
<!DOCTYPE html>
<html>
<body>
    <h1 id="heading">Hello World</h1>
    <button id="btn">Change Text</button>

    <script>
        const heading = document.getElementById('heading');
        const btn = document.getElementById('btn');
        
        btn.addEventListener('click', function() {
            heading.innerText = 'Text Changed!';
            heading.style.color = 'blue';
        });
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. `getElementById()` দিয়ে heading এবং button select করা হয়েছে
2. Button এ `addEventListener()` দিয়ে click event যোগ করা হয়েছে
3. Click করলে heading এর text এবং color change হয়

---

## 2. Fetch API

### Fetch API কি?

Fetch API দিয়ে server থেকে data নিয়ে আসা বা পাঠানো যায়। এটা AJAX এর modern version।

### Basic Syntax:

```javascript
fetch('url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

### Example: User Data Fetch করা

```html
<!DOCTYPE html>
<html>
<body>
    <button id="loadBtn">Load User</button>
    <div id="userInfo"></div>

    <script>
        const loadBtn = document.getElementById('loadBtn');
        const userInfo = document.getElementById('userInfo');
        
        loadBtn.addEventListener('click', function() {
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(data => {
                    userInfo.innerHTML = `
                        <h3>Name: ${data.name}</h3>
                        <p>Email: ${data.email}</p>
                        <p>Phone: ${data.phone}</p>
                    `;
                })
                .catch(error => {
                    userInfo.innerHTML = 'Error loading data!';
                });
        });
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. `fetch()` দিয়ে API থেকে data request করা হয়েছে
2. `.then(response => response.json())` - response কে JSON এ convert করা হয়েছে
3. `.then(data => {...})` - data পেয়ে HTML এ show করা হয়েছে
4. `.catch()` - কোনো error হলে handle করা হয়েছে

---

## 3. Local Storage

### Local Storage কি?

Local Storage এ data permanently save হয়। Browser close করলেও data থাকে। User manually delete না করলে data কখনো মুছে যায় না।

### Basic Methods:

```javascript
// Data save করা
localStorage.setItem('key', 'value');

// Data পড়া
localStorage.getItem('key');

// Data delete করা
localStorage.removeItem('key');

// সব data clear করা
localStorage.clear();
```

### Example: Theme Save করা

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body.dark {
            background: #222;
            color: white;
        }
        body.light {
            background: white;
            color: #222;
        }
    </style>
</head>
<body>
    <h1>Theme Switcher</h1>
    <button id="themeBtn">Toggle Theme</button>

    <script>
        const body = document.body;
        const themeBtn = document.getElementById('themeBtn');
        
        // Previous theme load করা
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.className = savedTheme;
        
        themeBtn.addEventListener('click', function() {
            if (body.className === 'light') {
                body.className = 'dark';
                localStorage.setItem('theme', 'dark');
            } else {
                body.className = 'light';
                localStorage.setItem('theme', 'light');
            }
        });
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. Page load হলে `localStorage.getItem('theme')` দিয়ে previous theme check করা হয়
2. Button click এ theme change হয় এবং `localStorage.setItem()` দিয়ে save হয়
3. Browser close করে আবার open করলেও same theme থাকবে

---

## 4. Session Storage

### Session Storage কি?

Session Storage এ data temporarily save হয়। Browser tab close করলে বা browser close করলে data automatically delete হয়ে যায়।

### Basic Methods:

```javascript
// Data save করা
sessionStorage.setItem('key', 'value');

// Data পড়া
sessionStorage.getItem('key');

// Data delete করা
sessionStorage.removeItem('key');

// সব data clear করা
sessionStorage.clear();
```

### Example: Form Data Temporary Save

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Login Form</h2>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="loginBtn">Login</button>
    <p id="message"></p>

    <script>
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const loginBtn = document.getElementById('loginBtn');
        const message = document.getElementById('message');
        
        // Previous username load করা (যদি থাকে)
        const savedUsername = sessionStorage.getItem('username');
        if (savedUsername) {
            usernameInput.value = savedUsername;
        }
        
        // Username save করা যখন type করা হয়
        usernameInput.addEventListener('input', function() {
            sessionStorage.setItem('username', usernameInput.value);
        });
        
        loginBtn.addEventListener('click', function() {
            const user = usernameInput.value;
            const pass = passwordInput.value;
            
            if (user && pass) {
                sessionStorage.setItem('userToken', 'abc123xyz');
                message.innerText = 'Login Successful!';
                message.style.color = 'green';
            } else {
                message.innerText = 'Please fill all fields!';
                message.style.color = 'red';
            }
        });
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. Username type করার সময় `sessionStorage.setItem()` দিয়ে save হচ্ছে
2. Page refresh করলে username field আবার fill হয়ে যাবে
3. Login successful হলে user token save হচ্ছে
4. Tab close করলে সব data চলে যাবে

---

## 5. History API

### History API কি?

History API দিয়ে browser এর navigation history control করা যায়। Back, forward যাওয়া এবং URL change করা যায়।

### Basic Methods:

```javascript
// Previous page এ যাওয়া
history.back();

// Next page এ যাওয়া
history.forward();

// Specific number of steps যাওয়া
history.go(-1);  // 1 step back
history.go(-2);  // 2 steps back
history.go(1);   // 1 step forward
```

### Example: Custom Navigation Buttons

```html
<!DOCTYPE html>
<html>
<body>
    <h1>History API Demo</h1>
    
    <div>
        <button id="backBtn">← Go Back</button>
        <button id="forwardBtn">Go Forward →</button>
        <button id="back2Btn">← Go 2 Steps Back</button>
    </div>
    
    <div style="margin-top: 20px;">
        <a href="?page=1">Page 1</a>
        <a href="?page=2">Page 2</a>
        <a href="?page=3">Page 3</a>
    </div>

    <script>
        const backBtn = document.getElementById('backBtn');
        const forwardBtn = document.getElementById('forwardBtn');
        const back2Btn = document.getElementById('back2Btn');
        
        backBtn.addEventListener('click', function() {
            history.back();
        });
        
        forwardBtn.addEventListener('click', function() {
            history.forward();
        });
        
        back2Btn.addEventListener('click', function() {
            history.go(-2);
        });
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. `history.back()` - Previous page এ নিয়ে যায় (browser এর back button এর মতো)
2. `history.forward()` - Next page এ নিয়ে যায় (browser এর forward button এর মতো)
3. `history.go(-2)` - 2 steps previous page এ নিয়ে যায়

---

## Problem Questions - Solution

### Problem 01: Local Storage এ Mode Change

```javascript
localStorage.setItem('mode', 'dark');
let a = localStorage.getItem('mode');
console.log(a);  // Output: dark

localStorage.setItem('mode', 'light');
let b = localStorage.getItem('mode');
console.log(b);  // Output: light
```

**ব্যাখ্যা:**
1. প্রথমে 'mode' key তে 'dark' value save করা হয়েছে
2. `getItem()` দিয়ে value পড়া হয়েছে - Output: `dark`
3. তারপর same key তে 'light' value দিয়ে আগের value replace করা হয়েছে
4. আবার `getItem()` করলে নতুন value পাওয়া যাবে - Output: `light`

---

### Problem 02: Session Storage এ Token Save

```javascript
sessionStorage.setItem('userToken', 'sahinenam12345');            
let a = sessionStorage.getItem('userToken');
console.log(a);  // Output: sahinenam12345
```

**ব্যাখ্যা:**
1. 'userToken' key তে user এর token save করা হয়েছে
2. `getItem()` দিয়ে token পড়া হয়েছে
3. Output: `sahinenam12345`
4. এই token tab close করলে automatically delete হয়ে যাবে

---

### Problem 03: Local Storage থেকে Data Remove

```javascript
localStorage.setItem('userName', 'Alex');
let a = localStorage.getItem('userName');
console.log(a);  // Output: Alex

localStorage.removeItem('userName');
let b = localStorage.getItem('userName');
console.log(b);  // Output: null
```

**ব্যাখ্যা:**
1. 'userName' key তে 'Alex' save করা হয়েছে
2. প্রথম `getItem()` এ value পাওয়া গেছে - Output: `Alex`
3. `removeItem()` দিয়ে 'userName' key delete করা হয়েছে
4. দ্বিতীয় `getItem()` এ value না থাকায় `null` return হয়েছে

---

### Problem 04: History Go Back

```javascript
history.go(-2);
```

**ব্যাখ্যা:**
1. `history.go(-2)` মানে হলো 2 steps previous page এ যাওয়া
2. যেমন: আপনি Page A → Page B → Page C তে আছেন
3. `history.go(-2)` call করলে আপনি Page A তে চলে যাবেন

---

## Local Storage vs Session Storage

### পার্থক্য:

**Local Storage:**
- Data permanently save হয়
- Browser close করলেও data থাকে
- User manually clear না করলে data মুছে যায় না
- সব tabs এ একই data access করা যায়

**Session Storage:**
- Data temporarily save হয়
- Browser tab close করলে data মুছে যায়
- শুধু current tab এ data access করা যায়
- অন্য tab এ same site open করলে আলাদা storage

### কখন কোনটা ব্যবহার করবে:

**Local Storage ব্যবহার করো:**
- User settings (theme, language)
- Shopping cart data
- User preferences
- যেকোনো data যা অনেকদিন রাখতে হবে

**Session Storage ব্যবহার করো:**
- Login token (security এর জন্য)
- Form data (temporary)
- Single session data
- যেকোনো data যা tab close করলে মুছে যাওয়া উচিত

---

## Web API চিট শিট

```javascript
// DOM
document.getElementById('id')
document.querySelector('.class')
element.innerHTML = 'text'
element.style.color = 'red'
element.classList.add('active')

// Fetch API
fetch('url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// Local Storage
localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()

// Session Storage
sessionStorage.setItem('key', 'value')
sessionStorage.getItem('key')
sessionStorage.removeItem('key')
sessionStorage.clear()

// History API
history.back()
history.forward()
history.go(-1)  // back
history.go(1)   // forward
history.go(-2)  // 2 steps back
```

---

## Key Points

✅ **DOM** - HTML elements access এবং manipulate করার জন্য  
✅ **Fetch API** - Server থেকে data নিয়ে আসা বা পাঠানোর জন্য  
✅ **Local Storage** - Data permanently save করার জন্য  
✅ **Session Storage** - Data temporarily save করার জন্য  
✅ **History API** - Browser navigation control করার জন্য  
✅ Local Storage এর data browser close করলেও থাকে  
✅ Session Storage এর data tab close করলে মুছে যায়  
✅ `setItem()` দিয়ে data save করা হয়  
✅ `getItem()` দিয়ে data পড়া হয়  
✅ `removeItem()` দিয়ে specific data delete করা হয়  

এই Web APIs গুলো practice করো - modern web development এর জন্য খুবই important! 🚀