# Browser Developer Tools - Complete Guide

---

## Developer Tools কি?

Developer Tools (DevTools) হলো browser এর built-in একটা powerful tool যা website develop, debug এবং optimize করার জন্য ব্যবহার করা হয়। প্রতিটা modern browser এ (Chrome, Firefox, Edge) এই tool থাকে।

---

## Developer Tools খোলার উপায়

### Method 1: Right Click করে

```
1. Webpage এ যেকোনো জায়গায় Right Click করো
2. "Inspect" option এ click করো
3. DevTools খুলে যাবে
```

### Method 2: Keyboard Shortcut

```
Windows/Linux: Ctrl + Shift + I
বা
F12
```

### Method 3: Browser Menu থেকে

```
Chrome → More Tools → Developer Tools
```

---

## 1. Elements Tab

### Elements Tab কি?

Elements tab দিয়ে webpage এর HTML এবং CSS real-time এ দেখা এবং edit করা যায়।

### Example 1: HTML Element Inspect করা

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
            font-size: 32px;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

**Steps:**
1. Heading এর উপর right click করো
2. "Inspect" select করো
3. Elements tab এ `<h1>` element highlight হবে
4. HTML structure দেখতে পারবে

### Example 2: CSS Live Edit করা

**Original CSS:**
```css
h1 {
    color: blue;
    font-size: 32px;
}
```

**DevTools এ change করো:**
1. Elements tab এ h1 select করো
2. Styles panel এ `color: blue` দেখতে পাবে
3. `blue` এর জায়গায় `red` লিখো
4. Instantly heading এর color red হয়ে যাবে

**Before:**
```
Heading Color: Blue
```

**After (DevTools এ edit করার পর):**
```
Heading Color: Red
```

**Note:** এই changes শুধু browser এ temporary। Refresh করলে আবার original হয়ে যাবে।

### Example 3: Element এর Box Model দেখা

```html
<div style="width: 200px; padding: 20px; margin: 10px; border: 2px solid black;">
    Content Here
</div>
```

**DevTools এ:**
1. Div element select করো
2. Styles panel এর নিচে Box Model diagram দেখতে পাবে
3. Content, Padding, Border, Margin সব কিছু visual representation এ দেখা যায়

```
Box Model:
┌─────────────────────────────┐
│ Margin: 10px                │
│  ┌───────────────────────┐  │
│  │ Border: 2px           │  │
│  │  ┌─────────────────┐  │  │
│  │  │ Padding: 20px   │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │ Content   │  │  │  │
│  │  │  │ 200px     │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

---

## 2. Console Tab

### Console Tab কি?

Console tab হলো একটা interactive terminal যেখানে JavaScript code লিখে test করা যায় এবং errors/warnings দেখা যায়।

### Example 1: Simple JavaScript Run করা

**Console এ type করো:**
```javascript
console.log("Hello, World!");
```

**Output:**
```
Hello, World!
```

### Example 2: Variable Create এবং Test করা

**Console এ type করো:**
```javascript
let name = "Alice";
let age = 25;
console.log(name);
console.log(age);
console.log(name + " is " + age + " years old");
```

**Output:**
```
Alice
25
Alice is 25 years old
```

### Example 3: DOM Manipulation Console থেকে

**HTML:**
```html
<h1 id="heading">Original Text</h1>
```

**Console এ type করো:**
```javascript
document.getElementById('heading').innerText = 'Changed Text!';
document.getElementById('heading').style.color = 'red';
```

**Before:**
```
Text: "Original Text"
Color: Black (default)
```

**After:**
```
Text: "Changed Text!"
Color: Red
```

### Example 4: Error Message দেখা

**JavaScript Code (HTML এ):**
```javascript
function divide(a, b) {
    return a / b;
}

divide(10, 0);  // Warning হতে পারে
console.log(undefinedVariable);  // Error হবে
```

**Console Output:**
```
⚠️ Warning: Division by zero
❌ Uncaught ReferenceError: undefinedVariable is not defined
```

### Example 5: Math Calculation

**Console এ type করো:**
```javascript
let price = 1000;
let discount = 20;
let finalPrice = price - (price * discount / 100);
console.log("Final Price: " + finalPrice);
```

**Output:**
```
Final Price: 800
```

---

## 3. Sources Tab

### Sources Tab কি?

Sources tab দিয়ে website এর সব files (HTML, CSS, JavaScript) দেখা যায় এবং JavaScript code debug করা যায়।

### Example 1: JavaScript File দেখা

**File Structure:**
```
website/
  ├── index.html
  ├── style.css
  └── script.js
```

**DevTools Sources Tab এ:**
1. Sources tab open করো
2. Left sidebar এ সব files দেখতে পাবে
3. `script.js` click করলে code দেখা যাবে

### Example 2: Breakpoint Set করা

**script.js:**
```javascript
function calculateTotal(price, quantity) {
    let total = price * quantity;
    let tax = total * 0.1;
    let finalTotal = total + tax;
    return finalTotal;
}

let result = calculateTotal(100, 5);
console.log(result);
```

**Breakpoint সেট করা:**
1. Sources tab এ `script.js` open করো
2. Line number এর উপর click করো (যেমন: line 3)
3. Blue dot দেখা যাবে - এটা breakpoint
4. Page reload করো
5. Code execution line 3 এ থেমে যাবে
6. Step by step execute করতে পারবে

**Debugging Steps:**
```
Step 1: total = 100 * 5 = 500
Step 2: tax = 500 * 0.1 = 50
Step 3: finalTotal = 500 + 50 = 550
```

---

## 4. Network Tab

### Network Tab কি?

Network tab দিয়ে webpage load হওয়ার সময় কোন কোন files download হচ্ছে, কত time লাগছে, সব দেখা যায়।

### Example 1: Page Load Monitor করা

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>My Website</h1>
    <img src="image.jpg">
    <script src="script.js"></script>
</body>
</html>
```

**Network Tab এ:**
1. Network tab open করো
2. Page reload করো (Ctrl + R)
3. সব files এর list দেখা যাবে:

```
Name            Type        Size      Time
index.html      document    2.5 KB    50ms
style.css       stylesheet  1.2 KB    30ms
image.jpg       image       45 KB     120ms
script.js       script      3.8 KB    40ms
```

### Example 2: API Call Monitor করা

**JavaScript:**
```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => console.log(data));
```

**Network Tab এ:**
1. Code run করো
2. Network tab এ XHR/Fetch filter select করো
3. API request দেখা যাবে:

```
Request:
Method: GET
URL: https://jsonplaceholder.typicode.com/users/1
Status: 200 OK
Time: 150ms

Response:
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz"
}
```

### Example 3: Slow Connection Test করা

**Steps:**
1. Network tab open করো
2. "No throttling" dropdown click করো
3. "Slow 3G" select করো
4. Page reload করো
5. Slow internet এ কেমন load হয় দেখতে পারবে

**Before (Fast Connection):**
```
Total Load Time: 500ms
```

**After (Slow 3G):**
```
Total Load Time: 5000ms (5 seconds)
```

---

## 5. Performance Tab

### Performance Tab কি?

Performance tab দিয়ে webpage এর speed এবং performance analysis করা যায়।

### Example: Page Load Performance Check করা

**Steps:**
1. Performance tab open করো
2. Record button (⚫) click করো
3. Page reload করো বা কোনো action করো
4. Stop button click করো
5. Performance report দেখতে পাবে

**Performance Report:**
```
Loading: 200ms
Scripting: 150ms
Rendering: 100ms
Painting: 50ms
Total: 500ms
```

**Analysis:**
- যদি Scripting time বেশি হয় → JavaScript optimize করতে হবে
- যদি Rendering time বেশি হয় → CSS optimize করতে হবে
- যদি Loading time বেশি হয় → File size কমাতে হবে

---

## 6. Application Tab

### Application Tab কি?

Application tab দিয়ে website এর storage (cookies, localStorage, sessionStorage) manage করা যায়।

### Example 1: localStorage দেখা

**JavaScript:**
```javascript
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');
localStorage.setItem('language', 'Bengali');
```

**Application Tab এ:**
1. Application tab open করো
2. Left sidebar এ "Local Storage" expand করো
3. Your website URL select করো
4. সব stored data দেখতে পাবে:

```
Key         | Value
------------|--------
username    | Alice
theme       | dark
language    | Bengali
```

### Example 2: localStorage Edit/Delete করা

**DevTools থেকে:**
1. localStorage এ `theme` select করো
2. Value double click করো
3. `dark` থেকে `light` change করো
4. বা Delete icon click করে delete করো

**Before:**
```
theme: dark
```

**After Edit:**
```
theme: light
```

**After Delete:**
```
theme: (deleted)
```

### Example 3: Cookies দেখা

**Application Tab এ:**
1. "Cookies" section expand করো
2. Website URL select করো
3. সব cookies এর list দেখতে পাবে:

```
Name        | Value        | Expires
------------|--------------|----------
session_id  | abc123xyz    | 2024-12-31
user_token  | token456     | 2025-01-15
```

---

## DevTools Keyboard Shortcuts

### Important Shortcuts:

```
Ctrl + Shift + I  →  DevTools খোলা/বন্ধ করা
Ctrl + Shift + C  →  Element selector mode
Ctrl + Shift + J  →  Console tab সরাসরি খোলা
Ctrl + [          →  Previous tab
Ctrl + ]          →  Next tab
Ctrl + F          →  DevTools এ search করা
F5               →  Page reload করা
Ctrl + Shift + R  →  Hard reload (cache clear করে)
```

---

## Real-World Use Cases

### Use Case 1: Website এ Color Change Test করা

**Problem:** Button এর color কোনটা ভালো দেখাবে decide করতে পারছো না

**Solution:**
1. Button এ right click → Inspect
2. Styles panel এ `background-color` change করো
3. বিভিন্ন colors try করে দেখো:
   - `red`, `blue`, `green`, `#FF5733`
4. যেটা ভালো লাগবে সেটা actual CSS এ add করো

### Use Case 2: API Response Check করা

**Problem:** API call করছো কিন্তু data আসছে না

**Solution:**
1. Network tab open করো
2. Page reload করো
3. API request খুঁজে বের করো
4. Status code check করো:
   - 200 OK → Success
   - 404 Not Found → URL ভুল
   - 500 Error → Server problem
5. Response data check করো

### Use Case 3: JavaScript Error Fix করা

**Problem:** JavaScript code কাজ করছে না

**Solution:**
1. Console tab open করো
2. Error message পড়ো:
   - `Uncaught ReferenceError: x is not defined` → Variable declare করো নাই
   - `Uncaught TypeError: Cannot read property` → Object/Array null বা undefined
3. Error line number দেখো
4. Sources tab এ গিয়ে breakpoint set করো
5. Step by step debug করো

---

## DevTools Practice Exercise

### Exercise: Simple Counter App Debug করা

**HTML + CSS + JavaScript:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            text-align: center;
            margin-top: 50px;
            font-family: Arial;
        }
        #counter {
            font-size: 60px;
            margin: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 18px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>Counter App</h1>
    <div id="counter">0</div>
    <button onclick="increase()">+</button>
    <button onclick="decrease()">-</button>

    <script>
        let count = 0;
        
        function increase() {
            count++;
            document.getElementById('counter').innerText = count;
            console.log('Increased to: ' + count);
        }
        
        function decrease() {
            count--;
            document.getElementById('counter').innerText = count;
            console.log('Decreased to: ' + count);
        }
    </script>
</body>
</html>
```

**Practice Tasks:**

1. **Elements Tab:**
   - Counter এর font size 80px এ change করো
   - Button এর color red এবং green করো

2. **Console Tab:**
   - `count` variable এর value check করো
   - Console থেকে `increase()` function call করো

3. **Sources Tab:**
   - `increase()` function এ breakpoint set করো
   - Step by step execute করে দেখো কিভাবে count বাড়ছে

4. **Application Tab:**
   - localStorage এ counter value save করো
   - Page reload করেও counter value থাকবে

---

## Key Points

✅ **Developer Tools** - Website develop, debug এবং optimize করার powerful tool  
✅ **Inspect** - Right click করে বা Ctrl+Shift+I press করে open করা যায়  
✅ **Elements Tab** - HTML/CSS real-time edit করা যায়  
✅ **Console Tab** - JavaScript code test করা এবং errors দেখা যায়  
✅ **Sources Tab** - Files দেখা এবং JavaScript debug করা যায়  
✅ **Network Tab** - Page load time এবং API requests monitor করা যায়  
✅ **Performance Tab** - Website speed analysis করা যায়  
✅ **Application Tab** - localStorage, sessionStorage, cookies manage করা যায়  
✅ **Breakpoint** - Code execution একটা specific line এ থামিয়ে debug করা যায়  
✅ **DevTools changes temporary** - Refresh করলে original এ ফিরে যায়  

DevTools practice করো - এটা একজন developer এর সবচেয়ে important tool! 🚀