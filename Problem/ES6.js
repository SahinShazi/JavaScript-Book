//PROBLEM 1
function sumOfNum(num1 = 0, num2 = 0, num3 = 0) {
  const result = num1 + num2 + num3;
  return result;
}

const nums = sumOfNum(2,4,7);
console.log(nums);


//Problem 2
function givMonney(nums = 50) {
  return nums;
}

const result = givMonney();
console.log(result);


//PROBLEM 3
function nameAndMoney(name = "anonymous ", num = 0) {
  const sum = name + num;
  return sum;
}

const result1 = nameAndMoney();
console.log(result1);

//PROBLEM 4
function borgo(num = 1) {
  const borgoNum = num * num;
  return borgoNum;
}

const result2 = borgo(11);
console.log(result2);


//PROBLEM 5
function productAndNum(name = "unknown product ", num = 1) {
  const sum = name + num;
  return sum;
}

const result3 = productAndNum();
console.log(result3);


//PROBLEM 6
function arrayOfBook(array = ['JS Book']) {
  return array;
}

console.log(arrayOfBook());

const arrays = ["Rich Dad and poor Dad", "Atomic Habits"];

console.log(arrayOfBook(arrays));


//PROBLEM 7
function priceAndQuantity(product = {price: 300, quantity: 3}) {
  return product;
}

console.log(priceAndQuantity());
const result4 = {
  price: 400,
  quantity: 10
}

console.log(priceAndQuantity(result4));

