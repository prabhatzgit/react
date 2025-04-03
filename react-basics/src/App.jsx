import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  // pass an array to props
  const seatNumbers = [1, 4, 7];
  // pass an object to props
  const person = {
    name: "Prabhat",
    message: "Hello",
    message1: "are you learning react!!! ",
    age: [32, 33, 34, 35],
  };
  // rendering arrays or lists
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  const fruits = [
    { name: "Apple", price: "200" },
    { name: "Orange", price: "100" },
    { name: "Banana", price: "50" },
    { name: "Pomegranete", price: "300" },
  ];
  return (
    <div className="App">
      {/* CASE 3: props in react */}
      {/* <Hello name="Prabhat" message="Hi there" /> */}
      {/* CASE 4 : Destructuring props */}
      {/* <Hello
        name="Hi"
        message=" Prabhat"
        message1=" How are you"
        seatNumber={seatNumbers}
        person={person}
      /> */}

      {/* <Fruits /> */}
      <Fruits fruits={fruits} />
    </div>
  );
}

export default App;
