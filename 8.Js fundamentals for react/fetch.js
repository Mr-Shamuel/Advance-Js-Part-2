// json 
const products = { name: "laptop", price: 150000, brand: "asus", color: "golden" }
const jsonfile = JSON.stringify(products);
console.log(jsonfile);
const jto = JSON.parse(jsonfile);
console.log(jto);

// fetch 
// fetch(`url `)
//     .then(res => res.json())
//     .then(data => console.log(data))

// object keys and values
const products2 = { name: "laptop", price: 150000, brand: "asus", color: "golden" }
console.log(Object.keys(products2)) //keys
console.log(Object.values(products2)) //values
console.log(Object.entries(products2)) //entities


//loop
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(x => console.log(x)); //no return 
arr.map(x => console.log(x * 2)); // return array

//for   of an array like object 
//loop on an object using for in 


// add and remove from an array 

const products3 = [

    { name: "laptop", price: 150000, brand: "asus", color: "golden" },
    { name: "phone", price: 7000, brand: "apple", color: "silver" },
    { name: "tv", price: 20000, brand: "Lg", color: "green" },
    { name: "watch", price: 200, brand: "asus", color: "red" },

]

const remaining = products3.filter(pd => pd.name != "phone");
console.log(remaining);