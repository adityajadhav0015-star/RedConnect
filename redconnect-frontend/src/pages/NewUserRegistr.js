import React, { useState } from "react";
import API from "../Api/api";

function NewUserRegistr() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bloodGroup: "",  // added
    location: ""     // added
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/register", formData); // backend route
      alert("User Registered Successfully ✅");
      console.log(res.data);
    } catch (err) {
      console.error("Registration Error:", err.response?.data || err);
      alert(err.response?.data?.message || "Registration Failed ❌");
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
      
      <div className="max-w-2xl mx-auto -mt-12 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center">
        <h2 className="text-4xl text-red-600 font-bold mb-6 flex items-center gap-3">
          <i className="fas fa-user-plus"></i> New User Registration
        </h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">

          <input name="name" onChange={handleChange} type="text" placeholder="Full Name" className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none" />

          <input name="email" onChange={handleChange} type="email" placeholder="Email" className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none" />

          <input name="password" onChange={handleChange} type="password" placeholder="Password" className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none" />

          <input name="phone" onChange={handleChange} type="text" placeholder="Phone Number" className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none" />

          {/* Blood Group field */}
          <select name="bloodGroup" onChange={handleChange} className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none">
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          {/* Location field */}
          <input name="location" onChange={handleChange} type="text" placeholder="City / Location" className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none" />

          <button type="submit" className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 text-lg">
            Register
          </button>

        </form>
      </div>
    </div>
  );
}

export default NewUserRegistr;
