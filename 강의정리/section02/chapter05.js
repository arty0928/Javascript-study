// 원시 타입 = 불변값
let p1 = 1;
let p2 = p1;

p2 = 2;
//p2를 1 -> 2로 변경해도 1은 메모리에 그대로 있고, 추가로 2가 새로운 메모리 공간에 할당, 그 2를 p2가 가르킴.
// 원본 값인 1은 불변, 메모리에 그대로 위치

// 객체 타입 = 가변값, 메모리 공간에 참조값이 저장, 해당 참조값이 가리키는 위치에 실제 데이터 값이 존재
// 참조값이 가리키는 원본 데이터 값 자체가 변경됨 (참조값은 그대로)

let o1 = { name: "이정환" };
//얕은 복사
let o2 = o1;
o2.name = "둘리"; //o1의 name도 같이 바뀜 (같은 참조값을 가르키고 있었기 때문)

//깊은 복사
let o3 = { ...o1 }; //새로운 참조값을 가르키도록 새로운 객체를 생성 프로퍼티만 따로 복사 (원본 객체가 수정X)

console.log(o1 === o2);//true
console.log(o1 == o2); //true

// 얕은 비교
console.log(o1 === o3);//false 참조값이 서로 다름

// 깊은 비교 
JSON.stringify(o1) === JSON.stringify(o2);
// 객체를 문자열로 변환하여 객체 내의 속성 값들을 비교
// JSON.stringfy 함수 사용해야 함