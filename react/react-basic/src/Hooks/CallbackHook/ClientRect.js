import React, { useCallback, useState } from "react";

const useClientReact = () => {
  const [rect, setRect] = useState(null);

  // ! with not have useCallback in here, the component will re render multiple time, because the ref will mount and unmount again, so if the function is different, it will call multiple time
  const ref = useCallback((node) => {
    console.log("call it");
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  return [rect, ref];
};

// another example will same
const testRef = () => {
  console.log("test");
};

const Example = () => {
  const [rect, ref] = useClientReact();
  const [count, setCount] = useState(0);
  // when the rect change, this component will re-render and make the ref action again
  console.log(count);

  // function pass to ref
  return (
    <div>
      <h1
        ref={ref}
        style={{
          // will not track this counting make element change
          height: count + 56,
        }}
      >
        Hello, world!
      </h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click
      </button>
      {rect !== null && (
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      )}
    </div>
  );
};

export default Example;
