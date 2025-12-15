# JavaScript do...while Loop

---

## do...while কি?

`do...while` loop টা একবার অন্তত চলবেই, condition false হলেও!

**Structure:**
```javascript
do {
  // এই code অন্তত একবার চলবে
} while (condition);
```

---

## Problem 01: Basic do...while

```javascript
let items = 3;
do {
  console.log(items);
  items++;
} while (items <= 5);
```

**আউটপুট:**
```
3
4
5
```

**ব্যাখ্যা:**
- প্রথম: items = 3 → print → items = 4
- দ্বিতীয়: items = 4 → print → items = 5
- তৃতীয়: items = 5 → print → items = 6
- চতুর্থ: items = 6 → 6 <= 5 false → loop বন্ধ

---

## Problem 02: Condition False হলেও একবার চলে

```javascript
let attempts = 12;
do {
  console.log(attempts);
  attempts++;
} while (attempts < 10);
```

**আউটপুট:**
```
12
```

**ব্যাখ্যা:**
- প্রথম: attempts = 12 → print → attempts = 13
- তারপর check: 13 < 10 → false
- কিন্তু একবার তো চলেই গেছে!

**এটাই do...while এর বিশেষত্ব!**

---

## Problem 03: String Manipulation

```javascript
let name = "John";

do {
  console.log(name);
  name = "N" + name;
} while (name.length <= 10);
```

**আউটপুট:**
```
John
NJohn
NNJohn
NNNJohn
```

**Step by Step:**
1. name = "John" (4 chars) → print → name = "NJohn" (5 chars)
2. name = "NJohn" (5 chars) → print → name = "NNJohn" (6 chars)
3. name = "NNJohn" (6 chars) → print → name = "NNNJohn" (7 chars)
4. name = "NNNJohn" (7 chars) → print → name = "NNNNJohn" (8 chars)
5. Check: 8 <= 10? না, 11 > 10 → বন্ধ

**Wait!** একটু confusion আছে। আসলে:
- "John" = 4
- "NJohn" = 5
- "NNJohn" = 6
- "NNNJohn" = 7

7 <= 10 true, তাই আরেকবার চলবে:
- print "NNNJohn" → name = "NNNNJohn" (8)

Check: 8 <= 10 true, আরেকবার:
- print "NNNNJohn" → name = "NNNNNJohn" (9)

Check: 9 <= 10 true, আরেকবার:
- print "NNNNNJohn" → name = "NNNNNNJohn" (10)

Check: 10 <= 10 true, আরেকবার:
- print "NNNNNNJohn" → name = "NNNNNNNJohn" (11)

Check: 11 <= 10 false → বন্ধ!

**Correct Output:**
```
John
NJohn
NNJohn
NNNJohn
NNNNJohn
NNNNNJohn
NNNNNNJohn
```

---

## while vs do...while

### while Loop

```javascript
let i = 10;
while (i < 5) {
  console.log(i);  // কখনো print হবে না
  i++;
}
```

**Output:** কিছু নেই

### do...while Loop

```javascript
let i = 10;
do {
  console.log(i);  // একবার print হবে
  i++;
} while (i < 5);
```

**Output:** `10`

---

## Comparison Table

| বৈশিষ্ট্য | while | do...while |
|---------|-------|------------|
| Condition check | শুরুতে | শেষে |
| Minimum execution | 0 বার | 1 বার |
| Use case | Condition true হলে চলবে | অন্তত একবার চালাতেই হবে |

---

## Real-World Examples

### Example 1: Password Input (অন্তত একবার চাইবেই)

```javascript
let password;
do {
  password = prompt("Enter password:");
} while (password !== "secret123");

console.log("Access granted!");
```

### Example 2: Menu System

```javascript
let choice;
do {
  console.log("1. Start Game");
  console.log("2. Settings");
  console.log("3. Exit");
  
  choice = parseInt(prompt("Enter choice:"));
  
  if (choice === 1) {
    console.log("Game started!");
  } else if (choice === 2) {
    console.log("Settings opened!");
  }
} while (choice !== 3);

console.log("Goodbye!");
```

### Example 3: Retry Logic

```javascript
let attempts = 0;
let success = false;

do {
  attempts++;
  console.log(`Attempt ${attempts}...`);
  
  // Simulate random success
  success = Math.random() > 0.7;
  
  if (success) {
    console.log("Success!");
  }
} while (!success && attempts < 5);

if (!success) {
  console.log("Failed after 5 attempts");
}
```

---

## কখন do...while ব্যবহার করবে?

### ✅ ব্যবহার করো যখন:

1. **অন্তত একবার চালাতেই হবে:**
```javascript
do {
  showMenu();
  choice = getInput();
} while (choice !== "exit");
```

2. **User input নিতে হবে:**
```javascript
let age;
do {
  age = prompt("Enter your age:");
} while (age < 18);
```

3. **Retry logic:**
```javascript
let connected = false;
do {
  connected = tryConnect();
} while (!connected);
```

### ❌ ব্যবহার করো না যখন:

1. **Condition check করে তারপর চালাতে হবে:**
```javascript
// ভুল
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

// সঠিক
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
```

---

## Common Patterns

### Pattern 1: Count Up

```javascript
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 5);
// 1, 2, 3, 4, 5
```

### Pattern 2: Count Down

```javascript
let countdown = 5;
do {
  console.log(countdown);
  countdown--;
} while (countdown > 0);
// 5, 4, 3, 2, 1
```

### Pattern 3: Sum Calculation

```javascript
let num = 1;
let sum = 0;

do {
  sum += num;
  num++;
} while (num <= 10);

console.log(sum);  // 55
```

---

## Infinite Loop সাবধান!

### ভুল:
```javascript
let i = 1;
do {
  console.log(i);
  // i++ ভুলে গেছি!
} while (i <= 5);
// চিরকাল চলবে!
```

### সঠিক:
```javascript
let i = 1;
do {
  console.log(i);
  i++;  // অবশ্যই increment করো
} while (i <= 5);
```

---

## break এবং continue

### break - Loop থামাতে

```javascript
let num = 1;
do {
  if (num === 5) {
    break;  // 5 এ থামবে
  }
  console.log(num);
  num++;
} while (num <= 10);
// 1, 2, 3, 4
```

### continue - একটা iteration skip করতে

```javascript
let num = 0;
do {
  num++;
  if (num % 2 === 0) {
    continue;  // Even skip করবে
  }
  console.log(num);
} while (num < 10);
// 1, 3, 5, 7, 9
```

---

## মনে রাখার সহজ উপায়

**do...while = "করো, তারপর চেক করো"**

```javascript
do {
  // প্রথমে করো
} while (condition);  // তারপর চেক করো
```

**while = "চেক করো, তারপর করো"**

```javascript
while (condition) {  // প্রথমে চেক করো
  // তারপর করো
}
```

---

## Key Points

- `do...while` অন্তত একবার চলবেই
- Condition শেষে check হয়
- User input নেওয়ার জন্য ভালো
- Menu system এ useful
- Retry logic এ কাজে লাগে
- Infinite loop এড়াতে সাবধান
- `break` এবং `continue` use করা যায়