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


//----------- Break and continue-----------
//Problem 1
for (let i = 1; i <= 30; i++) {
  if (i > 15) {
    break;
  }
  //console.log(i);
}

//Problem 2
for (let i = 1; i <= 40; i++) {
  if (i % 7 == 0) {
    continue;
  }
 // console.log(i);
}

//Problem 3
for (let i = 1; i <= 15; i++) {
  if (i === 9) {
    continue;
  }
  //console.log(i);
}

//Problem 4
for (let i = 1; i <= 20; i++) {
  if (i === 12) {
    continue;
  }
  //console.log(i);
}

//Problem 5
for (let i = 1; i <= 25; i++) {
  if (i % 3 === 0) {
    continue;
  }
 // console.log(i);
} 


//Problem 6
for (let i = 91; i <= 120; i++) {
  if (i % 10 === 0) {
    break;
  }
//  console.log(i);
}


//Problem 7
// 1 থেকে 30 পর্যন্ত সব সংখ্যা প্রিন্ট করো।
// তবে শুধু জোড় সংখ্যাগুলো দেখাও।
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        //console.log(i);
    }
}

//Problem 8
let marks = [45, 67, 32, 80, 95, 50, 40];
// লুপ ব্যবহার করে শুধু "পাস" করা (৫০ বা তার বেশি) মার্কসগুলো দেখাও।
for (let i of marks) {
    if (i >= 50) {
        // console.log(i + " >-Pass");
    } else {
        // console.log(i + " >-Fail");
    }
}

//Problem 9
// 5 এর নামতা (multiplication table) প্রিন্ট করো, 1 থেকে 10 পর্যন্ত।
for (let i = 1; i <= 10; i++) {
    //console.log(i * 5);
}
