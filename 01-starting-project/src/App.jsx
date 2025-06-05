// best way to load the image - import
import reactImg from "./assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// using and outputting dynamic values with {} syntax
function Header() {
  // keep javascript expression and declared with variable separate and use {} JSX
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      {/* this is not best way to load the image */}
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylished atom" /> */}
      {/* this is not best way to load the image */}
      <img src={reactImg} alt="Stylished atom" />
      <h1>React Essentials</h1>
      <p>
        {/* considered as good practice to keep code cleaner */}
        {description} Fundamental React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
