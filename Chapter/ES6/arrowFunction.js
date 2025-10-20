//PROBLEM 1
const getIndex = (index) => index[0];

const result = getIndex([2, 3, 5, 4]);
console.log(result);

//PROBLEM 2
const mult = (a, b, c) => a * b * c;

const result1 = mult(23, 45, 12);
console.log(result1);

//PROBLEM 3
const getNon = () => "unknown";

console.log(getNon());


//PROBLEM 4
const student = {
    name: "Sahin",
    money: 3000
}

const getMoney = parson => parson.money;

const result2 = getMoney(student) * 5;
console.log(result2);



//PROBLEM 5
const student1 = [12, 4, 7, 9, 2, 5, 9];

const lastIndex = (nums) => {
    const length = student1.length - 1;
    const last = student1[length];
    const fast = student1[0];
    const result = fast + last;
    return result;
};

console.log(lastIndex(student1));


//PROBLEM 6
const sum = (num1 = 10, num2 = 5) => num1 + num2;

//const result3 = sum(30,40);
const result3 = sum();
console.log(result3);
