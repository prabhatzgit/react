import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputElement = useRef();

  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = "orange";
  };

  return (
    <>
      <input type="text" ref={inputElement}></input>
      <button onClick={btnClicked}>Click Here</button>
    </>
  );
}

export default App;
