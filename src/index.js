import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";

toast.configure();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
