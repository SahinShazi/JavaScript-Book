# JavaScript Shorthand Operators

---

## Assignment Operators

### += (Add and Assign)

```javascript
let apples = 7;
let a = apples += 5;
console.log(a);  // 12
```

### -= (Subtract and Assign)

```javascript
let apples = 7;
let a = apples -= 5;
console.log(a);  // 2
```

### *= (Multiply and Assign)

```javascript
let apples = 7;
let a = apples *= 5;
console.log(a);  // 35
```

### %= (Modulus and Assign)

```javascript
let apples = 7;
let a = apples %= 5;
console.log(a);  // 2
```

### /= (Divide and Assign)

```javascript
let apples = 7;
let a = apples /= 5;
console.log(a);  // 1.4
```

---

## Increment/Decrement Operators

### Post-increment (a++)

```javascript
let a = 5;
let b = a++;
console.log(b);  // 5 (আগের value)
console.log(a);  // 6 (এখন বেড়েছে)
```

### Pre-increment (++a)

```javascript
let a = 5;
let b = ++a;
console.log(b);  // 6 (আগে বেড়ে তারপর assign)
console.log(a);  // 6
```

### Post vs Pre তুলনা:

```javascript
let x = 5;
console.log(x++);  // 5 (পরে বাড়বে)
console.log(x);    // 6

let y = 5;
console.log(++y);  // 6 (আগে বেড়েছে)
console.log(y);    // 6
```

---

## Logical Assignment Operators

### &&= (AND Assignment)

```javascript
let tomato = 10;
tomato &&= 5;
console.log(tomato);  // 5
```

**কারণ:** `tomato` truthy ছিল, তাই 5 assign হয়েছে।

```javascript
let tomato = 0;
tomato &&= 5;
console.log(tomato);  // 0
```

**কারণ:** `tomato` falsy (0), তাই change হয়নি।

### ||= (OR Assignment)

```javascript
let money = 0;
money ||= 5;
console.log(money);  // 5
```

**কারণ:** `money` falsy ছিল, তাই 5 assign হয়েছে।

```javascript
let money = 10;
money ||= 5;
console.log(money);  // 10
```

**কারণ:** `money` truthy, তাই change হয়নি।

### ??= (Nullish Assignment)

```javascript
let price = null;
price ??= 100;
console.log(price);  // 100

let count = 0;
count ??= 100;
console.log(count);  // 0 (কারণ 0 valid)
```

---

## Problems

### Problem 01: Post vs Pre Increment

```javascript
let a = 59;
let b = a++;
let c = ++a;
console.log(b);
console.log(c);
```

**আউটপুট:**
```
59
61
```

**ব্যাখ্যা:**
- `a++` → b = 59, তারপর a = 60
- `++a` → আগে a = 61, তারপর c = 61

---

### Problem 02: Divide Assignment

```javascript
let orange = 100;
let b = orange /= 15;
console.log(b);
```

**আউটপুট:**
```
6.666666666666667
```

---

### Problem 03: AND Assignment

```javascript
let mango = 20;
mango &&= 10;
console.log(mango);
```

**আউটপুট:**
```
10
```

**কারণ:** Mango truthy ছিল, তাই এটা 10 হয়ে গেলো।

---

### Problem 04: Multiple Operations

```javascript
let bananas = 50;
let a = bananas *= 4;
a ||= 50;
console.log(a);
```

**আউটপুট:**
```
200
```

**ব্যাখ্যা:**
- `bananas *= 4` → 50 * 4 = 200
- `a = 200`
- `a ||= 50` → a truthy, তাই change হয়নি

---

### Problem 05: OR Assignment

```javascript
let grapes = 10;
grapes ||= 19;
console.log(grapes);
```

**আউটপুট:**
```
10
```

**কারণ:** grapes truthy, তাই change হয়নি।

---

### Problem 06: Subtract Assignment

```javascript
let apples = 20;
let a = apples -= 10;
console.log(a);
```

**আউটপুট:**
```
10
```

---

### Problem 07: Undefined with OR

```javascript
let price = undefined;
price ||= 90;
console.log(price);
```

**আউটপুট:**
```
90
```

**কারণ:** undefined falsy, তাই 90 assign হয়েছে।

---

### Problem 08: Variable Name Error

```javascript
let tomato = 0;
mango &&= 5;
console.log(tomato);
```

**Error কেন?**

`mango` variable declare করা নেই! `tomato` declare আছে কিন্তু `mango` নেই।

**সঠিক:**
```javascript
let tomato = 0;
tomato &&= 5;
console.log(tomato);  // 0
```

---

### Problem 09: Modulus Assignment

```javascript
let apples = 15;
let a = apples %= 6;
console.log(a);
```

**আউটপুট:**
```
3
```

**কারণ:** 15 % 6 = 3 (ভাগশেষ)

---

## Operator Summary Table

| Operator | কাজ | Example | Result |
|----------|-----|---------|--------|
| `+=` | যোগ করে assign | `a += 5` | a = a + 5 |
| `-=` | বিয়োগ করে assign | `a -= 5` | a = a - 5 |
| `*=` | গুণ করে assign | `a *= 5` | a = a * 5 |
| `/=` | ভাগ করে assign | `a /= 5` | a = a / 5 |
| `%=` | ভাগশেষ assign | `a %= 5` | a = a % 5 |
| `**=` | ঘাত assign | `a **= 2` | a = a ** 2 |
| `++` | 1 বাড়ায় | `a++` বা `++a` | a = a + 1 |
| `--` | 1 কমায় | `a--` বা `--a` | a = a - 1 |
| `&&=` | truthy হলে assign | `a &&= 5` | if(a) a = 5 |
| `\|\|=` | falsy হলে assign | `a \|\|= 5` | if(!a) a = 5 |
| `??=` | null/undefined হলে assign | `a ??= 5` | if(a==null) a=5 |

---

## Additional Shortcuts

### Exponentiation Assignment (**=)

```javascript
let num = 2;
num **= 3;
console.log(num);  // 8 (2^3)
```

### Bitwise Operators

```javascript
let x = 5;
x &= 3;   // AND
x |= 3;   // OR
x ^= 3;   // XOR
x <<= 2;  // Left shift
x >>= 2;  // Right shift
```

### Decrement Operator (--)

```javascript
let count = 10;
count--;
console.log(count);  // 9

let count2 = 10;
--count2;
console.log(count2);  // 9
```

---

## Truthy vs Falsy Values

### Falsy Values (যারা false হিসেবে count হয়):

```javascript
false
0
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN
```

### Truthy Values (বাকি সব):

```javascript
true
1, -1, 100 (যেকোনো number except 0)
"hello" (যেকোনো non-empty string)
[] (empty array)
{} (empty object)
function() {} (function)
```

### Example:

```javascript
let value = "";
value ||= "default";  // "default" (falsy)

let value2 = "hello";
value2 ||= "default";  // "hello" (truthy)

let value3 = 0;
value3 &&= 10;  // 0 (falsy, change হয়নি)

let value4 = 5;
value4 &&= 10;  // 10 (truthy, change হয়েছে)
```

---

## Quick Reference

### কখন কি ব্যবহার করবে:

**Math operations:**
```javascript
count += 1;    // বাড়াতে
count -= 1;    // কমাতে
price *= 2;    // দ্বিগুণ করতে
total /= 5;    // ভাগ করতে
```

**Default values:**
```javascript
name ||= "Guest";        // falsy হলে
email ??= "no@email";    // null/undefined হলে
isActive &&= true;       // truthy হলে
```

**Counter:**
```javascript
count++;    // পরে বাড়ানো
++count;    // আগে বাড়ানো
count--;    // পরে কমানো
--count;    // আগে কমানো
```

---

## Common Mistakes

### ভুল ১: Variable না থাকা

```javascript
// ভুল
mango &&= 5;  // Error! mango নেই

// সঠিক
let mango = 10;
mango &&= 5;
```

### ভুল ২: Post vs Pre বুঝতে না পারা

```javascript
let x = 5;
console.log(x++);  // 5 (তারপর 6)
console.log(++x);  // 7 (আগে 7)
```

### ভুল ৩: &&= এবং ||= এর পার্থক্য

```javascript
let a = 0;
a &&= 5;  // 0 (falsy, change হয়নি)
a ||= 5;  // 5 (falsy, change হয়েছে)
```

---

## মনে রাখার বিষয়

- `+=, -=, *=, /=, %=` → Math shortcuts
- `++, --` → Increment/Decrement
- `&&=` → truthy হলে assign
- `||=` → falsy হলে assign
- `??=` → null/undefined হলে assign
- `a++` → পরে বাড়ে, `++a` → আগে বাড়ে
- সব shorthand operators মূল variable change করে