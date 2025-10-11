//JavaScript "NOT" function
//Problem 1 
if (false) {
  console.log("Truethy");
} else {
  console.log("Falsy");
}
//Or 
console.log(!!false);



//Problem 2 
let obj = {};

if (obj) {
  console.log("Truethy");
} else {
  console.log("Falsy");
}

//Or 
console.log(!!{});


//Problem 3 
let arr = [];

if (arr) {
  console.log("Truethy");
} else {
  console.log("Falsy");
}

//Or 
console.log(!![]);



//Problem 4 
console.log(![]);

//Or 
let a = [];

if (a) {
  console.log('Truethy');
} else {
  console.log("Falsy");
}