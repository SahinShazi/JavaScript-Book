# 🔍 JavaScript Regular Expression (RegEx)

---

## 📝 Problem 1: Replace Single Match

**একটি শব্দ পরিবর্তন করতে**

```javascript
const sentence1 = "I bought an orange";
console.log(sentence1.replace(/orange/, "grape"));
```

**Output:**
```
I bought an grape
```

**ব্যাখ্যা:** 
- `/orange/` হল একটি regular expression pattern
- `replace()` মেথড প্রথম match খুঁজে তা পরিবর্তন করে
- এখানে "orange" শব্দটি "grape" দিয়ে পরিবর্তিত হয়েছে

---

## ✅ Problem 2: Test Pattern

**প্যাটার্ন আছে কিনা চেক করতে**

```javascript
const sentence2 = "I like to have and banana";
const pattern = /ana/;
console.log(pattern.test(sentence2));
```

**Output:**
```
true
```

**ব্যাখ্যা:** 
- `test()` মেথড চেক করে যে pattern টি string এ আছে কিনা
- "banana" শব্দে "ana" আছে, তাই `true` রিটার্ন করে
- এটি boolean value রিটার্ন করে (true/false)

**📝 আরও উদাহরণ:**
```javascript
const text = "Hello World";
console.log(/hello/i.test(text));    // true (i = case insensitive)
console.log(/xyz/.test(text));       // false
console.log(/world/i.test(text));    // true
```

---

## 🔄 Problem 3: Replace All Matches (Global Flag)

**সব ম্যাচ পরিবর্তন করতে**

```javascript
const sentence3 = "I am eating apple. apple is good. apple helps me a lot.";
console.log(sentence3.replace(/apple/g, "JavaScript"));
```

**Output:**
```
I am eating JavaScript. JavaScript is good. JavaScript helps me a lot.
```

**ব্যাখ্যা:** 
- `/apple/g` এর `g` হল **global flag**
- এটি string এর সব "apple" শব্দ খুঁজে বের করে পরিবর্তন করে
- `g` flag ছাড়া শুধু প্রথম match পরিবর্তন হতো

**🔥 g flag ছাড়া:**
```javascript
const text = "I am eating apple. apple is good. apple helps me a lot.";
console.log(text.replace(/apple/, "JavaScript"));
// Output: I am eating JavaScript. apple is good. apple helps me a lot.
// শুধু প্রথমটি পরিবর্তন হয়েছে
```

---

## 🎯 RegEx Flags চিট শিট

| Flag | নাম | কাজ | উদাহরণ |
|------|-----|-----|---------|
| `g` | Global | সব match খুঁজে | `/apple/g` |
| `i` | Case Insensitive | ছোট/বড় হাতের পার্থক্য নেই | `/apple/i` |
| `m` | Multiline | একাধিক লাইনে search | `/^apple/m` |
| `s` | Dotall | `.` newline match করে | `/a.c/s` |

**📝 উদাহরণ:**
```javascript
const text = "Apple is good. APPLE is great.";

// শুধু প্রথম match
console.log(text.replace(/apple/i, "Fruit"));
// Output: Fruit is good. APPLE is great.

// সব match (case insensitive)
console.log(text.replace(/apple/gi, "Fruit"));
// Output: Fruit is good. Fruit is great.
```

---

## 🔧 Common RegEx Methods

### 1. test() - Pattern চেক করা
```javascript
const pattern = /hello/i;
const text = "Hello World";

console.log(pattern.test(text));  // true
```

### 2. match() - সব match খুঁজে বের করা
```javascript
const text = "My phone: 01712345678, Office: 01987654321";
const matches = text.match(/\d{11}/g);
console.log(matches);
// Output: ['01712345678', '01987654321']
```

### 3. replace() - Replace করা
```javascript
const text = "Hello World";

// Single replace
console.log(text.replace(/o/, "0"));
// Output: Hell0 World

// Global replace
console.log(text.replace(/o/g, "0"));
// Output: Hell0 W0rld
```

### 4. search() - Position খুঁজে বের করা
```javascript
const text = "Hello World";
console.log(text.search(/World/));  // 6
console.log(text.search(/xyz/));    // -1 (not found)
```

### 5. split() - String ভাগ করা
```javascript
const text = "apple,banana,orange";
const fruits = text.split(/,/);
console.log(fruits);
// Output: ['apple', 'banana', 'orange']
```

---

## 📐 Common RegEx Patterns

### সংখ্যা (Digits):
```javascript
const text = "My age is 25 years";

// যেকোনো digit
console.log(text.match(/\d/g));           // ['2', '5']

// একাধিক digit একসাথে
console.log(text.match(/\d+/g));          // ['25']

// নির্দিষ্ট সংখ্যক digit
console.log("01712345678".match(/\d{11}/));  // ['01712345678']
```

### অক্ষর (Letters):
```javascript
const text = "Hello123World";

// শুধু অক্ষর (a-z, A-Z)
console.log(text.match(/[a-zA-Z]+/g));    // ['Hello', 'World']

// Word characters (অক্ষর + সংখ্যা)
console.log(text.match(/\w+/g));          // ['Hello123World']
```

### Email Validation:
```javascript
const email = "user@example.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailPattern.test(email));    // true
console.log(emailPattern.test("invalid")); // false
```

### Phone Number:
```javascript
const phone = "01712345678";
const phonePattern = /^01[3-9]\d{8}$/;

console.log(phonePattern.test(phone));     // true
console.log(phonePattern.test("12345"));   // false
```

### Whitespace:
```javascript
const text = "Hello   World";

// Whitespace খুঁজে বের করা
console.log(text.match(/\s+/g));          // ['   ']

// Whitespace মুছে ফেলা
console.log(text.replace(/\s+/g, " "));   // "Hello World"
```

---

## 🎨 Special Characters

| Character | কাজ | উদাহরণ |
|-----------|-----|---------|
| `.` | যেকোনো একটি character | `/a.c/` matches "abc", "a1c" |
| `^` | String এর শুরু | `/^Hello/` |
| `$` | String এর শেষ | `/World$/` |
| `*` | 0 বা তার বেশি বার | `/ab*/` |
| `+` | 1 বা তার বেশি বার | `/ab+/` |
| `?` | 0 বা 1 বার | `/colou?r/` |
| `\d` | Digit (0-9) | `/\d+/` |
| `\w` | Word character | `/\w+/` |
| `\s` | Whitespace | `/\s+/` |
| `[abc]` | a, b, অথবা c | `/[aeiou]/` |
| `[^abc]` | a, b, c বাদে সব | `/[^aeiou]/` |
| `{n}` | ঠিক n বার | `/\d{3}/` |
| `{n,}` | n বা তার বেশি বার | `/\d{3,}/` |
| `{n,m}` | n থেকে m বার | `/\d{3,5}/` |

---

## 💡 Practical Examples

### 1. Password Validation:
```javascript
// কমপক্ষে 8 অক্ষর, 1টি uppercase, 1টি lowercase, 1টি number
const password = "MyPass123";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(passwordPattern.test(password));  // true
```

### 2. URL Validation:
```javascript
const url = "https://www.example.com";
const urlPattern = /^https?:\/\/.+/;

console.log(urlPattern.test(url));  // true
```

### 3. Extract Numbers:
```javascript
const text = "Price: $50, Discount: $10, Total: $40";
const numbers = text.match(/\d+/g);
console.log(numbers);  // ['50', '10', '40']
```

### 4. Remove Special Characters:
```javascript
const text = "Hello@World#2024!";
const cleaned = text.replace(/[^a-zA-Z0-9]/g, "");
console.log(cleaned);  // "HelloWorld2024"
```

### 5. Title Case:
```javascript
const text = "hello world from javascript";
const titleCase = text.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titleCase);  // "Hello World From Javascript"
```

### 6. Bangladesh Phone Number:
```javascript
const phone = "01712345678";
const bdPhonePattern = /^01[3-9]\d{8}$/;

if (bdPhonePattern.test(phone)) {
  console.log("Valid BD phone number");
} else {
  console.log("Invalid phone number");
}
```

---

## 🔥 Advanced Examples

### Case Insensitive Replace:
```javascript
const text = "Apple is good. APPLE is great. apple is best.";
const result = text.replace(/apple/gi, "Mango");
console.log(result);
// Output: Mango is good. Mango is great. Mango is best.
```

### Replace with Function:
```javascript
const text = "I have 2 apples and 3 oranges";
const result = text.replace(/\d+/g, (match) => {
  return parseInt(match) * 2;
});
console.log(result);
// Output: I have 4 apples and 6 oranges
```

### Named Groups (ES2018+):
```javascript
const date = "2024-11-01";
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = date.match(pattern);

console.log(match.groups.year);   // 2024
console.log(match.groups.month);  // 11
console.log(match.groups.day);    // 01
```

---

## 📚 Quick Reference

### String থেকে RegEx তৈরি:
```javascript
// Literal notation (সবচেয়ে common)
const regex1 = /pattern/flags;

// Constructor (dynamic pattern এর জন্য)
const regex2 = new RegExp("pattern", "flags");

const searchTerm = "hello";
const regex3 = new RegEx(searchTerm, "gi");
```

### RegEx Test করার সহজ উপায়:
```javascript
const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
const isPhone = (str) => /^01[3-9]\d{8}$/.test(str);
const isURL = (str) => /^https?:\/\/.+/.test(str);

console.log(isEmail("test@example.com"));  // true
console.log(isPhone("01712345678"));       // true
console.log(isURL("https://google.com"));  // true
```

---