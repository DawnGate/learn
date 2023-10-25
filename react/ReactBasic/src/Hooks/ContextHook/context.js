import React, { useContext, createContext } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("Hook must inside context");
  }

  return themeContext;
};

export const AuthContext = createContext();

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("Hook must inside context");
  }

  return authContext;
};
