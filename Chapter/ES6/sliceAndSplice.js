//JavaScript slice and splice
//Problem 1 
const fruits = ['Apple', 'Banana','Cherry', 'Date'];
const sliceFun = fruits.slice(1,3);
console.log(sliceFun);
console.log(fruits);

//Problem 2 
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
const sliceSelctor = cars.slice(2,4);
console.log(sliceSelctor);

//Problem 3 
const movieList = ['Inaception', 'Titanc', 'Joker', 'Avatar'];
const movieRAdd = movieList.splice(2, 4, 'Batman', 'Superman');
console.log(movieRAdd);
console.log(movieList);

//Problem 4 
const players = ['Messi', 'Ronldo', 'Neymar', 'Mbappe'];
const playersAddRomove = players.splice(2,1, 'Halland');
console.log(playersAddRomove);
console.log(players);