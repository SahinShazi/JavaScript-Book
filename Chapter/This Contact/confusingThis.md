//This is confusing 
//Case01
console.log(this);

//Case02
const a = {
  name: "Alex",
  score: 100,
  showScore() {
    console.log(this.name);
  }
};

a.showScore();

//Case03
class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  
  showDetails() {
    console.log(this.name);
    console.log(this.level);
  }
}

const v = new Player("Alex", 10);
v.showDetails();

//Case04
function doSomething(number) {
  console.log(this);
}

doSomething();

//Case05
function Person(name) {
  this.name = name;
}

const user = new Person("Alex");
console.log(user.name);

//Case06
<button id="get-user">element that was clicked</button>

document.getElementById("get-user").addEventListener("click", function(){
   console.log(this);  // "console" সঠিক বানান
});

//<button id="get-user">element that was clicked</button>

//Case07
const person = {
  name: "John",
  greet: ()=> {
    return `Hello, I am ${this.name}`;
    
  }
};

console.log(person.greet());

//Case08
"use strict";
function test() {
  console.log(this);
}

test();


//Problem 
# Practice:

1. ব্রাউজারে window অবজেক্ট জিনিসটা কী?
### Answer:
ব্রাউজারের স্ক্রিনে তুমি যা যা করতে পার সেটা সবকিছুর “বড় বস” হলো window অবজেক্ট।

একটু সহজভাবে বলি:

ব্রাউজার যখন ওয়েবপেজ রান করে, তখন জাভাস্ক্রিপ্টকে একটা বড় environment দেয় যেখানে ভ্যারিয়েবল, ফাংশন, DOM, API, storage—সব থাকে। সেই environment-ই window. মানে:

window হলো পুরো ব্রাউজারের জন্য গ্লোবাল অবজেক্ট।

ওই অবজেক্টের ভেতরেই থাকে:

• document (HTML access করার entry gate)
• console
• localStorage / sessionStorage
• alert(), setTimeout(), setInterval()
• fetch()
• history
• location
• সমস্ত global variable এবং function

2. ব্রাউজারে console.log(this); রান করলে this-এর ভ্যালু কী হবে?
```javascript
console.log(this);
```
#### Output:
window

3. অবজেক্টের মেথড নরমাল ফাংশন আর arrow ফাংশন দিয়ে ডিক্লেয়ার করলে this-এর কোনো কিছু কি ডিফারেন্ট হবে?