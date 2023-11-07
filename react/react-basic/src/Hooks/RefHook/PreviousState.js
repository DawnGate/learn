import React, { useEffect, useRef, useState } from "react";

const usePreviousValue = (currentValue) => {
  const previousRef = useRef();

  useEffect(() => {
    previousRef.current = currentValue;
  }, [currentValue]);

  return previousRef.current;
};

const CounterWithPreviousState = () => {
  const [count, setCount] = useState(0);

  const previousValue = usePreviousValue(count);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase value
      </button>
      <p>
        Counter value: {count}, Previous Value:{previousValue}
      </p>
    </div>
  );
};

export default CounterWithPreviousState;
