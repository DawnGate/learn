import React, { useEffect } from "react";
import useDetectVersion from "./useDetectVersion";

const App = () => {
  const contentDetect = useDetectVersion();

  return (
    <div>
      <h1>This is app V2</h1>
      {contentDetect}
    </div>
  );
};

export default App;
