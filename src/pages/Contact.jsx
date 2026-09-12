import React from "react";
import CONTACT from "../assets/CONTACT.png";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ================= BANNER ================= */}
      <section className="w-full px-3 sm:px-5 md:px-8 lg:px-10 py-3 sm:py-5 md:py-8">
        <img
          src={CONTACT}
          alt="Contact Us"
          className="w-full h-auto object-cover rounded-lg block"
        />
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-gray-100 px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* ================= DETAILS CARD ================= */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6">
              Get In Touch
            </h2>

            <div className="space-y-4 sm:space-y-5">

              {/* Phone */}
              <div
                className="
                  min-h-[130px]
                  p-5
                  bg-yellow-100
                  border border-yellow-200
                  rounded-lg
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3">
                  <img
                    src="/icons/phonecall.png"
                    alt="Phone"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-gray-700 text-sm sm:text-base">
                  98917 75177
                </p>

                <p className="text-gray-700 text-sm sm:text-base">
                  01121 980242
                </p>
              </div>


              {/* Email */}
              <div
                className="
                  min-h-[130px]
                  p-5
                  bg-yellow-100
                  border border-yellow-200
                  rounded-lg
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3">
                  <img
                    src="/icons/email.png"
                    alt="Email"
                    className="w-full h-full object-contain"
                  />
                </div>

                <a
                  href="mailto:worldwiseindia@gmail.com"
                  className="
                    text-sm sm:text-base
                    text-gray-700
                    hover:text-blue-600
                    transition
                    break-all
                    no-underline
                  "
                >
                  worldwiseindia@gmail.com
                </a>
              </div>


              {/* Address */}
              <div
                className="
                  min-h-[160px]
                  p-5
                  bg-yellow-100
                  border border-yellow-200
                  rounded-lg
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3">
                  <img
                    src="/icons/pin.png"
                    alt="Location"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-6">
                  G-93, Second Floor, Ramphal Chowk,
                  <br />
                  Palam Extension, Dwarka,
                  <br />
                  New Delhi - 110077
                  <br />
                  New Delhi, India
                </p>
              </div>


              {/* Timing */}
              <div
                className="
                  min-h-[120px]
                  p-3
                  bg-yellow-100
                  border border-yellow-200
                  rounded-lg
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3">
                  <img
                    src="/icons/clock.png"
                    alt="Working hours"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-6">
                  Monday - Saturday
                  <br />
                  10:30 AM - 6:30 PM
                </p>
              </div>

            </div>
          </div>


          {/* ================= CONTACT FORM ================= */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6">
              Contact Us
            </h2>

            <form className="w-full">

              {/* Heading */}
              <div className="bg-red-900 rounded-lg px-4 py-5 sm:py-6 mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
                  We're Here to Help
                </h2>
              </div>


              {/* Full Name */}
              <div className="mb-4 sm:mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="
                    w-full
                    px-4 py-3
                    bg-gray-50
                    text-gray-700
                    border border-gray-200
                    rounded-md
                    outline-none
                    focus:border-yellow-400
                    focus:ring-2 focus:ring-yellow-200
                    transition-all duration-300
                  "
                />
              </div>


              {/* Email */}
              <div className="mb-4 sm:mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="
                    w-full
                    px-4 py-3
                    bg-gray-50
                    text-gray-700
                    border border-gray-200
                    rounded-md
                    outline-none
                    focus:border-yellow-400
                    focus:ring-2 focus:ring-yellow-200
                    transition-all duration-300
                  "
                />
              </div>


              {/* Phone */}
              <div className="mb-4 sm:mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="
                    w-full
                    px-4 py-3
                    bg-gray-50
                    text-gray-700
                    border border-gray-200
                    rounded-md
                    outline-none
                    focus:border-yellow-400
                    focus:ring-2 focus:ring-yellow-200
                    transition-all duration-300
                  "
                />
              </div>


              {/* Preferred Time */}
              <div className="mb-4 sm:mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Time for a Call
                </label>

                <input
                  type="text"
                  placeholder="Preferred Time for a Call"
                  className="
                    w-full
                    px-4 py-3
                    bg-gray-50
                    text-gray-700
                    border border-gray-200
                    rounded-md
                    outline-none
                    focus:border-yellow-400
                    focus:ring-2 focus:ring-yellow-200
                    transition-all duration-300
                  "
                />
              </div>


              {/* Course */}
              <div className="mb-4 sm:mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Course
                </label>

                <select
                  defaultValue=""
                  className="
                    w-full
                    px-4 py-3
                    bg-gray-50
                    text-gray-700
                    border border-gray-200
                    rounded-md
                    outline-none
                    focus:border-yellow-400
                    focus:ring-2 focus:ring-yellow-200
                    transition-all duration-300
                  "
                >
                  <option value="" disabled>
                    Choose the course
                  </option>

                  <option value="clat">
                    CLAT Course
                  </option>

                  <option value="cuet">
                    CUET Course
                  </option>

                  <option value="mock">
                    Mock Test Series
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>


              {/* Message */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="
                    w-full
                    px-4 py-3
                    bg-gray-50
                    text-gray-700
                    border border-gray-200
                    rounded-md
                    outline-none
                    resize-none
                    focus:border-yellow-400
                    focus:ring-2 focus:ring-yellow-200
                    transition-all duration-300
                  "
                ></textarea>
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  py-3
                  bg-red-900
                  hover:bg-red-800
                  text-white
                  font-bold
                  rounded-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </section>


      {/* ================= GOOGLE MAP ================= */}
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-10">

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-5">

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-5">
            Find Us On Map
          </h2>

          <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.348405865897!2d77.071924!3d28.589323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b0013d00c3d%3A0xa8f299cf9ef0a951!2sWORLDWISE%20EDUCATION%20CONSULTANTS!5e0!3m2!1sen!2sin!4v1789038474999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="World Wise Academy Location"
            ></iframe>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;