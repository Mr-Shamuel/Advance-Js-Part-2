//  object keys 
const student = {
    name: "asif",
    id: 1,
    age:23,
    class:"TEN"
}

const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);
const pairs = Object.entries(student);
console.log(pairs);

Object.freeze(student);

delete student.class;
console.log(student);
