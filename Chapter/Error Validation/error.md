# 💡 JavaScript Error Examples

---

## 🧩 Problem 01
**Question:** যদি কোন লাইনের শেষে সেমিকোলন না দেই, তাহলে কি এরর দেবে?

**Answer:**

না, JavaScript-এ লাইনের শেষে সেমিকোলন না দিলেও সাধারণত কোনো এরর দেয় না। তবে কোডের সুন্দর গঠন (readability) ও সম্ভাব্য ভুল এড়ানোর জন্য সেমিকোলন ব্যবহার করা ভালো অভ্যাস।

✅ **উদাহরণ:**
```javascript
const a = 50
console.log(a)
```

👉 এখানে কোনো এরর আসবে না, কোড ঠিকঠাক কাজ করবে।

---

## ⚙️ Problem 02
**Question:** Reference Error কখন হয়?

**Answer:**

যখন আমরা এমন কোনো ভেরিয়েবল বা রেফারেন্স ব্যবহার করি যেটা আমাদের কোডে ডিফাইন করা হয়নি, তখন JavaScript "ReferenceError" দেয়।

❌ **উদাহরণ:**
```javascript
const a = 23;
console.log(b);
```

➡️ **Output:**
```
Uncaught ReferenceError: b is not defined
```

---

## 🔍 Problem 03
**Question:** Syntax Error আর Type Error এর পার্থক্য কী?

**Answer:**

**Syntax Error** হয় যখন আমরা কোডের বানান বা কাঠামোতে ভুল করি—যেমন: ব্র্যাকেট, কিওয়ার্ড, বা সেমিকোলন ভুলে যাওয়া।

**Type Error** হয় যখন আমরা এমন কোনো অপারেশন চালাতে যাই যা ওই টাইপের ডেটার জন্য প্রযোজ্য নয়।

❌ **Syntax Error Example:**
```javascript
console.log('Hello'
```

➡️ **Output:**
```
Uncaught SyntaxError: missing ) after argument list
```

❌ **Type Error Example:**
```javascript
const num = 5;
num.toUpperCase();
```

➡️ **Output:**
```
Uncaught TypeError: num.toUpperCase is not a function
```

---