import React from "react";
import ReactDOM from "react-dom";
import ModeProvider from "./providers/mode.provider";

import App from "./App";

ReactDOM.render(
  <ModeProvider>
    <App />
  </ModeProvider>,
  document.querySelector("#root")
);
