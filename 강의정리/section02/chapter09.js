//5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name: "이정환", hobby: "테니스" },
    { name: "김효빈", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
    return item * 2;
});

console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬 메서드
let arr3 = ["b", "c", "a"];
arr3.sort();

console.log(arr3);

//만약 배열이 숫자로 되어 있으면 제대로 정렬이 안됨
let arr4 = [10, 3, 5, 1];
arr4.sort();
console.log(arr4); //숫자의 대소관계가 아니라 사전순으로 정렬했기 때문

// 오름차순
arr4.sort((a, b) => {
    if (a > b) {
        // b가 a 앞에 와라 -> b,a 배치
        return 1;
    } else if (b > a) {
        // a가 b 앞에 와라 -> a,b 배치
        return -1;
    }
    else {
        // 두 값의 자리를 바꾸지 마라
        return 0;
    }
});
console.log(arr4);

// 내림차순
arr4.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log(arr4);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorte = arr5.toSorted();

console.log(arr5);
console.log(sorte);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "hello"];
const joined = arr6.join("-");
console.log(joined);