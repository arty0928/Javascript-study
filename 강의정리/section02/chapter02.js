// AND, OR 에서 앞에 값만으로 연산 결과를 알 수 있다면 그 뒤 연산을 하지 않음

function returnFalse() {
    console.log("1");
    return undefined;
}

function returnTrue() {
    console.log("2");
    return 10;
}

console.log(returnFalse() || returnTrue()); // 10
console.log(returnTrue() && returnFalse()); // undefined

function printName(person) {
    const name = person && person.name; // person이 undefined라면 바로 undefined 그대로 출력, 있다면 person.name이 출력
    console.log(name || "person의 값이 없음")
}

printName(); // name = undefined, "person의 값이 없음" : Truty 값
printName({ name: "이정현" }); // name = "이정현"
// Truty || Truty값이면 가장 먼저인 Truty 값 반환
// Truty && Truty값이면 뒤에 있는 Truty 값 반환
