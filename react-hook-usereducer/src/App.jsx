import React, { useState } from "react";
import "./App.css";
import { useReducer } from "react";

function App() {
  // use same counter functionality use reducer hook
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
    //return { count: state.count + 1 };
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>{count}</h1> */}
      <h1>{state.count}</h1>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Increased</button> */}
      <button onClick={() => dispatch({ type: "increase" })}>Increased</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decreased</button>
      <br />
      <input
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        type="number"
      />
    </>
  );
}

export default App;
