//

// 2 template strings and let cont 

let name ="shamuel";
 const 
 user = {
    age: 25,
    id: 1432
 }
 const {age,id} = user;
console.log(`My Name is ${name} and i am ${age} years old. my id is ${id}`);

//arrow
// a 
const divide = num => num/5;
console.log("arrow a "+divide(10));
// b 
const addmul =(a,b)=>{
 return (a+2)*(b+2);

}
console.log("Arrow 2 :  "+addmul(3,4));

//c
const mul =(a,b,c=10)=> a*b*c;
console.log("Arrow 3 :  "+mul(3,3,));

//map 

const arr =[1,2,3,4,5,6,7,8,9,10,11,12];
const x = arr.map(x=>x*5 );
console.log(x);

//filter odd

const oddFilter = arr.filter(x=>x%2!=0);
console.log(oddFilter);

// find salary 
const users = [
    {name: "samuel", age: 28, salary: "40k"},
    {name: "shawon", age: 27, salary: "30k"},
    {name: "sam", age: 28, salary: "20k"}
]

const findSalry =users.find(sal =>sal.salary=="30k");
console.log(findSalry );

//destructuring
const users2 = {
    name1: 'John',
   employee: {namex: "samuel", age: 28, salary: "40k" , address:{ village: "glopgram", discrict: "savar"}},
    
}
// const {dist} = users2.employee.address.discrict;
const {discrict} = users2.employee.address ;
console.log(discrict);

const array = [1,2,['samuel', '25',["rashidaa" ,00100]],55,234];
const [,,[,,[three,roll]],,] = array;
console.log(three,roll);
