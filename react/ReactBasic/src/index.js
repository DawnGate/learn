import React from "react";
import { createRoot } from "react-dom/client";

import Hooks from "./Hooks";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Hooks />
  </React.StrictMode>
);
