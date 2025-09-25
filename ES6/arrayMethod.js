//Problem 1
const number = [12,3,5,6,7,9,6,7,5,3];
const result = number.map(num => num / 2);
console.log(result);

//Problem 2
const result1 = number.map(num => num + 5);
console.log(result1);

//Problem 3
const friend = ["Sahin", "Maruf", "Asma"];
const result2 = friend.map(fri => fri.length);
const firstLater = friend.map(friend => friend[0]);
console.log(result2);
console.log(firstLater);
