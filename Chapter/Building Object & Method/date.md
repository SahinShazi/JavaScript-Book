# 📅 JavaScript Date Examples

---

## 📌 Problem 1: Current Date and Time

**বর্তমান তারিখ এবং সময় পেতে**

```javascript
const now = new Date();
console.log(now);
```

**Output Example:**
```
Sat Nov 01 2025 10:30:45 GMT+0600 (Bangladesh Standard Time)
```

**ব্যাখ্যা:** `new Date()` বর্তমান তারিখ এবং সময় রিটার্ন করে।

---

## 🗓️ Problem 2: Set Specific Date

**নির্দিষ্ট তারিখ এবং সময় সেট করতে**

```javascript
const setDate = new Date(2035, 6, 15, 14, 45, 30);
console.log(setDate);
```

**Output:**
```
Sun Jul 15 2035 14:45:30 GMT+0600 (Bangladesh Standard Time)
```

**ব্যাখ্যা:** 
- ফরম্যাট: `new Date(year, month, day, hours, minutes, seconds)`
- ⚠️ **গুরুত্বপূর্ণ:** মাস 0-indexed (0 = জানুয়ারি, 6 = জুলাই)
- এখানে: বছর = 2035, মাস = 6 (জুলাই), তারিখ = 15, সময় = 14:45:30

---

## 📆 Problem 3: Get Current Year

**বর্তমান বছর পেতে**

```javascript
const year = new Date().getFullYear();
console.log(year);
```

**Output:**
```
2025
```

**ব্যাখ্যা:** `getFullYear()` মেথড বর্তমান বছর রিটার্ন করে।

---

## 🔄 Problem 4: Set Year

**বছর পরিবর্তন করতে**

```javascript
const setYear = new Date().setFullYear(2040);
console.log(setYear);
```

**Output:**
```
1920326445000
```

**ব্যাখ্যা:** 
- `setFullYear()` মেথড বছর সেট করে এবং timestamp (milliseconds) রিটার্ন করে
- এটি 1 জানুয়ারি, 1970 থেকে মিলিসেকেন্ড এ সময় দেখায়

**আরও ভালো উপায়:**
```javascript
const date = new Date();
date.setFullYear(2040);
console.log(date);
// Output: Sat Nov 01 2040 10:30:45 GMT+0600
```

---

## 🌅 Problem 5: Get Day of Week

**সপ্তাহের দিন পেতে**

```javascript
const getDay = new Date().getDay();
console.log(getDay);
```

**Output:**
```
6
```

**ব্যাখ্যা:** 
- `getDay()` সপ্তাহের দিন নম্বর রিটার্ন করে (0-6)
- 0 = রবিবার, 1 = সোমবার, ..., 6 = শনিবার

**দিনের নাম পেতে:**
```javascript
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[new Date().getDay()];
console.log(dayName); // Saturday
```

**নির্দিষ্ট তারিখের দিন পেতে:**
```javascript
const specificDate = new Date("2029-02-16");
const dayNumber = specificDate.getDay();
console.log(dayNumber); // 5 (Friday)
```

---

## 📚 Date Methods চিট শিট

| Method | কাজ | উদাহরণ |
|--------|-----|---------|
| `getFullYear()` | বছর পায় | 2025 |
| `getMonth()` | মাস পায় (0-11) | 10 (নভেম্বর) |
| `getDate()` | তারিখ পায় (1-31) | 1 |
| `getDay()` | সপ্তাহের দিন পায় (0-6) | 6 (শনিবার) |
| `getHours()` | ঘণ্টা পায় (0-23) | 14 |
| `getMinutes()` | মিনিট পায় (0-59) | 45 |
| `getSeconds()` | সেকেন্ড পায় (0-59) | 30 |
| `getTime()` | Timestamp (ms) পায় | 1730444445000 |

---

## 💡 Bonus Tips

### তারিখ ফরম্যাট করা:
```javascript
const date = new Date();
const formatted = date.toLocaleDateString('bn-BD');
console.log(formatted); // ১/১১/২০২৫
```

### দুই তারিখের পার্থক্য:
```javascript
const date1 = new Date('2025-11-01');
const date2 = new Date('2025-12-01');
const diffDays = (date2 - date1) / (1000 * 60 * 60 * 24);
console.log(diffDays); // 30 days
```

---