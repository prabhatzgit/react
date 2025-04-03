import React from "react";

// Case 1:
// const App = () => {
//   return <p>Hello React Elements in Depth</p>;
// };

// Whenever a React component gets called (rendering),
// React calls its React.createElement() method internally which returns the following object:

// {
//     $$typeof:    Symbol(react.transitional.element)
//     "type": "p",
//     "key": null,
//     "props": {
//         "children": "Hello React Elements in Depth"
//     },
//     "_owner": null,
//     "_store": {}
// }

// Focus on the type and props properties of this object.

// type: p --> represents the actual HTML element
// props: { children: "Hello React Elements in Depth" } --> contains the children of the element
// props are all HTML attributes (plus the inner content, read: children)
// which are passed to this HTML element.

// When looking at the paragraph HTML element from above,
// you can see that no attributes are passed to it.
// However, React treats children as pseudo HTML attribute whereas
// children represents everything that's rendered between the HTML tag.
// This fact becomes clearer when adding an attribute to the paragraph HTML element

// Case 2:
// const App = () => {
//   return <p className="ReactElements">Hello React Elements in Depth</p>;
// };

// {
//     "type": "p",
//     "key": null,
//     "props": {
//         "className": "ReactElements",
//         "children": "Hello React Elements in Depth"
//     },
//     "_owner": null,
//     "_store": {}
// }

// React translates all HTML attributes to React props in addition to
// adding the inner content as children property.

// Case 3:

const App = () => {
  return React.createElement(
    "p",
    { className: "ReactElements" },
    "Hello React"
  );
};

console.log(App());
export default App;

// React's createElement() method is called internally.
// Therefore we could use it as replacement for the returned JSX.
// React's createElement method takes a type, props, and children as arguments.
// We provide the HTML tag 'p' as first argument,
// the props as an object with the className as second argument,
// and the children as third argument
