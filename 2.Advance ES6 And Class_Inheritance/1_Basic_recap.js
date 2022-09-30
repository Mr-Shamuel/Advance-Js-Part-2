//const 
const name =  'sam'

//let
let names = 'Shawon'
names = "shamuel";

//var 
var myName = "Rashida";
var myName =" Sultana";
myName ="Risha";

console.log(myName);

// 2 default number  
//spread operator
function maxNumber(arr=[2,3,3,4,45,6,3,22]) {
    const max = Math.max(...arr);
    return max;

}
console.log(maxNumber());

// 3 template Settings
const myres = `hello my name is ${myName}`;

//arrow function

const squre = (x) =>x*x;
console.log(squre(2));