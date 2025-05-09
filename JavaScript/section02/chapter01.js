// 1. Falsy한 값
// let f1 = undefined;
// let f2 = null;
// let f3 = 0;
// let f4 = -0;
// let f5 = NaN;
// let f6 = "";
// let f7 = 0n; 

// if (!f7) {
//     console.log("falsy");
// }

// 2. Truty한 값
// -> 7가지의 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => { };

if (t5) {
    console.log("Truty");
}

// 3. 활용 사례
function printName(person) {
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = null; //현재 undefined 
printName(person);