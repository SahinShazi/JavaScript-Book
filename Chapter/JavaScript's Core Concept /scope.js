//JavaScript Scope 
//Problem 1

let taxRate = 15;

function calculation(income) {
    let yourTax = income * taxRate / 100;
    return yourTax;
}

let myIncome = 600000;
let myTax = calculation(myIncome);

console.log("Your tax is ", myTax);


//Problem 2 
function inner() {
  let inside = "Internal secret hiding place";
}

console.log(inside);
//ReferenceError: inside is not defined 


//Problem 3 
if (true) {
  let temperature = 66;
}

console.log(temperature);

//ReferenceError: temperature is not defined


//Problem 4 
function schoolDetails(){
  let schoolName = "High School";
  
  function desplySchoolName() {
    console.log(schoolName);
  }
  desplySchoolName()
}
schoolDetails();