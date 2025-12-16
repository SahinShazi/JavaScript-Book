# JavaScript switch...case

---

## switch...case কি?

`switch...case` হলো একটা value এর উপর ভিত্তি করে বিভিন্ন action নেওয়ার একটা সহজ উপায়। অনেকগুলো `if...else if` এর চেয়ে পড়তে সহজ।

**Basic Structure:**
```javascript
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
```

---

## Problem 01: Mobile Brand Country

```javascript
const mobile = "Samsung";

switch (mobile) {
  case "Apple":
    console.log("USA");
    break;
  case "Samsung":
    console.log("Korea");
    break;
  case "Xiaomi":
    console.log("China");
    break;
  default: 
    console.log("Unknown Source");
}
```

**আউটপুট:**
```
Korea
```

**ব্যাখ্যা:**
- `mobile` এর value "Samsung"
- "Samsung" case match করে
- "Korea" print হয়
- `break` থাকায় switch শেষ

---

## Problem 02: Browser Choice

### if...else Version

```javascript
let browser = "Chrome";

if (browser === "Chrome") {
  console.log("Best for Developer");
} else if (browser === "Brave") {
  console.log("Privacy focused"); 
} else if (browser === 'Safari') {
  console.log("Apple users choice");
} else {
  console.log("Unsupported browser");
}
```

### switch...case Version

```javascript
let browser = "Chrome";

switch (browser) {
  case "Chrome":
    console.log("Best for Developer.");      
    break;
    
  case "Brave":
    console.log("Privacy Focused.");
    break;
  
  case "Safari":
    console.log("Apple users choice");
    break;
  
  default:
    console.log("Unsupported browser.");
}
```

**আউটপুট (উভয় ক্ষেত্রে):**
```
Best for Developer
```

**switch...case এর সুবিধা:**
- পড়তে সহজ
- পরিষ্কার structure
- কম code repetition

---

## Problem 03: Payment Method

```javascript
let paymentMethod = "debit";

switch (paymentMethod) {
  case "cash":
    console.log("Pay with cash.");
    break;
  case "credit":
    console.log("Pay with credit");
    break;
  case "debit":
    console.log("Pay with debit.");
    break;
  default:
    console.log("Invalid payment method.");
}
```

**আউটপুট:**
```
Pay with debit.
```

---

## Problem 04: Membership Level (if...else)

```javascript
let membership = "platinum";

if (membership === "free") {
  console.log("Access limited content");
} else if (membership === "silver") {
  console.log("Access most content");
} else if (membership === "gold") {
  console.log("Access premium content");
} else if (membership === "platinum") {
  console.log("Full access");
} else {
  console.log("Invalid permission.");
}
```

**আউটপুট:**
```
Full access
```

### switch...case Version (আরও ভালো)

```javascript
let membership = "platinum";

switch (membership) {
  case "free":
    console.log("Access limited content");
    break;
  case "silver":
    console.log("Access most content");
    break;
  case "gold":
    console.log("Access premium content");
    break;
  case "platinum":
    console.log("Full access");
    break;
  default:
    console.log("Invalid permission.");
}
```

---

## Problem 05: Order Status

```javascript
let orderStatus = "pending";

switch (orderStatus) {
  case 'pending':
    console.log("Your order is being processed");               
    break;
  case "shipped":
    console.log("Your order is on the way.");
    break;
  case "delivered":
    console.log("Your order has been delivered.");
    break;
  case "cancelled":
    console.log("Your order was cancelled.");
    break;
  default:
    console.log("Invalid order.");
}
```

**আউটপুট:**
```
Your order is being processed
```

---

## Problem 06: Grade System

```javascript
let grade = "A";

switch (grade) {
  case 'A':
    console.log("Excellent");
    break;
  case 'B':
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Some problem. Please try again.");
}
```

**আউটপুট:**
```
Excellent
```

---

## break কেন দরকার?

### break ছাড়া (Fall-through)

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    // break নেই!
  case 2:
    console.log("Tuesday");
    // break নেই!
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

**আউটপুট:**
```
Tuesday
Wednesday
```

`break` না থাকায় case 2 এর পর case 3 ও চলেছে!

### break সহ (সঠিক)

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

**আউটপুট:**
```
Tuesday
```

---

## Multiple Cases একসাথে

একই code একাধিক case এর জন্য চালাতে চাইলে:

```javascript
let fruit = "apple";

switch (fruit) {
  case "apple":
  case "orange":
  case "banana":
    console.log("This is a fruit");
    break;
  case "carrot":
  case "potato":
    console.log("This is a vegetable");
    break;
  default:
    console.log("Unknown");
}
```

**আউটপুট:**
```
This is a fruit
```

---

## Real-World Examples

### Example 1: Calculator

```javascript
let operation = "+";
let a = 10;
let b = 5;
let result;

switch (operation) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = a / b;
    break;
  default:
    result = "Invalid operation";
}

console.log(result);  // 15
```

### Example 2: Day of Week

```javascript
let dayNumber = new Date().getDay();

switch (dayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
```

### Example 3: HTTP Status Codes

```javascript
let statusCode = 404;

switch (statusCode) {
  case 200:
    console.log("OK");
    break;
  case 201:
    console.log("Created");
    break;
  case 400:
    console.log("Bad Request");
    break;
  case 401:
    console.log("Unauthorized");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Internal Server Error");
    break;
  default:
    console.log("Unknown Status");
}
```

---

## switch vs if...else

### কখন switch ব্যবহার করবে:

✅ একই variable এর বিভিন্ন value check করতে
✅ অনেকগুলো exact matches আছে
✅ Code readability বাড়াতে

```javascript
// ভালো - switch ব্যবহার
switch (color) {
  case "red":
    // ...
    break;
  case "blue":
    // ...
    break;
  case "green":
    // ...
    break;
}
```

### কখন if...else ভালো:

✅ Complex conditions
✅ Range check করতে
✅ Boolean expressions

```javascript
// ভালো - if...else ব্যবহার
if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}
```

---

## Common Mistakes

### ভুল 1: break ভুলে যাওয়া

```javascript
// ভুল
let x = 1;
switch (x) {
  case 1:
    console.log("One");
    // break নেই!
  case 2:
    console.log("Two");
}
// Output: One, Two (দুটোই!)
```

### ভুল 2: default না দেওয়া

```javascript
// ভালো না
let color = "yellow";
switch (color) {
  case "red":
    console.log("Red");
    break;
  case "blue":
    console.log("Blue");
    break;
  // default নেই - yellow handle হবে না
}
```

### ভুল 3: Type mismatch

```javascript
// ভুল
let num = "2";  // String
switch (num) {
  case 2:  // Number
    console.log("Two");
    break;
}
// Match হবে না! "2" !== 2
```

---

## Advanced Patterns

### Pattern 1: Grouped Cases

```javascript
let month = "January";

switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;
  default:
    console.log("Invalid month");
}
```

### Pattern 2: Return in Functions

```javascript
function getDayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "Weekday";
    default:
      return "Invalid day";
  }
}

console.log(getDayType("Saturday"));  // Weekend
```

---

## মনে রাখার সহজ উপায়

**switch = "এটা হলে এটা করো, ওটা হলে ওটা করো"**

```
switch (value) {
  case option1:  // value === option1 হলে
    // এটা করো
    break;      // থামো
  case option2:  // value === option2 হলে
    // এটা করো
    break;      // থামো
  default:       // কিছু match না করলে
    // এটা করো
}
```

---

## Key Points

- `switch` একটা value এর উপর ভিত্তি করে decision নেয়
- প্রতিটা `case` এ `break` দাও (fall-through চাইলে ছাড়া)
- `default` case সবসময় দাও
- Strict equality (`===`) check করে
- Multiple cases একসাথে group করা যায়
- `if...else` এর চেয়ে readable যখন অনেক conditions
- Function এ `return` দিলে `break` লাগে না