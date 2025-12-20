# HTML with JavaScript - Complete Guide

---

## JavaScript HTML এ যুক্ত করার উপায়

### 1. Inline JavaScript (ছোট code এর জন্য)

```html
<!DOCTYPE html>
<html>
<body>
    <button onclick="alert('Button clicked!')">Click Me</button>
</body>
</html>
```

### 2. Internal JavaScript (Same file এ)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JS</title>
</head>
<body>
    <h1 id="heading">Hello World</h1>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            document.getElementById('heading').innerText = 'Text Changed!';
        }
    </script>
</body>
</html>
```

### 3. External JavaScript (Recommended)

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>External JS</title>
</head>
<body>
    <h1 id="heading">Hello World</h1>
    <button id="btn">Click Me</button>

    <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
const btn = document.getElementById('btn');
const heading = document.getElementById('heading');

btn.addEventListener('click', function() {
    heading.innerText = 'Text Changed!';
});
```

---

## DOM Manipulation - Basic Methods

### 1. Element Select করা

```javascript
// ID দিয়ে
const element = document.getElementById('myId');

// Class দিয়ে
const elements = document.getElementsByClassName('myClass');

// Tag দিয়ে
const paragraphs = document.getElementsByTagName('p');

// CSS Selector দিয়ে (Modern)
const element = document.querySelector('.myClass');
const elements = document.querySelectorAll('.myClass');
```

### 2. Content Change করা

```javascript
// Text change
element.innerText = 'New Text';
element.textContent = 'New Text';

// HTML change
element.innerHTML = '<strong>Bold Text</strong>';
```

### 3. Style Change করা

```javascript
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';
```

### 4. Class Add/Remove করা

```javascript
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
element.classList.contains('active');  // true/false
```

### 5. Attribute Change করা

```javascript
element.setAttribute('src', 'image.jpg');
element.getAttribute('src');
element.removeAttribute('disabled');
```

---

## Event Handling

### Common Events:

```javascript
// Click
button.addEventListener('click', function() {
    console.log('Clicked!');
});

// Mouse events
element.addEventListener('mouseover', function() {});
element.addEventListener('mouseout', function() {});

// Keyboard events
input.addEventListener('keypress', function(e) {
    console.log(e.key);
});

// Form events
form.addEventListener('submit', function(e) {
    e.preventDefault();  // Form submit বন্ধ করা
});

input.addEventListener('input', function(e) {
    console.log(e.target.value);
});
```

---

## Complete Project Example: Todo List App

### HTML (index.html):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>📝 My Todo List</h1>
        
        <div class="input-section">
            <input type="text" id="todoInput" placeholder="Enter a task...">
            <button id="addBtn">Add Task</button>
        </div>

        <div class="filter-section">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>

        <ul id="todoList"></ul>

        <div class="stats">
            <span id="totalTasks">Total: 0</span>
            <span id="completedTasks">Completed: 0</span>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### CSS (style.css):

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 500px;
}

h1 {
    text-align: center;
    color: #667eea;
    margin-bottom: 30px;
}

.input-section {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#todoInput {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
}

#todoInput:focus {
    border-color: #667eea;
}

#addBtn {
    padding: 12px 25px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.3s;
}

#addBtn:hover {
    background: #5568d3;
}

.filter-section {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
}

.filter-btn {
    padding: 8px 20px;
    background: #f0f0f0;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
}

.filter-btn.active {
    background: #667eea;
    color: white;
}

#todoList {
    list-style: none;
    margin-bottom: 20px;
}

.todo-item {
    display: flex;
    align-items: center;
    padding: 15px;
    background: #f8f9fa;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: all 0.3s;
}

.todo-item:hover {
    background: #e9ecef;
    transform: translateX(5px);
}

.todo-item.completed {
    opacity: 0.6;
}

.todo-item.completed .todo-text {
    text-decoration: line-through;
    color: #999;
}

.todo-checkbox {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    cursor: pointer;
}

.todo-text {
    flex: 1;
    font-size: 16px;
}

.delete-btn {
    padding: 5px 15px;
    background: #ff4757;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.delete-btn:hover {
    background: #ee5a6f;
}

.stats {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    font-weight: bold;
    color: #666;
}
```

### JavaScript (script.js):

```javascript
// Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');

// Todos array
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// Add todo
function addTodo() {
    const text = todoInput.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }
    
    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    
    todos.push(todo);
    saveTodos();
    renderTodos();
    todoInput.value = '';
    todoInput.focus();
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// Toggle todo
function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

// Save to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos
function renderTodos() {
    // Filter todos
    let filteredTodos = todos;
    
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(todo => todo.completed);
    }
    
    // Clear list
    todoList.innerHTML = '';
    
    // Render each todo
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        // Checkbox event
        const checkbox = li.querySelector('.todo-checkbox');
        checkbox.addEventListener('change', () => toggleTodo(todo.id));
        
        // Delete button event
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
        
        todoList.appendChild(li);
    });
    
    // Update stats
    updateStats();
}

// Update statistics
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    
    totalTasksSpan.textContent = `Total: ${total}`;
    completedTasksSpan.textContent = `Completed: ${completed}`;
}

// Filter todos
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Set current filter
        currentFilter = this.dataset.filter;
        
        // Render todos
        renderTodos();
    });
});

// Add button event
addBtn.addEventListener('click', addTodo);

// Enter key event
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initial render
renderTodos();
```

---

## Project Features:

✅ Add new tasks  
✅ Mark tasks as completed  
✅ Delete tasks  
✅ Filter tasks (All/Active/Completed)  
✅ Show statistics  
✅ LocalStorage এ save হয়  
✅ Responsive design  
✅ Smooth animations  

---

## Best Practices

### 1. Script Tag এর Position

```html
<!-- ❌ ভুল - Body এর আগে -->
<head>
    <script src="script.js"></script>
</head>

<!-- ✅ সঠিক - Body এর শেষে -->
<body>
    <!-- Content -->
    <script src="script.js"></script>
</body>

<!-- ✅ অথবা defer attribute -->
<head>
    <script src="script.js" defer></script>
</head>
```

### 2. Event Listeners ব্যবহার করো

```javascript
// ❌ ভুল - Inline
<button onclick="myFunction()">Click</button>

// ✅ সঠিক - Event Listener
const btn = document.querySelector('button');
btn.addEventListener('click', myFunction);
```

### 3. querySelector ব্যবহার করো

```javascript
// ❌ পুরনো
document.getElementById('myId');

// ✅ Modern
document.querySelector('#myId');
document.querySelectorAll('.myClass');
```

---

## Common DOM Methods চিট শিট

```javascript
// Select
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('div')

// Create
document.createElement('div')
element.appendChild(child)
element.removeChild(child)

// Content
element.innerText = 'text'
element.innerHTML = '<span>html</span>'
element.textContent = 'text'

// Attributes
element.setAttribute('class', 'active')
element.getAttribute('class')
element.id = 'myId'
element.className = 'myClass'

// Style
element.style.color = 'red'
element.classList.add('active')
element.classList.remove('active')
element.classList.toggle('active')

// Events
element.addEventListener('click', fn)
element.removeEventListener('click', fn)
```

---

## Key Points

- HTML structure তৈরি করো
- CSS দিয়ে styling করো
- JavaScript দিয়ে interactivity যোগ করো
- Script tag body এর শেষে রাখো
- Event listeners ব্যবহার করো
- querySelector ব্যবহার করো
- LocalStorage দিয়ে data save করো
- Clean এবং organized code লেখো

এই Todo List project টা practice করো - DOM manipulation এবং event handling এর সব basic শিখতে পারবে! 🚀