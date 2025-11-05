# Mysterious JavaScript

---

## ১. জাভাস্ক্রিপ্ট কিভাবে কোড রান করে?

জাভাস্ক্রিপ্ট মূলত V8 ইঞ্জিন ব্যবহার করে কোড রান করে। V8 মূলত গুগলের তৈরি একটি ইঞ্জিন যেটা ওপেন সোর্স। সেই ইঞ্জিন JavaScript ব্যবহার করে। এই ইঞ্জিনটি মূলত C++ ভাষা ব্যবহার করে বানানো হয়েছে।

### একটু বিস্তারিত:

তুমি যখন JavaScript কোড লিখো:

```javascript
console.log("Hello World");
```

এই কোডটা সরাসরি চলে না। এটা আগে V8 Engine এর কাছে যায়।

**V8 Engine কি করে:**

1. **Parser:** কোডটা পড়ে বুঝে নেয় (syntax check করে)
2. **AST (Abstract Syntax Tree):** কোডকে একটা tree structure এ convert করে
3. **Interpreter:** কোডকে bytecode এ পরিণত করে
4. **Compiler:** Important কোড optimize করে machine code বানায়
5. **Execute:** শেষে কোড run করে

### অন্যান্য JavaScript Engines:

- **V8** - Chrome, Node.js, Edge
- **SpiderMonkey** - Firefox
- **JavaScriptCore (Nitro)** - Safari
- **Chakra** - Old Edge (Internet Explorer)

### একটা উদাহরণ:

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));
```

**কি হচ্ছে এখানে:**

1. Browser/Node.js এই কোড V8 Engine কে দেয়
2. V8 বুঝে নেয় এটা একটা function
3. Function টা memory তে রাখে
4. `add(5, 3)` call করা হলে V8 calculate করে
5. Result `8` return করে
6. `console.log` এটা print করে

---

## ২. What is JavaScript?

**"JavaScript uses abstraction to hide implementation details."**

জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ভাষা, যা HTML এবং CSS এর সাথে কাজ করে। যার ফলে ওয়েবসাইট হয় ইন্টারেক্টিভ এবং আকর্ষণীয়। এই জাভাস্ক্রিপ্ট মূলত ব্রাউজারে রান হয়।

### Abstraction মানে কি?

Abstraction মানে হলো complicated জিনিস লুকিয়ে রাখা, শুধু simple interface দেখানো।

উদাহরণ দেখো:

```javascript
console.log("Hello");
```

তুমি জানো না `console.log` ভিতরে কিভাবে কাজ করে। তোমার শুধু জানা দরকার এটা লিখলে screen এ দেখাবে। বাকি implementation লুকানো আছে। এটাই abstraction.

### আরেকটা উদাহরণ:

```javascript
// তুমি শুধু fetch লিখলেই data আসবে
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
```

এখানে network request, HTTP protocol, data parsing - এসব complicated জিনিস তোমার জানা লাগে না। JavaScript এসব hide করে রেখেছে।

### JavaScript এর বৈশিষ্ট্য:

- **High-level language** - Memory management নিজে করে
- **Interpreted** - Line by line run হয়
- **Dynamic typing** - Variable এর type declare করা লাগে না
- **Single-threaded** - একবারে একটা কাজ করে
- **Non-blocking** - Async কাজ করতে পারে

### JavaScript কোথায় চলে:

**১. Browser এ:**
```javascript
// Button click করলে কিছু করা
document.querySelector('button').addEventListener('click', ()=>{
    alert('Button clicked!');
});
```

**২. Server এ (Node.js):**
```javascript
// Server তৈরি করা
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello from server');
});
```

**৩. Mobile App এ (React Native):**
```javascript
// Mobile screen এ text দেখানো
<Text>Hello Mobile</Text>
```

---

## ৩. জাভাস্ক্রিপ্টে memory management এবং garbage collection প্রসেস কিভাবে কাজ করে?

জাভাস্ক্রিপ্টে মেমোরি ম্যানেজমেন্ট স্বয়ংক্রিয়ভাবে কাজ করে এবং এর দুটি প্রধান অংশ হলো স্ট্যাক (Stack) এবং হিপ (Heap)। যখন কোনো ভ্যারিয়েবল তৈরি হয়, তখন স্ট্যাকে একটি মেমোরি বরাদ্দ করা হয়। অন্যদিকে, অবজেক্টগুলো হিপে সংরক্ষিত থাকে। প্রোগ্রামারদের ম্যানুয়ালি মেমোরি খালি করার প্রয়োজন হয় না কারণ একটি স্বয়ংক্রিয় প্রক্রিয়া, যা গার্বেজ কালেকশন (Garbage Collection) নামে পরিচিত, ব্যবহৃত হচ্ছে না এমন অবজেক্টগুলো থেকে মেমোরি পুনরুদ্ধার করে।

### Stack এবং Heap কি?

**Stack (স্ট্যাক):**
- Primitive values থাকে (number, string, boolean)
- ছোট ছোট জিনিস
- দ্রুত access হয়

**Heap (হিপ):**
- Object, Array থাকে
- বড় জিনিস
- একটু ধীরে access হয়

### উদাহরণ দেখি:

```javascript
// Stack এ যাবে
let age = 25;
let name = "Sahin";

// Heap এ যাবে
let person = {
    name: "Sahin",
    age: 25
};

let numbers = [1, 2, 3, 4, 5];
```

### Memory কিভাবে allocate হয়:

```javascript
let x = 10;           // Stack এ 10 store হলো
let y = x;            // Stack এ আরেকটা copy হলো

let obj1 = {a: 1};    // Heap এ object তৈরি হলো
let obj2 = obj1;      // Heap এ same object এর reference
```

**একটা ছবি দিয়ে বুঝি:**

```
Stack:
[x = 10]
[y = 10]
[obj1 = reference to Heap]
[obj2 = same reference to Heap]

Heap:
[{a: 1}] <-- obj1 এবং obj2 দুজনেই এটা point করছে
```

### Garbage Collection কিভাবে কাজ করে:

Garbage Collection মানে হলো যেসব জিনিস আর ব্যবহার হচ্ছে না, সেগুলো memory থেকে মুছে ফেলা।

**উদাহরণ ১: সহজ ক্ষেত্রে**

```javascript
function createUser() {
    let user = {
        name: "John",
        age: 30
    };
    console.log(user.name);
}

createUser();
// Function শেষ হলে 'user' object আর accessible না
// Garbage Collector এটা মুছে ফেলবে
```

**উদাহরণ ২: Reference থাকলে মুছবে না**

```javascript
let user1 = { name: "John" };
let user2 = user1;  // user1 এর reference

user1 = null;  // user1 null হলো
// কিন্তু user2 এখনো object কে point করছে
// তাই Garbage Collector এটা মুছবে না
```

**উদাহরণ ৩: সব reference চলে গেলে মুছবে**

```javascript
let user1 = { name: "John" };
let user2 = user1;

user1 = null;
user2 = null;
// এখন কেউ object কে point করছে না
// Garbage Collector এটা মুছে ফেলবে
```

### Mark and Sweep Algorithm:

JavaScript এ Garbage Collection "Mark and Sweep" পদ্ধতিতে হয়।

**কিভাবে কাজ করে:**

1. **Mark Phase:** সব accessible object এ mark করে
2. **Sweep Phase:** যেগুলোতে mark নেই, সেগুলো মুছে ফেলে

```javascript
let obj1 = { name: "A" };
let obj2 = { name: "B" };
let obj3 = { name: "C" };

obj1.friend = obj2;  // obj1 -> obj2
obj2.friend = obj3;  // obj2 -> obj3

obj1 = null;
// obj1 null হলো কিন্তু যদি কোথাও obj2 reference থাকে
// তাহলে obj1, obj2, obj3 কেউ মুছবে না
```

### Memory Leak কখন হয়:

Memory leak মানে হলো memory ঠিকমত free হচ্ছে না।

**উদাহরণ ১: Global variable**

```javascript
// ভুল - এটা memory leak
function createUser() {
    user = { name: "John" };  // var/let/const নেই, global হয়ে গেছে
}
```

**সঠিক:**
```javascript
function createUser() {
    let user = { name: "John" };  // local variable
}
```

**উদাহরণ ২: Event Listener ভুলে যাওয়া**

```javascript
// ভুল - memory leak
function setupButton() {
    let button = document.querySelector('button');
    button.addEventListener('click', ()=>{
        console.log("Clicked");
    });
}

setupButton();
// Button remove করলেও listener থেকে যাবে
```

**সঠিক:**
```javascript
function setupButton() {
    let button = document.querySelector('button');
    
    function handleClick() {
        console.log("Clicked");
    }
    
    button.addEventListener('click', handleClick);
    
    // যখন দরকার
    button.removeEventListener('click', handleClick);
}
```

**উদাহরণ ৩: setInterval বন্ধ না করা**

```javascript
// ভুল - memory leak
let counter = 0;
setInterval(()=>{
    counter++;
    console.log(counter);
}, 1000);
// এটা চলতেই থাকবে, memory খরচ বাড়বে
```

**সঠিক:**
```javascript
let counter = 0;
let intervalId = setInterval(()=>{
    counter++;
    console.log(counter);
    if(counter === 10) {
        clearInterval(intervalId);  // বন্ধ করে দিলাম
    }
}, 1000);
```

---

## মনে রাখার বিষয়:

### V8 Engine:
- JavaScript code কে machine code এ পরিণত করে
- Chrome, Node.js এ ব্যবহার হয়
- C++ দিয়ে তৈরি

### Abstraction:
- Complicated জিনিস লুকিয়ে রাখা
- Simple interface দেওয়া
- Implementation details জানার দরকার নেই

### Memory Management:
- **Stack** - Primitive values
- **Heap** - Objects, Arrays
- **Garbage Collection** - Automatic memory cleanup
- **Mark and Sweep** - GC algorithm

### Memory Leak এড়াতে:
- Global variable এড়িয়ে চলো
- Event listener remove করো
- setInterval/setTimeout clear করো
- Reference null করে দাও

---

## কিছু টিপস:

### ১. Memory efficiently ব্যবহার:

```javascript
// ভালো না
let bigArray = new Array(1000000).fill(0);

// ভালো
let bigArray = [];
for(let i = 0; i < 1000; i++) {
    bigArray.push(i);
}
```

### ২. Object destroy করা:

```javascript
let user = {
    name: "John",
    data: new Array(1000000)
};

// কাজ শেষ হলে
user = null;  // Garbage collector নিয়ে যাবে
```

### ৩. Closure এ সাবধান:

```javascript
function createHeavyFunction() {
    let bigData = new Array(1000000);
    
    return function() {
        // bigData এখানে accessible
        // এটা memory তে থেকে যাবে
        console.log(bigData.length);
    };
}

let fn = createHeavyFunction();
// bigData memory তে আছে
fn = null;  // এখন Garbage collector মুছবে
```