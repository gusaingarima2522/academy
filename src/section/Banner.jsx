import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="
        w-full
        min-h-[300px]
        bg-gray-100
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-4
        sm:px-6
        md:px-8
        py-10
        sm:py-12
        md:py-14
        box-border
        overflow-hidden
        shadow-[0_4px_12px_rgba(77,75,75,0.12)]
        transition-all
        duration-300
        ease-in-out
        hover:-translate-y-[1px]
        hover:shadow-[0_5px_10px_rgba(0,0,0,0.18)]
      "
    >
      {/* ================= HEADING ================= */}

      <h1
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          text-gray-800
          leading-tight
          max-w-4xl
        "
      >
        Make Your Career Successful With Us

        <br />

        Book Your Seats Now!
      </h1>

      {/* ================= GET IN TOUCH ================= */}

      <Link
        to="/contact#contact-form"
        className="
          mt-6
          inline-flex
          items-center
          justify-center
          w-full
          sm:w-auto
          min-w-[160px]
          bg-red-900
          hover:bg-red-800
          text-white
          font-semibold
          px-6
          py-3
          rounded-lg
          transition-all
          duration-300
          no-underline
          cursor-pointer
          hover:-translate-y-1
          hover:shadow-lg
          text-sm
          sm:text-base
        "
      >
        Get In Touch
      </Link>
    </section>
  );
};

export default Banner;
