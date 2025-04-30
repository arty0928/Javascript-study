import React from 'react';
import './Main.css';

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (내부에서 if문 for문 안됨)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다
const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true,
    };

    if (user.isLogin) {
        //js와 html을 같이 쓰므로 js의 예약어인 class를 사용X -> 대신 className
        return <div className='logout'>
            로그아웃
        </div>
    } else {
        return <div>로그인</div>
    }
};

export default Main;