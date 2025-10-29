//JavaScript Set
//Example 01
const number = [1,2,2,3,4,4,5,6,7,8,8,8,9,9];
const uniqueArray = [...new Set(number)];
console.log(uniqueArray);

//Example 02
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(10);
mySet.add(50);
console.log(mySet);

console.log(mySet.has(20));
console.log(mySet.has(100));

mySet.delete(10);
console.log(mySet);

//JavaScript Map
//Example 03
const myMap = new Map();
myMap.set("name", "Sahin");
myMap.set("age", 25);
myMap.set("sector", "Web Developer");
myMap.set("rool", 01);

console.log(myMap);


//Problem solve for Map and Set
//Problem 01 
const myNum = [1,2,2,3,4,4,5];
const unipueSet = new Set(myNum);
console.log(unipueSet);

//Problem 02
const myNewSet = new Set();
myNewSet.add(10);
myNewSet.add(20);
myNewSet.add(10);
myNewSet.add(30);
console.log(myNewSet);

//Problem 03
const newSet = new Set([10,20,30]);
newSet.delete(10);
console.log(newSet);
//Another Way 
myNewSet.delete(10);
console.log(myNewSet);

//Problem 04
const myArray = [1,2,3,4,2,1,5,5];
const mySet1 = new Set(myArray);
const convertArray = [...new Set(mySet1)];
console.log(convertArray);