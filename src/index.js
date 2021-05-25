import React from "react";
import ReactDOM from "react-dom";
import ModeProvider from "./providers/mode.provider";

import App from "./App";
import NaviProvider from "./providers/navi.provider";

ReactDOM.render(
  <ModeProvider>
    <NaviProvider>
      <App />
    </NaviProvider>
  </ModeProvider>,
  document.querySelector("#root")
);
