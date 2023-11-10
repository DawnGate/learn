import React from "react";

function Repeat(props) {
  let items = [];

  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }

  return <div>{items}</div>;
}

function FunctionAsChildren() {
  return (
    <div>
      <Repeat numTimes={10}>
        {(index) => <div key={index}>Hello this is {index} in the list</div>}
      </Repeat>
    </div>
  );
}

export default FunctionAsChildren;
