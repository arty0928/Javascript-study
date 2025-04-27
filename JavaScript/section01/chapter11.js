// 함수 선언
function greeting (){
    console.log("하이");
}

console.log("호출 전");
greeting(); 
console.log("호출 후");


let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(20, 30);
console.log(area2);

getArea(120, 200);

// 호이스팅 : 호출되는 코드 아래에 선언해도 미리 메모리에 적재해서 사용 가능
function getArea(width, height){

    // 중첩함수
    function another() {
        console.log("another");
    }

    another();

    let area = width * height;
    return area;
}
