import React, { useEffect, useLayoutEffect, useState } from "react";

const LayoutEffectHook = () => {
  const [effectValue, setEffectValue] = useState(0);

  const [layoutEffectValue, setLayoutEffectValue] = useState(0);

  useEffect(() => {
    // you see the flash because => it render 0 and after mount 0 -> 59
    setEffectValue(50);

    console.log("It render later");
  }, []);

  // ?? use when need some action with dom, can using with useEffect if not consider too much about first render
  useLayoutEffect(() => {
    // useLayoutEffect fires before browser repaint the screen
    // change to 50 before mount element
    setLayoutEffectValue(50);

    console.log("It render first");
  }, []);

  return (
    <div>
      <p>{effectValue}</p>
      <p>{layoutEffectValue}</p>
    </div>
  );
};

export default LayoutEffectHook;
