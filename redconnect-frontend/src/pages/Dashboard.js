import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex flex-col font-sans">

      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16 text-center shadow-xl">
        <h1 className="text-5xl font-extrabold">RedConnect</h1>
      </header>

      <div className="max-w-2xl mx-auto -mt-12 bg-white rounded-3xl shadow-2xl p-12 text-center space-y-6">
        <h2 className="text-3xl text-red-600 font-bold">Welcome to Dashboard 💉</h2>

        <button
          onClick={() => navigate("/request-blood")}
          className="bg-red-600 text-white py-4 rounded-2xl w-full"
        >
          🔍 Request Blood
        </button>

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className="bg-gray-700 text-white py-4 rounded-2xl w-full"
        >
          🚪 Logout
        </button>
      </div>

    </div>
  );
}

export default Dashboard;