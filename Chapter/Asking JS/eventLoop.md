# JavaScript Event Loop

---

## Question 01: ইভেন্ট লুপ কিভাবে কাজ করে, বিস্তারিত ব্যাখ্যা কর।

**Answer:**

একটা লুপ কন্টিনিউয়াসলি চলতে থাকে, আর বারবার চেক করে, Call Stack খালি আছে কিনা। যদি খালি না থাকে, তাহলে সে Call Stack এর কাজ করে। আর যদি Call Stack খালি থাকে, তাহলে Callback Queue থেকে কাজ নিয়ে Call Stack এ পাঠায়। অন্যথায় সে কোন কাজ করে না।

### একটা উদাহরণ দিয়ে বুঝি:

```javascript
console.log("শুরু");

setTimeout(()=>{
    console.log("Timeout এর কাজ");
}, 0);

console.log("শেষ");
```

**আউটপুট:**
```
শুরু
শেষ
Timeout এর কাজ
```

**কি হচ্ছে এখানে:**

1. প্রথমে "শুরু" প্রিন্ট হলো (Call Stack এ গেল, কাজ করলো, বের হলো)
2. setTimeout দেখলো, এটা asynchronous। তাই এটার callback Callback Queue তে পাঠিয়ে দিলো
3. "শেষ" প্রিন্ট হলো (Call Stack এ গেল, কাজ করলো, বের হলো)
4. এখন Call Stack খালি। Event Loop দেখলো Callback Queue তে কিছু আছে
5. তাই setTimeout এর callback টা Call Stack এ নিয়ে এলো
6. "Timeout এর কাজ" প্রিন্ট হলো

### আরেকটা উদাহরণ:

```javascript
console.log("১");

setTimeout(()=>{
    console.log("২");
}, 1000);

console.log("৩");

setTimeout(()=>{
    console.log("৪");
}, 0);

console.log("৫");
```

**আউটপুট:**
```
১
৩
৫
৪
২
```

দেখো, synchronous কোড আগে শেষ হয়েছে (১, ৩, ৫)। তারপর asynchronous কোড (৪, ২)।

---

## Question 02: Call stack and callback queue এর মধ্যে পার্থক্য কি?

**Answer:**

কল স্ট্যাক এবং কলব্যাক কিউয়ের মধ্যে প্রধান পার্থক্য হলো, কল স্ট্যাক সিঙ্ক্রোনাস (synchronous) কোড কার্যকর করার জন্য ব্যবহৃত হয় এবং একটি ফাংশন কল হলে তা স্ট্যাকে যুক্ত করে ও শেষ হলে সরিয়ে ফেলে, যেখানে কলব্যাক কিউ অ্যাসিঙ্ক্রোনাস (asynchronous) কাজের জন্য ব্যবহৃত হয়, যেমন setTimeout বা অন্যান্য ইভেন্টের পর কলব্যাক ফাংশনগুলো এই কিউতে জমা হয় এবং কল স্ট্যাক খালি হওয়ার পর একটির পর একটি কার্যকর হয়।

### সহজ ভাষায়:

**Call Stack:** 
- এখানে normal কোড চলে
- যেমন: console.log, ফাংশন কল ইত্যাদি
- এটা একটা stack (LIFO - Last In First Out)
- যেটা শেষে ঢুকে, সেটা আগে বের হয়

**Callback Queue:**
- এখানে asynchronous কোডের callback জমা হয়
- যেমন: setTimeout, setInterval, fetch ইত্যাদির callback
- এটা একটা queue (FIFO - First In First Out)
- যেটা আগে ঢুকে, সেটা আগে বের হয়

### তুলনা:

```javascript
function first(){
    console.log("First");
}

function second(){
    setTimeout(()=>{
        console.log("Second");
    }, 0);
}

function third(){
    console.log("Third");
}

first();    // Call Stack এ গেল
second();   // Callback Queue তে গেল
third();    // Call Stack এ গেল
```

**আউটপুট:**
```
First
Third
Second
```

### একটা ছবি দিয়ে বুঝি:

```
Call Stack (যা এখনই চলছে):
[third]
[second - শুধু setTimeout call]
[first]

Callback Queue (যা অপেক্ষা করছে):
[setTimeout এর callback]

Event Loop এর কাজ:
Call Stack খালি হলে -> Callback Queue থেকে নিয়ে Call Stack এ দাও
```

---

## Question 03: জাভাস্ক্রিপ্ট যদি সিঙ্গেল থ্রেডেড হয়, তাহলে asynchronous কাজগুলো কিভাবে হ্যান্ডেল করে?

**Answer:**

জাভাস্ক্রিপ্ট একটি সিঙ্গেল থ্রেডেড ভাষা হলেও, এটি ইভেন্ট লুপ এবং কলব্যাক কিউ ব্যবহার করে অ্যাসিঙ্ক্রোনাস কাজগুলো পরিচালনা করে। এই প্রক্রিয়াটি একটি নন-ব্লকিং মডেল তৈরি করে, যেখানে কোনো অ্যাসিঙ্ক্রোনাস অপারেশন (যেমন নেটওয়ার্ক রিকোয়েস্ট বা টাইমার) শুরু হলে, জাভাস্ক্রিপ্ট ইঞ্জিন মূল থ্রেডকে ব্লক না করে অন্য কাজ করা চালিয়ে যায়। যখন সেই অ্যাসিঙ্ক্রোনাস কাজটি শেষ হয়, তখন এর কলব্যাক ফাংশনটি কলব্যাক কিউতে যুক্ত হয়। ইভেন্ট লুপ যখন মূল কল স্ট্যাক খালি পায়, তখন কলব্যাক কিউ থেকে কলব্যাক ফাংশনটিকে কল স্ট্যাকে নিয়ে আসে এবং তা কার্যকর করে।

### একটা real-life উদাহরণ:

ধরো তুমি একটা রেস্টুরেন্টে খাবার অর্ডার দিলে।

**Synchronous (Single Thread) হলে:**
- তুমি অর্ডার দিলে
- রান্না শেষ না হওয়া পর্যন্ত তুমি দাঁড়িয়ে থাকবে
- অন্য কিছু করতে পারবে না
- রান্না শেষ হলে তুমি খাবার নিবে

**Asynchronous (Event Loop) হলে:**
- তুমি অর্ডার দিলে
- টোকেন নিয়ে বসে থাকলে (Callback Queue)
- তুমি ফোন চালাতে পারো, বই পড়তে পারো (Call Stack এ অন্য কাজ)
- রান্না শেষ হলে ডাক পড়বে (Event Loop)
- তখন তুমি গিয়ে খাবার নিবে (Callback execute)

### কোড দিয়ে দেখি:

```javascript
console.log("অর্ডার দিলাম");

setTimeout(()=>{
    console.log("খাবার তৈরি হয়েছে");
}, 3000);

console.log("ফোন চালাচ্ছি");
console.log("বই পড়ছি");
```

**আউটপুট:**
```
অর্ডার দিলাম
ফোন চালাচ্ছি
বই পড়ছি
(৩ সেকেন্ড পর)
খাবার তৈরি হয়েছে
```

### Browser/Node.js এর ভূমিকা:

জাভাস্ক্রিপ্ট single threaded, কিন্তু Browser/Node.js multi-threaded। তারা asynchronous কাজ করে দেয়।

```javascript
// জাভাস্ক্রিপ্ট বলে: "আরে Browser, তুমি এই setTimeout টা handle করো"
setTimeout(()=>{
    console.log("হয়ে গেছে");
}, 2000);

// জাভাস্ক্রিপ্ট অন্য কাজ করে
console.log("আমি অন্য কাজ করছি");

// ২ সেকেন্ড পর Browser বলে: "কাজ শেষ, callback নাও"
// Event Loop সেটা Call Stack এ দেয়
```

---

## পুরো প্রসেস একসাথে:

```javascript
console.log("১");

setTimeout(()=>{
    console.log("২");
}, 0);

Promise.resolve().then(()=>{
    console.log("৩");
});

console.log("৪");
```

**আউটপুট:**
```
১
৪
৩
২
```

**কেন এমন হলো:**

1. "১" প্রিন্ট (Call Stack)
2. setTimeout Callback Queue তে গেল
3. Promise Microtask Queue তে গেল (এটা Callback Queue থেকে priority বেশি)
4. "৪" প্রিন্ট (Call Stack)
5. Call Stack খালি
6. Event Loop প্রথমে Microtask Queue check করে
7. "৩" প্রিন্ট (Promise)
8. তারপর Callback Queue check করে
9. "২" প্রিন্ট (setTimeout)

---

## মনে রাখার বিষয়:

- **Call Stack** = Normal কোড চলে এখানে
- **Callback Queue** = Async কোডের callback অপেক্ষা করে
- **Event Loop** = Call Stack খালি হলে Callback Queue থেকে নিয়ে আসে
- **Single Thread** = একবারে একটা কাজ
- **Non-blocking** = Async কাজ অপেক্ষা করার জন্য থামে না

### সহজ মনে রাখার উপায়:

```
১. Sync কোড চলুক (Call Stack)
২. Async কোড line এ দাঁড়াক (Callback Queue)
৩. Sync শেষ হলে Async এর পালা (Event Loop)
```

---

## আরও উদাহরণ:

### Example 1: নেটওয়ার্ক Request

```javascript
console.log("Data চাইছি");

fetch('https://api.example.com/data')
    .then(data => {
        console.log("Data পেয়েছি");
    });

console.log("অন্য কাজ করছি");
```

**আউটপুট:**
```
Data চাইছি
অন্য কাজ করছি
(কিছুক্ষণ পর)
Data পেয়েছি
```

### Example 2: Multiple Timeouts

```javascript
setTimeout(()=> console.log("A"), 0);
setTimeout(()=> console.log("B"), 0);
setTimeout(()=> console.log("C"), 0);

console.log("D");
```

**আউটপুট:**
```
D
A
B
C
```

Callback Queue তে যেটা আগে ঢুকেছে (FIFO), সেটা আগে execute হয়েছে।