import React from "react";

function EmergencyRequest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex flex-col font-sans">

      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-16 text-center shadow-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold flex justify-center items-center gap-4 drop-shadow-2xl">
          <i className="fas fa-heartbeat text-red-600 animate-bounce"></i> 🩸 RedConnect
        </h1>
        <p className="mt-3 text-xl md:text-2xl font-light tracking-wide">
          Submit Emergency Blood Request
        </p>
      </header>

      {/* Emergency Form */}
      <div className="max-w-2xl mx-auto -mt-12 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl text-red-600 font-bold mb-6 flex items-center gap-3">
          <i className="fas fa-ambulance"></i> Emergency Request
        </h2>
        <form className="w-full flex flex-col gap-6">
          <input type="text" placeholder="Patient Name" className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none" />
          <input type="text" placeholder="City / Location" className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none" />
          <select className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none">
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
          <textarea placeholder="Additional Details (optional)" className="p-4 rounded-xl border border-gray-300 focus:border-red-600 outline-none"></textarea>
          <button type="submit" className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 text-lg">
            Submit Emergency Request
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-auto text-center py-8 text-gray-600 bg-gray-100 text-sm shadow-inner">
        &copy; 2026 RedConnect | Life-Saving Blood Finder | All copyrights reserved by
        Aditya Jadhav, Gaurav Gaikwad, Yash Barbaile, Adesh Khose
      </footer>
    </div>
  );
}

export default EmergencyRequest;
