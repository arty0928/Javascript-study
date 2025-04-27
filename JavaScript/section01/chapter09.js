// 1. if 조건문 (if문)
let num = 9;

if(num >=10){
    console.log("num은 10 이상입니다");
    console.log("조건이 참 입니다.");
}
else if (num  >= 5){
    console.log("num은 5 이상입니다.");
}
else if (num >= 3){

}
else{
    console.log("조건이 거짓입니다.");
}


// 2. Switch 문
// -> if문과 기능자체 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적

//break를 안 넣으면 case문에 한번 들어가면 그 아래 있는 case를 모두 실행.

let animal ="cat";
switch(animal){
    case "cat":{
        console.log("cat");
        break;
    }
    case "dog":{
        console.log("dog");
        break;
    }
    default:{
        console.log("그런 동물을 전 모릅니다.");
        break;
    }

}