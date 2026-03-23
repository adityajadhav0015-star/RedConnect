import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Api/api";

function BloodBankLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/bloodbank/login", formData); 

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "bloodbank");

      alert("BloodBank Login Successful ✅");

      // ✅ Correct redirect
      navigate("/bloodbank-profile");

    } catch (err) {
      console.error(err);
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex flex-col font-sans">
      
     {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 text-center shadow-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold flex justify-center items-center gap-4 drop-shadow-2xl animate-fadeIn">
          <i className="fas fa-droplet text-white animate-bounce"></i>
          RedConnect
        </h1>

        <p className="mt-3 text-xl md:text-2xl font-light tracking-wide animate-fadeIn delay-200">
          Connecting Lives Through Blood Support
        </p>
      </header>
      
      <div className="max-w-md mx-auto -mt-12 bg-white rounded-3xl shadow-2xl p-10 text-center">
        <h2 className="text-4xl text-red-600 font-bold mb-6">
          🏥 BloodBank Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="p-4 rounded-xl border"
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            className="p-4 rounded-xl border"
            required
          />

          <button
            type="submit"
            className="bg-red-600 text-white py-4 rounded-2xl"
          >
            🔓 Login
          </button>

        </form>

        <p className="mt-6">
          New BloodBank?{" "}
          <Link to="/bloodbank-registration" className="text-red-600 font-semibold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default BloodBankLogin;