import reactImg from "../../assets/react-core-concepts.png";
const readDescriptions = ["Fundamental", "Crucial", "Core"];
import "./Header.css";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = readDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React Concepts you will need for almost any app you are
        going to build
      </p>
    </header>
  );
}

export default Header;
