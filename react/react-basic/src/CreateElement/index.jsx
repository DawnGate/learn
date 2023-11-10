import React, { createElement } from "react";

const Component1 = () => {
  return <div>This is component 1</div>;
};

const Component2 = ({ title, style }) => {
  return createElement("h1", { className: "hello", style }, title);
};

const CreateElement = () => {
  return (
    <div>
      <h1>Create element with React</h1>
      <div>Hi</div>
      <Component1 />
      <Component2
        title={"Hi, this is component 2"}
        style={{
          color: "red",
        }}
      />
    </div>
  );
};

export default CreateElement;
