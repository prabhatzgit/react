export default function TabButton({ children, onSelect }) {
  // Advantage of defining thse event handler function inside component function is that thet have access to the component's f props and state

  // function handleSelect() {
  //   console.log("selected");
  // }
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

/*In React projects that props that should in the end receive a function
that will be triggered upon an event, should start with on.
Starting with on here makes it clear
that this prop should be set to a function
that will ultimately be triggered based on some event,
whatever that event may be.
It can be a click on some internal button
as we plan to do it here, but it could also
be some HTTP request that finished, anything you need.
But here the goal is to use this onSelect prop
and therefore the function that should be set as a value*/
