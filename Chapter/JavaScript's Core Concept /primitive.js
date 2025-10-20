//JavaScript Dynamic

//Primitive and Non Primitive
//Problem 1 
let num = 15;
let copy = num;
copy = 25;
console.log(copy);
console.log(num);
// defrent defrent value 


//Problem 2 
let arr = [1, 2, 3];
let copyArr = arr;

copyArr = [44];

console.log(arr);
console.log(copyArr);


//Problem 3 
let language = {
  name: "JS",
  age: 30
}

let newVersion = language;

newVersion = {
  location: "Browser"
}

console.log(language);
console.log(newVersion);