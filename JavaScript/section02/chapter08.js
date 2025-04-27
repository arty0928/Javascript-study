// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) { 
    // 1 0 [1,2,3]
    // 2 1 [1,2,3]
    // 3 2 [1 2 3]
    console.log( item, idx, arr);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr);


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
let isInclude1 = arr2.includes(10);
console.log(isInclude1);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);
let index1 = arr3.indexOf(20);

console.log(index);
console.log(index1);


// 4. findIndex
// 모든 요소를 순회하면서, 콜백 함수가 참이 되는
// 특정 요소의 첫번째 인덱스(위치)를 반환하는 메서드
// 만족하지 않으면 -1 반환
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => (item % 2 !== 0)); 
console.log(findedIndex);

// findIndex가 존재하는 이유 ?
// indexOf는 얕은 탐색
// indexOf는 원시 타입이 아니라 객체 타입이 들어있는 배열에서는 탐색이 어려움
let objectArr = [
    { name: "이정환" },
    { name: "홍길동" }, 
];
console.log(objectArr.indexOf({ name: "홍길동" })); // -1

console.log(objectArr.findIndex(
    (item) => item.name === "홍길동"
));


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    { name: "이정환" },
    { name: "홍길동" }, 
];

console.log(arr5.find((item) => item.name === "이정환"));//인덱스가 아니라 해당 객체 자체를 반환
