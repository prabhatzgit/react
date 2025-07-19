import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Prabhat");

  const changeName = () => {
    setName("Prabhat Ranjan Mahanty");
    //console.log(name);
  };

  return (
    <>
      <div>
        <h1>My name is {name}</h1>
        <button onClick={changeName}>Click</button>
      </div>
    </>
  );
}

export default App;
