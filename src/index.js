import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./scss/index.scss";

//DOM modifications
// const menuLinks = document.querySelectorAll("nav__link");

// menuLinks.addEventListener(
//   "click",
//   () => (menuLinks.classList = "nav__link selected")
// );

ReactDOM.render(<App />, document.querySelector("#root"));
