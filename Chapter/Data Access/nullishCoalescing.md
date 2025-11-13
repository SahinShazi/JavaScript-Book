# JavaScript Nullish Coalescing

---

## Optional Chaining (?.) Example

```javascript
const user = {name: 'Rahim', address: {city: 'Dhaka'}};

console.log(user?.address?.city);
console.log(user?.address?.city?.name);
console.log(user.address.city.name);
```

**আউটপুট:**
```
Dhaka
undefined
Error! (cannot read property 'name' of undefined)
```

**ব্যাখ্যা:**
- `user?.address?.city` - Dhaka (আছে)
- `user?.address?.city?.name` - undefined (city string, এর name নেই)
- `user.address.city.name` - Error (city string, এর property নেই)

---

## Problem 01: Nullish Assignment (??=)

```javascript
let x = null;
let xy = x ??= 75;
console.log(xy);
```

**আউটপুট:**
```
75
```

**কিভাবে কাজ করে:**
- `x` হলো `null`
- `??=` মানে: যদি `null` বা `undefined` হয় তাহলে assign করো
- তাই `x` এ 75 assign হয়েছে

---

## Problem 02: Property Check

```javascript
const products = {name: 'Lenovo', items: 100};
let res = products.stock ??= 0;
console.log(res);
```

**আউটপুট:**
```
0
```

**কিভাবে:**
- `products.stock` নেই (undefined)
- তাই 0 assign হয়েছে এবং return হয়েছে

---

## Problem 03: Null Property

```javascript
const productsDetails = {discount: null};
let x = productsDetails.discount ??= 10;
console.log(x);
```

**আউটপুট:**
```
10
```

**কিভাবে:**
- `discount` আছে কিন্তু `null`
- `??=` null দেখে 10 assign করেছে

---

## Problem 04: Missing Property with Default

```javascript
const vehicle = {name: 'Engine', price: 30000};
let x = vehicle?.engin ?? "Engin info missing";
console.log(x);
```

**আউটপুট:**
```
Engin info missing
```

**কিভাবে:**
- `vehicle?.engin` undefined (property নেই)
- `??` দেখে default value দিয়েছে

---

## Problem 05: Multiple Cases

### Case 1: Missing Menu

```javascript
const restaurant = {name: "Sahin Restaurant", born: 1920, do: "Doing"};
let x = restaurant?.menu ?? "Menu not Available";
console.log(x);
```

**আউটপুট:**
```
Menu not Available
```

### Case 2: Missing Social Media

```javascript
const profile = {
  name: 'Sahin',
  sector: "Webdeveloper",
  socaile: {
    youtube: "Sahin",
    fb: 'sahinenam',
    tic: 'Sahin1223'
  }
};

let x = profile?.socaile?.twitter ?? "Twitter is not Available";
console.log(x);
```

**আউटপুट:**
```
Twitter is not Available
```

**কিভাবে:**
- `profile.socaile` আছে
- কিন্তু `twitter` property নেই
- তাই default message দেখাচ্ছে

---

## Nullish Coalescing (??) কি?

`??` operator বলে: যদি বাম পাশে `null` বা `undefined` হয়, তাহলে ডান পাশের value নাও।

### Basic Example:

```javascript
let name = null;
let result = name ?? "Guest";
console.log(result);  // Guest

let age = 0;
let result2 = age ?? 18;
console.log(result2);  // 0 (কারণ 0 null না)
```

---

## ?? vs || পার্থক্য

### || (OR) - Falsy values check করে

```javascript
let count = 0;
console.log(count || 10);  // 10 (0 falsy)

let name = "";
console.log(name || "Guest");  // Guest ("" falsy)
```

### ?? (Nullish) - শুধু null/undefined check করে

```javascript
let count = 0;
console.log(count ?? 10);  // 0 (0 valid)

let name = "";
console.log(name ?? "Guest");  // "" (empty string valid)
```

### তুলনা টেবিল:

| Value | || দিয়ে | ?? দিয়ে |
|-------|---------|---------|
| `null` | ডান পাশ | ডান পাশ |
| `undefined` | ডান পাশ | ডান পাশ |
| `0` | ডান পাশ | বাম পাশ (0) |
| `""` | ডান পাশ | বাম পাশ ("") |
| `false` | ডান পাশ | বাম পাশ (false) |

---

## ??= (Nullish Assignment)

শুধু যদি `null` বা `undefined` হয় তাহলে assign করে।

```javascript
let x = null;
x ??= 5;
console.log(x);  // 5

let y = 10;
y ??= 5;
console.log(y);  // 10 (already আছে)

let z = 0;
z ??= 5;
console.log(z);  // 0 (0 valid)
```

---

## Optional Chaining + Nullish Coalescing

দুটো একসাথে ব্যবহার করলে খুব powerful:

```javascript
const user = {
  name: 'Sahin',
  address: {
    city: 'Dhaka'
  }
};

// Safe access with default
let city = user?.address?.city ?? "Unknown";
console.log(city);  // Dhaka

let country = user?.address?.country ?? "Bangladesh";
console.log(country);  // Bangladesh
```

---

## Real World Examples

### Example 1: User Settings

```javascript
const settings = {
  theme: null,
  language: undefined,
  notifications: false
};

let theme = settings.theme ?? 'dark';
let lang = settings.language ?? 'en';
let notif = settings.notifications ?? true;

console.log(theme);  // dark
console.log(lang);   // en
console.log(notif);  // false (কারণ false valid)
```

### Example 2: API Response

```javascript
const apiResponse = {
  data: {
    user: {
      name: 'Sahin'
      // email নেই
    }
  }
};

let email = apiResponse?.data?.user?.email ?? 'No email provided';
console.log(email);  // No email provided
```

### Example 3: Config Object

```javascript
const config = {
  port: 0,
  host: null,
  timeout: undefined
};

let port = config.port ?? 3000;
let host = config.host ?? 'localhost';
let timeout = config.timeout ?? 5000;

console.log(port);     // 0
console.log(host);     // localhost
console.log(timeout);  // 5000
```

---

## Common Patterns

### Pattern 1: Default Parameters

```javascript
function greet(name) {
  name = name ?? 'Guest';
  console.log(`Hello, ${name}`);
}

greet('Sahin');  // Hello, Sahin
greet(null);     // Hello, Guest
greet();         // Hello, Guest
```

### Pattern 2: Object Property Default

```javascript
const user = {name: 'Sahin'};
const displayName = user?.fullName ?? user?.name ?? 'Anonymous';
console.log(displayName);  // Sahin
```

### Pattern 3: Array Access

```javascript
const items = [];
const firstItem = items?.[0] ?? 'No items';
console.log(firstItem);  // No items
```

---

## মনে রাখার বিষয়

- `?.` - Safe access (error এড়ায়)
- `??` - শুধু null/undefined check করে
- `??=` - null/undefined হলে assign করে
- `||` - সব falsy values check করে
- `??` এবং `?.` একসাথে powerful
- 0, "", false হলে `??` left side return করে