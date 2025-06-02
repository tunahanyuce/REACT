import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");

  return(
  <RecipeContext.Provider
    value={{
      username,
      setUsername,
      password,
      setPassword
    }}
  >
    {children}
  </RecipeContext.Provider>)
};

export default RecipeProvider;
