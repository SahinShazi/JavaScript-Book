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
