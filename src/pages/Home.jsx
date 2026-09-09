import React, { useEffect, useState } from "react";
import cuet from '../assets/cuet.png'
import clatt from '../assets/clatt.png'
import CourseSec from "../section/CourseSec";
import Banner from "../section/Banner";
import ChooseUs from "../section/ChooseUs";

const Home = () => {
  const images = [
    cuet,
  clatt,
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full px-4 md:px-6 py-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - CAROUSEL */}
        <div className="lg:col-span-2 relative w-full overflow-hidden rounded-lg">

          <img
            src={images[current]}
            alt={`Banner ${current + 1}`}
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover transition-all duration-500"
          />

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2
                       bg-black/50 text-white w-10 h-10
                       rounded-full flex items-center justify-center
                       hover:bg-black/70 transition"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       bg-black/50 text-white w-10 h-10
                       rounded-full flex items-center justify-center
                       hover:bg-black/70 transition"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-white scale-110"
                    : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>

        </div>

        {/* RIGHT - FORM */}
        <div className="w-full bg-red-900 p-6 sm:p-8 rounded-lg">

          <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6">
            Request for Call
          </h2>

          <form className="space-y-5">

        <div className="mb-5">

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Email */}
        {/* <div className="mb-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div> */}

            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full p-3 bg-white outline-none"
            />

            <input
              type="text"
              placeholder="Preferred Time for a Call"
              className="w-full p-3 bg-white outline-none"
            />

            {/* <select className="w-full p-3 bg-white outline-none">
              <option>Choose the course</option>
              <option>CLAT</option>
              <option>CUET</option>
              <option>Judiciary</option>
            </select>
 */}
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="w-full p-3 bg-white outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-red-900 font-bold py-3 hover:bg-gray-200 transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
<CourseSec></CourseSec>
<Banner/>
<ChooseUs/>
    </div>
  );
};

export default Home;
