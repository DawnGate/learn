import React, { useState } from "react";

import { AuthContext, ThemeContext, useAuth, useTheme } from "./context";

const Page1 = () => {
  const { theme } = useTheme();
  const { setAuth } = useAuth();

  const handleChangeAuth = (e) => {
    setAuth(e.target.value);
  };

  return (
    <div
      style={{
        height: 200,
        background: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
      }}
    >
      <p>Page 1</p>
      <input onChange={handleChangeAuth} />
    </div>
  );
};

const Page2 = () => {
  const { theme, setTheme } = useTheme();

  const { auth } = useAuth();

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <div
        style={{
          height: 200,
          background: theme === "light" ? "black" : "white",
          color: theme === "light" ? "white" : "black",
        }}
      >
        <p>Page 2</p>
      </div>
      <button onClick={handleToggleTheme}>Toggle theme</button>
      <p>{auth}</p>
    </div>
  );
};

const ContextHook = () => {
  const [theme, setTheme] = useState("light");
  const [auth, setAuth] = useState("Toggle");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Page1 />
        <Page2 />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ContextHook;
