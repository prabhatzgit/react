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
    </>
  );
};

export default App;

// Stateless Function Component: Funnction which receive an input as props and return an output as JSX: (props) => JSX.
// The input, only if available in form of props, shapes the rendered output.
// These kind of components don't manage state and don't have any side-effects
