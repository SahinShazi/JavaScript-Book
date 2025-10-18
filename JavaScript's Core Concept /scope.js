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