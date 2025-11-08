# JavaScript Fetch Guide

---

## Problem 01: Basic Fetch Request

### Server থেকে Data আনা

```javascript
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url) 
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

**কি হচ্ছে এখানে:**

1. `fetch(url)` - Server এ request পাঠাচ্ছি
2. `.then(response => response.json())` - Response কে JSON এ convert করছি
3. `.then(data => console.log(data))` - Data print করছি
4. `.catch(error => console.log(error))` - Error থাকলে ধরছি

**আউটপুট:**
```javascript
[
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    ...
  },
  // আরও users
]
```

---

## Question 02: fetch কেন ব্যবহার করা হয়?

fetch মূলত কোন সার্ভার থেকে ডাটা আনার জন্য ব্যবহার করা হয়। শুধুমাত্র ডাটা আনার জন্য নয়, ডাটা আপডেট করা, ডিলিট করা এবং ডাটা পাঠানো - এইসবের জন্য ব্যবহার করা হয়। এটাকে বলা হয় HTTP Request।

### fetch দিয়ে কি কি করা যায়:

**১. GET - Data আনা:**
```javascript
fetch('https://api.example.com/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

**২. POST - নতুন data পাঠানো:**
```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Sahin",
    email: "sahin@example.com"
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

**৩. PUT/PATCH - Data update করা:**
```javascript
fetch('https://api.example.com/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Sahin Updated"
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

**৪. DELETE - Data মুছে ফেলা:**
```javascript
fetch('https://api.example.com/users/1', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## Question 03: fetch আর Promise এর মধ্যে পার্থক্য কি?

fetch নিজে Promise return করে। Promise হচ্ছে general ভাবে asynchronous কাজের জন্য। আর fetch হচ্ছে কোন সার্ভার থেকে ডাটা আনা-নেওয়া, আপডেট, ডিলিট - এসবের জন্য ব্যবহার হয়। এক কথায় বলতে গেলে HTTP Request।

### পার্থক্য টেবিল:

| বৈশিষ্ট্য | Promise | fetch |
|---------|---------|-------|
| কি জিনিস | একটা pattern/concept | একটা built-in function |
| কাজ | যেকোনো async কাজ | শুধু HTTP request |
| Return করে | Promise | Promise (যেটা data আনে) |
| ব্যবহার | সব async কাজে | শুধু API call এ |

### উদাহরণ দিয়ে বুঝি:

**Promise (General):**
```javascript
// যেকোনো async কাজের জন্য
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("কাজ শেষ!");
  }, 2000);
});

myPromise.then(result => console.log(result));
```

**fetch (Specific - শুধু HTTP):**
```javascript
// শুধু server থেকে data আনার জন্য
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

### সহজ কথায়:
- **Promise** = একটা প্যাটার্ন, যেকোনো async কাজে লাগে
- **fetch** = Promise ব্যবহার করে, কিন্তু শুধু API call এর জন্য

---

## Problem 04: Get Users List

```javascript
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then(res => res.json())
  .then(userList => console.log(userList))
  .catch(error => console.log(error))
```

**আউটপুট:**
```javascript
[
  { id: 1, name: "Leanne Graham", ... },
  { id: 2, name: "Ervin Howell", ... },
  { id: 3, name: "Clementine Bauch", ... },
  // total 10 users
]
```

### নির্দিষ্ট property দেখাতে:

```javascript
fetch(url)
  .then(res => res.json())
  .then(userList => {
    userList.forEach(user => {
      console.log(`${user.id}. ${user.name} - ${user.email}`);
    });
  })
  .catch(error => console.log(error))
```

**আউটপুট:**
```
1. Leanne Graham - Sincere@april.biz
2. Ervin Howell - Shanna@melissa.tv
3. Clementine Bauch - Nathan@yesenia.net
...
```

---

## Problem 05: Get Single User

```javascript
const url = 'https://jsonplaceholder.typicode.com/users/1';

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

**আউটপুট:**
```javascript
{
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    city: "Gwenborough",
    ...
  },
  ...
}
```

---

## HTML এ Fetch ব্যবহার

### Example 1: Display Users in HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Fetch Example</title>
</head>
<body>
    <h1>User List</h1>
    <div id="users"></div>

    <script>
        const url = 'https://jsonplaceholder.typicode.com/users';
        
        fetch(url)
            .then(res => res.json())
            .then(users => {
                const usersDiv = document.getElementById('users');
                
                users.forEach(user => {
                    usersDiv.innerHTML += `
                        <div>
                            <h3>${user.name}</h3>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                            <hr>
                        </div>
                    `;
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
    </script>
</body>
</html>
```

### Example 2: Button Click এ Data Load

```html
<!DOCTYPE html>
<html>
<head>
    <title>Load Data</title>
</head>
<body>
    <button id="loadBtn">Load Users</button>
    <div id="result"></div>

    <script>
        document.getElementById('loadBtn').addEventListener('click', () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(users => {
                    const resultDiv = document.getElementById('result');
                    resultDiv.innerHTML = '<h2>Users:</h2>';
                    
                    users.forEach(user => {
                        resultDiv.innerHTML += `<p>${user.name}</p>`;
                    });
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        });
    </script>
</body>
</html>
```

### Example 3: Loading Spinner দিয়ে

```html
<!DOCTYPE html>
<html>
<head>
    <title>Loading Example</title>
    <style>
        .loading {
            display: none;
        }
        .loading.active {
            display: block;
        }
    </style>
</head>
<body>
    <button id="loadBtn">Load Data</button>
    <div class="loading">Loading...</div>
    <div id="content"></div>

    <script>
        const loadBtn = document.getElementById('loadBtn');
        const loading = document.querySelector('.loading');
        const content = document.getElementById('content');

        loadBtn.addEventListener('click', () => {
            loading.classList.add('active');
            content.innerHTML = '';

            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(users => {
                    content.innerHTML = users.map(user => 
                        `<p>${user.name}</p>`
                    ).join('');
                })
                .catch(error => {
                    content.innerHTML = '<p>Error loading data</p>';
                })
                .finally(() => {
                    loading.classList.remove('active');
                });
        });
    </script>
</body>
</html>
```

---

## Fetch এর বিভিন্ন Options

### GET Request (Default)

```javascript
fetch('https://api.example.com/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

### POST Request - নতুন Data পাঠানো

```javascript
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Sahin',
    email: 'sahin@example.com'
  })
})
  .then(res => res.json())
  .then(data => console.log('Created:', data))
  .catch(error => console.log('Error:', error));
```

### PUT Request - পুরো Data Update

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    name: 'Updated Name',
    email: 'updated@example.com'
  })
})
  .then(res => res.json())
  .then(data => console.log('Updated:', data));
```

### PATCH Request - আংশিক Update

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'New Name Only'
  })
})
  .then(res => res.json())
  .then(data => console.log('Patched:', data));
```

### DELETE Request

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => console.log('Deleted:', data));
```

---

## Response Status Check করা

```javascript
fetch('https://jsonplaceholder.typicode.com/users/999')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
```

### Response এর বিভিন্ন Property:

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    console.log('Status:', response.status);        // 200
    console.log('OK:', response.ok);               // true
    console.log('Status Text:', response.statusText); // OK
    console.log('URL:', response.url);
    
    return response.json();
  })
  .then(data => console.log(data));
```

---

## Async/Await দিয়ে Fetch

### Basic Example:

```javascript
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log('Error:', error);
  }
}

getUsers();
```

### POST Request with Async/Await:

```javascript
async function createUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Sahin',
        email: 'sahin@example.com'
      })
    });
    
    const data = await response.json();
    console.log('Created:', data);
  } catch (error) {
    console.log('Error:', error);
  }
}

createUser();
```

---

## Common Mistakes

### ভুল ১: .json() ভুলে যাওয়া

```javascript
// ভুল
fetch(url)
  .then(response => {
    console.log(response);  // Response object আসবে, data না!
  });

// সঠিক
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);  // এখন data আসবে
  });
```

### ভুল ২: Error handling না করা

```javascript
// ভুল
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
  // Error হলে কিছু হবে না

// সঠিক
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
```

### ভুল ৩: Response status check না করা

```javascript
// ভুল
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));

// সঠিক
fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
```

---

## মনে রাখার বিষয়

- `fetch()` = Server থেকে data আনতে
- `.then(res => res.json())` = Response কে JSON এ convert
- `.catch()` = Error handle করতে ভুলো না
- `method: 'POST'` = নতুন data পাঠাতে
- `method: 'PUT'` = পুরো update করতে
- `method: 'PATCH'` = আংশিক update করতে
- `method: 'DELETE'` = মুছতে
- Async/await আরও clean code
- সবসময় response status check করো