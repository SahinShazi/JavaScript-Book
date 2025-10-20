//== Type coercion 
//Problem 1 
if (true == 1) {
  console.log("Same");
} else {
  console.log("different");
}


//Problem 2 
let obj = {};
let obj2 = {};

console.log(obj === obj2);


//Problem 3
let array = [];
const array1 = array;

console.log(array === array1);


//Problem 4
function doubleEqual(num, boolean) {
  if(num == boolean) {
    console.log("আপনার দুটি ইনপুট সমান!");
  } else {
    console.log("আপনার দুটি মান সমান নয়!!");
  }
}

doubleEqual(2, false);


//Problem 5
if ("" == false) {
  console.log("Same");
} else {
  console.log("Not Equal");
}


//Problem 6
if (null === undefined) {
  console.log("Same");
} else {
  console.log("Not Equal");
}


//Problem 7
if (1 == "1") {
  console.log("Same");
} else {
  console.log("Not Equal");
}