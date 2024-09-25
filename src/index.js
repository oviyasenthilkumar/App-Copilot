import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import { CompareProperty } from "./screens/CompareProperty";
import { DrildownAppcopilot } from "./screens/DrildownAppcopilot";
import SignUpPage from "./screens/SignUp/SignUpPg";
import LoginPage from "./screens/LogIn/LogIn";
import { ResetPasswordPage } from "./screens/ResetPsw";
import { ChangePasswordPage } from "./screens/ChangePsw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CompareProperty />} />
        <Route path="/drilldown" element={<DrildownAppcopilot />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/changePsw" element={<ChangePasswordPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
