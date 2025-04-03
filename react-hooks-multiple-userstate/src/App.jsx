import { React } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("Prabhat");
  // const [profession, setProfession] = useState("software dveloper");
  // const [number, setNumber] = useState("7.7");
  // const [skill, setSkill] = useState("Java");

  // alternative approach
  const [resource, setResource] = useState({
    name: "Prabhat",
    profession: "Software Developer",
    yearOfExp: "7.7",
    skill: "Java",
  });

  const changeSkill = () => {
    setResource((prev) => {
      return { ...prev, skill: "React" };
    });
  };

  return (
    <>
      <div>
        <h1>
          {/* My Name is {name} & I am a {profession} with {number} years of
          experience in {skill}. */}
          <h1>
            My Name is {resource.name} & I am a {resource.profession} with{" "}
            {resource.yearOfExp} years of experience in {resource.skill}.
            <button onClick={changeSkill}>Click</button>
          </h1>
        </h1>
      </div>
    </>
  );
}

export default App;
