# onclick() - Complete Guide

---

## onclick() কি?

`onclick()` হলো একটা event handler যা HTML element এ click করলে কোনো function execute করে। এটা দিয়ে button, div, image বা যেকোনো HTML element এ click functionality যোগ করা যায়।

---

## onclick() ব্যবহারের উপায়

### 1. Inline onclick (HTML এ সরাসরি)

```html
<!DOCTYPE html>
<html>
<body>
    <h1 id="heading">Hello World</h1>
    <button onclick="changeText()">Click Me</button>

    <script>
        function changeText() {
            document.getElementById('heading').innerText = 'Text Changed!';
        }
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**
1. Button এ `onclick="changeText()"` attribute যোগ করা হয়েছে
2. Click করলে `changeText()` function call হয়
3. Function heading এর text change করে দেয়

---

### 2. JavaScript দিয়ে onclick যোগ করা

```html
<!DOCTYPE html>
<html>
<body>
    <h1 id="heading">Hello World</h1>
    <button id="btn">Click Me</button>

    <script>
        const btn = document.getElementById('btn');
        const heading = document.getElementById('heading');
        
        btn.onclick = function() {
            heading.innerText = 'Text Changed!';
            heading.style.color = 'blue';
        };
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**
1. `getElementById()` দিয়ে button এবং heading select করা হয়েছে
2. Button এর `onclick` property তে function assign করা হয়েছে
3. Click করলে heading এর text এবং color change হয়

---

## Example 1: Counter App

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            text-align: center;
            margin-top: 50px;
        }
        h1 {
            font-size: 80px;
            color: #333;
        }
        button {
            padding: 15px 30px;
            font-size: 18px;
            margin: 10px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
        }
        .increase {
            background: #4CAF50;
            color: white;
        }
        .decrease {
            background: #f44336;
            color: white;
        }
        .reset {
            background: #2196F3;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="counter">0</h1>
        <button class="increase" onclick="increase()">Increase</button>
        <button class="decrease" onclick="decrease()">Decrease</button>
        <button class="reset" onclick="reset()">Reset</button>
    </div>

    <script>
        let count = 0;
        const counterDisplay = document.getElementById('counter');
        
        function increase() {
            count++;
            counterDisplay.innerText = count;
        }
        
        function decrease() {
            count--;
            counterDisplay.innerText = count;
        }
        
        function reset() {
            count = 0;
            counterDisplay.innerText = count;
        }
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. `count` variable দিয়ে number track করা হচ্ছে
2. **Increase button:** Click করলে `increase()` function call হয় → `count++` করে value বাড়ায় → display update হয়
3. **Decrease button:** Click করলে `decrease()` function call হয় → `count--` করে value কমায় → display update হয়
4. **Reset button:** Click করলে `reset()` function call হয় → `count = 0` করে reset করে → display update হয়

**Before:**
```
Counter: 0
```

**After clicking Increase 3 times:**
```
Counter: 3
```

**After clicking Decrease 1 time:**
```
Counter: 2
```

**After clicking Reset:**
```
Counter: 0
```

---

## Example 2: Background Color Changer

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            transition: background-color 0.3s;
        }
        .btn-container {
            text-align: center;
        }
        h2 {
            margin-bottom: 30px;
            font-size: 30px;
        }
        button {
            padding: 15px 30px;
            font-size: 18px;
            margin: 10px;
            cursor: pointer;
            border: 2px solid #333;
            border-radius: 8px;
            font-weight: bold;
        }
        .red-btn {
            background: #ff6b6b;
            color: white;
        }
        .green-btn {
            background: #51cf66;
            color: white;
        }
        .blue-btn {
            background: #339af0;
            color: white;
        }
        .yellow-btn {
            background: #ffd43b;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="btn-container">
        <h2>Choose Background Color</h2>
        <button class="red-btn" onclick="changeColor('red')">Red</button>
        <button class="green-btn" onclick="changeColor('green')">Green</button>
        <button class="blue-btn" onclick="changeColor('blue')">Blue</button>
        <button class="yellow-btn" onclick="changeColor('yellow')">Yellow</button>
    </div>

    <script>
        function changeColor(color) {
            document.body.style.backgroundColor = color;
        }
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. প্রতিটি button এ `onclick="changeColor('color')"` যোগ করা হয়েছে
2. Button click করলে `changeColor()` function call হয় এবং color parameter pass হয়
3. Function `document.body.style.backgroundColor` change করে
4. CSS transition দিয়ে smooth color change হয়

**Before:**
```
Background: White (default)
```

**After clicking Red button:**
```
Background: Red
```

---

## Example 3: Show/Hide Text

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
        }
        button {
            padding: 12px 25px;
            font-size: 16px;
            cursor: pointer;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background: #5568d3;
        }
        #message {
            margin-top: 20px;
            padding: 20px;
            background: #f0f0f0;
            border-radius: 8px;
            font-size: 18px;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Toggle Message</h1>
        <button onclick="toggleMessage()">Show/Hide Message</button>
        <div id="message" class="hidden">
            <p>🎉 This is a secret message!</p>
            <p>You found it by clicking the button!</p>
        </div>
    </div>

    <script>
        function toggleMessage() {
            const message = document.getElementById('message');
            message.classList.toggle('hidden');
        }
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. Message div এ `hidden` class দিয়ে শুরুতে লুকিয়ে রাখা হয়েছে (`display: none`)
2. Button click করলে `toggleMessage()` function call হয়
3. Function `classList.toggle('hidden')` ব্যবহার করে class add/remove করে
4. Toggle মানে: যদি class থাকে তাহলে remove করো, না থাকলে add করো

**Before (First Click):**
```
Message: Hidden (class="hidden")
```

**After (First Click):**
```
Message: Visible (class removed)
```

**After (Second Click):**
```
Message: Hidden again (class added back)
```

---

## Example 4: Image Switcher

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            text-align: center;
            margin-top: 50px;
        }
        img {
            width: 300px;
            height: 300px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            margin: 20px 0;
        }
        button {
            padding: 12px 25px;
            font-size: 16px;
            cursor: pointer;
            background: #764ba2;
            color: white;
            border: none;
            border-radius: 5px;
            margin: 0 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Image Gallery</h1>
        <img id="gallery" src="https://via.placeholder.com/300/FF6B6B/FFFFFF?text=Image+1" alt="Gallery">
        <br>
        <button onclick="changeImage('https://via.placeholder.com/300/FF6B6B/FFFFFF?text=Image+1')">Image 1</button>
        <button onclick="changeImage('https://via.placeholder.com/300/51CF66/FFFFFF?text=Image+2')">Image 2</button>
        <button onclick="changeImage('https://via.placeholder.com/300/339AF0/FFFFFF?text=Image+3')">Image 3</button>
    </div>

    <script>
        function changeImage(imageUrl) {
            document.getElementById('gallery').src = imageUrl;
        }
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. প্রতিটি button এ `onclick="changeImage('url')"` দিয়ে image URL pass করা হয়েছে
2. Button click করলে `changeImage()` function call হয়
3. Function img element এর `src` attribute change করে
4. নতুন image display হয়

**Before:**
```
Showing: Image 1
```

**After clicking Image 2 button:**
```
Showing: Image 2
```

---

## Example 5: Alert Box

```html
<!DOCTYPE html>
<html>
<body>
    <h1>Alert Button</h1>
    <button onclick="showAlert()">Show Alert</button>

    <script>
        function showAlert() {
            alert('Hello! This is an alert message.');
        }
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. Button click করলে `showAlert()` function call হয়
2. Function `alert()` method call করে
3. Browser এ alert box show হয়

---

## Example 6: Multiple onclick Functions

```html
<!DOCTYPE html>
<html>
<body>
    <h1 id="heading">Welcome</h1>
    <p id="text">Click the button below</p>
    <button onclick="changeHeading(); changeText(); changeColor();">Click Me</button>

    <script>
        function changeHeading() {
            document.getElementById('heading').innerText = 'Hello!';
        }
        
        function changeText() {
            document.getElementById('text').innerText = 'Button was clicked!';
        }
        
        function changeColor() {
            document.body.style.backgroundColor = '#f0f0f0';
        }
    </script>
</body>
</html>
```

**কিভাবে কাজ করে:**

1. Button এ তিনটা function একসাথে call করা হয়েছে (semicolon দিয়ে আলাদা করা)
2. Click করলে তিনটা function একসাথে execute হয়:
   - `changeHeading()` - heading text change করে
   - `changeText()` - paragraph text change করে
   - `changeColor()` - background color change করে

**Before:**
```
Heading: Welcome
Text: Click the button below
Background: White
```

**After clicking:**
```
Heading: Hello!
Text: Button was clicked!
Background: Light gray
```

---

## onclick() vs addEventListener()

### onclick() দিয়ে:

```html
<button onclick="myFunction()">Click</button>
```

```javascript
btn.onclick = function() {
    console.log('Clicked!');
};
```

### addEventListener() দিয়ে:

```javascript
btn.addEventListener('click', function() {
    console.log('Clicked!');
});
```

**পার্থক্য:**
- `onclick` - শুধু একটা function assign করা যায়
- `addEventListener` - একই element এ multiple event listener যোগ করা যায়
- `addEventListener` বেশি flexible এবং modern

---

## Key Points

✅ `onclick()` দিয়ে element এ click event যোগ করা যায়  
✅ Inline (HTML এ) এবং JavaScript দুইভাবেই ব্যবহার করা যায়  
✅ `onclick="functionName()"` - HTML এ সরাসরি function call করা যায়  
✅ `element.onclick = function() {}` - JavaScript দিয়ে onclick assign করা যায়  
✅ একটা button এ multiple function call করা যায় (semicolon দিয়ে আলাদা করে)  
✅ `classList.toggle()` দিয়ে show/hide করা যায়  
✅ Function এ parameter pass করা যায় (যেমন: `changeColor('red')`)  
✅ Counter, color changer, show/hide এর মতো interactive feature বানানো যায়  

এই examples গুলো practice করো - onclick() এর সব basic concept clear হয়ে যাবে! 🚀