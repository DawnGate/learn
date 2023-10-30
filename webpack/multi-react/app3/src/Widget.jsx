import React from "react";

const Widget = () => {
  const currentTime = new Date();
  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "green",
        color: "white",
      }}
      data-e2e="APP_3__WIDGET"
    >
      <h2>App 3 Widget</h2>
      <p>Time: {currentTime.toISOString()}</p>
    </div>
  );
};

export default Widget;
