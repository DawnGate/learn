import React, { useEffect, useState } from "react";

// using custom parent for delay animation, with timer
function DelayAnimation({ isShow, children }) {
  const [pendingAnimation, setPendingAnimation] = useState(false);

  const handleEndAnimation = () => {
    if (!isShow) {
      setPendingAnimation(false);
    }
  };

  useEffect(() => {
    if (isShow) {
      setPendingAnimation(true);
    }
  }, [isShow]);

  return (
    pendingAnimation && (
      <div
        className={isShow ? "fadein" : "fadeout"}
        onAnimationEnd={handleEndAnimation}
      >
        {children}
      </div>
    )
  );
}

// using hook for response waiting fadeout

const useMountTransition = (isMounted, delayAnimation) => {
  // the delay animation maybe the problem, this will equal with animation action of the children
  const [pendingAnimation, setPendingAnimation] = useState(false);

  useEffect(() => {
    let timeOut;
    if (isMounted) {
      setPendingAnimation(true);
    } else if (!isMounted) {
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

function MyButton({ className, style }) {
  return (
    <button className={className} style={style}>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  const [show, setShow] = useState(false);

  const timeAnimation = 2000;
  const pendingAnimation = useMountTransition(show, timeAnimation);

  const toggleButton = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <h1>Welcome to my app</h1>
      <button onClick={toggleButton}>Toggle show button</button>
      <div>
        <h1>Using hook with pending animation</h1>

        {(show || pendingAnimation) && (
          <MyButton
            className={show ? "fadein" : pendingAnimation ? "fadeout" : null}
            style={{
              animationDuration: `${timeAnimation}ms`,
            }}
          />
        )}
      </div>
      <div>
        <h1>Delay animation component</h1>
        <DelayAnimation isShow={show}>
          <MyButton />
        </DelayAnimation>
      </div>
    </div>
  );
}
