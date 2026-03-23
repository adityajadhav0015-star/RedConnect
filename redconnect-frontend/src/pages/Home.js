import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../Api/api";

function Home() {

  useEffect(() => {
    API.get("/")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

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

      {/* Hero Section */}
      <div className="max-w-2xl mx-auto -mt-16 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center animate-slideIn">
        <h2 className="text-4xl text-red-600 font-bold mb-4 flex items-center gap-3 animate-pulse">
          <i className="fas fa-heart"></i> Welcome to RedConnect
        </h2>

        <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
          Please login or register to access life-saving blood services.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <Link
            to="/login"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 text-lg"
          >
            🔑 Login
          </Link>

          <Link
            to="/register"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 text-lg"
          >
            📝 Register
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 px-4">
        {[
          { icon: "fas fa-users", number: "0", title: "Lives Saved" },
          { icon: "fas fa-hospital", number: "0", title: "Blood Banks Connected" },
          { icon: "fas fa-clock", number: "24/7", title: "Emergency Support" },
          { icon: "fas fa-globe", number: "0", title: "Cities Covered" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white/90 p-8 rounded-2xl shadow-xl text-center transform hover:-translate-y-3 hover:shadow-2xl transition-transform duration-300"
          >
            <i className={`${stat.icon} text-4xl text-red-600 mb-4`}></i>
            <h3 className="text-red-700 font-bold text-2xl mb-1">{stat.number}</h3>
            <p className="text-gray-700 font-medium">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Updates Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-4 mb-16">
        {[
          {
            title: "New Blood Donation Camp",
            desc: "City Hospital hosted a blood donation camp with 200+ volunteers and donors."
          },
          {
            title: "Milestone Achieved",
            desc: "RedConnect successfully connected 500+ patients with donors across the country."
          },
          {
            title: "Partnerships",
            desc: "Collaborated with top blood banks to ensure timely blood availability for emergencies."
          }
        ].map((update, idx) => (
          <div
            key={idx}
            className="bg-white/90 p-8 rounded-2xl shadow-lg relative overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500"></div>
            <h3 className="text-red-700 font-bold text-xl mt-2 mb-2">{update.title}</h3>
            <p className="text-gray-700">{update.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-auto text-center py-8 text-gray-600 bg-gray-100 text-sm shadow-inner">
        © 2025 RedConnect | Life-Saving Blood Finder | All copyrights reserved by
        Aditya Jadhav & Team
      </footer>

    </div>
  );
}

export default Home;
