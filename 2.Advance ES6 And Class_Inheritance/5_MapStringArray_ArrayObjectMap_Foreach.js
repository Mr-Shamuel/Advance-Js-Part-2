const names = ['shamuel','risha','shawon','sultana'];
//find array length + string size 
//map 
const flength = names.map(friend=>console.log(friend));

 
//for of 
for(let i of names){
    console.log(i+" = "+i.length)
}

console.log("total length of an array ="+names.length);


const users = [
    {name: "shamuel", age: 28, salary: "40k"},
    {name: "shawon", age: 27, salary: "30k"},
    {name: "sam", age: 23, salary: "20k"}
]


const userInfo = users.map(user=>user.name);
const userAge = users.map(ages =>ages.age);
console.log(userInfo,userAge);


//for each


users.forEach(u=>console.log(u))