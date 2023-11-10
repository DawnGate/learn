import React from "react";
import { createRoot } from "react-dom/client";

import Hooks from "./Hooks";
import FunctionAsChildren from "./FunctionAsChildren";
import ConditionalRendering from "./ConditionalRendering";
import CreateElement from "./CreateElement";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Hooks /> */}
    {/* <FunctionAsChildren /> */}
    {/* <ConditionalRendering /> */}
    <CreateElement />
  </React.StrictMode>
);
