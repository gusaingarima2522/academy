import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Cuet_Preperation from "../assets/Cuet_Preperation.png";
import school from "../assets/school.png";

import CourseSec from "../section/CourseSec";
import Banner from "../section/Banner";
import ChooseUs from "../section/ChooseUs";
import AboutBanner from "../section/AboutBanner";
import Notice from "../section/Notice";

/* =====================================================
   HOME PAGE SKELETON
===================================================== */

const HomeSkeleton = () => {
  return (
    <div className="w-full bg-white">

      {/* =================================================
          HERO SKELETON
      ================================================== */}

      <section className="w-full px-3 sm:px-6 md:px-8 py-2 sm:py-4">
        <div className="skeleton skeleton-hero"></div>
      </section>


      {/* =================================================
          NOTICE SKELETON
      ================================================== */}

      <section className="w-full px-3 sm:px-6 md:px-8 py-4">
        <div className="flex items-center gap-4">

          <div className="skeleton skeleton-notice-title"></div>

          <div className="skeleton skeleton-notice-text"></div>

        </div>
      </section>


      {/* =================================================
          ABOUT SKELETON
      ================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-10 py-10">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            items-center
            max-w-7xl
            mx-auto
          "
        >

          {/* ABOUT TEXT */}

          <div>

            <div className="skeleton skeleton-about-title"></div>

            <div className="skeleton skeleton-about-line"></div>

            <div className="skeleton skeleton-about-line"></div>

            <div className="skeleton skeleton-about-line"></div>

            <div className="skeleton skeleton-about-line short"></div>

            <div className="skeleton skeleton-about-button"></div>

          </div>


          {/* ABOUT VIDEO */}

          <div className="skeleton skeleton-about-video"></div>

        </div>

      </section>


      {/* =================================================
          COURSES SKELETON
      ================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-10 py-10">

        {/* COURSE HEADING */}

        <div className="mx-auto mb-8 skeleton skeleton-about-title"></div>


        {/* COURSE CARDS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            max-w-7xl
            mx-auto
          "
        >

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="skeleton-course-card"
            >

              {/* IMAGE */}

              <div className="skeleton skeleton-course-image"></div>


              {/* TITLE */}

              <div className="skeleton skeleton-course-title"></div>


              {/* DESCRIPTION */}

              <div className="skeleton skeleton-course-line"></div>

              <div className="skeleton skeleton-course-line short"></div>


              {/* PRICE */}

              <div className="skeleton skeleton-course-price"></div>


              {/* BUTTON */}

              <div className="skeleton skeleton-course-button"></div>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          BANNER SKELETON
      ================================================== */}

      <section className="w-full px-4 py-8">

        <div className="skeleton skeleton-banner max-w-7xl mx-auto"></div>

      </section>


      {/* =================================================
          CHOOSE US SKELETON
      ================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-10 py-10">

        {/* HEADING */}

        <div className="mx-auto mb-8 skeleton skeleton-about-title"></div>


        {/* CARDS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            max-w-7xl
            mx-auto
          "
        >

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="skeleton-choose-card"
            >

              {/* ICON */}

              <div className="skeleton skeleton-choose-icon"></div>


              {/* TITLE */}

              <div className="skeleton skeleton-choose-title"></div>


              {/* TEXT */}

              <div className="skeleton skeleton-choose-line"></div>

              <div className="skeleton skeleton-choose-line short"></div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};


/* =====================================================
   HOME COMPONENT
===================================================== */

const Home = () => {

  const images = [Cuet_Preperation, school];
    const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});



  /* =====================================================
     SLIDER STATE
  ===================================================== */



  /* =====================================================
     PAGE SKELETON LOADING
  ===================================================== */

  const [pageLoading, setPageLoading] = useState(true);


  /* =====================================================
     POPUP STATE
  ===================================================== */

  const [popupOpen, setPopupOpen] = useState(true);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    preferred_time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  /* =====================================================
     PAGE LOADING
  ===================================================== */

  useEffect(() => {

    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, []);


  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length);

    }, 4000);

    return () => clearInterval(interval);

  }, [images.length]);


  /* =====================================================
     NEXT SLIDE
  ===================================================== */

  const nextSlide = () => {

    setCurrent(
      (prev) => (prev + 1) % images.length
    );

  };


  /* =====================================================
     PREVIOUS SLIDE
  ===================================================== */

  const prevSlide = () => {

    setCurrent(
      (prev) =>
        (prev - 1 + images.length) % images.length
    );

  };


  /* =====================================================
     FORM INPUT
  ===================================================== */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {

      const response = await fetch(
        "http://192.168.1.3:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {

        throw new Error(
          data.message || "Something went wrong"
        );

      }


      /* SUCCESS */

      setSuccess(
        data.message ||
        "Your enquiry has been submitted successfully!"
      );


      /* CLEAR FORM */

      setFormData({
        full_name: "",
        phone: "",
        preferred_time: "",
        message: "",
      });


      /* CLOSE POPUP */

      setTimeout(() => {

        setPopupOpen(false);
        setSuccess("");

      }, 1500);

    } catch (err) {

      console.error("Form error:", err);

      setError(
        err.message ||
        "Unable to submit form"
      );

    } finally {

      setLoading(false);

    }

  };


  /* =====================================================
     CLOSE POPUP
  ===================================================== */

  const closePopup = () => {

    setPopupOpen(false);
    setError("");
    setSuccess("");

  };


  /* =====================================================
     SHOW SKELETON
  ===================================================== */

  if (pageLoading) {

    return <HomeSkeleton />;

  }


  /* =====================================================
     ACTUAL HOME PAGE
  ===================================================== */

  return (

    <div className="w-full bg-white">


      {/* =================================================
          HERO / IMAGE SLIDER
      ================================================== */}

      <div className="relative z-[9998] pointer-events-auto">

        <section className="w-full px-3 sm:px-6 md:px-8 py-2 sm:py-4">

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
              aspect-[16/6]
              min-h-[220px]
              sm:min-h-[280px]
              md:min-h-[350px]
              lg:min-h-[450px]
            "
          >

            {/* IMAGES */}

            {/* IMAGES */}

            {/* IMAGES */}

            {images.map((image, index) => {

              const isLoaded = loadedImages[index];

              return (
                <div
                  key={image}
                  className={`
        absolute
        inset-0

        transition-transform
        duration-700
        ease-in-out

        ${current === index
                      ? "translate-x-0"
                      : index < current
                        ? "-translate-x-full"
                        : "translate-x-full"
                    }
      `}
                >

                  {/* SPINNER */}

                  {!isLoaded && current === index && (
                    <div className="
          absolute
          inset-0
          z-[5]
          flex
          items-center
          justify-center
          bg-red-950
        ">
                      <div className="
            h-10
            w-10
            sm:h-12
            sm:w-12

            animate-spin

            rounded-full

            border-4
            border-white/30
            border-t-yellow-400
          "></div>
                    </div>
                  )}

                  {/* IMAGE */}

                  <img
                    src={image}
                    alt={`CLAT CUET Banner ${index + 1}`}
                    onLoad={() => {
                      setLoadedImages((prev) => ({
                        ...prev,
                        [index]: true,
                      }));
                    }}
                    onError={() => {
                      setLoadedImages((prev) => ({
                        ...prev,
                        [index]: true,
                      }));
                    }}
                    className={`
          w-full
          h-full
          object-cover

          transition-opacity
          duration-500

          ${!isLoaded
                        ? "opacity-0"
                        : "opacity-100"
                      }
        `}
                  />

                </div>
              );
            })}
            {/* DARK OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-black/10
                pointer-events-none
                z-[2]
              "
            ></div>


            {/* PREVIOUS */}

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
                hover:scale-110

                transition-all
                duration-300

                z-[10]
                pointer-events-auto
                cursor-pointer
              "
            >
              ❮
            </button>


            {/* NEXT */}

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
                hover:scale-110

                transition-all
                duration-300

                z-[10]
                pointer-events-auto
                cursor-pointer
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
                z-[10]
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
                    duration-500

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

      </div>


      {/* =================================================
          NOTIFICATION
      ================================================== */}

      <Notice />


      {/* =================================================
          ABOUT
      ================================================== */}

      <div className="relative z-[9998] pointer-events-auto">

        <AboutBanner />

      </div>


      {/* =================================================
          COURSES
      ================================================== */}

      <div className="relative z-[9998] pointer-events-auto">

        <CourseSec />

      </div>


      {/* =================================================
          BANNER
      ================================================== */}

      <div className="relative z-[9998] pointer-events-auto">

        <Banner />

      </div>


      {/* =================================================
          CHOOSE US
      ================================================== */}

      <div className="relative z-[9998] pointer-events-auto">

        <ChooseUs />

      </div>


      {/* =================================================
          HOME PAGE POPUP
      ================================================== */}

      {popupOpen &&
        createPortal(

          <div
            className="
              fixed
              inset-0
              z-[999999]
              flex
              items-center
              justify-center
              bg-black/60
              px-4
              py-4
            "
            onClick={closePopup}
          >

            {/* POPUP BOX */}

            <div
              className="
                relative
                w-full
                max-w-lg
                max-h-[90vh]
                overflow-y-auto
                rounded-xl
                bg-white
                p-5
                sm:p-6
                shadow-2xl
                animate-[popupIn_0.4s_ease-out]
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={closePopup}
                className="
                  absolute
                  right-4
                  top-3
                  z-10
                  text-2xl
                  font-bold
                  text-gray-500
                  transition-all
                  duration-200
                  hover:scale-110
                  hover:text-red-900
                "
              >
                ×
              </button>


              {/* HEADING */}

              <h2 className="mb-2 pr-8 text-2xl font-bold text-red-900">
                Request a Call
              </h2>

              <p className="mb-5 text-gray-600">
                Fill in your details and our team will contact you.
              </p>


              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* FULL NAME */}

                <div>

                  <label className="mb-1 block font-medium text-gray-800">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="
                      w-full
                      rounded-md
                      border
                      border-gray-300
                      px-4
                      py-3
                      outline-none
                      transition
                      focus:border-red-900
                      focus:ring-2
                      focus:ring-red-900/20
                    "
                  />

                </div>


                {/* PHONE */}

                <div>

                  <label className="mb-1 block font-medium text-gray-800">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="
                      w-full
                      rounded-md
                      border
                      border-gray-300
                      px-4
                      py-3
                      outline-none
                      transition
                      focus:border-red-900
                      focus:ring-2
                      focus:ring-red-900/20
                    "
                  />

                </div>


                {/* PREFERRED TIME */}

                <div>

                  <label className="mb-1 block font-medium text-gray-800">
                    Preferred Time
                  </label>

                  <input
                    type="text"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    placeholder="Example: 5 PM - 7 PM"
                    className="
                      w-full
                      rounded-md
                      border
                      border-gray-300
                      px-4
                      py-3
                      outline-none
                      transition
                      focus:border-red-900
                      focus:ring-2
                      focus:ring-red-900/20
                    "
                  />

                </div>


                {/* MESSAGE */}

                <div>

                  <label className="mb-1 block font-medium text-gray-800">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="3"
                    className="
                      w-full
                      resize-none
                      rounded-md
                      border
                      border-gray-300
                      px-4
                      py-3
                      outline-none
                      transition
                      focus:border-red-900
                      focus:ring-2
                      focus:ring-red-900/20
                    "
                  />

                </div>


                {/* ERROR */}

                {error && (

                  <p className="
                    rounded-md
                    bg-red-100
                    p-2
                    text-sm
                    text-red-700
                  ">
                    {error}
                  </p>

                )}


                {/* SUCCESS */}

                {success && (

                  <p className="
                    rounded-md
                    bg-green-100
                    p-2
                    text-sm
                    text-green-700
                  ">
                    {success}
                  </p>

                )}


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    rounded-md
                    bg-red-900
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-red-800
                    hover:shadow-lg
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Request"}
                </button>

              </form>

            </div>

          </div>,

          document.body

        )}

    </div>

  );

};

export default Home;