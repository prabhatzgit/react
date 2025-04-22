export default function TabButton({ children, onClick }) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <li>
      {/* add click event listener to this button: the purpose is to show different content below these buttons --> Component, JSX, Props and State in App.JSX when they are clicked 
      In react to create an event:

      */}
      <button onClick={handleClick}>{children}</button>
    </li>

    // In Javascript to create an event:
    // document.querySelector("button").addEventListener("click", () => {

    // })
  );
}
