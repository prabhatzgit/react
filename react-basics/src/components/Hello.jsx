const name = " Hello const variable declaration";

function displayMessage() {
  return "Wow!";
}

// CASE1:
// function Hello() {
//   return (
//     <h1>
//       Hello from a component!{name}
//       {displayMessage()}
//     </h1>
//   );
// }

// CASE2:
// function Hello() {
//   return (
//     <div>
//       <h1>Hello from a component!{name}</h1>
//       <h2>{displayMessage()}</h2>
//     </div>
//   );
// }

// //CASE 3: props in react
// function Hello(props) {
//   const { message, name } = props;
//   return (
//     <div>
//       {/* <h1>Hello {props.name}</h1> */}
//       {/* to make fully dynamic */}
//       {/* CASE 4: Destructuring Props */}
//       {props.message}
//       {props.name}
//     </div>
//   );
// }

// Case 4: Destructuring of props
// function Hello({ message, name, message1 }) {

//   return (
//     <div>
//       {name}
//       {message}
//       {message1}
//     </div>
//   );
// }

// Case 5: Immutability of Props
// function Hello(props) {
//   props.name = "Ranjan";
//   return (
//     <div>
//       {props.name}
//       {props.message}
//       {props.message1}
//     </div>
//   );
// }

// Case 6: Passing Arrays & Objects To Components Using Props
function Hello({ name, message, message1, seatNumber, person }) {
  return (
    <div>
      {name}
      {message}
      {message1}
      {seatNumber}
      {person.name}
      {person.message}
      {person.message1}
      {person.seatNumber}
    </div>
  );
}

export default Hello;
