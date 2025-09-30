//JavaScript Reduce Method
//Problem 1
const number = [1,2,32,45,67,89];
const totalSum = number.reduce((a,c) => a + c, 0);
console.log(totalSum);

//Problem 2
const products = [{name: 'shampoo', price: 100}, {name: 'soap', price: 50}, {name: 'toothpast', price: 75}]
const productPriceSum = products.reduce((a, c) => a + c.price, 0);
console.log(productPriceSum);

//Problem 3
const products1 = [{name: 'Pen', price: 5}, {name: "Book", price: 50}, {name: "Bag", price: 100}]
const reduce = products1.reduce((a, c) => a + c.price, 0);
console.log(reduce);


//Problem 4
const num = [1,2,3,4,5];
const multiply = num.reduce((a,c) => a * c);
console.log(multiply);

//Problem 5
const number1 = [10,20,30,40,50];
const maxNum = number1.reduce((a,c) => a > c ? a : c);
console.log(maxNum);

//Problem 6
const initialValue = [100,200,300,400];
const sum1 = initialValue.reduce((a,b) => a + b, 0);
console.log(sum1);