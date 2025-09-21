//Problem 1
const array = ["variable", "condition", "array", "loop"];

const clone = [...array];
console.log(clone);

//Problem 2
const myFruits = ["Apple", "Banana", "Mango"];
myFruits.push("Papaya", "Orange");

console.log(myFruits);


//Problem 3
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];

const sum = [...frontEnd, ...backEnd, ...database];

console.log(sum);


//Problem 4
const website = {
  name: "MySite",
  type: "e-commerce",
  status: "active"
}

const Website = {...website, theme: "Dark"};

console.log(Website);

//Problem 5
const young = {
  name: "Afrin",
  age: 30,
  county: "Bangladesh"
}

const clone = {...young};
console.log(clone);




