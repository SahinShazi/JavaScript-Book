# 🛡️ JavaScript Error Validation Examples

---

## 📚 Example 01: Multiply Function Validation

**Function:** দুইটি সংখ্যা গুণ করার জন্য

```javascript
function multiply(num1, num2){
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return 'Please provide a number.';
  }
  const multi = num1 * num2;
  return multi;
}

const result = multiply(6, "sahin");
console.log(result);
```

**Output:**
```
Please provide a number.
```

**ব্যাখ্যা:** এই ফাংশনটি চেক করে যে দুইটি প্যারামিটারই সংখ্যা কিনা। যদি না হয়, তাহলে একটি এরর মেসেজ রিটার্ন করে।

---

## 👤 Example 02: Full Name Function Validation

**Function:** পুরো নাম তৈরি করার জন্য

```javascript
function fullName(first, second) {
    if(typeof first !== 'string') {
        return 'First name should be a String'; 
    } else if (typeof second !== 'string') {
        return 'Second name should be a String';
    }
    const fullNa = first + " " + second;
    return fullNa;
}

// Test Case 1: সঠিক ইনপুট
const result1 = fullName('Sahin', 'Enam');
console.log(result1); // Sahin Enam

// Test Case 2: দ্বিতীয় প্যারামিটার ভুল
const result2 = fullName('Sahin', 8);
console.log(result2); // Second name should be a String

// Test Case 3: প্রথম প্যারামিটার ভুল
const result3 = fullName(9, 'Enam');
console.log(result3); // First name should be a String
```

**ব্যাখ্যা:** এই ফাংশনটি চেক করে যে উভয় প্যারামিটার স্ট্রিং কিনা। যদি প্রথম বা দ্বিতীয় প্যারামিটার স্ট্রিং না হয়, তাহলে সংশ্লিষ্ট এরর মেসেজ দেয়।

---

## 💰 Example 03: Get Price Function Validation

**Function:** অবজেক্ট থেকে মূল্য বের করার জন্য

```javascript
function getPrice(product) {
  if (typeof product !== 'object') {
    return 'Please provaid an object.';
  }
  const price = product.price;
  return price;
}

// Test Case 1: সঠিক ইনপুট
const price1 = getPrice({name: "Phone", price: 5000, color: 'Blu'});
console.log(price1); // 5000

// Test Case 2: ভুল ইনপুট
const price2 = getPrice(77);
console.log(price2); // Please provaid an object.
```

**ব্যাখ্যা:** এই ফাংশনটি চেক করে যে প্যারামিটারটি একটি অবজেক্ট কিনা। যদি না হয়, তাহলে এরর মেসেজ রিটার্ন করে।

---

## 🔢 Example 04: Get Second Element Validation

**Function:** অ্যারে থেকে দ্বিতীয় উপাদান বের করার জন্য

```javascript
function getSecond(numbers) {
  if (Array.isArray(numbers) == false) {
    return 'Please provide an Array.';
  }
  const second = numbers[1];
  return 'The second number is ' + second;
}

// Test Case 1: ভুল ইনপুট
const result1 = getSecond(77);
console.log(result1); // Please provide an Array.

// Test Case 2: সঠিক ইনপুট
const result2 = getSecond([77, 88, 99]);
console.log(result2); // The second number is 88
```

**ব্যাখ্যা:** এই ফাংশনটি `Array.isArray()` ব্যবহার করে চেক করে যে প্যারামিটারটি একটি অ্যারে কিনা।

---

## 🎯 Practice Problems

### Problem 01: First Character Function

**Function:** স্ট্রিং এর প্রথম অক্ষর বের করার জন্য

```javascript
function firstChar(name) {
  if (typeof name !== 'string') {
    return 'Please provide a String.';
  }
  const firstC = name[0];
  return firstC;
}

// Test Case 1: সঠিক ইনপুট
const result1 = firstChar("Sahin");
console.log(result1); // S

// Test Case 2: ভুল ইনপুট
const result2 = firstChar(8686);
console.log(result2); // Please provide a String.
```

---

### Problem 02: Last Item Function

**Function:** অ্যারের শেষ উপাদান বের করার জন্য

```javascript
function lastItem(array) {
  if (Array.isArray(array) == false) {
    return 'Please provide an Array.';
  }
  const last = array[array.length - 1];
  return last;
}

const result = lastItem([5, 6, 7, 8, 9, 10]);
console.log(result); // 10
```

---

### Problem 03: Get Area Function

**Function:** আয়তক্ষেত্রের ক্ষেত্রফল বের করার জন্য

```javascript
function getArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number') {
    return 'Please provide an Number.';
  }
  const area = length * width;
  return area;
}

const result = getArea(9, 10);
console.log(result); // 90
```

---

## 📝 Key Takeaways

- `typeof` অপারেটর ব্যবহার করে ডেটা টাইপ চেক করা যায়
- `Array.isArray()` দিয়ে অ্যারে চেক করা যায়
- ফাংশনে ইনপুট ভ্যালিডেশন করা একটি ভালো প্র্যাকটিস
- সঠিক এরর মেসেজ দেওয়া ডিবাগিং সহজ করে

---