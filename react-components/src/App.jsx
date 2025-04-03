import React from "react";
import KgButton, { checkSlider } from "./Component/KgButton";

function App() {
  const isSliderChecked = checkSlider();
  return (
    <div>
      <h1>Hello React</h1>;
      <KgButton />
      {isSliderChecked ? (
        <p>Slider is checked</p>
      ) : (
        <p>Slider is not checked</p>
      )}
    </div>
  );
}

export default App;

// functional Component
// Initially stateles
// Can use Hooks for state and effects.
// Simpler and more concise.
// More popular
// Easy to test

// class Component
// Initially stateful
// More complex
// More verbose
// Harder to test
