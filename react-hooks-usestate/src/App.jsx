import "./App.css";
import { useState } from "react";
function App() {
  let color = "Red";

  // add the function here to change the color
  const changeColor = () => {
    color = "Blue";
    console.log(color); // with this approach value is changed in the DOM. But, not updated in UI
    // to solve this issue, use useState hook
  };
  return (
    <>
      {/* Case 1: Create a web page and display some text on the web page and add the button. Using the button, try to change the text */}
      <h1>My favourite color is {color}!</h1>
      <button>Blue</button>
      {/* Case 2: When to click on button Blue, the color value should change to Blue */}
      <button onClick={changeColor}>Blue</button>
    </>
  );
}

export default App;
