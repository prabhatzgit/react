import React from "react";

// Case 1
// const ProsComponent = (props) => {
//   return <h1>{props.value}</h1>;
// };

// Case 2
const ProsComponent = ({ value }) => <h1>{value}</h1>;

// Props are the React Function Component's parameters.
// When rendering a component (e.g. ProsComponent in App component), you can pass props as HTML attributes to the component
// Then in the Function Component the props object is available as argument in the function signature.

export default ProsComponent;
