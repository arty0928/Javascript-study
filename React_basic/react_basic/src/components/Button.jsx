import React from 'react';

const Button = ({children,text, color = "black"}) => {
    
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(text);
        console.log(e);
        // console.log(e.children);
        console.log(e.target.children);
    }
    
    return (
        <button
            // onMouseEnter={onClickButton}
            onClick={onClickButton} style={{ color: color }}>{text} - {color.toUpperCase()}
            {children}
        </button>
    );
};


export default Button;