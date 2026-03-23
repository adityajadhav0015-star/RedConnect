import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex flex-col font-sans">

      {/* Header */}
    
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
      
      {/* Hero / Login Options */}
      <div className="max-w-2xl mx-auto -mt-12 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center animate-slideIn">
        <h2 className="text-4xl md:text-5xl text-red-600 font-bold mb-6 flex items-center gap-3 animate-pulse">
          🔑 Login Options
        </h2>
        <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
          Select your login type to access your account.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <Link
            to="/user-login"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 text-lg"
          >
            👤 User Login
          </Link>
          <Link
            to="/bloodbank-login"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 text-lg"
          >
            🏥 Bloodbank Login
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto text-center py-8 text-gray-600 bg-gray-100 text-sm shadow-inner">
        &copy; 2025 RedConnect | Life-Saving Blood Finder | All copyrights reserved by
        Aditya Jadhav, Friend1, Friend2, Friend3
      </footer>
    </div>
  );
}

export default LoginPage;
