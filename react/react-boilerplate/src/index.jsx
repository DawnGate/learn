import { createRoot } from "react-dom/client";

import "./assets/css/main.css";
import "./assets/scss/app.scss";

import App from "./app";

const root = createRoot(document.getElementById("app"));

root.render(<App />);
