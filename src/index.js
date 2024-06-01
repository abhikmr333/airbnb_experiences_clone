import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.js";
import "./style.css";

const rootNode = document.querySelector("#root");
const root = createRoot(rootNode);

root.render(<App />);
