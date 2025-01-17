import React from "react";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // Create a root.
import { AuthProvider } from "./contexts/authContext.js";

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
