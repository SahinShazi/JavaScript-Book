# JavaScript Promise Guide

---

## Example 01: Basic Promise - Food Order

### Promise কি?

Promise হলো একটা ভবিষ্যতের কাজের প্রতিশ্রুতি। কাজটা হয় সফল হবে (resolve), নয়তো ব্যর্থ হবে (reject)।

```javascript
const orderFood = new Promise((resolve, reject) => {
  const foodReady = false;

  if(foodReady) {
    resolve("Food is Ready");
  } else {
    reject("Baap er hotel bondo");
  }
});

orderFood 
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error)
  });
```

**আউটপুট:**
```
Baap er hotel bondo
```

**কারণ:** `foodReady` হলো `false`, তাই `reject()` হয়েছে এবং `.catch()` এ গিয়ে error print হয়েছে।

### যদি foodReady true হতো:

```javascript
const orderFood = new Promise((resolve, reject) => {
  const foodReady = true;  // এখন true

  if(foodReady) {
    resolve("Food is Ready");
  } else {
    reject("Baap er hotel bondo");
  }
});

orderFood 
  .then((message) => {
    console.log(message);  // এখানে আসবে
  })
  .catch((error) => {
    console.log(error)
  });
```

**আউটপুট:**
```
Food is Ready
```

---

## Example 02: Promise with Array Data

```javascript
const getUsers = new Promise((resolve, reject) => {
  const usersAvailable = true;
  const users = ["John", "Alice", "Bob", "Charli"];

  if(usersAvailable){
    resolve(users);
  } else {
    reject('No user available');
  }
});

getUsers
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
```

**আউটপুট:**
```
["John", "Alice", "Bob", "Charli"]
```

Promise যেকোনো data return করতে পারে - string, number, array, object যা খুশি।

---

## Example 03: Promise.all - Multiple Promises

### একসাথে অনেকগুলো Promise চালানো

```javascript
const moneyRequest = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Request submitted"), 1000);
});

const transferMoney = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Money transfer"), 2000);
});

const payFee = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Fee paid!"), 1500);
});

Promise.all([moneyRequest, transferMoney, payFee])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
```

**আউটপুট (২ সেকেন্ড পর):**
```
["Request submitted", "Money transfer", "Fee paid!"]
```

**ব্যাখ্যা:**
- `Promise.all()` সব promise শেষ হওয়ার অপেক্ষা করে
- সবচেয়ে ধীরটা হলো `transferMoney` (2 সেকেন্ড)
- তাই ২ সেকেন্ড পর সব একসাথে result আসবে
- কোনো একটা reject হলে পুরোটা fail হবে

---

## Problem 01: Get Users List

```javascript
const getUsers = new Promise((resolve, reject) => {
  const usersAvailable = true;
  const users = ['Sahin', 'Shakil', 'Rakib', 'Rasel'];
  
  if(usersAvailable){
    resolve(users);
  } else {
    reject("No users available");
  }
});

getUsers
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
```

**আউটপুট:**
```
['Sahin', 'Shakil', 'Rakib', 'Rasel']
```

---

## Problem 02: Payment Validation

```javascript
const getPay = new Promise((resolve, reject) => {
  const amount = -300;
  
  if(amount > 0){
    resolve("Taka patano hoyche");
  } else {
    reject("Taka patano hoinay");
  }
});

getPay
  .then((money) => {
    console.log(money);
  })
  .catch((error) => {
    console.log(error);
  });
```

**আউটপুট:**
```
Taka patano hoinay
```

**কারণ:** amount negative (-300), তাই condition false হয়ে reject হয়েছে।

### যদি amount positive হতো:

```javascript
const amount = 300;  // positive
```

**তাহলে আউটপুট হতো:**
```
Taka patano hoyche
```

---

## Problem 03: Email Validation Function

```javascript
function sendEmail(email) {
  const sendEmails = new Promise((resolve, reject) => {
    const validEmail = ["abc@gmail.com", "test@yahoo.com", "sahin@outlook.com"];
    
    if(validEmail.includes(email)) {
      resolve("Email from Nigerian prince");
    } else {
      reject("Lest dance in the spam folder");
    }
  });

  return sendEmails;
}

sendEmail("abc@gmail.com")
  .then((email) => {
    console.log(email);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
```

**আউটপুট:**
```
Email from Nigerian prince
```

### Invalid Email দিলে:

```javascript
sendEmail("invalid@example.com")
  .then((email) => {
    console.log(email);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
```

**আউটপুট:**
```
Error: Lest dance in the spam folder
```

---

## Promise এর তিনটা State

```javascript
// 1. Pending - অপেক্ষা করছে
const promise1 = new Promise((resolve, reject) => {
  // কিছুই হয়নি এখনো
});

// 2. Fulfilled - সফল হয়েছে
const promise2 = new Promise((resolve, reject) => {
  resolve("Success!");
});

// 3. Rejected - ব্যর্থ হয়েছে
const promise3 = new Promise((resolve, reject) => {
  reject("Failed!");
});
```

---

## Real-Life Examples

### Example 1: Fake API Call

```javascript
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(userId > 0) {
        resolve({
          id: userId,
          name: "Sahin",
          email: "sahin@example.com"
        });
      } else {
        reject("Invalid user ID");
      }
    }, 2000);
  });
}

getUserData(5)
  .then((user) => {
    console.log("User found:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

**আউটপুট (২ সেকেন্ড পর):**
```
User found: { id: 5, name: 'Sahin', email: 'sahin@example.com' }
```

### Example 2: File Upload Simulation

```javascript
function uploadFile(file) {
  return new Promise((resolve, reject) => {
    console.log("Uploading...");
    
    setTimeout(() => {
      if(file.size < 5000000) {  // 5MB
        resolve("File uploaded successfully!");
      } else {
        reject("File too large!");
      }
    }, 3000);
  });
}

const myFile = { name: "photo.jpg", size: 2000000 };

uploadFile(myFile)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Upload failed:", error);
  });
```

**আউটপুট:**
```
Uploading...
(৩ সেকেন্ড পর)
File uploaded successfully!
```

### Example 3: Promise Chain

```javascript
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve("Data from step 1");
    }, 1000);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete with:", data);
      resolve("Data from step 2");
    }, 1000);
  });
}

function step3(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 complete with:", data);
      resolve("Final result");
    }, 1000);
  });
}

step1()
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((finalResult) => {
    console.log("All done!", finalResult);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

**আউটপুট:**
```
Step 1 complete
Step 2 complete with: Data from step 1
Step 3 complete with: Data from step 2
All done! Final result
```

---

## Promise Methods

### 1. Promise.all() - সবাই শেষ হলে

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);  // [1, 2, 3]
  });
```

**একটা fail হলে সব fail:**
```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error!");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);  // "Error!"
  });
```

### 2. Promise.race() - যে আগে শেষ

```javascript
const slow = new Promise((resolve) => {
  setTimeout(() => resolve("Slow"), 3000);
});

const fast = new Promise((resolve) => {
  setTimeout(() => resolve("Fast"), 1000);
});

Promise.race([slow, fast])
  .then((result) => {
    console.log(result);  // "Fast" (১ সেকেন্ড পর)
  });
```

### 3. Promise.allSettled() - সবার result চাই

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error");
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3])
  .then((results) => {
    console.log(results);
  });
```

**আউটপুট:**
```javascript
[
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 'Error' },
  { status: 'fulfilled', value: 3 }
]
```

### 4. Promise.any() - যেকোনো একটা success হলেই

```javascript
const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve("Success!");
const p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log(result);  // "Success!"
  });
```

---

## Finally Block

### সফল বা ব্যর্থ যাই হোক, এটা চলবে

```javascript
getUserData(5)
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Operation complete!");
  });
```

**Use case:** Loading spinner বন্ধ করা

```javascript
showLoadingSpinner();

fetchData()
  .then((data) => {
    displayData(data);
  })
  .catch((error) => {
    showError(error);
  })
  .finally(() => {
    hideLoadingSpinner();  // যাই হোক spinner বন্ধ
  });
```

---

## Common Mistakes

### ভুল ১: Return করতে ভুলে যাওয়া

```javascript
// ভুল
step1()
  .then((result) => {
    step2(result);  // return নেই!
  })
  .then((result) => {
    console.log(result);  // undefined হবে
  });

// সঠিক
step1()
  .then((result) => {
    return step2(result);  // return আছে
  })
  .then((result) => {
    console.log(result);  // ঠিক হবে
  });
```

### ভুল ২: Catch না দেওয়া

```javascript
// ভুল - error handle হবে না
somePromise()
  .then((data) => {
    console.log(data);
  });

// সঠিক
somePromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### ভুল ৩: Nested Promise (Promise Hell)

```javascript
// ভুল - callback hell এর মত
step1()
  .then((result1) => {
    step2(result1)
      .then((result2) => {
        step3(result2)
          .then((result3) => {
            console.log(result3);
          });
      });
  });

// সঠিক - chain করো
step1()
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((result3) => console.log(result3));
```

---

## মনে রাখার বিষয়

- Promise = ভবিষ্যতের কাজের প্রতিশ্রুতি
- `.then()` = সফল হলে
- `.catch()` = ব্যর্থ হলে
- `.finally()` = যাই হোক শেষে
- `Promise.all()` = সবাই একসাথে
- `Promise.race()` = যে আগে
- সবসময় `.catch()` দাও
- Chain করতে `return` ভুলো না