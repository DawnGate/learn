import React, { useMemo, useState } from "react";

const Child1 = (props) => {
  console.log("child 1");
  return <div>Child 1</div>;
};

const Child2 = (props) => {
  console.log("child 2");
  return <div>Child 2</div>;
};

const useFormInput = (initValue = "") => {
  const [value, setValue] = useState(initValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

const MemoHook = () => {
  const a = useFormInput();
  const b = useFormInput();

  // child1 only re-render when a.value change
  const child1 = useMemo(() => <Child1 text={a.value} />, [a.value]);
  // child 2 re-render when any state change
  const child2 = <Child2 text={b.value} />;
  return (
    <>
      <input {...a} />
      <input {...b} />
      {child1}
      {child2}
    </>
  );
};

export default MemoHook;
