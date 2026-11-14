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

          <p className="text-gray-600 text-base leading-7 sm:text-lg sm:leading-8">
            {course.overview}
          </p>

          <div className="mt-6 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-gray-900">
              Who this course may suit
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              {course.suitableFor}
            </p>
          </div>

        </div>
      </section>

      <section className="w-full bg-gray-100 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-800">
              Course focus
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Areas to work on
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              Use the topics below as a guide to the preparation areas
              described for this course. Confirm the latest syllabus for your
              target examination before planning your study.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {course.focusAreas.map((area, index) => (
              <article
                key={area}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm sm:p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-sm font-bold text-red-900">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  {area}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-800">
              Make it manageable
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              A study routine that helps you learn
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              Preparation becomes easier to review when each study session
              has a purpose. Adapt these steps to your schedule and the
              requirements of your exam.
            </p>
          </div>

          <ol className="space-y-3">
            {course.studyApproach.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-900 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  {step}
                </p>
              </li>
            ))}
          </ol>
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
            Ask us about course coverage, current availability and whether
            this preparation option matches your target examination.
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
