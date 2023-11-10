import React from "react";
import { createRoot } from "react-dom/client";

import Hooks from "./Hooks";
import FunctionAsChildren from "./FunctionAsChildren";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Hooks /> */}
    <FunctionAsChildren />
  </React.StrictMode>
);
