// 원시타입
// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN;

console.log(inf);
console.log(mInf);
console.log(nan);

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let intro = myName + myLocation;

console.log(intro);

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
console.log(empty);

// 5. Undefined Type

// 미처 초기화를 못했거나, 아무것도 넣지 않았을 때 자동으로 들어가는 값 : undefined
let none;
console.log(none); // undefined

// undefined !== null
// null은 직접 명시해서 넣어줘야 
