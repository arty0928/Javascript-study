// promise가 관리하는 비동기 작업을 성공 상태로 변경 : resolve, 
// 실패 상태 : reject
const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    // executor 

    
    setTimeout(() => {
        console.log("HI");
        // resolve("안녕"); //resolve가 되면 PromiseResult를 "안녕"
        reject("왜 실패...");
    }, 2000);
    
});

setTimeout(() => {
    console.log(promise);
}, 3000);


//9:12초