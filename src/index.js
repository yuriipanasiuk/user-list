import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

const devMode = process.env.NODE_ENV === "development";
if (devMode && module && module.hot) {
  module.hot.accept();
}
