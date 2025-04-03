import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // CASE1: useEffect executes multiple times
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 3000);
  // });

  // CASE2: empty [] used to which executes callback function only one time when the components get loaded
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  }, []);

  // CASE3:
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  }, [count]);
  return (
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  );
}

export default App;
