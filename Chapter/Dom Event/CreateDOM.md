# DOM - New Element Add

---

## Problem 01: appendChild দিয়ে নতুন Element যোগ করা

### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
  <div id="place">
    <ul>
      <li>01</li>
      <li>02</li>
      <li>03</li>
    </ul>
  </div>
</body>
</html>
```

### JavaScript:
```javascript
let li = document.createElement("li");
li.innerText = "04 (New)";

let num = document.querySelector('#place ul');

num.appendChild(li);
```

### Before (শুরুতে):
```html
<ul>
  <li>01</li>
  <li>02</li>
  <li>03</li>
</ul>
```

### After (JavaScript চালানোর পর):
```html
<ul>
  <li>01</li>
  <li>02</li>
  <li>03</li>
  <li>04 (New)</li>  <!-- নতুন যোগ হয়েছে -->
</ul>
```

---

## Step by Step ব্যাখ্যা:

### Step 1: createElement
```javascript
let li = document.createElement("li");
```
- `document.createElement("li")` - নতুন `<li>` element তৈরি করে
- এখনো HTML এ যোগ হয়নি, শুধু memory তে আছে

### Step 2: innerText Set করা
```javascript
li.innerText = "04 (New)";
```
- নতুন `<li>` এর ভিতরে text set করা
- এখন element এর মধ্যে "04 (New)" text আছে

### Step 3: Parent Element Select করা
```javascript
let num = document.querySelector('#place ul');
```
- `#place` এর ভিতরের `ul` কে select করা
- এই `ul` এর মধ্যে নতুন `li` যোগ করবো

### Step 4: appendChild
```javascript
num.appendChild(li);
```
- `appendChild()` - child element হিসেবে যোগ করে
- `ul` এর শেষে নতুন `li` যোগ হয়

---

## কিভাবে কাজ করে:

```
1. createElement("li")  → Memory তে <li></li> তৈরি
                           ↓
2. li.innerText = "04 (New)"  → <li>04 (New)</li>
                                 ↓
3. querySelector('#place ul')  → <ul> কে খুঁজে বের করা
                                  ↓
4. appendChild(li)  → <ul> এর শেষে <li>04 (New)</li> যোগ
```

---

## Visual Representation:

### Before:
```
<div id="place">
  <ul>
    <li>01</li>
    <li>02</li>
    <li>03</li>
  </ul>
</div>
```

### After appendChild:
```
<div id="place">
  <ul>
    <li>01</li>
    <li>02</li>
    <li>03</li>
    <li>04 (New)</li>  ← নতুন যোগ হয়েছে
  </ul>
</div>
```

---

## Key Points:

**createElement:**
- নতুন HTML element তৈরি করে
- Parameter এ tag name দিতে হয় ("li", "div", "p" etc.)

**innerText:**
- Element এর text content set করে
- এটা ছাড়াও element খালি থাকতো

**querySelector:**
- CSS selector দিয়ে element খুঁজে
- `#place ul` মানে id="place" এর ভিতরের ul

**appendChild:**
- Parent element এর শেষে child যোগ করে
- নতুন element টা DOM এ visible হয়