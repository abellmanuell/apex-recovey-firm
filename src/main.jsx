import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Fonts
import "@fontsource/lato";
import "@fontsource/outfit";
import "@fontsource/roboto";
import "@fontsource/outfit/700.css";
import "@fontsource/lato/700.css";
import "@fontsource/outfit/900.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
