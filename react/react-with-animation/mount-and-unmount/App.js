import React, { useEffect, useState } from "react";

// using custom parent for delay animation, with timer
function DelayAnimation({ isShow, children }) {
  const [pendingAnimation, setPendingAnimation] = useState(false);

  useEffect(() => {}, [isShow]);

  return <div className="">{children}</div>;
}

// using hook for response waiting fadeout

const useMountTransition = (isMounted, delayAnimation) => {
  const [pendingAnimation, setPendingAnimation] = useState(false);

  useEffect(() => {
    let timeOut;
    if (!isMounted) {
      setPendingAnimation(true);

      timeOut = setTimeout(() => {
        setPendingAnimation(false);
      }, delayAnimation);
    }

    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, [isMounted, delayAnimation]);

  return pendingAnimation;
};

// custom component with support from web api -> onAnimationEnd

function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  const [show, setShow] = useState(false);

  const pendingAnimation = useMountTransition(isMounted, 2000);

  const toggleButton = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <h1>Welcome to my app</h1>
      <button onClick={toggleButton}>Toggle show button</button>
      <DelayAnimation>
        <MyButton />
      </DelayAnimation>
    </div>
  );
}
