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