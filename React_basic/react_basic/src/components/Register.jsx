import React from 'react';
import { useState } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio :""
    })

    const onChange = (e) => {
        console.log(e.target.value, e.target.name);
        setInput({
            ...input,
            [ e.target.name ]: e.target.value
        })
    }
    return (
        <div>
            <div>
                <input
                    name = "name"
                value={input.name}
                onChange={onChange}
                placeholder={"이름"}
                />
                {input.name}
            </div>
            <div>
                <input
                    name = "birth"
                value={input.birth}    
                type="date"
                onChange={onChange}
                />
                {input.birth}
            </div>

            <div>
                <select name = "country" value={input.coutry} onChange={onChange}>
                    <option>국적</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                </select>
                {input.coutry}
            </div>

            <div>
                <textarea name = "bio" value={input.bio} onChange={onChange} />
                {input.bio}
            </div>
        </div>
    );
};

export default Register;