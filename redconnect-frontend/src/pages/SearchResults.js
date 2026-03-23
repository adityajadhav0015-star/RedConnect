import React from "react";
import { useLocation, Link } from "react-router-dom";

function SearchResults() {

const searchBlood = async () => {
  const response = await fetch(
    "https://redconnect-backend.onrender.com/api/blood/search?bloodGroup=${bloodGroup}&location=${location}"
  );

  const data = await response.json();
  setResults(data);
};


  const location = useLocation();
  const { bloodGroup, city } = location.state || {};

  // Dummy blood bank data
  const bloodBanks = [
    { name: "City Hospital", bloodGroups: ["A+", "B+", "O+"], city: "Mumbai", contact: "1234567890" },
    { name: "RedLife Blood Bank", bloodGroups: ["O-", "A+", "AB+"], city: "Mumbai", contact: "9876543210" },
    { name: "HealthCare Blood Bank", bloodGroups: ["B+", "O+"], city: "Pune", contact: "1122334455" },
  ];

  // Filter data based on user selection
  const results = bloodBanks.filter(
    (bank) =>
      bank.city.toLowerCase() === (city || "").toLowerCase() &&
      bank.bloodGroups.includes(bloodGroup)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex flex-col font-sans p-6">

      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-10 text-center rounded-xl shadow-lg mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold flex justify-center items-center gap-4">
          🩸 RedConnect
        </h1>
        <p className="mt-2 text-lg md:text-xl font-light">
          Blood Banks near "{city}" with "{bloodGroup}" Blood
        </p>
      </header>

      {/* Results */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.length > 0 ? (
          results.map((bank, idx) => (
            <div key={idx} className="bg-white/90 p-6 rounded-2xl shadow-lg flex flex-col gap-2 hover:-translate-y-1 transform transition-all">
              <h3 className="text-red-700 text-xl font-bold">{bank.name}</h3>
              <p className="text-gray-700">City: {bank.city}</p>
              <p className="text-gray-700">Available Blood Groups: {bank.bloodGroups.join(", ")}</p>
              <p className="text-gray-700">Contact: {bank.contact}</p>
              <Link
                to="#"
                className="mt-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-2 px-4 rounded-xl shadow hover:shadow-lg text-center"
              >
                Request / Call
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-700 text-lg">
            No blood banks found for "{bloodGroup}" in "{city}".
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-auto text-center py-6 text-gray-600 bg-gray-100 text-sm shadow-inner rounded-xl mt-10">
        &copy; 2026 RedConnect | Life-Saving Blood Finder | All copyrights reserved by
        Aditya Jadhav, Gaurav Gaikwad, Yash Barbaile, Adesh Khose
      </footer>
    </div>
  );
}

export default SearchResults;
