//JavaScript Sort
//Problem 1
const someNum = [50,80,40,20,10,30,70];
someNum.sort((a,b) => a - b);
console.log(someNum);


//Problem 2
const descendingOrder = [1,4,7,9,10,4,3,6];
descendingOrder.sort((a,b) => b - a);
console.log(descendingOrder);

//Problem 3
const friends = [{name: "Sahin", age: 30}, {name: "Maruf", age: 22}, {name: "Nhaime", age: 19}];
friends.sort((a,b) => a.age - b.age);
console.log(friends);


//Problem 4
const someName = ["Sahin", "Maruf", "Rakib", "Subuj", "Chabir"];
someName.sort();
console.log(someName);