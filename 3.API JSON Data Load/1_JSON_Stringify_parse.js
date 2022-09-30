// json 
// const user = { id: 11, name: 'shamuel', role: 'developer' }
// const stringifyd = JSON.stringify(user);
// console.log(stringifyd)
//complex object

const shop = {
    name: 'Asif store',
    address: 'kurigram',
    products: ['laptop', 'module', 'televisions'],
    isExpensive: false
}

const stringify2 = JSON.stringify(shop);
console.log(stringify2);


//parse
// const shop2 = {"name":"Asif store","address":"kurigram","products":["laptop","module","televisions"],"isExpensive":false}

const convert = JSON.parse(stringify2);
 console.log(convert);
