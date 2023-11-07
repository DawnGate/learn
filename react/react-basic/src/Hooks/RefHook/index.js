import React, { useRef, useState } from "react";
import CounterWithPreviousState from "./PreviousState";

const RefHook = () => {
  const ref = useRef();
  const [state, setState] = useState(false);

  const handleClick = () => {
    console.log(ref.current.value);
  };

  return (
    <div>
      <button onClick={handleClick}>show value</button>
      <p>
        This is value: {ref.current?.value}. But, you will not see after
        re-render component by "Change state" button below
      </p>
      <input ref={ref} style={{ display: "block", marginBottom: 4 }} />
      <button
        onClick={() => {
          setState((prev) => !prev);
        }}
      >
        Change state
      </button>
      <p>-------------------------------------</p>
      <p>Previous state</p>
      <CounterWithPreviousState />
    </div>
  );
};

export default RefHook;
