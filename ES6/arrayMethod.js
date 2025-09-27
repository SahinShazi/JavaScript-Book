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


//For Each -------
//Problem 1
const numbers = [3,5,21,13];

const results4 = numbers.forEach(n => console.log(n));

//Filter
//Problem 2
const players = [70,87,60,45,20,80];
const filterPlayer = players.filter(num => num >= 70);

console.log(filterPlayer);

//Problem 3
const playersName = ["Sahin", "Maruf", "Rasel", "Kabila", "Ismaili"];
const results5 = playersName.filter(player => player.length >= 4);

console.log(results5);


//Find
//Problem 4
const friendsName = ["Sahin", "Maruf", "Rasel", "Kabila", "Ismaili"];
const results6 = friendsName.find(fri => fri.length >= 4);

console.log(results6);


//Problem 5
const players1 = [70,87,60,45,20,80];
const results7 = players1.findIndex(num => num > 80);

console.log(results7);


//Problem 6
const players2 = [70,87,60,45,20,80];
const results8 = players2.findIndex(num => num > 100);

console.log(results8);

//Project Problem 7
const students = [
  {name: "John", age: 20},
  {name: "Adam", age: 22},
  {name: "Tom", age: 19},
  {name: "Lucy", age: 21}
];

const studentInfo = students.map((student, index, array) => {
  return `${student.name}, ${index + 1} of ${array.length} students.`;
});
  
console.log(studentInfo);



//Problem 8
const price = [30, 45, 20, 60, 10];

const results9 = price.map(pri => pri + 13);
console.log(results9);

//Problem 9
const names = ["Messi", "Maradoma", "Pele", "Zidane", "Ronaldo"];

const max5name = names.filter(nam => nam.length > 5);
console.log(max5name);


//Problem 10
const numbers = [10, 15, 20, 25, 30, 35];
const maxNum = numbers.find(num => num > 20);
console.log(maxNum);


//Problem 11
const higest = [56, 70, 65, 68, 72, 73, 45, 70];
const maxNumOf69 = higest.filter(num => num > 69);
console.log(maxNumOf69);


//Problem 12
const someNum = [7, 10, 25, 20, 25, 30];
const decided3 = someNum.map(num => num / 3);
console.log(decided3);

//Problem 13
const myFriendNames = ["Sahin", "Maruf", "Nahim", "Ismail", "Jihad"];
const thirdLatter = myFriendNames.map(fri => fri[2]);
console.log(thirdLatter);


//Problem 14
const someNume = ["Sahin", "Maruf", "Nahim", "Ismail", "Jihad", "Hassan", "Havo"];
const startH = someNume.find(num => num[0] === 'H');
console.log(startH);

//Problem 15
const smallArray = [1, 2, 3, 4, 5, 6, 7];
const forEach = smallArray.forEach(num => console.log(num));


//Problem 16
const everyName = ["Sahin", "Rakib", "Sojun", "Sabbir"];
const everyNameEach = everyName.forEach(name => console.log(name));
