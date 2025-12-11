# JavaScript Closure

---

## Example: Counter Function

```javascript
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const roast1 = counter();
const roast2 = counter();
const roast3 = counter();
const roast4 = counter();
const roast5 = counter();

console.log(roast3());  // 1
console.log(roast3());  // 2
console.log(roast1());  // 1
```

**আউটপুট:**
```
1
2
1
```

**ব্যাখ্যা:**
- `roast3()` প্রথমবার → count = 1
- `roast3()` দ্বিতীয়বার → count = 2 (নিজের count মনে রেখেছে)
- `roast1()` → count = 1 (আলাদা count আছে)

---

## Closure কি জিনিস?

**সহজ ভাষায়:**

Closure হলো একটা function যে তার বাইরের variable মনে রাখতে পারে, এমনকি বাইরের function শেষ হয়ে যাওয়ার পরেও।

**আরও সহজভাবে:**

ধরো তুমি একটা ঘরে ঢুকলে। ঘরের বাইরে একটা বাক্স আছে। তুমি ঘরে ঢুকলেও বাক্সটা দেখতে পাও এবং ব্যবহার করতে পারো। এটাই closure!

### Visual Example:

```javascript
function outer() {
  let secret = "I'm private!";
  
  return function inner() {
    console.log(secret);  // outer এর variable access করছে
  };
}

const getSecret = outer();
getSecret();  // I'm private!
```

**কিভাবে কাজ করে:**
1. `outer()` call করলে `inner()` function return হয়
2. `outer()` শেষ হয়ে যায়
3. কিন্তু `inner()` এখনও `secret` variable মনে রাখে
4. এটাই closure!

---

## Problem 01: Fridge Tracker

```javascript
function fridgeTracker() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const person1 = fridgeTracker();
const person2 = fridgeTracker();
const person3 = fridgeTracker();
const person4 = fridgeTracker();
const person5 = fridgeTracker();

console.log(person1());  // 1
console.log(person1());  // 2
console.log(person1());  // 3

console.log(person2());  // 1
console.log(person2());  // 2
```

**আউটপুট:**
```
1
2
3
1
2
```

**ব্যাখ্যা:**
- `person1` এর নিজের আলাদা `count` আছে
- `person2` এর নিজের আলাদা `count` আছে
- প্রতিটি person তার নিজের count মনে রাখে

---

## Problem 02: Task Tracker

```javascript
function taskTracker() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const task1 = taskTracker();
const task2 = taskTracker();
const task3 = taskTracker();
const task4 = taskTracker();
const task5 = taskTracker();

console.log(task1());  // 1
console.log(task1());  // 2
console.log(task1());  // 3
```

**আউটপুট:**
```
1
2
3
```

**ব্যাখ্যা:**
- `task1` তার নিজের `count` মনে রাখছে
- প্রতিবার call করলে count বাড়ছে
- Closure এর কারণে count টা সংরক্ষিত থাকছে

---

## Closure কেন দরকার?

### 1. Private Variables

```javascript
function bankAccount() {
  let balance = 0;  // Private variable
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      }
      return "Insufficient balance";
    },
    getBalance() {
      return balance;
    }
  };
}

const myAccount = bankAccount();
console.log(myAccount.deposit(1000));   // 1000
console.log(myAccount.withdraw(500));   // 500
console.log(myAccount.getBalance());    // 500
console.log(myAccount.balance);         // undefined (private!)
```

**লক্ষ্য করো:** `balance` কে সরাসরি access করা যাচ্ছে না, শুধু methods দিয়ে!

### 2. Function Factory

```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));   // 10
console.log(triple(5));   // 15
```

### 3. Event Handlers

```javascript
function setupButtons() {
  for (let i = 1; i <= 3; i++) {
    const button = document.querySelector(`#btn${i}`);
    
    button.addEventListener('click', function() {
      console.log(`Button ${i} clicked`);
    });
  }
}
```

---

## Closure এর Real-World Examples

### Example 1: Like Counter

```javascript
function createLikeCounter() {
  let likes = 0;
  
  return {
    like() {
      likes++;
      return `${likes} likes`;
    },
    dislike() {
      if (likes > 0) {
        likes--;
      }
      return `${likes} likes`;
    },
    getLikes() {
      return likes;
    }
  };
}

const post1 = createLikeCounter();
console.log(post1.like());      // 1 likes
console.log(post1.like());      // 2 likes
console.log(post1.dislike());   // 1 likes
```

### Example 2: Timer

```javascript
function createTimer() {
  let seconds = 0;
  
  return {
    start() {
      setInterval(() => {
        seconds++;
        console.log(`${seconds} seconds`);
      }, 1000);
    },
    stop() {
      clearInterval(this.intervalId);
    },
    reset() {
      seconds = 0;
    }
  };
}

const timer = createTimer();
// timer.start();
```

### Example 3: Shopping Cart

```javascript
function createCart() {
  let items = [];
  
  return {
    addItem(item) {
      items.push(item);
      return `${item} added`;
    },
    removeItem(item) {
      items = items.filter(i => i !== item);
      return `${item} removed`;
    },
    getItems() {
      return items;
    },
    getTotal() {
      return items.length;
    }
  };
}

const cart = createCart();
console.log(cart.addItem("Laptop"));   // Laptop added
console.log(cart.addItem("Phone"));    // Phone added
console.log(cart.getItems());          // ['Laptop', 'Phone']
console.log(cart.getTotal());          // 2
```

---

## Closure এর সমস্যা ও সমাধান

### সমস্যা: Loop এ Closure

```javascript
// ভুল
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);  // 4, 4, 4
  }, 1000);
}

// সঠিক - let ব্যবহার
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);  // 1, 2, 3
  }, 1000);
}

// সঠিক - Closure ব্যবহার
for (var i = 1; i <= 3; i++) {
  (function(num) {
    setTimeout(function() {
      console.log(num);  // 1, 2, 3
    }, 1000);
  })(i);
}
```

---

## Closure Pattern

### Pattern 1: Module Pattern

```javascript
const calculator = (function() {
  let result = 0;
  
  return {
    add(num) {
      result += num;
      return this;
    },
    subtract(num) {
      result -= num;
      return this;
    },
    getResult() {
      return result;
    }
  };
})();

calculator.add(10).subtract(3).add(5);
console.log(calculator.getResult());  // 12
```

### Pattern 2: Singleton Pattern

```javascript
const database = (function() {
  let instance = null;
  
  function createInstance() {
    return {
      data: [],
      add(item) {
        this.data.push(item);
      }
    };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const db1 = database.getInstance();
const db2 = database.getInstance();
console.log(db1 === db2);  // true (same instance)
```

---

## Closure চিনার উপায়

একটা function closure হয় যদি:

1. ✅ একটা function অন্য function এর ভিতরে থাকে
2. ✅ ভিতরের function বাইরের variable use করে
3. ✅ ভিতরের function টা return হয় বা কোথাও সংরক্ষিত হয়

**Example:**

```javascript
function outer() {           // 1. বাইরের function
  let data = "secret";       // 2. বাইরের variable
  
  return function inner() {  // 3. ভিতরের function return
    console.log(data);       // 4. বাইরের variable use
  };
}

const func = outer();        // Closure তৈরি হলো!
func();                      // secret
```

---

## মনে রাখার সহজ উপায়

**Closure = Function + তার পরিবেশ**

```javascript
function makeGreeting(name) {
  // name হলো পরিবেশ
  
  return function() {
    // এই function name কে মনে রাখে
    console.log(`Hello, ${name}`);
  };
}

const greetSahin = makeGreeting("Sahin");
const greetKamrul = makeGreeting("Kamrul");

greetSahin();   // Hello, Sahin
greetKamrul();  // Hello, Kamrul
```

প্রতিটা function তার নিজের পরিবেশ মনে রাখে!

---

## Key Points

- Closure = Function যে বাইরের variable মনে রাখে
- Private data তৈরি করতে পারে
- প্রতিটা closure এর নিজের আলাদা environment থাকে
- Memory তে থেকে যায় (সাবধানে use করো)
- Event handlers, callbacks এ খুব useful
- Module pattern তৈরি করতে পারে