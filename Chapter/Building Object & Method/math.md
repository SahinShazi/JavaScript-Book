# 🔢 JavaScript Math Functions

---

## 📉 Problem 1: Math.min()

**সবচেয়ে ছোট সংখ্যা খুঁজে বের করতে**

```javascript
const math = Math.min(45, 11, 89, 23, 56, -12, -56);
console.log(math);
```

**Output:**
```
-56
```

**ব্যাখ্যা:** `Math.min()` দেওয়া সংখ্যাগুলোর মধ্যে সবচেয়ে ছোট সংখ্যা রিটার্ন করে।

---

## 📈 Problem 2: Math.max()

**সবচেয়ে বড় সংখ্যা খুঁজে বের করতে**

```javascript
const math1 = Math.max(21, 35, 67);
console.log(math1);
```

**Output:**
```
67
```

**ব্যাখ্যা:** `Math.max()` দেওয়া সংখ্যাগুলোর মধ্যে সবচেয়ে বড় সংখ্যা রিটার্ন করে।

**🔥 Array থেকে min/max বের করতে:**
```javascript
const numbers = [21, 35, 67, 89, 12];
const maxNum = Math.max(...numbers);  // Spread operator
const minNum = Math.min(...numbers);
console.log(maxNum);  // 89
console.log(minNum);  // 12
```

---

## 🔄 Problem 3: Math.round()

**নিকটতম পূর্ণসংখ্যায় রাউন্ড করতে**

```javascript
const math2 = Math.round(7.6);
const math3 = Math.round(7.2);
console.log(math3);  // 7
console.log(math2);  // 8
```

**Output:**
```
7
8
```

**ব্যাখ্যা:** 
- `Math.round()` দশমিক সংখ্যাকে নিকটতম পূর্ণসংখ্যায় রূপান্তর করে
- 7.6 → 8 (উপরে উঠেছে)
- 7.2 → 7 (নিচে নেমেছে)
- 7.5 → 8 (.5 হলে উপরে উঠে)

---

## ⬇️ Problem 4: Math.floor()

**নিচের দিকে রাউন্ড করতে**

```javascript
const math4 = Math.floor(9.8);
const math5 = Math.floor(5.3);

console.log(math4);  // 9
console.log(math5);  // 5
```

**Output:**
```
9
5
```

**ব্যাখ্যা:** `Math.floor()` সবসময় নিচের পূর্ণসংখ্যায় রাউন্ড করে, দশমিক যাই হোক না কেন।

**⚠️ Important:**
```javascript
console.log(Math.floor(9.9));   // 9
console.log(Math.floor(-2.3));  // -3 (নেগেটিভ এ আরও নিচে)
```

---

## ⬆️ Problem 5: Math.ceil()

**উপরের দিকে রাউন্ড করতে**

```javascript
const math6 = Math.ceil(3.1);
const math7 = Math.ceil(6.9);

console.log(math6);  // 4
console.log(math7);  // 7
```

**Output:**
```
4
7
```

**ব্যাখ্যা:** `Math.ceil()` সবসময় উপরের পূর্ণসংখ্যায় রাউন্ড করে, দশমিক যতই ছোট হোক।

**📝 Example:**
```javascript
console.log(Math.ceil(3.01));   // 4
console.log(Math.ceil(3.99));   // 4
console.log(Math.ceil(-2.3));   // -2 (নেগেটিভ এ উপরে মানে 0 এর দিকে)
```

---

## ➕ Problem 6: Math.abs()

**সংখ্যার পরম মান (Absolute Value) বের করতে**

```javascript
const math8 = Math.abs(-34);
console.log(math8);
```

**Output:**
```
34
```

**ব্যাখ্যা:** `Math.abs()` যেকোনো সংখ্যাকে পজিটিভ করে দেয়।

**📝 Examples:**
```javascript
console.log(Math.abs(-50));    // 50
console.log(Math.abs(50));     // 50
console.log(Math.abs(-7.5));   // 7.5
console.log(Math.abs(0));      // 0
```

---

## 🎯 Problem 7: Custom Rounding Function

**কাস্টম রাউন্ডিং ফাংশন তৈরি**

```javascript
function num(numbe) {
  return Math.round(numbe);
}

console.log(num(8.9));
```

**Output:**
```
9
```

**ব্যাখ্যা:** এটি একটি কাস্টম ফাংশন যা `Math.round()` ব্যবহার করে সংখ্যা রাউন্ড করে।

**🔥 আরও উন্নত ফাংশন:**
```javascript
// নির্দিষ্ট দশমিক স্থান পর্যন্ত রাউন্ড
function roundToDecimal(number, decimals) {
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

console.log(roundToDecimal(7.6789, 2));  // 7.68
console.log(roundToDecimal(7.6789, 1));  // 7.7
```

---

## 📚 Math Functions চিট শিট

| Function | কাজ | উদাহরণ | Result |
|----------|-----|---------|--------|
| `Math.min()` | সবচেয়ে ছোট সংখ্যা | `Math.min(5, 2, 9)` | 2 |
| `Math.max()` | সবচেয়ে বড় সংখ্যা | `Math.max(5, 2, 9)` | 9 |
| `Math.round()` | নিকটতম পূর্ণসংখ্যা | `Math.round(4.7)` | 5 |
| `Math.floor()` | নিচে রাউন্ড | `Math.floor(4.7)` | 4 |
| `Math.ceil()` | উপরে রাউন্ড | `Math.ceil(4.1)` | 5 |
| `Math.abs()` | পরম মান | `Math.abs(-5)` | 5 |
| `Math.sqrt()` | বর্গমূল | `Math.sqrt(16)` | 4 |
| `Math.pow()` | ঘাত | `Math.pow(2, 3)` | 8 |
| `Math.random()` | Random (0-1) | `Math.random()` | 0.234... |

---

## 🎲 Bonus: Additional Math Functions

### Random Number Generation:
```javascript
// 0 থেকে 1 এর মধ্যে random
const random = Math.random();
console.log(random);  // 0.7234567...

// 1 থেকে 10 এর মধ্যে random integer
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);  // 7

// নির্দিষ্ট range এ random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(5, 15));  // 5 থেকে 15 এর মধ্যে
```

### Power and Square Root:
```javascript
// বর্গ
console.log(Math.pow(5, 2));    // 25

// ঘনফল
console.log(Math.pow(2, 3));    // 8

// বর্গমূল
console.log(Math.sqrt(25));     // 5
console.log(Math.sqrt(16));     // 4

// ঘনমূল
console.log(Math.cbrt(27));     // 3
```

### Trigonometry:
```javascript
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1
console.log(Math.tan(Math.PI / 4));  // 1
```

### Constants:
```javascript
console.log(Math.PI);     // 3.141592653589793
console.log(Math.E);      // 2.718281828459045
```

---

## 🧮 Rounding Comparison

```javascript
const number = 7.6;

console.log(Math.round(number));  // 8  (নিকটতম)
console.log(Math.floor(number));  // 7  (নিচে)
console.log(Math.ceil(number));   // 8  (উপরে)
```

**নেগেটিভ সংখ্যায়:**
```javascript
const negative = -7.6;

console.log(Math.round(negative));  // -8  (নিকটতম)
console.log(Math.floor(negative));  // -8  (আরও নিচে, -∞ এর দিকে)
console.log(Math.ceil(negative));   // -7  (উপরে, 0 এর দিকে)
```

---

## 💡 Practical Examples

### দাম রাউন্ড করা:
```javascript
const price = 123.456;
const roundedPrice = Math.round(price * 100) / 100;
console.log(roundedPrice);  // 123.46
```

### পার্সেন্টেজ ক্যালকুলেশন:
```javascript
const percentage = (45 / 60) * 100;
console.log(Math.round(percentage));  // 75
```

### দূরত্ব ক্যালকুলেশন:
```javascript
const distance = Math.sqrt(Math.pow(4, 2) + Math.pow(3, 2));
console.log(distance);  // 5 (Pythagorean theorem)
```

---