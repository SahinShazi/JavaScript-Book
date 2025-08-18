//Practice 1
const backToHome = 6;

if (backToHome <= 6) {
    console.log("Thank you for coming before six.");
} else {
    console.log("Come, I will punish you.");
} //ans: Thank you for coming before six.



//Practice 2
const login = true;

if (login == true) {
    console.log("Welcome! The login is successful.");
} else {
    console.log("Sorry! Get lost!");
} //ans: Welcome! The login is successful.



//Practice-3
const iRun = true;

if (iRun == true) {
    console.log("You survived, friend.");
} else {
    console.log("Abar ki hobe friend? aso!");
} //ans: You survived, friend.


//Practice 4
const marks= 85;
if(marks >= 80) {
    console.log("Congratulations! You passed. You will get a bike.");
} else{
    console.log("You failed. You won't get a bike now.");
} //Ans: Congratulations! You passed. You will get a bike.



//Practice 5
const startMovieBefore9 = false;

if(startMovieBefore9 == true) {
    console.log("I will watch a movie.");
} else{
    console.log("I don't watch a movie!");
} //ans: I don't watch a movie!


//Practice 6
const temperature = 23;

if(temperature >= 65) {
    console.log("Hot temperature!");
} else{
    console.log('Very low temperature!');
} //ans: Very low temperature!



//--------------------------------------------------------------------------------- Multiple condition

//Practice 1
const age = 17;
const height = 80;

if(age > 18 && height > 60) {
  console.log("Did you push the car");
} else{
  console.log("Get in the car and sit down.");
} //ans: Get in the car and sit down.



//Practice 2
const mathMarks = 70;
const englishMarks = 90;

if(mathMarks > 80 || englishMarks > 85){
  console.log("You are ready!");
} else{
  console.log("You NOT ready!");
} //and: You are ready!


//Practice 3
const GPA5 = true;
const monthlyEran = 10001;

if(GPA5 == true && monthlyEran >= 10000) {
  console.log("You are ready for scholarship!");
} else{
  console.log("You are NOT ready for scholarship!");
} //ans: You are ready for scholarship!


//Practice 4
const age1 = 17;
const workExperience = 2;

if(age1 <= 30 && workExperience >= 2) {
  console.log("You are ready for Interview!");
} else{
  console.log("You are NOT ready for Interview!");
} //ans: You are ready for Interview!


//Practice 5
const eag = 12;
const chicken = true;

if(eag >= 12 && chicken == true) {
  console.log("I eat eag and chicken!");
} else{
  console.log("I eat rice!");
} //ans: I eat eag and chicken!


//Practice 6
const parsonTemperature = 30;
const hasCough = false;

if(parsonTemperature > 100 || hasCough == true) {
  console.log("Please. Go to the doctor!");
} else{
  console.log("Please. You sleep on your home!");
}//ans: Please. You sleep on your home!


//Practice 7
const participate = 99;
const submittedHW = true;

if(participate > 80 && submittedHW == true) {
  console.log("You are ready for this Exam!");
} else{
  console.log("You are NOT ready for this Exam!");
} // Ans: You are ready for this Exam!


//Practice 8
const hasElectricity = true;
const mobileHasCharge = true;

if(hasElectricity == false && mobileHasCharge == false) {
  console.log("I well study!");
} else{
  console.log("I well play game!");
} //Ans: I well play game!

//Practice 9
const shirtCost = 900;
const hasCoupon = false;

if(shirtCost > 1000 && hasCoupon == true) {
  console.log("You get 20% Discount!");
} else{
  console.log("Sorry! I don't have coupon!");
} //ans: Sorry! I don't have coupon!


//All condition answer is:
/*Get in the car and sit down.
You are ready!
You are ready for scholarship!
You are ready for Interview!
I eat eag and chicken!
Please. You sleep on your home!
You are ready for this Exam!
I well play game!
Sorry! I don't have coupon!*/


//Example Condition
const price = 100000;

if(price >= 10000) {
  const discount = price/100*20;
  const pay = price - discount;
  console.log(pay);
} else if(price >= 5000) {
  const discount = price/100*10;
  const pay = price - discount;
  console.log(pay);
} else{
  console.log(price);
} //Ans: 80000


//Random Example
const price = 6000;

if(price >= 5000) {
  const discount = price/100*10;
  const pay = price - discount;
  console.log(pay);
} else{
  console.log(price);
} //Ans: 5400


//-------------------------------------------
//Practice 1
const price = 4500;

if(price >= 6000) {
  const discount = price/100*15;
  const pay = price - discount;
  console.log(pay);
} else if(price >= 3000) {
  const discount = price/100*5;
  const pay = price - discount;
  console.log(pay);
}else{
  console.log(price);
} //ans: 4275



//Practice 2
const age = 70;
const price = 300;

if(age <= 12) {
  console.log("You can eat for free.");
} else if(age > 60) {
  const discount = price/100*50;
  const pay = price - discount;
  console.log(pay);
}else{
  console.log(price);
} //ans: 150



//Practice-3
const hasMoney = 1000;

if(hasMoney <= 1000) {
  console.log("You should be Deposit!");
} else if(hasMoney <= 5000) {
  console.log("Enjoy your money!");
} else{
  console.log("You have already lot of money 🤑. Please give me some money for my work!");
} //You should be Deposit!