import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutUs from "./AboutUs.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Fonts
import "@fontsource/lato";
import "@fontsource/outfit";
import "@fontsource/roboto";
import "@fontsource/outfit/700.css";
import "@fontsource/lato/700.css";
import "@fontsource/outfit/900.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);
