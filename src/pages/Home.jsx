import React, { useEffect, useState } from "react";
import Cuet_Preperation from "../assets/Cuet_Preperation.png";
import school from "../assets/school.png";
import CourseSec from "../section/CourseSec";
import Banner from "../section/Banner";
import ChooseUs from "../section/ChooseUs";
import AboutBanner from "../section/AboutBanner";
import Notice from "../section/Notice";
const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const images = [Cuet_Preperation, school];

  const [current, setCurrent] = useState(0);


  /* =================================
     AUTO SLIDER
  ================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length);

    }, 2000);

    return () => clearInterval(interval);

  }, [images.length]);


  /* =================================
     NEXT SLIDE
  ================================= */

  const nextSlide = () => {

    setCurrent((prev) => (prev + 1) % images.length);

  };


  /* =================================
     PREVIOUS SLIDE
  ================================= */

  const prevSlide = () => {

    setCurrent(
      (prev) => (prev - 1 + images.length) % images.length
    );

  };


  return (

    <div className="w-full bg-white">


      {/* =================================
    HERO SECTION
================================= */}

      <section className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        {/* FULL WIDTH BANNER */}
        <div
          className="
    relative
    w-full
    max-w-[1400px]
    mx-auto
    overflow-hidden
    rounded-lg
    shadow-lg
    bg-red-950
  "
        >
          <img
            src={images[current]}
            alt={`CLAT CUET Banner ${current + 1}`}
            className="
    block
    w-full
    h-auto
    max-h-[500px]
    object-fit
    transition-all
    duration-500
  "
          />
          {/* DARK OVERLAY */}
          <div
            className="
        absolute
        inset-0
        bg-black/10
        pointer-events-none
      "
          ></div>


          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="
        absolute
        left-2
        sm:left-4
        top-1/2
        -translate-y-1/2
        w-8
        h-8
        sm:w-10
        sm:h-10
        rounded-full
        bg-black/70
        text-white
        flex
        items-center
        justify-center
        text-lg
        sm:text-xl
        hover:bg-red-700
        transition
        z-10
      "
          >
            ❮
          </button>


          {/* NEXT BUTTON */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
        absolute
        right-2
        sm:right-4
        top-1/2
        -translate-y-1/2
        w-8
        h-8
        sm:w-10
        sm:h-10
        rounded-full
        bg-black/70
        text-white
        flex
        items-center
        justify-center
        text-lg
        sm:text-xl
        hover:bg-red-700
        transition
        z-10
      "
          >
            ❯
          </button>


          {/* DOTS */}
          <div
            className="
        absolute
        bottom-3
        left-1/2
        -translate-x-1/2
        flex
        gap-2
        z-10
      "
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
            w-2.5
            h-2.5
            rounded-full
            transition-all
            duration-300

            ${current === index
                    ? "bg-yellow-400 scale-125"
                    : "bg-white/70 hover:bg-white"
                  }
          `}
              ></button>
            ))}
          </div>

        </div>

      </section>
      <Notice />



      {/* =================================
          OTHER HOME SECTIONS
      ================================= */}

      <AboutBanner />

      <CourseSec />

      <Banner />

      <ChooseUs />
      {/* =================================
    REQUEST CALL POPUP
================================= */}

      {showPopup && (
        <div
          className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      px-4
    "
        >

          {/* POPUP BOX */}
        </div>
      )}

    </div>


  );
};

export default Home;