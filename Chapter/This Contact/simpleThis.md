# সহজ-সরল সিম্পল this

হুদাই পোলাপান this নিয়ে confused হয়। এইটা আসলে সিম্পল। জাস্ট একটা উদাহরণ দিলে পানির মতো সোজা হয়ে যাবে।

---

## Basic Example

নিচে একটা `student` নামে একটা object আছে। সেটার মধ্যে একটা method আছে যেটার নাম `getThis`, আর এই method কে call করলে সে `this` এর মান console log করবে।

```javascript
const student = {
  name: "Jhon",
  getThis() {
    console.log(this);
  }
}

student.getThis();
```

**Output:**
```javascript
{name: 'Jhon', getThis: f}
```

স্বাভাবিকভাবেই যদি `student` object এর মধ্যে `getThis` কে call করি, তাহলে সে `this` বলতে `student` object কে console log করবে।

---

## Same Method, Different Object

এইবার `getThis` method কে ধার করে অন্য object এ নিয়ে যাই।

```javascript
const teacher = {
  name: "Bambu Bonor"
}

teacher.getThis = student.getThis;
teacher.getThis();
```

**Output:**
```javascript
{ name: 'Bambu Bonor', getThis: [Function: getThis] }
```

**লক্ষ্য করো:**
- যদিও `teacher` object এর `getThis` আসলে `student` object এর `getThis`
- তারপরেও `teacher` এর পর dot চিহ্ন দিয়ে সেটাকে call করার কারণে সে কিন্তু `this` বলতে `teacher` কেই বোঝাইছে

---

## Free Function (No Object)

```javascript
const freeThis = student.getThis;
freeThis();
```

**Output:**
```javascript
Window {...}  // Browser এ
```

এখন যদি `freeThis` নামক এই function call করি (যদিও সে `student` object এর `getThis` থেকে ধার করা), তারপরেও সে `this` বলতে `window` object কে বোঝাচ্ছে।

---

## this তুমি কার, কে তোমার?

এইবার ভালো করে খেয়াল কর। আমরা একই `getThis` method কে তিন জায়গায় use করছি:

### 1. Student Object এ

```javascript
student.getThis();
// this = student object
```

### 2. Teacher Object এ

```javascript
teacher.getThis();
// this = teacher object
```

### 3. কোনো Object ছাড়া

```javascript
freeThis();
// this = window object
```

---

## The Rule of this

এইটা থেকে বোঝা যায়, `this` বলতে **কোথায় কীভাবে call করা হচ্ছে**, সেটার ওপরে নির্ভর করে।

- যদি কোনো object এর ওপরে call করা হয়, তাহলে সে object কে বোঝাবে
- আর যদি কোনো কিছুর ওপরে call করা না হয়, তাহলে সে global object বা window object কে বোঝাবে

**অর্থাৎ:** `this` বলতে বোঝায় function বা method কোন **context** এ run হচ্ছে।

---

## সহজ Trick: Dot এর বামপাশে তাকাও

আরও সিম্পলভাবে চিন্তা করলে:

- `this` যে method বা function এর ভিতরে লেখা আছে
- তার আগে dot চিহ্নের আগে কি কিছু লেখা আছে?
- যদি থাকে, তাহলে `this` বলতে সেটাকে বোঝাবে
- আর যদি dot না থাকে, তাহলে `this` বলতে `window` বা global object কে বোঝাবে

> **মনে রাখো:** `this` যদি বুঝতে চাও, **dot এর বামপাশে কী আছে**, তার দিকে তাকাও।

---

## Practice Problems

### Problem 1: Laptop এবং Mobile

**Task:** Laptop নামে একটা variable declare কর। সেটার মধ্যে brand নামে একটা property থাকবে, যার মান হবে dell এবং getBrand নামে একটা method থাকবে। এখন mobile নামে একটা object declare কর। তারপর laptop object এর getBrand method টি mobile এ এনে use কর।

**Solution:**

```javascript
const Laptop = {
  brand: "Dell",
  getBrand() {
    console.log(this.brand);
  }
}

Laptop.getBrand();

const mobile = {
  brand: "Oppo"
}

mobile.getBrand = Laptop.getBrand;
mobile.getBrand();
```

**Output:**
```
Dell
Oppo
```

**ব্যাখ্যা:**
- `Laptop.getBrand()` → `this` = Laptop → Dell
- `mobile.getBrand()` → `this` = mobile → Oppo

---

### Problem 2: this কীভাবে নির্ধারিত হয়?

**Answer:**

`this` আসলে কোনো জাদুর শব্দ না। এটা নির্ভর করে **কোথা থেকে function টি call করা হচ্ছে** — অর্থাৎ **who is calling the function**।

জাভাস্ক্রিপ্টে `this` নিজের মান নিজে ঠিক করে না। **context বা calling style** অনুযায়ী set হয়।

**বিভিন্ন Context:**

1. **Object method** → `this` = object
2. **Alone** → `this` = window (browser)
3. **Constructor** → `this` = new instance
4. **Event handler** → `this` = element
5. **Arrow function** → `this` = parent's this

---

### Problem 3: Manager Object

**Task:** Manager নামে একটা object তৈরি কর। যার মধ্যে assignWork নামে method থাকবে। সেই assignWork method এর ভিতরের manager এর tasks নামক property (একটা array) এ নতুন task এর নাম যোগ করবে।

**Solution:**

```javascript
const manager = {
  name: "Sahin",
  tasks: [],

  // এখানে this বলতে manager object কেই বোঝানো হচ্ছে
  assignWork(taskName) {
    this.tasks.push(taskName);
    console.log("Task added:", taskName);
  }
};

manager.assignWork("Create project plan");
manager.assignWork("Review team progress");

console.log(manager.tasks);
```

**Output:**
```
Task added: Create project plan
Task added: Review team progress
[ 'Create project plan', 'Review team progress' ]
```

**ব্যাখ্যা:**
- `assignWork` method এ `this` = `manager` object
- কারণ method কে `manager.assignWork()` দিয়ে call করা হয়েছে
- Dot এর বামপাশে `manager` আছে, তাই `this` = `manager`

---

## Visual Summary

```javascript
// Case 1: Object method
obj.method()
// this = obj

// Case 2: Free function
const func = obj.method;
func()
// this = window

// Case 3: Different object
obj2.method = obj.method;
obj2.method()
// this = obj2
```

---

## Key Points মনে রাখো

1. **Dot এর বামপাশে তাকাও** - সেটাই `this`
2. **কোনো dot নেই?** - তাহলে `this` = `window`
3. **Method share করা যায়** - কিন্তু `this` পরিবর্তন হয়
4. **Context is King** - `this` নির্ভর করে calling context এর উপর
5. **Arrow function ভিন্ন** - এটা parent এর `this` use করে

---

## সহজ মনে রাখার উপায়

```
যে call করে, this তার!

obj.method()  → this = obj
method()      → this = window
new Obj()     → this = new object
```