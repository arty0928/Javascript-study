import { useState } from "react";

import React from 'react'

const Bulb = () => {

  const [light, setLight] = useState("OFF");

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{backgroundColor: "orange"}}>{light}</h1>
      ) : (
        <h1 style={{backgroundColor: "gray"}}>{light}</h1>          
      )}
      <button onClick={() => {
        setLight(light === "ON" ? "OFF" : "ON");
      }}>{light === "ON" ? "끄기" :"켜기"}</button>
    </div>
  )
}

export default Bulb;