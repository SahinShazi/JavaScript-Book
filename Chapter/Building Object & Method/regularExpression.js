//JavaScript Regular Expression 
//Problem 1 
const sentence1 = "I bought an orange";
console.log(sentence1.replace(/orange/, "grape"))

//Problem 2 
const sentence2 = "I like to have and banana";
const pettern = /ana/;
console.log(pettern.test(sentence2));

//Problem 3 
const sentence3 = "I am eating apple. apple is good. apple helps me a lot.";
console.log(sentence3.replace(/apple/g, "JavaScript"));
