import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RequestBlood() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    city: "",
    contact: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {

  e.preventDefault();
  setLoading(true);

  try {

   const res = await fetch("http://localhost:5000/api/bloodbank/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    city: formData.city,
    bloodGroup: formData.bloodGroup
  })
});

    const data = await res.json();

    console.log(data);

    if (data.length === 0) {
      alert("No Blood Bank Found ❌");
    } else {
      navigate("/search-results", { state: data });
    }

  } catch (error) {

    console.error("Error:", error);
    alert("Server Error");

  }

  setLoading(false);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-100 flex flex-col">

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

      {/* Card */}
      <div className="flex justify-center px-4 -mt-10">
        <div className="bg-white/95 backdrop-blur-md w-full max-w-lg p-8 rounded-3xl shadow-2xl">

          <h2 className="text-2xl font-semibold text-red-600 mb-6 text-center">
            🩸 Request Blood
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col">

            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              className="p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
              required
            />

            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
              required
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
              required
            />

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
              required
            />

            <textarea
              name="notes"
              placeholder="Additional Notes (Optional)"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              className="p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              Search Donors
            </button>

          </form>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="w-12 h-12 border-4 border-white border-t-red-600 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto text-center py-6 text-gray-600 text-sm bg-gray-100">
        © 2025 RedConnect | Life-Saving Blood Finder
      </footer>

    </div>
  );
}

export default RequestBlood;