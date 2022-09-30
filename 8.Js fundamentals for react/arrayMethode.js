const products = [

    { name: "laptop", price: 150000, brand: "asus", color: "golden" },
    { name: "phone", price: 7000, brand: "apple", color: "silver" },
    { name: "tv", price: 20000, brand: "Lg", color: "green" },
    { name: "watch", price: 200, brand: "asus", color: "red" },

]

Map
const brands = products.map(pd => pd.brand);
console.log(brands);

//forEach
products.forEach(element => {
    const res = element.color;
    console.log(res);

});

// filter 
const cost = products.filter(pd => pd.price < 10000);
console.log(cost);


const pdName = products.filter(pd => pd.brand.includes('asus'));
console.log(pdName);