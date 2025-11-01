# 🗂️ JavaScript Set and Map Examples

---

## 🔹 JavaScript Set

### Example 01: Remove Duplicates from Array

**অ্যারে থেকে ডুপ্লিকেট মান বাদ দিতে**

```javascript
const number = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 9, 9];
const uniqueArray = [...new Set(number)];
console.log(uniqueArray);
```

**Output:**
```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**ব্যাখ্যা:** 
- `Set` শুধুমাত্র ইউনিক ভ্যালু রাখে
- Spread operator `...` ব্যবহার করে Set কে আবার Array তে কনভার্ট করা হয়েছে

---

### Example 02: Set Methods

**Set এর বিভিন্ন মেথড**

```javascript
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(10); // ডুপ্লিকেট, যুক্ত হবে না
mySet.add(50);
console.log(mySet);
```

**Output:**
```javascript
Set(4) { 10, 20, 30, 50 }
```

#### Check if Value Exists (has):
```javascript
console.log(mySet.has(20));   // true
console.log(mySet.has(100));  // false
```

#### Delete Value:
```javascript
mySet.delete(10);
console.log(mySet);
```

**Output:**
```javascript
Set(3) { 20, 30, 50 }
```

**ব্যাখ্যা:**
- `add()` - নতুন ভ্যালু যোগ করে
- `has()` - ভ্যালু আছে কিনা চেক করে
- `delete()` - নির্দিষ্ট ভ্যালু মুছে দেয়

---

## 🗺️ JavaScript Map

### Example 03: Map Basic Usage

**Key-Value Pair সংরক্ষণ করতে**

```javascript
const myMap = new Map();
myMap.set("name", "Sahin");
myMap.set("age", 25);
myMap.set("sector", "Web Developer");
myMap.set("rool", 01);

console.log(myMap);
```

**Output:**
```javascript
Map(4) {
  'name' => 'Sahin',
  'age' => 25,
  'sector' => 'Web Developer',
  'rool' => 1
}
```

**Map থেকে মান পেতে:**
```javascript
console.log(myMap.get("name"));      // Sahin
console.log(myMap.get("age"));       // 25
console.log(myMap.has("sector"));    // true
console.log(myMap.size);             // 4
```

**ব্যাখ্যা:**
- `set(key, value)` - key-value pair যোগ করে
- `get(key)` - key এর মান রিটার্ন করে
- `has(key)` - key আছে কিনা চেক করে
- `size` - কতটি entry আছে দেখায়

---

## 🎯 Practice Problems

### Problem 01: Create Set from Array

**অ্যারে থেকে Set তৈরি করা**

```javascript
const myNum = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = new Set(myNum);
console.log(uniqueSet);
```

**Output:**
```javascript
Set(5) { 1, 2, 3, 4, 5 }
```

---

### Problem 02: Add Values to Set

**Set এ মান যোগ করা**

```javascript
const myNewSet = new Set();
myNewSet.add(10);
myNewSet.add(20);
myNewSet.add(10); // ডুপ্লিকেট, যুক্ত হবে না
myNewSet.add(30);
console.log(myNewSet);
```

**Output:**
```javascript
Set(3) { 10, 20, 30 }
```

---

### Problem 03: Delete from Set

**Set থেকে মান মুছে ফেলা**

```javascript
// Way 1: নতুন Set থেকে delete
const newSet = new Set([10, 20, 30]);
newSet.delete(10);
console.log(newSet);
// Output: Set(2) { 20, 30 }

// Way 2: আগের Set থেকে delete
myNewSet.delete(10);
console.log(myNewSet);
// Output: Set(2) { 20, 30 }
```

---

### Problem 04: Array → Set → Array

**অ্যারে থেকে ডুপ্লিকেট বাদ দিয়ে আবার অ্যারে তৈরি**

```javascript
const myArray = [1, 2, 3, 4, 2, 1, 5, 5];
const mySet1 = new Set(myArray);
const convertArray = [...new Set(mySet1)];
console.log(convertArray);
```

**Output:**
```javascript
[1, 2, 3, 4, 5]
```

**আরও সহজ উপায়:**
```javascript
const myArray = [1, 2, 3, 4, 2, 1, 5, 5];
const uniqueArray = [...new Set(myArray)];
console.log(uniqueArray);
// Output: [1, 2, 3, 4, 5]
```

---

## 📊 Set vs Map Comparison

| Feature | Set | Map |
|---------|-----|-----|
| **Structure** | শুধু values | Key-Value pairs |
| **Uniqueness** | শুধু unique values | Unique keys (values duplicate হতে পারে) |
| **Add Data** | `add(value)` | `set(key, value)` |
| **Check Existence** | `has(value)` | `has(key)` |
| **Remove Data** | `delete(value)` | `delete(key)` |
| **Get Size** | `size` | `size` |
| **Use Case** | ডুপ্লিকেট বাদ দিতে | Key-value data store করতে |

---

## 🔧 Common Set Methods

```javascript
const mySet = new Set([1, 2, 3, 4, 5]);

// Add element
mySet.add(6);

// Check if exists
console.log(mySet.has(3));  // true

// Delete element
mySet.delete(2);

// Get size
console.log(mySet.size);  // 5

// Clear all
mySet.clear();

// Convert to Array
const array = [...mySet];
const array2 = Array.from(mySet);
```

---

## 🔧 Common Map Methods

```javascript
const myMap = new Map();

// Set key-value
myMap.set('name', 'John');
myMap.set('age', 30);

// Get value
console.log(myMap.get('name'));  // John

// Check if key exists
console.log(myMap.has('age'));  // true

// Delete key
myMap.delete('age');

// Get size
console.log(myMap.size);  // 1

// Iterate over Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Clear all
myMap.clear();
```

---

## 💡 Practical Use Cases

### ✅ Set Use Cases:
- অ্যারে থেকে ডুপ্লিকেট বাদ দেওয়া
- Unique IDs maintain করা
- Mathematical operations (union, intersection)

### ✅ Map Use Cases:
- User data store করা
- Configuration settings
- Caching data
- Object এর বিকল্প হিসেবে (any type key support)

---