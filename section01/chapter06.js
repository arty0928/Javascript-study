//1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;

//2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환 명시
// -> 문자열 -> 숫자

let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개"; // 숫자 + 문자열 같이 있는 경우
let strToNum2 = parseInt(str2); //숫자가 아닌 다른 값을 가지고 있는 경우도 숫자로 변환
console.log(strToNum2); // 10

let str3 = "개10"; // 문자가 숫자보다 앞에 있는 경우
let strToNum3 = parseInt(str3); // 이 경우는 제대로 숫자로 변환 X 
console.log(strToNum3); // NaN 

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 +" 입니다"); //20입니다

