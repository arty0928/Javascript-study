function funA() {
    console.log("funA");
}

let varA = funA;
varA();


// 1. 함수 표현식
// 함수 표현식은 호이스팅되지 않음
let varB = function () {
    console.log("funB");
}

varB();

// 2. 화살표 함수
let varC = (value) => value + 1;
console.log(varC(10));

