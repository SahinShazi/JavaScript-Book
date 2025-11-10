# JavaScript try-catch-finally

---

## Example 01: JSON Parse Error Handling

### Case 01 - Without Error Handling

```javascript
const data = '{"name":"Sahin","age":25, "isStudent": true}';
const results = JSON.parse(data);
console.log(results);
```

**আউটপুট:**
```javascript
{ name: 'Sahin', age: 25, isStudent: true }
```

এখানে কোনো error নেই, তাই ঠিকমত চলবে।

### Case 02 - With Error Handling

```javascript
try {
    const data = "Sahin";
    const results = JSON.parse(data);
    console.log(results);
} catch(error) {
    console.log('Error handling graceful.')
} finally {
    console.log("JSON parsing attend completed.")
}
```

**আউটপুট:**
```
Error handling graceful.
JSON parsing attend completed.
```

**কারণ:** "Sahin" valid JSON না, তাই error হয়েছে। `catch` block চলেছে, তারপর `finally` block চলেছে।

---

## Example 02: File Operations

```javascript
try {
    console.log("Opening the file...");
} catch(error) {
    console.error("Error:", error.message);
} finally {
    console.log('Closing the file...');
}
```

**আউটপুট:**
```
Opening the file...
Closing the file...
```

---

## Example 03: String Method Error

```javascript
function getProperty(str) {
  try {
    return str.toUpperCase();
  } catch(error) {
    console.error('Error eaten by virus 😀');
  }
}

console.log(getProperty("Hi, My name is Sahin"));
console.log(getProperty());
```

**আউটপুট:**
```
HI, MY NAME IS SAHIN
Error eaten by virus 😀
undefined
```

**ব্যাখ্যা:** 
- প্রথমবার string আছে, তাই uppercase হয়েছে
- দ্বিতীয়বার কিছু নেই (undefined), তাই error catch হয়েছে

---

## Example 04: Cleanup Operations

```javascript
function perfoCleanUp() {
  try {
    console.log("Starting a process...");
  } finally {
    console.log("Cleaning up resources...");
  }
}

perfoCleanUp();
```

**আউটপুট:**
```
Starting a process...
Cleaning up resources...
```

`finally` সবসময় চলবে, error থাকুক বা না থাকুক।

---

## Example 05: Custom Error Throwing

```javascript
function validateInput(input) {  
  try {  
    if (typeof input !== 'string') {  
      throw new Error('Input must be a string.');  
    }  
    console.log('Valid input:', input);  
  } catch (error) {  
    console.error("Custom error:", error.message);  
  } finally {  
    console.log("Validation complete.");  
  }  
}  

validateInput("Hello");  
validateInput(42);
```

**আউটপুট:**
```
Valid input: Hello
Validation complete.
Custom error: Input must be a string.
Validation complete.
```

---

## Problem 01: JSON Parse Error

```javascript
try {
  const data = "Data corrupt.";
  const results = JSON.parse(data);
  console.log(results);
} catch(error) {
  console.error("Error handing graceful.");
}
```

**আউটপুট:**
```
Error handing graceful.
```

---

## Problem 02: Email Validation

```javascript
function getEmail(email) {
  try {
    if (!email.includes("@")) {
      throw new Error("Invalid email format");
    }
    console.log('Valid input:', email);
  } catch (error) {
    console.log("Custom Error:", error.message);
  } finally {
    console.log("Validation complete.\n");
  }
}

getEmail("sahin.enam10@gmail.com");
getEmail("sahin.enam10gmail.com");
```

**আউটপুট:**
```
Valid input: sahin.enam10@gmail.com
Validation complete.

Custom Error: Invalid email format
Validation complete.
```

---

## Problem 03: Object Parse Error

```javascript
try {
  const per = {
    role: "CEO",
    weeklyHours: 1000
  }
  const results = JSON.parse(per);
  console.log(results);
} catch(error) {
  console.error("Custom Error:", error.message);
} finally {
  console.log("Week is over.");
}
```

**আউটপুট:**
```
Custom Error: [error message]
Week is over.
```

**কারণ:** `JSON.parse()` শুধু string নেয়, object না।

---

## Problem 04: String Validator

```javascript
function stringOnlyParser(input) {
  try {
    if (!input || typeof input !== 'string') {
      console.log("The input is invalide.");
    }
    console.log("Valid input:", input);
  } catch(error) {
    console.error("Error:", error.message);
  } finally {
    console.log("The input is good.");
  }
}

stringOnlyParser();
stringOnlyParser("Sahin")
```

**আউটপুট:**
```
The input is invalide.
Valid input: undefined
The input is good.
Valid input: Sahin
The input is good.
```

---

## Problem 05: Account Deletion

```javascript
function deleteAc(user) {
  try {
    if (user === true) {
      console.log("Deleting account");
    }
  } catch (error) {
    console.log("Failed to delete account");
  } finally {
    console.log("Account deletion attempt finished")
  }
}

deleteAc(true);
```

**আউটপুট:**
```
Deleting account
Account deletion attempt finished
```

---

## try-catch-finally Structure

```javascript
try {
  // যে কোড error দিতে পারে
} catch(error) {
  // error হলে এটা চলবে
} finally {
  // সবসময় চলবে
}
```

---

## কখন কি ব্যবহার করবে

### শুধু try-catch

```javascript
try {
  const result = riskyOperation();
  console.log(result);
} catch(error) {
  console.log("Error:", error.message);
}
```

### try-catch-finally (Cleanup দরকার হলে)

```javascript
try {
  openConnection();
  processData();
} catch(error) {
  console.log("Error:", error.message);
} finally {
  closeConnection(); // সবসময় close করবে
}
```

### Custom Error throw করা

```javascript
function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("Too young!");
    }
    console.log("Access granted");
  } catch(error) {
    console.log(error.message);
  }
}
```

---

## Common Use Cases

### 1. API Call Error

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log("Failed to fetch:", error.message);
  }
}
```

### 2. File Operations

```javascript
function readFile(filename) {
  try {
    console.log(`Reading ${filename}...`);
    // file read করা
  } catch(error) {
    console.log("File not found");
  } finally {
    console.log("File operation complete");
  }
}
```

### 3. Form Validation

```javascript
function validateForm(data) {
  try {
    if (!data.name) throw new Error("Name required");
    if (!data.email) throw new Error("Email required");
    console.log("Form valid");
  } catch(error) {
    console.log("Validation error:", error.message);
  }
}
```

---

## মনে রাখার বিষয়

- `try` - যে code error দিতে পারে
- `catch` - error হলে কি করবে
- `finally` - সবসময় চলবে (optional)
- `throw new Error()` - নিজে error তৈরি করা
- `catch` ছাড়া `try` লেখা যায় না
- `finally` ছাড়া চলবে, কিন্তু cleanup এর জন্য ভালো