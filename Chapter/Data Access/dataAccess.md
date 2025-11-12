# JavaScript Data Access

---

## Problem 01: Array of Objects

```javascript
const array = [{id: 1, name: "makul", address: 'mirpur'}];
console.log(array[0].address);
```

**আউটপুট:**
```
mirpur
```

**কিভাবে:**
- `array[0]` - প্রথম object
- `.address` - সেই object এর address property

---

## Problem 02: Nested Array in Object

```javascript
const library = {
  name: 'city library',
  books: [{
    id: 1, title: 'Python Essentials', price: 500
  }, {
    id: 2, title: 'JavaScript Basics', price: 300
  }]
};

console.log(library.books[1].price);
```

**আউটপুট:**
```
300
```

**কিভাবে:**
- `library.books` - books array
- `[1]` - দ্বিতীয় book
- `.price` - সেই book এর price

---

## Problem 03: Multiple Students Access

```javascript
const school = {
  name: 'Green High School',
  students: [
    {id: 1, name: 'Kamrul'},
    {id: 2, name: "Samiha"},
    {id: 3, name: 'Sahin'}
  ]
};

console.log(school.students[0].name);
console.log(school.students[1].name);
console.log(school.students[0].id);
console.log(school.students[1].id);
```

**আউটপুট:**
```
Kamrul
Samiha
1
2
```

**কিভাবে:**
- `school.students[0]` - প্রথম student
- `school.students[1]` - দ্বিতীয় student
- `.name` বা `.id` - property access

---

## Problem 04: Shop Items

```javascript
const shop = {
  items: [
    {id: 1, name: 'pen', stock: 100},
    {id: 2, name: 'notebook', stock: 50}
  ]
};

console.log(shop.items[1].name);
console.log(shop.items[1].stock);
```

**আউটপুট:**
```
notebook
50
```

**কিভাবে:**
- `shop.items[1]` - দ্বিতীয় item
- `.name` এবং `.stock` - properties

---

## Problem 05: Nested Object

```javascript
const movie = {
  title: 'Inception',
  director: {
    name: 'Nolan',
    age: 50
  }, 
  rating: 8.8
};

console.log(movie.director.name);
```

**আউটপুট:**
```
Nolan
```

**কিভাবে:**
- `movie.director` - director object
- `.name` - director এর name

---

## Problem 06: Game Players

```javascript
const game = {
  name: "football",
  players: [
    {id: 1, name: 'Lionel Messi'},
    {id: 2, name: "Cristiano Ronaldo"}
  ]
};

console.log(game.players[0].name);
```

**আউটপুট:**
```
Lionel Messi
```

**কিভাবে:**
- `game.players[0]` - প্রথম player
- `.name` - player এর name

---

## Problem 07: Deep Nested Object

```javascript
const vehicle = {
  type: "Car",
  features: {
    color: 'red',
    brand: {
      name: 'Toyota',
      model: 'Corolla'
    }
  }
};

console.log(vehicle.features.brand.name);
```

**আউটপুট:**
```
Toyota
```

**কিভাবে:**
- `vehicle.features` - features object
- `.brand` - brand object
- `.name` - brand এর name

---

## Data Access Patterns

### 1. Simple Object

```javascript
const user = {name: 'Sahin', age: 25};
console.log(user.name);        // Sahin
console.log(user['age']);      // 25
```

### 2. Array of Objects

```javascript
const users = [
  {name: 'Sahin'},
  {name: 'Kamrul'}
];
console.log(users[0].name);    // Sahin
console.log(users[1].name);    // Kamrul
```

### 3. Object with Array

```javascript
const data = {
  items: ['pen', 'book']
};
console.log(data.items[0]);    // pen
```

### 4. Nested Objects

```javascript
const person = {
  address: {
    city: 'Dhaka'
  }
};
console.log(person.address.city);  // Dhaka
```

### 5. Deep Nesting

```javascript
const company = {
  department: {
    team: {
      leader: {
        name: 'Sahin'
      }
    }
  }
};
console.log(company.department.team.leader.name);  // Sahin
```

---

## Optional Chaining (?.)

যদি property না থাকে তাহলে error এর বদলে `undefined` দেয়।

```javascript
const user = {name: 'Sahin'};

// Without optional chaining
console.log(user.address.city);  // Error!

// With optional chaining
console.log(user.address?.city);  // undefined (no error)
```

### More Examples:

```javascript
const data = {
  user: {
    name: 'Sahin'
  }
};

console.log(data.user?.name);           // Sahin
console.log(data.user?.address?.city);  // undefined
console.log(data.posts?.[0]?.title);    // undefined
```

---

## Loop দিয়ে Access

### Array of Objects Loop

```javascript
const students = [
  {id: 1, name: 'Sahin'},
  {id: 2, name: 'Kamrul'}
];

students.forEach(student => {
  console.log(student.name);
});
// Sahin
// Kamrul
```

### Nested Loop

```javascript
const school = {
  classes: [
    {name: 'Class 10', students: ['A', 'B']},
    {name: 'Class 9', students: ['C', 'D']}
  ]
};

school.classes.forEach(cls => {
  console.log(cls.name);
  cls.students.forEach(student => {
    console.log('  -', student);
  });
});
```

---

## মনে রাখার বিষয়

- **Dot notation:** `object.property`
- **Bracket notation:** `object['property']`
- **Array access:** `array[index]`
- **Nested:** chain করে লেখো (`.property.property`)
- **Optional chaining:** `?.` ভুল এড়াতে
- **Loop:** `forEach`, `map` ইত্যাদি