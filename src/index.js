import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Intro from "./Intro";
import Navbar from "./Navbar";
import {Contact} from "./Contact";
import {Work} from "./Work";
import {About} from "./About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Navbar/>
      <Intro/>
      <About/>
      <Work/>
      <Contact/>
  </React.StrictMode>
);
