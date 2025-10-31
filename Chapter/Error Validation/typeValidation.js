//Error Validation
//Example 01 
function multiply(num1, num2){
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return 'Please provide a number.';
  }
  const multi = num1 * num2;
  return multi;
}

const result = multiply(6,"sahin");
// console.log(result);


//Example 02 
function fullName(first, second) {
    if(typeof first !== 'string') {
        return 'First name should be a String'; 
    } else if (typeof second !== 'string') {
        return 'Second name should be a String';
    }
const fullNa = first + " " + second;
return fullNa;
}

// const result1 = fullName('Sahin', 'Enam');

// const result1 = fullName('Sahin', 8);

const result1 = fullName(9, 'Enam');

console.log(result1);



//Example 03
function getPrice(product) {
  if (typeof product !== 'object') {
    return 'Please provaid an object.';
  }
  const price = product.price;
  return price;
}

// const price = getPrice({name: "Phone", price: 5000, color: 'Blu'});

const price = getPrice(77);
console.log(price);




//Example 04 
function getSecond(numbers) {
  if (Array.isArray(numbers) == false) {
    return 'Please provide an Array.';
  }
  // console.log(typeof numbers);
  const second = numbers[1];
  return 'The second number is ' + second;
}
// const result = getSecond(77)
const result = getSecond([77, 88, 99]);
console.log(result);



//Now solve Problem 
//Problem 01
function firstChar(name) {
  if (typeof name !== 'string') {
    return 'Please provide a String.';
  }
  const firstC = name[0];
  return firstC;
}

const result = firstChar("Sahin");
// const result = firstChar(8686);
//console.log(result);



//Problem 02
function lastItem(array) {
  if (Array.isArray(array) == false) {
    return 'Please provide an Array.';
  }
  const last = array[array.length - 1];
  return last;
}

const result1 = lastItem([5, 6, 7, 8, 9, 10]);
// console.log(result1);


//Problem 03 
function getArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number') {
    return 'Please provide an Number.';
  }
  const area = length * width;
  return area;
}

const result = getArea(9, 10);
// console.log(result);