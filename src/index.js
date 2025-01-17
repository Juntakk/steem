import React from "react";
import App from "./App.jsx";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // Create a root.
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.js";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
