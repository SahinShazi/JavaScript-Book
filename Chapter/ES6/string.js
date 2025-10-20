//PROBLEM 1
const num1 = 100;
const num2 = 20;

console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);


//PROBLEM 2
const employees = {
    name: 'Sahin',
    age: 17,
    salary: 1000000
}

console.log(`Name: ${employees.name}, Age: ${employees.age} and Salary: ${employees.salary}`);

//PROBLEM 3
const fruits = ['Apple', "Mango", "Banana", "Grapes", "Orange"];

console.log(`My favorite food is ${fruits[2]}`);


//PROBLEM 4
const a = 50;
const b = 10;

console.log(`The decision fo ${a} and ${b} is ${a / b}`);


//Problem 5
const parson = {
    firstName: "Sahin",
    lastName: "Enam"
}

console.log(`The fullname is ${parson.firstName} ${parson.lastName}`);


//PROBLEM 6
const animals = ["Cat", "Dog", "Elephant"];

console.log(`My favorite animals is ${animals.join(', ')}`);

//PROBLEM 7
const student = {
    name: "Sahin",
    age: 17,
    subject: {
        english: 90,
        math: 70,
        bangla: 80
    }
}

console.log(`The student info, Name: ${student.name}, Age: ${student.age} and Favorite Subject: ${Object.keys(student.subject).join(', ')}`);

const sum = `${student.subject.english + student.subject.math + student.subject.bangla}`
const length = Object.keys(student).length;

console.log(`The average of the three subjects is ${sum / length}`);
