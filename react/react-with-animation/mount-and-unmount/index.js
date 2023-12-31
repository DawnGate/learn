import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// !! Can it still using when action with strict mode for animation?

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
