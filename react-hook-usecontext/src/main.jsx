import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  // provide the context provider
  <ContextProvider>
    <App />
  </ContextProvider>
);
