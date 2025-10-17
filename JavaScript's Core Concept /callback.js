//Example 1

function greeting(greatingHandler) {
  greatingHandler()
}

function morningGreat() {
  console.log('Good Morning');
}

greeting(morningGreat);


//Example 2 
function calculator(a, b, callback) {
  const result = a + b;
  callback(result);
}

function printValue(value) {
  console.log("Result is:", value);
}

calculator(20,10, printValue);




//Problem 1 
function text(some) {
  some();
}

function printText(value) {
  console.log("Hello there 🤠 I am Sahin Enam!")
}

text(printText);


//Problem 2 

let student = {
  name: "Sahin",
  roll: 01,
  subject: "Science"
}


function obj(object, callback) {
  let keys = Object.keys(object);
  callback(keys);
}

function printObj(objectArray){
  for (let key of objectArray) {
    console.log(key);
  }
}

obj(student, printObj);


//Problem 3
function divadet(a, callback) {
  const result = a / 5;
  callback(result);
}

function printValue(value) {
  console.log("The result is:", value);
}

divadet(10, printValue);


//Problem 4
function text(some) {
  some();
}

function printText() {
  console.log("sahin.enam10@gmail.com");
}

text(printText);