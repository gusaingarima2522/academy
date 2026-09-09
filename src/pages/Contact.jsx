import React from "react";
import contactBanner from "../assets/contactBanner.jpg";

const Contact = () => {
  return (
    <div className="w-full">

      {/* ================= BANNER ================= */}
      <div className="w-full">
        <img
          src={contactBanner}
          alt="Contact Us"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="bg-gray-100 px-4 py-12">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ================= DETAILS CARD ================= */}
          <div className="bg-white rounded-xl rounded-lg shadow-lg p-6 md:p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5">

              {/* Phone */}
              <div className="w-auto h-auto border rounded-lg shadow-lg">
                <h3 className=" font-semibold text-gray-800">
                  ☎ Phone
                </h3>
                <p className="text-gray-600 mt-1">
                  98917 75177
                </p>
              </div>

              {/* Email */}
              <div className="w-auto h-auto border rounded-lg shadow-lg">
                <h3 className=" font-semibold text-gray-800">
                  ✉ Email
                </h3>
                <p className="text-gray-600 mt-1">
                  worldwiseindia@gmail.com
                </p>
              </div>

              {/* Address */}
              <div className="w-auto h-auto border rounded-lg shadow-lg">
                <h3 className=" font-semibold text-gray-800">
                  📍 Address
                </h3>
                <p className="text-gray-600 mt-1">
                  World Wise Education
                  <br />
                  New Delhi, India
                </p>
              </div>

              {/* Timing */}
              <div className="w-auto h-auto border  rounded-lg shadow-lg">
                <h3 className=" font-semibold text-gray-800">
                  🕒 Working Hours
                </h3>
                <p className="text-gray-600 mt-1">
                  Monday - Saturday
                  <br />
                  9:00 AM - 7:00 PM
                </p>
              </div>

            </div>
          </div>


          {/* ================= CONTACT FORM ================= */}
          <div className="bg-white rounded-xl rounded-lg shadow-lg p-6 md:p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>

            <form>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;