//object literals
const student = {
    name: 'Student1',
    age:25
}

//    constructor
const person = new Object();

// 3
const human = Object.create(null);

// from class 
class users {
    constructor(name){
        this.name = name;
    }

}
const x = new users('Shamuel Molla');
console.log(x);
 