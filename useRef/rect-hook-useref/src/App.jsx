import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  //const [count, setCount] = useState(0); // cause multiple times count because setCount
  // counter using useRef

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  // CASE2
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1> Render count: {count.current}</h1>
    </>
  );
}

export default App;
