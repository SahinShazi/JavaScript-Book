//Problem 1
for (let num = 150; num <= 170; num++) {
 console.log(num);
}

//Problem 2
let sum5 = 0;
for (let rolls = 31; rolls < 58; rolls++) {
  sum5 = sum5 + rolls;
}
console.log(sum5);


//Problem 3
let sum9 = 0;
for (let num = 25; num <= 75; num++) {
  sum9 = sum9 + num;
}
console.log(sum9);

//_______________________________________________________
//Problem 1
for (let i = 20; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
} 

//Problem 2
for (let i = 40; i < 80; i++) {
  if (i % 5 == 0 && i % 7 ==0) {
    console.log(i);
  } 
}

//Problem 3
for (let i = 1; i <= 40; i++) {
  if (i % 13 ===0) {
    console.log(i);
  }
}

//Problem 4
for (let i = 1; i <= 50; i+= 4) {
  console.log(i);
}

//Problem 5
for (let i = 0; i <= 100; i++) {
  if (i % 9 === 0 && i % 6 === 0) {
    console.log(i);
} 
} 

//Problem 6
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log(i);
} 
} 