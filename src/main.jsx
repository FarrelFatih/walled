import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import Transfer from "./pages/Transfer.jsx";
import SignOut from "./pages/SignOut.jsx";
import Login from "./pages/Login.jsx";

// const ProtectedRoute = ({ element }) => {
//   const hasData = localStorage.getItem("login");
//   return hasData ? <Navigate to="/dashboard" /> : element;
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<App />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/signout" element={<SignOut />} />
        </Route>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
