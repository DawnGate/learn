import React from "react";

// ony import something you need, the shell will cover other
// https://dev.to/florianrappl/css-in-micro-frontends-4jai
import "./main.css";

// 1. First option include all file with your component
// But it make your host component will change
// import "tailwindcss/tailwind.css";

// 2. convert to css-in-js
// using twin.macro,

// 3. using mini-css-extract-plugin, but not what I expected.
// This not good, because the problem like above, the global css effect all element

import styles from "./styles.module.css";

const Widget = () => {
  return (
    <div
      style={{
        margin: "8px",
        borderRadius: "8px",
        backgroundColor: "yellow",
      }}
      className={styles.widget}
      data-e2e="APP_4__WIDGET"
    >
      <h2>This is widget of app 4</h2>
      <h3 className="bg-teal-200 text-red-300">Test with tailwindcss</h3>
    </div>
  );
};

export default Widget;
