import React from "react";
import ProsComponent from "./Component/PropsComponent";

// to render a React Component inside a Function Component, you define another component and render it as React element with JSX
const HeadLine = () => {
  const headLine = "Functional Component";
  return headLine;
};
const App = () => {
  const greeting = "Greet you to learn Functional Component";
  return (
    <>
      <HeadLine value={greeting} />
      {/* Case1 */}
      {/* <ProsComponent value="Properties value" />; */}
      {/* Case2 */}
      <ProsComponent value="{greeting}" />;
      <MainGoal />
    </>
  );
};

export default App;

// Stateless Function Component: Funnction which receive an input as props and return an output as JSX: (props) => JSX.
// The input, only if available in form of props, shapes the rendered output.
// These kind of components don't manage state and don't have any side-effects

// .jsx is a file extension that's not supported by the browser! It's working because you're working in a React project that supports this special extension.

// Exercise:
// Your task is to create a new MainGoal component which outputs a paragraph of text that describes your main course goal (e.g., "My main goal: Learn React in-depth and from the ground up").

// You'll have to create this new component from scratch and then use it inside the App component's JSX code.

// The finished app could look like this:

export function MainGoal() {
  return "My main goal: Learn React in-depth and from the ground up";
}
