import { createContext } from "react";
// Creating the App context
export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+1 123456789";
  const name = "GreatStack";
  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
