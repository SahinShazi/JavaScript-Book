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






