import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    //setCount(count + 1);
    //Increase by 4 means keep four times of setCount method with previous value
    setCount((count) => count + 1); // 1
    setCount((count) => count + 1); // 2
    setCount((count) => count + 1); // 3
    setCount((count) => count + 1); // 4 // one time click, count increases 4 times
  };
  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase</button>
      </div>
    </>
  );
}

export default App;
