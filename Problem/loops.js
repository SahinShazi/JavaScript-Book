//Problem 1
let books = ["ICT", "Math", "Islam", "Bangla", "BGS", "Physics"];

for (let book of books) {
    console.log(book);
}

//Problem 2
let foods = ["Mango", "Apple", "Orange", "Banana"];
for (let food of foods) {
    console.log(food);
}

//Problem 3
let birth = [1999, 2000, 2017, 2010, 1989];
for (let print of birth) {
    console.log(print);
}

//Problem 4
let player = ["Maruf", 'Jehad', 'Ismail', 'Rakib'];
for (let players of player) {
    console.log(players);
}

//Problem 5
let date = ["2/7/2025", "7/5/2025", "3/10/2025", "5/7/2025"];
for (let dates of date) {
    console.log(dates);
}

//Problem 6
let numbers = [10, 20, 30, 40, 50];
for (let num1 of numbers) {
  console.log(num1 + " is a number");
}

//Problem 7
let ages = [13, 12, 18, 25, 30, 15];
for (let age of ages) {
  if(age <= 12) {
    console.log(age + " this is a Child.")
  } else if (age >= 18) {
    console.log(age + " this is a Adult.")
  } else if (age > 12) {
    console.log(age + " this is a Adult.");
  }
}

//Problem 8
let fruits = ["Mango", "Orange", "Banana", "Apple"];
for (let food of fruits) {
  console.log(fruits.indexOf(food) + " " + food);
}


//Problem 9
let marks = [80, 55, 90, 45, 70];
for (let mark of marks) {
  if (mark >= 50) {
    console.log(mark + " Pass");
  } else {
    console.log(mark + " Fail");
  }
}


//Problem 10
let letters = ["a", "b", "c", "d"];
for (let letter of letters) {
  console.log(letter.toUpperCase());
}


//Problem 11
let names = ["Sakib", "Rifat", "Nayeem", "Hasan"];

for (let name of names) {
  console.log(name + "-> " + name.length);
}

//Problem 12
let numbers = [5, 8, 12, 15, 20];

for (let num of numbers) {
  if (num % 2 === 0) {
    console.log("The " + num + " is even number.")
  }
}


//Problem 13
let numbers = [5, 10, 15, 20, 25];

let sum = 0;
for (let num of numbers) {
  sum = sum + num;
  //console.log("Sum = " + sum)
}
console.log("Sum = " + sum)


//Problem 14
let numbers = [12, 25, 7, 40, 18];
let maxNumber = Math.max(...numbers);
console.log("Largest number is " + maxNumber);

//Problem 15
let words = ["javascript", "book", "computer", "sun", "elephant"];
for (let word of words) {
  if (word.length >= 5) {
    console.log(word + " the word is length");
  }
}

