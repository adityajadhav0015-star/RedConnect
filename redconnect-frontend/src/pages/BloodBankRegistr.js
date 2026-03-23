// pages/NewBloodBankRegistration.js
import React, { useState } from "react";

function BloodBankRegistr() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    address: ""
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

      const sendData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        location: formData.city + ", " + formData.address
      };

      const response = await fetch("http://localhost:5000/api/blood/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Blood Bank Registered Successfully ✅");

        setFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          city: "",
          address: ""
        });

        console.log(data);

      } else {
        alert(data.msg || "Something went wrong ❌");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex flex-col font-sans">

      <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 text-center shadow-xl">
        <h1 className="text-5xl font-extrabold flex justify-center gap-3">
          🩸 RedConnect
        </h1>

        <p className="mt-3 text-xl">
          Connecting Lives Through Blood Support
        </p>
      </header>

      <div className="max-w-2xl mx-auto -mt-12 bg-white rounded-3xl shadow-2xl p-12">

        <h2 className="text-3xl text-red-600 font-bold mb-6 text-center">
          🏥 Blood Bank Registration
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Blood Bank Name"
            className="p-3 border rounded-lg"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg"
            required
          />

          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="Phone"
            className="p-3 border rounded-lg"
            required
          />

          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            type="text"
            placeholder="City"
            className="p-3 border rounded-lg"
            required
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            type="text"
            placeholder="Address"
            className="p-3 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          >
            Register Blood Bank
          </button>

        </form>

      </div>

      <footer className="mt-auto text-center py-6 text-gray-600 bg-gray-100">
        © 2026 RedConnect
      </footer>

    </div>
  );
}

export default BloodBankRegistr;