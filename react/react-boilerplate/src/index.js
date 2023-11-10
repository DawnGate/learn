import React from "react";
import { createRoot } from "react-dom/client";

import "main.css";

import App from "./app";

const root = createRoot(document.getElementById("app"));

root.render(<App />);
