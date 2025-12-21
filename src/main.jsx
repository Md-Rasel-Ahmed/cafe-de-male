import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Router from "./Routes/Router.jsx";
import CartProvider from "./Providers/CartProvider.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
