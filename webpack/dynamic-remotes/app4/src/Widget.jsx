import React from "react";
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
    >
      <h2>This is widget of app 4</h2>
    </div>
  );
};

export default Widget;
