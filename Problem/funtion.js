//How to declare function 
//Problem 1
function juiceKao() {
    console.log("Juice kayo");
}

juiceKao();

//Problem 2
function myRoutine() {
    console.log("At first i wekup 4am and complete my all routine.");
}

myRoutine();


//Problem 3
function myFamily() {
    console.log("My father name is Jamal");
    console.log("My mother name is Minara");
    console.log("My brother name is Shakil");
    console.log("My name is Sahin Enam");
}

myFamily();


//Problem 4
function taskDone() {
    console.log("I Complete my work, like read book, Practice programming, Homework.");
}

taskDone();

//Problem 5
function greetMe() {
    console.log("Good Morning! Have a great day.");
}

greetMe();


//Problem 6
function getFavFriends() {
    console.log(`Maruf, Nahim, Mohin and Emon.`);
}

getFavFriends();

//Problem 7
function introduceMyself() {
    console.log("My name is Sahin.");
    console.log("I am 16.");
    console.log("Dhaka");
    console.log("+8801732373069");
    console.log("My height ...");
    console.log("My favorite food is rice.");
}
//I can write one line 

introduceMyself()



//function call 
//Problem 1
function sum(num1, num2) {
    const sumNum = num1 + num2;
    console.log(num1, 'and', num2, 'sum is:', sumNum);
}

const fatherAge = 50;
const myAge = 17;

sum(fatherAge, myAge);

//Problem 2
function doubleIt(num1, num2) {
  const double = num1 * num2;
  console.log(num1, num2, 'double is:', double);
}

doubleIt(20,15);


//Problem 3
function sums(marks1, marks2, marks3) {
  const totalSum = marks1 + marks2 + marks3;
  console.log('Total marks is:', totalSum);
}

const English = 79;
const math = 90;
const Physics = 95;

sums(English, math, Physics);


//Problem 4
function calAge(number) {
  const cal = 2025 - number;
  console.log('You are', cal, 'yers old.');
}

calAge(2000);

//Problem 5
function calItems(number) {
  const cal = number / 35;
  console.log('You can buy', Math.floor(cal), 'Gourd');
}

calItems(4000);


//Problem 6
function addNum(num1, num2, num3, num4) {
  const allNum = num1 + num2 + num3 + num4;
  const average = allNum / 4;
  console.log('The number average is', Math.floor(average));
}

addNum(12,23,34,45);


//Problem 7
function sellsPrice(number) {
  const selling = number + 250;
  console.log('Your products selling price is', selling);
}

sellsPrice(40);


//Problem 8
function age100(birthYear) {
  const ageIn100 = birthYear + 100;
  console.log("You will be 100 years old in", ageIn100);
}

age100(2009);


//Problem 9
function screenTime(number) {
  const time = number * 30;
  console.log('You used your mobile for', time, 'hours in a month.');
}

screenTime(7);


//Return function 
//Problem 1
function num(num1) {
    if (num1 > 10) {
        return true;
    }
    return false;
}

//console.log(num(88));

//Problem 2
function num(num1) {
    if (num1 % 13 === 0) {
        return true;
    }
    return false;
}

//console.log(num(10));

//Problem 3
const rice = 50;
const curry = 70;
const drink = 60;

function add(price1, price2, price3) {
    return price1 + price2 + price3;
}

const bill = add(rice, curry, drink);
//console.log(bill);


//Problem 4
function check(age) {
    if (age >= 18) {
        return "Eligible for Voting";
    }
    return "Not Eligible for voting";
}

//console.log(check(15));


//Problem 5
function string() {
    const text = `HI, I'm Sahin Enam! I can help you?`;
    return text.length;
}

//console.log(string());


//Problem 6
function add(a, b, c) {
  const sum = a + b + c;
  const average = sum / 3;
  return Math.floor(average);
}

//console.log(add(12, 32, 44));


//Problem 7
function add(num) {
  if(num % 2 === 1) {
    return num * -1;
  }
  else {
    return "This is even number";
  }
}

console.log(add(49));



//Function's advance 
//Problem 1
function numberOfElement(nums) {
    const len = nums.length;
    return len;
}

const len = numberOfElement([42, 77, 88, 99, 43, 56, 78, 90]);

//console.log(len); //Even 

//Problem 2
function firstString(string) {
    if (typeof string === 'string') {
        return string[0];
    } else {
        return "This is not string!";
    }
}

//console.log(firstString("Sahin"));

//Problem 3
function nums(num) {
    if (num > 10) {
        const diby = num / 2;
        return diby;
    } else {
        const diby = num * 2;
        return diby;
    }
}

//console.log(nums(6));

//Problem 4
function num(nums) {
  const sum1 = nums[0];
  const sum2 = nums[nums.length - 1];
  const total = sum1 + sum2;
  return total;
}

const sum = num([32,45,67,78,89,98,88]);
//console.log(sum);

//Problem 5
function nums(num) {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    if (num % 2 === 1) {
      return num * 3;
    }
  }
}

console.log(nums(54));

//Problem 6
function names(nem1, nem2) {
  const name1 = nem1.length;
  const name2 = nem2.length;
  if (name1 > name2) {
    return true;
  } else {
    return false;
  }
}

console.log(names("Sahin", "Enam"));

//Problem 7
function naums(num1, num2) {
  const milti = num1 * num2;
  if (milti > 100) {
    return milti / 2;
  } else {
    return milti * 3;
  }
}

console.log(naums(33,88));
