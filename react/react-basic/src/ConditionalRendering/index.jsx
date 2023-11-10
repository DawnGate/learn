import React from "react";

const ConditionalRendering = () => {
  return (
    <>
      <h1>Conditional rendering</h1>
      <div>{true}</div>
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{[]}</div>
      <div>{String(true)}</div>
      <div>{String(false)}</div>
      <div>{String(null)}</div>
      <div>{String(undefined)}</div>
      <div>{String([])}</div>
      <div>{true && null}</div>
      <div>{false && null}</div>
      <div>{true && undefined}</div>
      <div>{false && undefined}</div>
      <div>{true && []}</div>
      <div>{false && []}</div>
      <div>{true && <h1>true</h1>}</div>
      <div>{false && <h1>false</h1>}</div>
      <div>{undefined && <h1>undefined</h1>}</div>
      <div>{null && <h1>null</h1>}</div>
      <div>{0 && <h1>Show the zero</h1>}</div>
      <div>{Boolean(0) && <h1>Show the zero with Boolean(0)</h1>}</div>
      <div>
        {0 ? 1 : 2} <span>Can you guess the value of 0 ?? 1 + 2</span>
      </div>
      <div>{0 ?? 1 + 2}</div>
      <div>{null ?? 1 + 2}</div>
      <div>{0 || 1 + 2}</div>
      <div>
        {"" ?? 1 + 2} <span>This is</span>
      </div>
      <div>{"" || 1 + 2}</div>
    </>
  );
};

export default ConditionalRendering;
