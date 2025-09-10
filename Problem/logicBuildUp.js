//——————————————————————————————————————————————————————
//Problem 1
function mileToYards(mile) {
    const yards = mile * 1760;
    return yards;
}
console.log(mileToYards(13));

//Problem 2
function kiloToKalore(kilo) {
    const kalore = kilo * 860;
    return kalore;
}

console.log(kiloToKalore(13));

//Problem 3
function hoursToSec(hours) {
    const minutes = hours * 60;
    const seconds = minutes * 60;
    return seconds;
}

console.log(hoursToSec(1));

//Problem 4
function centimetreToMetre(centimetre) {
    const metre = centimetre / 100;
    return metre;
}

console.log(centimetreToMetre(200));

//Problem 5
function inchToCentimetre(inch) {
    const centimetre = inch * 2.54;
    console.log(centimetre);
}

inchToCentimetre(55);

//Problem 6
function poundToKilogram(pound) {
    const kilogram = pound * 0.453;
    return kilogram;
}

console.log(poundToKilogram(5));

//Problem 7
function yardsToMetre(yards) {
    const metre = yards * 0.91;
    return metre;
}

console.log(yardsToMetre(10));


//Problem 8
function secondToMinute(second) {
  const minutes = second / 60;
  const minutesFaction = parseInt(minutes);
  const numberReminder = second % 60;
  const result = minutesFaction + ' minute ' + numberReminder + ' second';
  return result;
}

console.log(secondToMinute(120));

//Problem 9
function metreToMilliliter(metre) {
  const milliliter = metre * 1000;
  const result = milliliter + ' milliliter';
  return result;
}

console.log(metreToMilliliter(6));


//Problem 10
function kiloToMile(kilo) {
  const mile = kilo * 0.621;
  return mile;
}

console.log(kiloToMile(6))





//----------------------
//Problem 1
function incomeAmount(amount) {
  if (amount <= 50000) {
    return 10;
  } else if (amount > 50000 && amount <= 100000) {
    return 20;
  } else if (amount > 100000 && amount <= 200000) {
    return 30;
  } else {
    return 40;
  }
}

/*console.log(incomeAmount(100002)); // 40
console.log(incomeAmount(50001));  // 20
console.log(incomeAmount(100000)); // 20
console.log(incomeAmount(100001)); // 30*/

//Problem 2
function deliveryCost(cost) {
  if (cost <= 10) {
    return "Delivery cost: 100";
  } else if (cost <= 20) {
    return "Delivery cost: 300";
  } else if (cost <= 50) {
    return "Delivery cost: 1000";
  } else {
    const total = cost * 100;
    return "Delivery cost: " + total;
  }
}

//console.log(deliveryCost(60));


//PROBLEM 3
function marks(mark) {
  if (mark >= 80) {
    return "A+";
  } else if(mark >= 70 && mark <= 80) {
    return "B";
  } else if(mark >= 60 && mark <= 70) {
    return "C";
  } else if(mark >= 50 && mark <= 60) {
    return "D";
  } else {
    return "F";
  }
}

//console.log(marks(90))


//————————————————————————————————————————————————————————————
//PROBLEM 1
function evenNumber(numbers) {
  const even = [];
  for (number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }

  if (even.length === 0) {
    return 0;
  }

  let sum = 0;
  for (const number of even) {
    sum += number;
  }

  const count = even.length;
  const avg = sum / count;
  return parseFloat(avg.toFixed(0));
}

const nums = [12,32,12,21,54,6,78,8,7,9];
//const nums = [1,3,5,7,9];
const avg1 = evenNumber(nums);
console.log(`The average of these numbers is ` + avg1);

//Problem 2
function maltiNumber(numbers) {
  const arrayResult = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      arrayResult.push(number * 2);
    }
  }
  return arrayResult;
}

const nums = [1,2,3,4,5,6,7,8];
const result = maltiNumber(nums);
console.log(result);



//PROBLEM 3 
function oddEvenNum(numbers) {
  for (const number of numbers) {
    if (number % 2 !== 0) {
      return `Odds numbers found`;
    } 
  }

  return 'No odd numbers found';
}

//const nums1 = [1,3,5,7,9];
const nums1 = [2,4,6,8,10];
const result = oddEvenNum(nums1);
console.log(result);



//PROBLEM 4
function oddNumber(numbers) {
  const odds = [];

  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }

  if (odds.length === 0) {
    return 0;
  }

  let sum = 0;
  for (const number of odds) {
    sum+= number;
  }

  const nums1 = odds.length;
  const result = sum / nums1;
  return result;
}

const nums2 = [12,13,14,15,16,17,18,20,90];
//const nums2 = [12,14,16,18];
const oddsNum = oddNumber(nums2);
console.log(`This numbers average is ` + oddsNum);


//PROBLEM 5
function oddsNumbers(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number - 1);
    }
  }

  if (odds.length === 0) {
    return 0;
  }

  return odds;
}

//const nums = [12,13,14,11,16,18,17,19,20];
const nums = [2,4,6,8,10];

const result = oddsNumbers(nums);
console.log(result);


//Problem 6
function noDuplicateArray(arry) {
  const unique = [];
  for (const item of arry) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const number = [23,23,44,44,55,55,66,66,99,99,88,88,00];

const array = noDuplicateArray(number);
console.log(array);


//PROBLEM 7
let a = 7;
let b = 5;

console.log("After swap:", a,b);

let temp = a;

a = b;
b = temp;

console.log("Before swap:", a,b);