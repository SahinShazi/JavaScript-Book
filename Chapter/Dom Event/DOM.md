# DOM (Document Object Model)

---

## DOM কি?

**DOM (Document Object Model)** হলো HTML document এর একটা programming interface। এটা HTML কে একটা tree structure এ represent করে যাতে JavaScript দিয়ে HTML elements কে access এবং manipulate করা যায়।

**সহজ ভাষায়:** DOM হলো JavaScript এর সাথে HTML এর যোগসূত্র।

---

## Problem 01: getElementsByTagName

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
  <ul>
    <li>Sundarban</li>
    <li>Bandarban</li>
    <li>Coxs Bazar</li>
    <li>Saint Martin</li>
  </ul>
</body>
</html>
```

### JavaScript:
```javascript
const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
  console.log(li.innerText);
}
```

**Output:**
```
Sundarban
Bandarban
Coxs Bazar
Saint Martin
```

### ব্যাখ্যা:

**getElementsByTagName('li'):**
- সব `<li>` tags select করে
- একটা HTMLCollection return করে (array এর মত)
- Live collection (HTML change হলে automatic update হয়)

**innerText:**
- Element এর text content দেয়
- HTML tags বাদ দিয়ে শুধু text

---

## Problem 02: getElementById

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
    <h1 id="text">This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### JavaScript:
```javascript
const titleText = document.getElementById('text');
console.log(titleText.innerText); 

titleText.innerText = "Updated Text Heading"
```

**Output:**
```
This is a Heading // Console এ

// Page এ heading change হয়ে যাবে:
Updated Text Heading
```

### ব্যাখ্যা:

**getElementById('text'):**
- নির্দিষ্ট ID দিয়ে element খুঁজে
- শুধু একটা element return করে
- সবচেয়ে fast method

**innerText = "...":**
- Element এর text change করা
- HTML tags না, শুধু text

---

## Problem 03: getElementsByClassName

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
    <ul>
      <li class="important">Sundarban</li>
      <li class="important">Kochu Khet</li>
      <li>Bandarban</li>
      <li class="important">Coxs Bazar</li>
      <li>Saint Martin</li>
    </ul>
</body>
</html>
```

### JavaScript:
```javascript
let inpor = document.getElementsByClassName('important');

for (let place of inpor) {
  console.log(place.innerText);
}
```

**Output:**
```
Sundarban
Kochu Khet
Coxs Bazar
```

### ব্যাখ্যা:

**getElementsByClassName('important'):**
- নির্দিষ্ট class এর সব elements select করে
- HTMLCollection return করে
- একাধিক element থাকতে পারে

**for...of loop:**
- Collection এর প্রতিটা element এ loop চালায়
- শুধু যেগুলোর class "important" সেগুলো দেখাবে

---

## Problem 04: querySelector এবং querySelectorAll

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
  <div class="food">
    <ul>
      <li>Banana</li>
      <li>Apple</li>
      <li>Carrot</li>
    </ul>
  </div>
  
  <div id="foodItems">
    <ul>
      <li>Item 01</li>
      <li>Item 02</li>
      <li>Item 03</li>
    </ul>
  </div>
</body>
</html>
```

### querySelectorAll:
```javascript
let fruits = document.querySelectorAll('.food li');

fruits.forEach(li => console.log(li.innerText));
```

**Output:**
```
Banana
Apple
Carrot
```

### querySelector:
```javascript
let foodItems = document.querySelector('#foodItems');

console.log(foodItems.innerText);
```

**Output:**
```
Item 01
Item 02
Item 03
```

### ব্যাখ্যা:

**querySelectorAll('.food li'):**
- CSS selector ব্যবহার করে
- `.food li` মানে `.food` এর ভিতরের সব `li`
- NodeList return করে (forEach use করা যায়)
- সব matches খুঁজে দেয়

**querySelector('#foodItems'):**
- CSS selector ব্যবহার করে
- শুধু প্রথম match return করে
- একটা element চাইলে এটা use করো

---

## Methods Comparison

| Method | Returns | Selector Type | Use Case |
|--------|---------|---------------|----------|
| `getElementById()` | Single element | ID | একটা element ID দিয়ে |
| `getElementsByTagName()` | HTMLCollection | Tag name | সব tags (li, div, p) |
| `getElementsByClassName()` | HTMLCollection | Class name | নির্দিষ্ট class |
| `querySelector()` | Single element | CSS selector | প্রথম match |
| `querySelectorAll()` | NodeList | CSS selector | সব matches |

---

## HTMLCollection vs NodeList

### HTMLCollection:
```javascript
const items = document.getElementsByTagName('li');
// Live - HTML change হলে automatic update
// forEach() নেই
// for...of loop কাজ করে
```

### NodeList:
```javascript
const items = document.querySelectorAll('li');
// Static - HTML change হলে update হয় না
// forEach() আছে
// for...of loop কাজ করে
```

---

## innerText এর ব্যবহার

### Get Text:
```javascript
const element = document.getElementById('myId');
console.log(element.innerText);  // Text পাবে
```

### Set Text:
```javascript
element.innerText = "New Text";  // Text change হবে
```

### Example:
```html
<h1 id="title">Hello</h1>

<script>
  const title = document.getElementById('title');
  console.log(title.innerText);  // "Hello"
  
  title.innerText = "World";  // Change to "World"
</script>
```

---

## Practical Examples

### Example 1: Change All Items Text

```javascript
const items = document.getElementsByTagName('li');

for (let item of items) {
  item.innerText = "Changed!";
}
```

### Example 2: Get Specific Class Items

```javascript
const importantItems = document.getElementsByClassName('important');

for (let item of importantItems) {
  console.log(item.innerText);
}
```

### Example 3: Query with CSS Selector

```javascript
// Class selector
const elements = document.querySelectorAll('.myClass');

// ID selector
const element = document.querySelector('#myId');

// Complex selector
const items = document.querySelectorAll('div.container li.active');
```

---

## Loop Types

### for...of Loop (Recommended):
```javascript
const items = document.getElementsByTagName('li');

for (const item of items) {
  console.log(item.innerText);
}
```

### forEach (NodeList only):
```javascript
const items = document.querySelectorAll('li');

items.forEach(item => {
  console.log(item.innerText);
});
```

### Traditional for Loop:
```javascript
const items = document.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
  console.log(items[i].innerText);
}
```

---

## Common Patterns

### Pattern 1: Get and Display All

```javascript
const items = document.getElementsByTagName('li');

for (const item of items) {
  console.log(item.innerText);
}
```

### Pattern 2: Get and Modify

```javascript
const heading = document.getElementById('heading');
heading.innerText = "New Heading";
```

### Pattern 3: Filter and Display

```javascript
const important = document.getElementsByClassName('important');

for (const item of important) {
  console.log(item.innerText);
}
```

### Pattern 4: Query and Loop

```javascript
const items = document.querySelectorAll('.container li');

items.forEach(item => {
  console.log(item.innerText);
});
```

---

## Key Points

### getElementsByTagName:
- Tag name দিয়ে select
- HTMLCollection return করে
- সব matching elements পাবে

### getElementById:
- ID দিয়ে select
- Single element return করে
- Unique ID এর জন্য

### getElementsByClassName:
- Class name দিয়ে select
- HTMLCollection return করে
- একই class এর সব elements

### querySelector:
- CSS selector ব্যবহার
- প্রথম match return করে
- Modern এবং flexible

### querySelectorAll:
- CSS selector ব্যবহার
- সব matches return করে
- NodeList পাবে (forEach use করা যায়)

### innerText:
- Element এর text content
- Get বা Set করা যায়
- HTML tags ignore করে

---

## মনে রাখার সহজ উপায়

```
getElementById = একটা element (ID unique)
getElementsByTagName = অনেক elements (tag same হতে পারে)
getElementsByClassName = অনেক elements (class same হতে পারে)

querySelector = প্রথম যেটা পাবে
querySelectorAll = সব যা পাবে

innerText = শুধু text, HTML না
```