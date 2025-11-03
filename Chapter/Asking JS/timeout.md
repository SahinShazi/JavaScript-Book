# JavaScript setTimeout এবং setInterval

---

## Example 01: setTimeout কিভাবে কাজ করে

### বেসিক setTimeout

```javascript
console.log(1);
console.log(2);

setTimeout(()=>{
  console.log(3);
})

console.log(4);
console.log(5);
console.log(6);
```

**আউটপুট:**
```
1
2
4
5
6
3
```

দেখো, 3 সবার শেষে আসছে! কারণ setTimeout асинхронous। এটা পরে execute হয়।

---

### নির্দিষ্ট সময় পর setTimeout

```javascript
console.log(1);
console.log(2);

setTimeout(()=>{
  console.log(3);
}, 4000)

console.log(4);
console.log(5);
console.log(6);
```

**আউটপুট:**
```
1
2
4
5
6
(৪ সেকেন্ড পর)
3
```

এখানে 4 সেকেন্ড (4000 মিলিসেকেন্ড) পর 3 প্রিন্ট হবে।

---

## Example 02: setInterval দিয়ে বারবার কোড চালানো

### বেসিক setInterval

```javascript
let num = 0;
setInterval(()=>{
    num++
    console.log("Sahin", num)
}, 1000)
```

**আউটপুট:**
```
Sahin 1
Sahin 2
Sahin 3
Sahin 4
Sahin 5
...
(এভাবে চলতেই থাকবে)
```

প্রতি 1 সেকেন্ড পরপর "Sahin" আর num প্রিন্ট হতে থাকবে।

---

### clearInterval দিয়ে বন্ধ করা

```javascript
let num = 0;
const intervalId = setInterval(()=>{
    num++
    console.log("Sahin", num)
    if (num === 5){
      clearInterval(intervalId)
    }
}, 1000)
```

**আউটপুট:**
```
Sahin 1
Sahin 2
Sahin 3
Sahin 4
Sahin 5
(এখানে থেমে যাবে)
```

যখন num 5 হবে, তখন `clearInterval()` দিয়ে interval বন্ধ করে দিচ্ছি।

---

## Problem 01: ৩ সেকেন্ড পর মেসেজ দেখানো

```javascript
setTimeout(()=> {
  console.log("I wasted 3 second of my life by looking at screen and doing nothing");
}, 3000)
```

**আউটপুট:**
```
(৩ সেকেন্ড পর)
I wasted 3 second of my life by looking at screen and doing nothing
```

৩ সেকেন্ড অপেক্ষা করার পর মেসেজটা দেখাবে।

---

## Problem 02: ২ সেকেন্ড পরপর নাম্বার বাড়ানো

```javascript
let num = 131;

setInterval(()=>{
    num = num + 2
    console.log(num)
}, 2000)
```

**আউটপুট:**
```
133
135
137
139
141
...
(চলতেই থাকবে)
```

প্রতি 2 সেকেন্ড পরপর num এর সাথে 2 যোগ হচ্ছে।

---

## Problem 03: নির্দিষ্ট সংখ্যক বার চালানো

```javascript
let num = 0;
const intervalId = setInterval(()=>{
    num++
    console.log("I am learning JavaScript")
    if(num === 6){
        clearInterval(intervalId)
    }
}, 2000)
```

**আউটপুট:**
```
I am learning JavaScript
I am learning JavaScript
I am learning JavaScript
I am learning JavaScript
I am learning JavaScript
I am learning JavaScript
(থেমে যাবে)
```

প্রতি 2 সেকেন্ড পরপর মেসেজ দেখাবে। 6 বার হয়ে গেলে বন্ধ হয়ে যাবে।

---

## Problem 04: Default সময়

**Question:** setTimeout()-এর সেকেন্ড প্যারামিটার বাদ দিলে ডিফল্ট হিসেবে কত মাইক্রোসেকেন্ড ধরে নেয়?

**Answer:** setTimeout()-এর সেকেন্ড প্যারামিটার না দিলে এটা ডিফল্ট 0 মিলিসেকেন্ড ধরে নেয়।

**উদাহরণ:**

```javascript
setTimeout(()=>{
    console.log("Sahin")
})
```

এটা `setTimeout(()=>{ console.log("Sahin") }, 0)` এর মতই কাজ করবে।

**ব্যাখ্যা:**

0 মিলিসেকেন্ড মানে এই না যে এটা তখুনি চলবে। এটা সিনক্রোনাস কোড শেষ হওয়ার পর চলবে।

```javascript
console.log("১");

setTimeout(()=>{
    console.log("২")
})

console.log("৩");
```

**আউটপুট:**
```
১
৩
২
```

দেখো, "২" শেষে আসছে, যদিও setTimeout এ 0 মিলিসেকেন্ড দেয়া।

---

## setTimeout vs setInterval তুলনা

| বৈশিষ্ট্য | setTimeout | setInterval |
|---------|------------|-------------|
| কতবার চলে | একবার | বারবার |
| বন্ধ করার উপায় | clearTimeout() | clearInterval() |
| ব্যবহার | নির্দিষ্ট সময় পর একবার কিছু করার জন্য | নির্দিষ্ট সময় পরপর বারবার কিছু করার জন্য |

---

## কিছু দরকারি উদাহরণ

### ১. ৫ সেকেন্ড পর alert দেখানো

```javascript
setTimeout(()=>{
    alert("৫ সেকেন্ড হয়ে গেছে!")
}, 5000)
```

### ২. প্রতি সেকেন্ডে ঘড়ি দেখানো

```javascript
setInterval(()=>{
    const now = new Date();
    console.log(now.toLocaleTimeString())
}, 1000)
```

### ৩. Countdown Timer

```javascript
let count = 10;
const timer = setInterval(()=>{
    console.log(count)
    count--
    if(count < 0){
        clearInterval(timer)
        console.log("শেষ!")
    }
}, 1000)
```

**আউটপুট:**
```
10
9
8
7
6
5
4
3
2
1
0
শেষ!
```

### ৪. একবার চালানোর পর বন্ধ করা

```javascript
const myTimeout = setTimeout(()=>{
    console.log("এটা দেখা যাবে না")
}, 5000)

// ২ সেকেন্ড পর cancel করে দিলাম
setTimeout(()=>{
    clearTimeout(myTimeout)
    console.log("Timeout বাতিল করা হয়েছে")
}, 2000)
```

---

## মনে রাখার বিষয়

- **setTimeout** = একবার চলবে, নির্দিষ্ট সময় পর
- **setInterval** = বারবার চলবে, নির্দিষ্ট সময় পরপর
- **clearTimeout** = setTimeout বাতিল করতে
- **clearInterval** = setInterval বন্ধ করতে
- সময় মিলিসেকেন্ডে দিতে হয় (1000ms = 1 সেকেন্ড)
- প্যারামিটার না দিলে ডিফল্ট 0 ধরে নেয়

---

## Common ভুল

### ভুল: সময় সেকেন্ডে দেয়া

```javascript
// ভুল - এটা 3 মিলিসেকেন্ড, 3 সেকেন্ড না!
setTimeout(()=>{
    console.log("Hello")
}, 3)
```

### সঠিক:

```javascript
// সঠিক - 3 সেকেন্ড = 3000 মিলিসেকেন্ড
setTimeout(()=>{
    console.log("Hello")
}, 3000)
```

### ভুল: clearInterval করতে ভুলে যাওয়া

```javascript
// এটা চলতেই থাকবে, memory leak হতে পারে
setInterval(()=>{
    console.log("চলছে...")
}, 1000)
```

### সঠিক:

```javascript
const id = setInterval(()=>{
    console.log("চলছে...")
}, 1000)

// যখন দরকার, তখন বন্ধ করো
clearInterval(id)
```