const number = [2,4,6,8,10];
const output = [];
const output2 = [];




const doubleNumber =(num)=>{
    const res =num*2 ;
    return res;
}
//map
// const result =number.map(doubleNumber);
// console.log(result);

const result2 = number.map(x=>x*3);
console.log(result2);
const result3 = number.map(x=>console.log( x));
 





// loop 1
for(let i of number){
  output.push(doubleNumber(i));
}
console.log(output);

// loop 2
for( let j=0; j<number.length; j++){
    const x = number[j];
    console.log(x)
}
 