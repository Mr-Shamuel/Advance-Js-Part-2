//destructuring array
const [a,b] = [5,10];
console.log(a,b);

// complex arrar destructuring
const [p,q,r,[x,y,z]] = [1,2,3,[30,22]]
console.log(z);

//optional chaining 

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
const {name} = adventurer ;
  const dog = adventurer.dog?.name ;
  console.log( name,dog);


  const colors = ['red', 'green', 'yellow'];
console.log(colors?.[5]);


