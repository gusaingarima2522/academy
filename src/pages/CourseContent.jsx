import React from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import "../index.css";

const CourseContent = () => {
  const { slug } = useParams();

  // Find the course according to URL
  const course = courses.find(
    (item) => item.slug === slug
  );

  // ================= COURSE NOT FOUND =================

  if (!course) {
    return (
      <div
        className="
          min-h-[60vh]
          flex
          items-center
          justify-center
          px-4
          bg-gray-100
        "
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Course Not Found
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            The course you are looking for does not exist.
          </p>

          <Link
            to="/courses"
            className="
              inline-block
              mt-5
              bg-red-900
              hover:bg-red-800
              text-white
              font-semibold
              px-6
              py-3
              rounded-lg
              no-underline
              transition-all
              duration-300
            "
          >
            View Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="course-content-page w-full overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          w-full
          bg-gray-100
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          sm:py-10
          md:py-14
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            md:gap-8
            lg:gap-12
            items-center
          "
        >

          {/* ================= COURSE IMAGE ================= */}

          <div
            className="
              w-full
              overflow-hidden
              rounded-xl
              shadow-lg
              bg-white
            "
          >
            <img
              src={course.img}
              alt={course.title}
              className="
                w-full
                h-auto
                min-h-[220px]
                sm:min-h-[280px]
                md:min-h-[350px]
                object-cover
                block
              "
            />
          </div>

          {/* ================= COURSE INFO ================= */}

          <div
            className="
              w-full
              bg-white
              rounded-xl
              shadow-lg
              p-5
              sm:p-6
              md:p-8
            "
          >
            <span
              className="
                inline-block
                text-red-900
                font-bold
                text-xs
                sm:text-sm
                tracking-wider
                mb-3
              "
            >
              WORLD WISE ACADEMY
            </span>

            <h1
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                text-gray-900
                leading-tight
                mb-4
              "
            >
              {course.title}
            </h1>

            <p
              className="
                text-gray-600
                text-sm
                sm:text-base
                leading-7
                mb-5
              "
            >
              {course.description}
            </p>

            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-red-900
                mb-6
              "
            >
              ₹{course.price}
            </h2>

            {/* ================= ENQUIRE BUTTON ================= */}

            <Link
              to="/contact#contact-form"
              className="
                inline-flex
                items-center
                justify-center
                w-full
                sm:w-auto
                bg-red-900
                hover:bg-red-800
                text-white
                font-bold
                px-6
                py-3
                rounded-lg
                no-underline
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                text-sm
                sm:text-base
              "
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE DETAILS
      ====================================================== */}

      <section
        className="
          w-full
          px-4
          sm:px-6
          md:px-8
          py-10
          sm:py-12
          md:py-16
          bg-white
        "
      >
        <div className="max-w-5xl mx-auto">

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-900
              mb-4
            "
          >
            About This Course
          </h2>

          <p
            className="
              text-gray-600
              text-sm
              sm:text-base
              leading-7
              sm:leading-8
            "
          >
            This course is designed to help students build strong concepts,
            improve their skills and prepare effectively for their entrance
            examination.
          </p>

        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section
        className="
          w-full
          bg-gray-100
          px-4
          sm:px-6
          md:px-8
          py-10
          sm:py-12
          md:py-16
        "
      >
        <div className="max-w-6xl mx-auto">

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-900
              text-center
              mb-8
              sm:mb-10
            "
          >
            What You Will Get
          </h2>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
              sm:gap-6
            "
          >

            {/* ================= FEATURE 1 ================= */}

            <div
              className="
                bg-white
                rounded-xl
                p-5
                sm:p-6
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h3 className="text-lg font-bold text-red-900 mb-2">
                Concept Classes
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Learn important concepts with structured guidance.
              </p>
            </div>

            {/* ================= FEATURE 2 ================= */}

            <div
              className="
                bg-white
                rounded-xl
                p-5
                sm:p-6
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h3 className="text-lg font-bold text-red-900 mb-2">
                Study Material
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Get useful study resources for your preparation.
              </p>
            </div>

            {/* ================= FEATURE 3 ================= */}

            <div
              className="
                bg-white
                rounded-xl
                p-5
                sm:p-6
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h3 className="text-lg font-bold text-red-900 mb-2">
                Practice Questions
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Improve your understanding through regular practice.
              </p>
            </div>

            {/* ================= FEATURE 4 ================= */}

            <div
              className="
                bg-white
                rounded-xl
                p-5
                sm:p-6
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h3 className="text-lg font-bold text-red-900 mb-2">
                Mock Tests
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Test your preparation with examination-oriented tests.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          ENQUIRY CTA
      ====================================================== */}

      <section
        className="
          w-full
          bg-red-900
          text-white
          px-4
          sm:px-6
          md:px-8
          py-12
          sm:py-14
          md:py-16
          text-center
        "
      >
        <div className="max-w-4xl mx-auto">

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              mb-4
            "
          >
            Interested in {course.title}?
          </h2>

          <p
            className="
              text-gray-200
              text-sm
              sm:text-base
              leading-7
              mb-7
            "
          >
            Contact World Wise Academy to know more about this course.
          </p>

          {/* ================= ENQUIRE NOW ================= */}

          <Link
            to="/contact#contact-form"
            className="
              inline-flex
              items-center
              justify-center
              w-full
              sm:w-auto
              min-w-[170px]
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              font-bold
              px-7
              py-3
              rounded-lg
              no-underline
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              text-sm
              sm:text-base
            "
          >
            Enquire Now
          </Link>

        </div>
      </section>

    </div>
  );
};

export default CourseContent;
