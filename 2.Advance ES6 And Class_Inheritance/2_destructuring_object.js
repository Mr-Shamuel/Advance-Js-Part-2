const fish = {id:32, name:"hilsha fish", price:5000,phonne:'012234534223',address:"padma",color:"silver"}
const {id,price,color,name} = fish;
console.log(id,price,color,name);

// type 2 complex 

const company = {
    name1: "GP",
    ceo: {id:1, name:"ajmol",food:'fuchka'},
    web:{work:"website development",employee:22,frameworks:"react"}
}
const {name1 } = company;
const {work,employee,frameworks } =company.web ;
console.log(name1,work);