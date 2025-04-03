import React, { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  //const newFunction = () => {};

  const newFun = useCallback(() => {}, []);
  return (
    <>
      <Header newFun={newFun} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
    </>
  );
}

export default App;
