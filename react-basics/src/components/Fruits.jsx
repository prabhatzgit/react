// export default function Fruits({ fruits }) {
//   //   return <div>{fruits}</div>;
//   return (
//     <div>
//       <ul>
//         {fruits.map((fruit) => (
//           <li key={fruit}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function Fruits({ fruits }) {
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {" "}
            {fruit.name} {fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
