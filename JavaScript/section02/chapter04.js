//1. spread 연산자
// -> spread : 흩뿌리다, 펼치다
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

function funA(...number) {
    console.log(number);
}

funA(...arr1);

// 2. Rest 매개변수 : 나머지, 나머지 매개변수
function funcB(one,two, ...rest) {
    console.log(one);
    console.log(two);
    console.log(rest);
}

funcB(...arr1); //rest 연산자