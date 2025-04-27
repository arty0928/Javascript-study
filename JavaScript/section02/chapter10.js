//1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

// - 대신 공백 . / 모두 가능
let date2 = new Date("1997-01-07"); //특정 시각을 기준으로 date 생성
console.log(date2);

// 시간은 날짜 뒤에 // 
let date3 = new Date("1997-01-07//10:10:10"); //특정 시각을 기준으로 date 생성
let date4 = new Date(1997, 1, 7, 23, 59, 59); // 1997년 1월 7일 23시 59분 59초

//2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지 의미 숫자값

let ts1 = date1.getTime();
console.log(ts1);

let date5 = new Date(ts1); // date1을 기준으로 생성
console.log(date1, date5); // 동일



// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 월은 0부터 시작 -> 4월이면 3으로 나옴 => +1 해줘야 함
console.log(year, month, date, hour, minute, seconds); 


// 4. 시간 수정
date1.setFullYear(2023);
date1.setMonth(2); //월은 0부터 시작하므로 2는 3월을 의미 
date1.setDate(30);

console.log(date1);


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간 제외 날짜만 출력 Thu Mar 30 2023
console.log(
    date1.toLocaleString() //2023. 3. 30. 오후 4:19:39 (현지 시각 표시 방법)
);