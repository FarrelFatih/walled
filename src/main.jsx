import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import Transfer from "./pages/Transfer.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<App />} />
          <Route path="/transfer" element={<Transfer />} />
        </Route>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
