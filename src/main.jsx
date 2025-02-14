import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey="PUBLIISHABLE_KEY">
    <App />
  </ClerkProvider>
);
