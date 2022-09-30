// 1. how to declear a variable using let and const 

const name = " shawon";
let role = " doctor";
role = " student";

// 2 condition >,< ,>=,<=,===

if (name === role) {
    console.log(" equal");
} else {
    console.log(" not equal");
}

//3 arary /
const numbers = [2, 3, 4, 5, 6];
numbers[1] = " changed";
numbers.push(5);

//loop

for (let i = 0; i < array.length; i++) {
    const element = array[i];

}

//function

function multiply(x, y) {
    return x * y;
}
multiply(5, 10);

//object

const obs = {
    name: " shamuel",
    age: 25,
    role: "developer"
}

const xxx = 'age';

console.log(obs.age);
console.log(obs["age"]);
console.log(obs[xxx]);