// Component composition or children prop concept
// Case1 props.children
//export default function TabButton(props) {
// Case2 object destructuring
// export default function TabButton({ children }) {
export default function TabButton({ label }) {
  return (
    <li>
      {/* Case1 */}
      {/* <button>{props.children}</button> */}
      {/* Case 2 */}
      {/* <button>{children}</button> */}
      {/* Case3 */}
      <button>{label}</button>
    </li>
  );
}
