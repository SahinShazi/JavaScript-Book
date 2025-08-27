//Problem 1
const teacher = {
  name: "Monir",
  subject: ['BGS', 'English', 'Science'],
  home: "Bhola",
  school: "Hazariganj High School"
}

//Problem 2
const tree = {
  name: "Food",
  age: 80,
  height: 60,
  food: "Apple"
}

//Problem 3
const cat = {
  name: "cat",
  age: 7,
  home: 'My home',
  height: "13cm"
}

//Problem 4
const father = {
  name: "Jamal",
  age: "60+",
  passion: "Worker",
  sonNum: 2
}

//Problem 5
const motorcycle = {
  brand: "Honda",
  bane: "BMW",
  age: 20,
  color: "Green",
  maxSpeed: "70km"
}

//Problem 6
const bird = {
  name: "PagasPaki",
  food: "Rice",
  color: "White"
}

//Problem 7
const laptop = {
  brand: "HP",
  name: "28ch8",
  type: "laptop",
  display: "LCD",
  processor: {
    name: "intel",
    speed: "2.5gh",
    drand: "AMD"
  }
}


//Problem 8
const student = {
  name: "Sahin",
  age: 17,
  classs: 10,
  subject: ["Bangla", 'English', 'Math']
}

//Problem 9
const mobile = {
  brand: "Oppo",
  model: "A3s",
  price: 12000,
  future: {
    camera: '20mp',
    batter: '5000mh',
    storage: '128gb'
  }
}

//Problem 10
const book = {
  title: "মারহাবা স্ক্রিপ্টে মারো থাবা",
  author: "ঝংকার মাহবুব",
  about: "JavaScript",
  publishYer: 2008,
  category: "Learning"
}



//------LOOPS CALL-----------
//Problem 1
let player = {
    sports: "Football",
    name: {
        rakib: 23,
        ali: 12,
        samim: 30
    }
};
console.log(player.name);

//Problem 2
const laptop = {
    brand: "HP",
    price: 120000,
    hardDisc: "512GB SSD",
    ram: "8GB DDR4",
    screenSize: "15.6 inch"
}

console.log(laptop.screenSize);


//Problem 3
const favPlace = {
    name: "Cox's Bazaar",
    distance: "400km",
    popularity: "hight"
}

console.log(favPlace["popularity"]);

//Problem 4
const phone = {
    brand: "Oppo",
    color: "black",
    price: 200000
}
console.log(phone["price"]);


//Problem 5
const library = {
    name: "Public Library",
    location: "Dhaka",
    books: 5000
}

console.log(library.location);

//Problem 6
const movie = {
    name: "Inception",
    director: "Nolan",
    rating: 9
}

console.log(movie["rating"]);

//Problem 7
const college = {
    name: "NDC",
    establish: 1949,
    group: ["Science", "Arts", "Commerce"]
}

console.log(college.group[1]);


//Problem 8
const family = {
    'fathe,r': {
        name: "Jamal",
        age: 70,
        passion: "Mechanical"
    },
    mother: {
        name: "Minara",
        age: 40,
        passion: "Housewife"
    }
}

let father = family["fathe,r"].age;
let mother = family["mother"].age;

console.log(father + mother); //110 

//Problem 9
const student = {
  name: "Sahin Enam",
  class: 10,
  age: 17,
  marks: {
    English: 70,
    Math: 90,
    ICT: 100
  }
}

/*console.log(student.marks["English"]);
console.log(student.marks["Math"]);
console.log(student.marks["ICT"]);
console.log(student.marks.English + student.marks.Math + student.marks.ICT);*/

//Problem 10
const car = {
  brand: "Tasla",
  model: "1CG4",
  color: "Green",
  engine: {
    horsepower: "5000",
    type: "petrol",
    CC: "Random any item"
  }
}

//console.log(car.model);
//console.log(car.engine.CC);




//_________Object Keys and Values_________
//Problem 1
const book = {
  name: "JavaScript book",
  writer: "Janker Mahbub",
  price: 650
}

/*const keys = Object.keys(book);
const values = Object.values(book);

console.log(keys);
console.log(values);*/

//Problem 2
const article = {
  title: "Learning JavaScript",
  category: "Programmin"
}

//const check = Object.keys(article);
//console.log(check.includes("author"));



//Problem 3
/*const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 45000
}
for (const key in laptop) {
  const value = laptop[key];
  console.log(key, value);
}*/


//Problem 4
const phone = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 85000
}

/*const keys = Object.keys(phone);

for (const key of keys) {
  console.log(key, phone[key]);
}*/


//Problem 5
const bike = {
  brand: "Hero",
  price: 120000,
  model: "Splendor"
}

/*const values = Object.values(bike);
const keys = Object.keys(bike);
console.log(values);
console.log(keys);*/

//Problem 6
const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  book3: "Game of Thrones"
}

/*for (const key in books) {
  const value = books[key];
  console.log(value);
}*/

//Problem 7
const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}

/*const a = (numbers.a);
const b = (numbers.b);
const c = (numbers.c);
const d = (numbers.d);

console.log(a + b + c + d);*/

//Problem 8
const player = {
  name: "Messi",
  team: "Argentina",
  goals: 91
} 

//console.log(Object.values(player));

//Problem 9
const building = {
  floors: 10,
  address: {
    street: "Main Road",
    city: "Dhaka",
    type: "Commercial"
  }
}

/*for (const key in building) {
  const value = building[key];

  if (typeof value === "object") {
    for (const subKey in value) {
      console.log(value[subKey]);
    }
  } else {
    console.log(value);
  }
}*/


//________Object Freeze, Object Seal, Key Delete, ______________

//Problem 1
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "Red"
}

/*Object.seal(headphone);
headphone.age = 30; //NOT Allowed
headphone.price = 5000; //Allowed
console.log(headphone);*/

/*Object.freeze(headphone);
headphone.age = 30;
console.log(headphone);*/ //NOT Allowed

//Problem 2
const player = {
    name: "Messie",
    goals: 800,
    clud: "Inter Miami"
};

// Object.seal(player);
// player.goals = 700; // Allowed
//player.age = 50; //NOT Allowed
// console.log(player);

/*Object.freeze(player);
player.playAge = 30;
console.log(player);*/


//Problem 3
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    page: 500
}

// Object.seal(book);
// book.author = "Rowling"; //Allowed
// console.log(book);

//Problem 4
const gadget = {
    name: "iPhone",
    price: 120000
}

// delete gadget.price;
// console.log(gadget);


//______Extra Problem__________
//Problem 1
const student = {
    name: "Sahin Enam",
    age: 12,
    class: 10,
    roll: 01
}

console.log(student.name);
console.log(student.age);

//Problem 2
const book = {
    title: "JavaScript",
    author: "Random",
    price: 650,
    publisher: "Mahbub"
}

console.log(book.author);

//Problem 3
const car = {
  brand: "Tasla",
  model: "1CG4",
  color: "Green"
}

for (let key in car) {
  console.log(`Key: ${key}, Value: ${car[key]}.`);
}



//Problem 4
const parson = {
  name: "Sahin",
  age: 15,
  profession: "Student",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}

console.log(parson.address.city);


//Problem 5
const mobile = {
  brand: "Samsung",
  price: 25557,
  model: "S24 Ultra",
  specs: {
    ram: "12GB",
    battery: "5000mah",
    storage: "228GB"
  }
}

console.log(`${mobile.specs.ram}, ${mobile.specs.battery}`);


