import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Router>
    <App />
  </Router>
);
 