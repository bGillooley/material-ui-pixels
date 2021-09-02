import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import reportWebVitals from "./reportWebVitals";
import Moralis from "moralis";

Moralis.initialize("WEjKaFix7RkZQjOC0yFjxPBGBGdPGRObdByNrxgr");

Moralis.serverURL = "https://jxfpymhws19a.moralis.io:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
