import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const products = [
    { prductName: "Apple", price: 200 },
    { prductName: "Orange", price: 100 },
    { prductName: "Banana", price: 50 },
    { productName: "Mango", price: 300 },
    { productName: "Grapes", price: 100 },
  ];
  const [cart, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
}

let handleProdChange = (e) => {
  let pName = e.target.options[e.target.selectedIndex].text;
  let price = e.target.value;
  let tCart = [...cart];
  let obj = { pName, price };
  let tPrice = parseInt(price);
  tPrice = total + tPrice;
  tCart.push(obj);

  setProducts(tCart);
  setTotal(tPrice);
};

export default App;
