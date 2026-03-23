import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BloodBankProfile() {

  const navigate = useNavigate();

  const [stock, setStock] = useState({
    "A+": 0,
    "A-": 0,
    "B+": 0,
    "B-": 0,
    "O+": 0,
    "O-": 0,
    "AB+": 0,
    "AB-": 0
  });

  const handleChange = (e) => {
    setStock({
      ...stock,
      [e.target.name]: e.target.value
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const updateStock = () => {
    alert("Stock Update Feature Coming Soon 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-100 flex flex-col">

      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-14 text-center shadow-xl">
        <h1 className="text-5xl font-extrabold">🏥 Blood Bank Dashboard</h1>
        <p className="mt-2 text-lg font-light">
          Manage Blood Stock & Help Save Lives
        </p>
      </header>

      {/* Profile Card */}
      <div className="max-w-5xl mx-auto mt-10 bg-white p-10 rounded-3xl shadow-2xl">

        <h2 className="text-3xl font-bold text-red-600 mb-6">
          Blood Bank Profile ❤️
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-10 text-gray-700">
          <p><b>Status:</b> Active</p>
          <p><b>Service:</b> Blood Supply</p>
          <p><b>Platform:</b> RedConnect</p>
          <p><b>Availability:</b> 24/7</p>
        </div>

        {/* Blood Stock Section */}
        <h3 className="text-2xl font-semibold text-red-600 mb-6">
          🩸 Blood Stock
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {Object.keys(stock).map((group) => (
            <div key={group} className="flex flex-col">
              <label className="font-semibold mb-1">{group}</label>
              <input
                type="number"
                name={group}
                value={stock[group]}
                onChange={handleChange}
                className="p-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
          ))}

        </div>

        {/* Update Button */}
        <button
          onClick={updateStock}
          className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition"
        >
          Update Blood Stock
        </button>

        {/* Emergency Section */}
        <div className="mt-10 bg-red-50 p-6 rounded-xl border border-red-200">
          <h3 className="text-xl font-semibold text-red-600 mb-2">
            🚨 Emergency Requests
          </h3>
          <p className="text-gray-700">
            Emergency blood requests from patients will appear here.
          </p>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-8 bg-gray-800 text-white py-3 px-8 rounded-xl hover:bg-black transition"
        >
          Logout
        </button>

      </div>

      {/* Footer */}
      <footer className="mt-auto text-center py-6 text-gray-600 text-sm bg-gray-100">
        © 2026 RedConnect | Life-Saving Blood Finder
      </footer>

    </div>
  );
}

export default BloodBankProfile;