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
    name: "Sahin",
    age: 30,
    country: "Bangladesh"
}

const {
    name,
    age
} = young;
console.log({
    name,
    age
});

//Problem 6
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}

const clone = {
    ...car,
    year: 2025
};
console.log(clone);
