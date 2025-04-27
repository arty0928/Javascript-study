console.log(1);

// Web APIs 에 아래 setTimeOut과 cb함수인 내부 함수를 함께 전달
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);

