function add(a, b, callback) {
    
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, (3000));
}

//callback 함수의 결과값을 value로 받아서 add함수 외부에서도 해당 결과값 사용 가능
add(1, 2, (value) => {
    console.log(value);
});



// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    // 떡볶이
    console.log(food); 

    // 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 
    // 식은 떡볶이
    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        // 냉동된 식은 떡볶이
        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});