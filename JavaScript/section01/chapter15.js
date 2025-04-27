//1. 객체 생성
let obj1 = new Object() // 1. 객체 생성자
let obj2 = {}           // 2. 객체 리터럴 (짧음 -> 대부분 사용)

//2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
    job: "FE Developer",
    extra: {},
    10: 20,
    "like cat" : true // 띄어쓰기가 있는 속성 key는 ""로 감싸야 함
};

// 3. 객체 프로퍼티 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"]; 
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티에 추가하는 방법
person.job = "fe developer";
person["food"] = "pizza";
console.log(person);


//3.3 프로퍼티 수정 방법
person.job = "student";
person["food"] = "candy";

console.log(person);

//3.4 프로퍼티 삭제 방법
delete person.job;
console.log(person);

//3.5 프로퍼티 존재 유무 확인 (in 연산자)
let result1 = 'name' in person;
console.log(result1);