import React from "react";

import { createPortal } from "react-dom";

const ChildComponent1 = () => {
  return (
    <div>
      <h2>This is child 1</h2>
    </div>
  );
};

const ChildComponent2 = () => {
  return (
    <div>
      <h2>This is child 2</h2>
    </div>
  );
};

const ChildComponent3 = () => {
  return (
    <div>
      <h2>This is child 3</h2>
    </div>
  );
};

const CreatePortal = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "2rem",
      }}
    >
      <h1>
        Create portal with react, this render children on different part of
        parent :V
      </h1>
      <ChildComponent1 />
      {createPortal(<ChildComponent2 />, document.body)}
      <ChildComponent3 />
    </div>
  );
};

export default CreatePortal;
