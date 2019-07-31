import React from "react"; // ES Modules
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// JSX, looks like HTML, but a couple differences
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
