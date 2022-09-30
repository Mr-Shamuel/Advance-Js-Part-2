const x = { a: 5, b: 7 }
const y = { b: 7, a: 5 }

//compare two objects methods 1
// if(JSON.stringify(x) === JSON.stringify(y)){
//     console.log("Both are equal")
// }
// else{
//     console.log("Both are not equal")
// }


//compare two objects

const compareObj = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const i in obj1) {
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }
    return true;

}

const res = compareObj(x,y);
console.log(res);