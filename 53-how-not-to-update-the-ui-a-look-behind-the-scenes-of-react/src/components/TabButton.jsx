export default function TabButton({ children, onSelect }) {
  console.log("TABBUTTON EXECUTING");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
