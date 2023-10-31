import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      style={{
        minHeight: 50,
        minWidth: 64,
        textAlign: "center",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
