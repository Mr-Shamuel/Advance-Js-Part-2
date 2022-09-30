const numbers =[1,2,3,4,5,6,7,8,9,10];

//find
const findResult =numbers.find((cv,i,arr)=>{
    return cv > 4; 
})
console.log(findResult);



const users = [
    {name: "samuel", age: 28, salary: "40k"},
    {name: "shawon", age: 27, salary: "30k"},
    {name: "sam", age: 28, salary: "20k"}
]

const resultss = users.filter(x=>x.age==27);
console.log(resultss)
const resultss2 = users.filter(x=>x.name=='sam');
console.log(resultss2)



//filter  
// const filterResult = numbers.filter(x=>x>3)
// const filterResult2 = numbers.filter(x=>x<5)
// console.log(filterResult,filterResult2);



