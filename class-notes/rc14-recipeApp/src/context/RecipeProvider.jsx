import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");
  const [darkMode,setDarkMode]=useState(false)
  const toggleDarkMode=()=>setDarkMode((prev)=>!prev)

  return(
  <RecipeContext.Provider
    value={{
      username,
      setUsername,
      password,
      setPassword
      darkMode,
      toggleDarkMode
    }}
  >
    {children}
  </RecipeContext.Provider>)
};

export default RecipeProvider;
