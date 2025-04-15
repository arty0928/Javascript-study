// 1. 콜백함수
function main(value) {
    console.log(1);
    value();
    console.log("end");
}

function sub() {
    console.log('sub');
}

main(sub);

// 화살표 함수 형태의 콜백함수
main(() => {
    console.log('sub');
});

// 2. 콜백함수의 활용
// function repeat(count) {
//     for (let i = 1; i <= count; i++){
//         console.log(i);
//     }
// }

// function repeatDouble(count) {
//     for (let i = 1; i <= count; i++){
//         console.log(i * 2);
//     }
// }

// 구조가 비슷한 코드를 여러 개 생성하면 비효율적 => 콜백 함수 활용
function repeat(count, callback) {
    for (let i = 1; i <= count; i++){
        callback(i);
    }
}

repeat(5, function (i) {
    console.log(i);
});

// 화살표 함수로 표현
repeat(5, (i) => {
    console.log(i * 2);
})
