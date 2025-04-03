import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [name, setName] = useState(
    //localStorage.getItem("username") ? localStorage.getItem("username") : ""
    localStorage.getItem(key) ? localStorage.getItem("username") : initialValue
  );
  useEffect(() => {
    localStorage.setItem(key, name);
  }, [name, key]);
  return [name, setName];
};

export default useLocalStorage;
