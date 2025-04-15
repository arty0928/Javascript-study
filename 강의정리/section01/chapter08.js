// 1. NULL 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> 연산에 참여하는 값 중 null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2= 10;
let var3=20;

// undefined ?? 10 중 null, undefined가 아닌 값을 찾기 -> 10을 var4에
let var4 = var1 ?? var2; 

let var5 = var1 ?? var3; //20

let var6 = var2 ?? var3; 
// 10; 둘다 null, undefined가 아니면 맨 앞에 있는 것

// 실무에서 유용하게 사용됨
// 사용자 이름과 닉네임
let userName = "박은서";
let userNickName = "닉네임";
let displatName = userName ?? userNickName;

//2. typeof 연산자 : 값의 타입을 문자열로 반환하는 기능
let var7 = 1;
var7 = "hello"; //자동으로 타입 변환됨

let t1= typeof var7; 
console.log(t1)// string


//3 . 삼항 연산자
// -> 항을 3개 사용
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";


 