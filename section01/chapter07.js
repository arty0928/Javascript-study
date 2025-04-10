// 1. 대입 연산자
let var1 = 1;


// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// * / %  가 + - 보다 우선순위 높음

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
console.log(num7); // 30

num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;


// 4. 증감 연산자
let num8 = 10;

// 후위 연산
num8++; //11
num8--; //10

// 전위 연산
++num8;
--num8;

// 5. 논리 연산자
let or = true || false; //t
let and = true && false; //f
let not = !true;  //f

// 6. 비교 연산자
let comp1 = 1===2; //f
let comp2 = 1!==2; //t

// == : 값만 비교
// === : 값, 자료형 타입도 비교

let comp3 = 2 > 1; //t
let comp4 = 1 > 2; //f

let comp5 = 2 >= 2; //t
let comp6 = 2 <= 2; //t






