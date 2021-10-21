import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App.jsx";
import "./src/index.css";

const DOMCONTAINER = document.getElementById("app");

const ROOTCOMPONENT = <App />;

ReactDOM.render(ROOTCOMPONENT, DOMCONTAINER);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./src/App.jsx", () => {
    const NextApp = require("./src/App.jsx").default;
    ReactDOM.render(<App />, DOMCONTAINER);
  });
}
