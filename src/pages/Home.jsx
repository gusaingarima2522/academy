import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";

import CourseSec from "../section/CourseSec";
import Banner from "../section/Banner";
import ChooseUs from "../section/ChooseUs";
import AboutBanner from "../section/AboutBanner";
import Notice from "../section/Notice";
import { submitContactForm } from "../services/contactService";
import { readCookieConsent } from "../services/cookieConsent";

const HOME_ENQUIRY_SHOWN_KEY = "academy-home-enquiry-shown";

const preparationSteps = [
  {
    number: "01",
    title: "Know what to prepare",
    description:
      "Start with the syllabus and exam format for your target course. Break the subjects into smaller topics so you can plan what to study next.",
  },
  {
    number: "02",
    title: "Build your understanding",
    description:
      "Study one topic at a time and focus on understanding the ideas before moving on to timed practice.",
  },
  {
    number: "03",
    title: "Practise regularly",
    description:
      "Use questions and mock tests to practise applying what you have learned under exam-style conditions.",
  },
  {
    number: "04",
    title: "Learn from each attempt",
    description:
      "Review incorrect and unanswered questions, identify topics that need more work, and use that review to guide your next study session.",
  },
];

const homeFaqs = [
  {
    question: "Which entrance exams can I explore on this website?",
    answer:
      "The website includes preparation information and courses for CLAT and CUET, along with a JEE mock-test area. Browse the relevant section to see the resources currently available.",
  },
  {
    question: "How should I use mock tests during preparation?",
    answer:
      "Use a mock test to practise pacing and applying concepts. After submitting, review the questions you missed or left unanswered, then revisit the topics that need attention.",
  },
  {
    question: "Where can I find syllabus and study resources?",
    answer:
      "Visit Study Resources for syllabus links, preparation guides, and practice material. Always check the relevant official exam source for the latest syllabus and exam updates.",
  },
  {
    question: "How can I ask about a course?",
    answer:
      "Browse the available courses or contact World Wise Education with your target exam and questions so the team can guide you toward relevant information.",
  },
  {
    question: "What is the difference between CLAT and CUET?",
    answer:
      "CLAT is the entrance test for law programmes at National Law Universities, while CUET is used for undergraduate admissions to central universities. Check each exam's official notification for eligibility and dates.",
  },
  {
    question: "Where should I confirm exam dates and eligibility?",
    answer:
      "Exam dates, eligibility, and application details change from year to year. Always confirm them on the official exam website before making decisions.",
  },
  {
    question: "How can I contact the team quickly?",
    answer:
      "Send your question through the Contact page, or call the phone number shown at the top of the website during office hours.",
  },
];

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

  const images = [banner1,banner2,banner3,banner4];
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

  const [popupOpen, setPopupOpen] = useState(false);

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
    let timer;
    const showPopupAfterConsent = () => {
      if (window.sessionStorage.getItem(HOME_ENQUIRY_SHOWN_KEY) === "true") return;

      timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(HOME_ENQUIRY_SHOWN_KEY, "true");
        setPopupOpen(true);
      } catch (storageError) {
        console.error(
          "Unable to save the home enquiry popup preference.",
          storageError
        );
        setPopupOpen(true);
      }
      }, 2000);
    };

    if (readCookieConsent()) showPopupAfterConsent();
    window.addEventListener("academy-cookie-consent", showPopupAfterConsent);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("academy-cookie-consent", showPopupAfterConsent);
    };
  }, []);

  useEffect(() => {
    if (!popupOpen) return undefined;

    const scrollY = window.scrollY;
    const body = document.body;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const previousBodyOverflow = body.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      body.style.overflow = previousBodyOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [popupOpen]);

  useEffect(() => {

    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

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

      const data = await submitContactForm({
        ...formData,
        form_source: "home_enquiry",
      });


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
              aspect-[16/9]
              sm:aspect-[2/1]
              max-h-[250px]
              sm:max-h-[600px]
              lg:max-h-[660px]
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
                h-9
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
                />
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

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-red-800">
              A practical preparation guide
            </p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Make every study session count
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              A steady routine can make a large syllabus feel more manageable.
              Use these steps to turn learning, practice, and review into a
              repeatable cycle.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {preparationSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-sm font-bold text-red-900">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/resources"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-red-900 px-5 py-2.5 text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Explore study resources
            </Link>
            <Link
              to="/jeemocktest"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-red-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              Practise with mock tests
            </Link>
          </div>
        </div>
      </section>


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

      <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-red-800">
              Helpful information
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Find a starting point for exploring courses, resources, and
              practice on the website.
            </p>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group relative rounded-2xl border border-gray-200 bg-white p-5 shadow-md open:border-red-300 open:bg-red-50/60 open:shadow-xl sm:p-6 transition-all duration-200 hover:shadow-xl"
              >
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-gray-900 marker:hidden sm:text-lg">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="float-right -mr-6 text-xl leading-6 text-red-900 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Still have a question?{" "}
            <Link
              to="/contact#contact-form"
              className="font-semibold text-red-900 underline underline-offset-2 hover:text-red-700"
            >
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>


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
              h-dvh
              min-h-0
              flex
              items-center
              justify-center
              bg-black/60
              px-4
              py-3
            "
            onClick={closePopup}
          >

            {/* POPUP BOX */}

            <div
              className="
                relative
                w-full
                max-w-lg
                max-h-[calc(100dvh-1.5rem)]
                min-h-0
                overflow-y-auto
                overscroll-contain
                rounded-xl
                bg-white
                p-4
                sm:p-5
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

              <h2 className="mb-1 pr-8 text-xl font-bold text-red-900 sm:text-2xl">
                Request a Call
              </h2>

              <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base">
                Fill in your details and our team will contact you.
              </p>


              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
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
