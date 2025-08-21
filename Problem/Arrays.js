//Arrays 
//Practice 1
const num2 = [71,72,73,74,75,76,77,78,79];

//Practice 2
const food = ["Apple", "Banana", "Orange", "Mango", "Guava"];
console.log(food);
console.log(food.length);

//Practice 3
const food1 = [
  "আলু", "পেঁয়াজ", "বেগুন", "মুলা", "গাজর", 
  "টমেটো", "ঢেঁড়স", "লাউ", "শসা", "পটল"
];
console.log(food1);
console.log(food1.length); //Asns: 10

//Practice 4
const movie = ["তুফান", "প্রিয়তমা", "তান্ডব", "দাগি", "সর"];
console.log(movie);

//Practice 5
const num1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(num1);

//Practice 6
const color = ["Blue", "Black", "Red", "White", "Green", "Holud"];
console.log(color.length); //Ans: 6

//Practice 7
const con = ["Bangladesh", "India", "Pakistan", "Turkey", "Saudi Arab", "America"];
console.log(con);
console.log(con.length) //6

//-------------------------------------------------------------
//Problem 1
const friends = ["Lemon", "Emon", "Nahim", "Sahin"];
console.log(friends[3]); //Sahin 

//Problem 2
const books = ["A book", "B book", "C book", "D book", "E book", "F book"];
console.log(books[5]); //F book 

//Problem 3
const number = [1,2,3,4,5,6,7,8,9,10];
number[7] = 30;
console.log(number);

//Problem 4
const games = ["Greenfield", "Rosewood", "Mapleton", "Hillcrest", "Riverton"];
games[2] = "FreeFire"
console.log(games);

//Problem 5
const family = ["Sahin", "Sahkil", "Minara", "Jamal"];
console.log(family);

//Problem 6
const countrys = ["Bangladesh", "India", "Canada", "Australia", "Pakistan"];
console.log(countrys[4]); //Pakistan 

//Problem 7
const have = ["Pencil", "Books", "Mirror", "Glesas", "Mobile", "JavaScript Book", "Cabel", "Brash"];
console.log(have[7]); //Brash






//________________________________________
//Problem 1
const num = [10,20,30,40,50];
num.push(60);
console.log(num);//+60

//Problem 2
const friends = ["Sahin", "Maruf", "Emon", "Mohin"];
friends.push("Somun");
console.log(friends); //+ Somun

//Problem 3
const games = ["Ars", "Farms", "football", "cricket"]
games.pop();
console.log(games); //- cricket 

//Problem 4
const number = [24, 36, 48, 60];
number.unshift(12);
console.log(number); //first item +12

//Problem 5
const books = ["Book1", "Book2", "Book3"]
books.shift();
console.log(books); //-book1


//Problem 6
const foods = ["Mango", "Banana", "Apple"];
foods.push("Orange");
foods.shift();
foods.unshift("Guava");
console.log(foods);

//Problem 7
const country = ["Bangladesh", "India", "Nepal"];
country.push("Butane");
country.pop();
country.unshift("Pakistan");
console.log(country);

//Problem 8
const friends = ["Sakib", "Rifat", "Hasan"];
friends.shift();
friends.push("Nayeem");
friends.unshift("Rakib");
console.log(friends);

//Problem 9
const cities = ["Dhaka", "Chittagong", "Khulna"];
cities.push("Rajshahi")
cities.pop();
cities.unshift("Sylhet");
console.log(cities);


//Problem 9
const books = ["Math", "English", "Science"];
books.push("History");
books.shift();
books.unshift("ICT");
console.log(books);

//Problem 10
const games = ["Football", "Cricket", "Hockey"];
games.push("Badminton");
games.pop();
games.unshift("Volleyball");
console.log(games);

