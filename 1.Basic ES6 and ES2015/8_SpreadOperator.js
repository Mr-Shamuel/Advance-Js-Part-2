//Spread operators

const arr = [1, 2, 3, 4, 5];
const arr2 = [6,7,8, 9, 10];
const arr3 =[...arr,...arr2];
console.log(arr3);
console.log(Math.max(...arr3));  