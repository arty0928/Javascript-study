//1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2;         //추가
animal.name = "까망이"   //삭제
delete animal.color;    //삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
    name: "이정환",
    //메서드
    sayHi() {
        console.log("hi");
    },
};

person.sayHi();
person["sayHi"]();