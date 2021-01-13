import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Game from "./game";
import Images from "./images";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  rootElement
);
