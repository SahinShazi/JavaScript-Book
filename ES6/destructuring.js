//Problem 1
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
}

const {
    brand
} = product;
console.log(brand);

//Problem 2
const item = {
    name: "Mobile",
    price: 20000,
    phone: "Samsung"
}

const {
    phone,
    price
} = item;
console.log(phone);
console.log(price);


//Problem 3
const colors = ["red", "blue", 'green', "yellow"];

const [first, second] = colors;
console.log(first);
console.log(second);


//Problem 4
const numbers = [2, 5, 8, 9, 2, 7];
const [first1, second1, third, fourth, fifth, sixth] = numbers;
const secondNum = second1;
console.log(secondNum);

//Problem 5
const numbers1 = [2, 4, 6, 8]
const [first2, , , eight] = numbers1;
const first3 = first2;
const eight1 = eight;

console.log(first3 + eight1);


//Problem 6
function multiply(a, b) {
    return [a * 3, b * 3];
}

const [mango, apple] = multiply(2, 3);
console.log(mango, apple);


//Problem 7
const person = {
    name: "Sahin",
    city: "Dhaka"
}

const {
    name,
    city,
    phone1 = 'N/A'
} = person;
console.log(name, city, phone1);

//Problem 8
const teacher = {
    name: "Maria",
    profession: "Teacher"
}

const {
    name1 = "Alias", profession = "Job"
} = teacher;

console.log(name1, profession);
