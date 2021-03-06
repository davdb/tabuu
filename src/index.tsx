import React from "react";
import ReactDOM from "react-dom";

import App from "pages/_App";

import { GlobalStyle } from "theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
