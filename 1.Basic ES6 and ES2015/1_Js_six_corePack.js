// array 
let  number = [1,2,3,4,5,6,7,8,9,10,11,"xx"]

number.includes("xx")?console.log("number is here"):console.log("number is not here");

if(number.indexOf(3 !=-1)){

}
const len = number.length;
number.pop();
number.push("my number");
number[2] = 'change number';

console.log(number);

//for of

for( let i of number){
    console.log(i)
}

//function

function info (fname,lname){
    const fullname = fname + lname;
return fullname;
}
const result = info("Shamuel ","Molla");
console.log(result)

