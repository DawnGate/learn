import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log(process.env.VERSION);
  }, []);

  return (
    <div>
      <h1>This is app V2</h1>
    </div>
  );
};

export default App;
