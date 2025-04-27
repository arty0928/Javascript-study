/*
    [스코프]
    - 전역 (전체 영역) 스코프 vs 지역(특정 영역) 스코프
*/

let a = 1; //전역 스코프
function funA() {
    let b = 2;      // 지역
    console.log(a);
}

funA();
// console.log(b);

if (true) {
    let c = 1;
}
// console.log(c);

for (let i = 0; i < 10; i++) {
    let d = 1;
}

// console.log(i);