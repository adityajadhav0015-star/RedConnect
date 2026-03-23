import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserLogin from "./pages/UserLogin";
import BloodBankLogin from "./pages/BloodBankLogin";
import NewUserRegistr from "./pages/NewUserRegistr";
import BloodBankRegistr from "./pages/BloodBankRegistr";
import RequestBlood from "./pages/RequestBlood";
import Dashboard from "./pages/Dashboard";
import SearchResults from "./pages/SearchResults";
import BloodBankProfile from "./pages/BloodBankProfile";
import EmergencyRequest from "./pages/EmergencyRequest";


// 🔐 Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Login Selection */}
        <Route path="/login" element={<Login />} />

        {/* Register Selection */}
        <Route path="/register" element={<Register />} />

        {/* User Login */}
        <Route path="/user-login" element={<UserLogin />} />

        {/* BloodBank Login */}
        <Route path="/bloodbank-login" element={<BloodBankLogin />} />

        {/* User Registration */}
        <Route path="/user-registration" element={<NewUserRegistr />} />

        {/* BloodBank Registration */}
        <Route path="/bloodbank-registration" element={<BloodBankRegistr />} />

        {/* 🔐 Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 🔐 Protected Request Blood Page */}
        <Route
          path="/request-blood"
          element={
            <ProtectedRoute>
              <RequestBlood />
            </ProtectedRoute>
          }
        />

        {/* Blood Search Results */}
        <Route path="/search-results" element={<SearchResults />} />

        {/* Blood Bank Profile */}
        <Route path="/bloodbank-profile" element={<BloodBankProfile />} />

        {/* Emergency Request */}
        <Route path="/emergency-request" element={<EmergencyRequest />} />

      </Routes>
    </Router>
  );
}

export default App;