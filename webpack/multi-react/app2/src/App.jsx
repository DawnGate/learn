import React from "react";

import Widget from "./Widget";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1>App 2 Host</h1>
      <h2>Remote</h2>
      <Widget />
      <Button text="Hello" />
    </div>
  );
};

export default App;
