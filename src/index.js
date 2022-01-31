import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
// styles
import "./Styles/app.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
