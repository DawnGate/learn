import React from "react";

const Button = ({ text }: { text: string }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <button
      style={{
        minHeight: 50,
        minWidth: 64,
        textAlign: "center",
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
