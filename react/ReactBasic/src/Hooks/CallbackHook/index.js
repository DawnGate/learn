import React, { useCallback, useEffect, useState } from "react";

import ExampleClientRect from "./ClientRect";

const Example = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ! when useCallback, you prevent props passing to children change after other state action.
  const demoCallback = useCallback(() => {
    console.log("call: callback");
  }, []);

  useEffect(() => {
    console.log("effect");
    console.log(count);
    console.log(text);
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Click
      </button>
      <p>{count}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
      <Sub demoCallback={demoCallback}>sub with call back</Sub>
      <ExampleClientRect />
    </div>
  );
};

// ! When passing props to children, if props change, the children will re-render, so props must a primitive types, if not using useMemo or useCallback to prevent "re-render"
const Sub = ({ demoCallback, children }) => {
  useEffect(() => {
    demoCallback();
  }, [demoCallback]);
  return <div>{children}</div>;
};

export default Example;
