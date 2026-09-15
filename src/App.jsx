import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import logo from "./assets/logo.png";
import phonecall from "./assets/phonecall.png";

import BlogContent from "./pages/BlogContent";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Brochure from "./pages/Brochure";
import Head from "./pages/Head";
import Resources from "./pages/Resources";

import Clat from "./section/Clat";
import Cuet from "./section/Cuet";
import Mock from "./section/Mock";

import ClatContent from "./pages/ClatContent";
import CourseContent from "./pages/CourseContent";
import ScrolltoHash from './section/ScrolltoHash'

import "./index.css";

const App = () => {
  // =====================================================
  // NAVBAR STATES
  // =====================================================

  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  // =====================================================
  // POPUP
  // TRUE = popup automatically appears on page load
  // =====================================================

  const [popupOpen, setPopupOpen] = useState(false);

  // =====================================================
  // FORM DATA
  // =====================================================

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    preferred_time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // =====================================================
  // FORM INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
  };

  // =====================================================
  // CLOSE POPUP
  // =====================================================

  const closePopup = () => {
    setPopupOpen(false);
    setError("");
    setSuccess("");
  };

  // =====================================================
  // ESC KEY CLOSE POPUP
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && popupOpen) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [popupOpen]);

  // =====================================================
  // FORM SUBMIT
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // SUCCESS
      setSuccess(
        data.message ||
        "Your enquiry has been submitted successfully!"
      );

      // CLEAR FORM
      setFormData({
        full_name: "",
        phone: "",
        preferred_time: "",
        message: "",
      });

      // CLOSE POPUP AFTER SUCCESS
      setTimeout(() => {
        setPopupOpen(false);
        setSuccess("");
      }, 1500);
    } catch (err) {
      console.error("Form error:", err);

      setError(
        err.message ||
        "Unable to submit form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // ROUTE NAVIGATION HELPER
  // =====================================================

  const handleNavigation = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* =================================================
          TOP HEAD
      ================================================== */}

      <Head />

      {/* =================================================
          NAVBAR
      ================================================== */}

      <nav
        className="
          sticky top-0 z-[9998] relative w-full
          bg-red-900 text-white
          pointer-events-auto
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* =================================================
              NAVBAR MAIN ROW
          ================================================== */}

          <div className="flex h-16 items-center justify-between gap-2">

            {/* =================================================
                LOGO + BRAND
            ================================================== */}

            <div className="flex items-center gap-2">

              {/* LOGO */}
              <Link
                to="/"
                onClick={handleNavigation}
                className="shrink-0"
              >
                <img
                  src={logo}
                  alt="World Wise Education"
                  className="
                    h-10 w-10
                    rounded-full
                    border-2 border-white
                    bg-white
                    object-cover
                    sm:h-12 sm:w-12
                  "
                />
              </Link>

              {/* BRAND NAME */}
              <Link
                to="/"
                onClick={handleNavigation}
                className="
                  whitespace-nowrap
                  text-lg font-bold
                  text-white no-underline
                  sm:text-xl
                "
              >
                World Wise
                <span className="text-red-400">
                  {" "}Education
                </span>
              </Link>
            </div>

            {/* =================================================
                MOBILE HAMBURGER
            ================================================== */}

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((prev) => !prev);
                setCoursesOpen(false);
              }}
              className="
                inline-flex items-center justify-center
                rounded-md p-2
                text-white
                hover:bg-gray-700
                focus:outline-none
                lg:hidden
              "
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* =================================================
                DESKTOP MENU
            ================================================== */}

            <div
              className="
                relative z-[9998]
                hidden items-center
                lg:flex
                pointer-events-auto
              "
            >
              <ul className="flex items-center space-x-2">

                {/* HOME */}
                <li>
                  <Link
                    to="/"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      shadow-md
                      transition-shadow duration-300
                      hover:bg-gray-100
                      hover:text-black
                      hover:shadow-xl
                    "
                  >
                    Home
                  </Link>
                </li>

                {/* =================================================
                    COURSES DROPDOWN
                ================================================== */}

                <li
                  className="relative"
                  onMouseLeave={() => setCoursesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={coursesOpen}
                    onClick={() =>
                      setCoursesOpen((prev) => !prev)
                    }
                    className="
                      flex items-center gap-1
                      rounded-md
                      px-3 py-2
                      text-white
                      shadow-md
                      transition-shadow duration-300
                      hover:bg-gray-100
                      hover:text-black
                      hover:shadow-xl
                    "
                  >
                    Courses

                    <svg
                      className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* DROPDOWN */}
                  {coursesOpen && (
                    <ul
                      className="
                        absolute right-0 z-[10000]
                        mt-2 w-56
                        rounded-md
                        bg-white
                        py-2
                        shadow-xl
                      "
                    >
                      <li>
                        <Link
                          to="/clat"
                          onClick={handleNavigation}
                          className="
                            block px-4 py-2
                            text-gray-700 no-underline
                            hover:bg-gray-100
                            hover:text-red-900
                          "
                        >
                          CLAT Courses
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/cuet"
                          onClick={handleNavigation}
                          className="
                            block px-4 py-2
                            text-gray-700 no-underline
                            hover:bg-gray-100
                            hover:text-red-900
                          "
                        >
                          CUET Courses
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/mock"
                          onClick={handleNavigation}
                          className="
                            block px-4 py-2
                            text-gray-700 no-underline
                            hover:bg-gray-100
                            hover:text-red-900
                          "
                        >
                          Mock Tests
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* BLOGS */}
                <li>
                  <Link
                    to="/blogs"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    Blogs
                  </Link>
                </li>

                {/* ABOUT */}
                <li>
                  <Link
                    to="/about"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    About
                  </Link>
                </li>

                {/* RESOURCES */}
                <li>
                  <Link
                    to="/resources"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    Resources
                  </Link>
                </li>

                {/* CONTACT */}
                <li>
                  <Link
                    to="/contact#contact-form"

                    onClick={handleNavigation}
                    className="
                      inline-block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                          font-bold
    px-6
    sm:px-8
    py-2.5
    sm:py-3
    rounded-lg
    text-sm
    sm:text-base
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl

                    "
                  >
                    Contact
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================== */}

          {menuOpen && (
            <div
              className="
                relative z-[9998]
                bg-red-900
                pb-4
                lg:hidden
              "
            >
              <ul className="space-y-1">

                {/* HOME */}
                <li>
                  <Link
                    to="/"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    Home
                  </Link>
                </li>

                {/* MOBILE COURSES */}
                <li>
                  <button
                    type="button"
                    aria-expanded={coursesOpen}
                    onClick={() =>
                      setCoursesOpen((prev) => !prev)
                    }
                    className="
                      flex w-full
                      items-center justify-between
                      rounded-md
                      px-3 py-2
                      text-white
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    <span>Courses</span>

                    <svg
                      className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {coursesOpen && (
                    <div className="ml-4 mt-1 space-y-1">

                      <Link
                        to="/clat"
                        onClick={handleNavigation}
                        className="
                          block rounded-md
                          px-3 py-2
                          text-sm text-gray-200
                          no-underline
                          hover:bg-gray-100
                          hover:text-black
                        "
                      >
                        CLAT Courses
                      </Link>

                      <Link
                        to="/cuet"
                        onClick={handleNavigation}
                        className="
                          block rounded-md
                          px-3 py-2
                          text-sm text-gray-200
                          no-underline
                          hover:bg-gray-100
                          hover:text-black
                        "
                      >
                        CUET Courses
                      </Link>

                      <Link
                        to="/mock"
                        onClick={handleNavigation}
                        className="
                          block rounded-md
                          px-3 py-2
                          text-sm text-gray-200
                          no-underline
                          hover:bg-gray-100
                          hover:text-black
                        "
                      >
                        Mock Tests
                      </Link>

                    </div>
                  )}
                </li>

                {/* BLOGS */}
                <li>
                  <Link
                    to="/blogs"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    Blogs
                  </Link>
                </li>

                {/* ABOUT */}
                <li>
                  <Link
                    to="/about"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    About
                  </Link>
                </li>

                {/* RESOURCES */}
                <li>
                  <Link
                    to="/resources"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    Resources
                  </Link>
                </li>

                {/* CONTACT */}
                <li>
                  <Link
                    to="/contact"
                    onClick={handleNavigation}
                    className="
                      block rounded-md
                      px-3 py-2
                      text-white no-underline
                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    Contact
                  </Link>
                </li>

              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* =====================================================
          AUTOMATIC ENQUIRY POPUP
      ====================================================== */}

      {popupOpen && (
        <div
          className="
            fixed inset-0
            z-[99999]
            flex items-center justify-center
            bg-black/60
            px-4
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-popup-title"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closePopup();
            }
          }}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full max-w-lg
              overflow-y-auto
              rounded-xl
              bg-white
              p-6
              shadow-2xl
              sm:p-8
            "
            onMouseDown={(e) => e.stopPropagation()}
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={closePopup}
              aria-label="Close popup"
              className="
                absolute right-4 top-3
                z-10
                text-3xl font-bold
                text-gray-500
                hover:text-red-900
              "
            >
              ×
            </button>

            {/* TITLE */}
            <h2
              id="enquiry-popup-title"
              className="
                mb-2 pr-8
                text-2xl font-bold
                text-red-900
                sm:text-3xl
              "
            >
              Request a Call
            </h2>

            <p className="mb-5 text-sm text-gray-600 sm:text-base">
              Fill in your details and our team will contact you.
            </p>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="popup-full-name"
                  className="mb-1 block font-medium text-gray-800"
                >
                  Full Name
                </label>

                <input
                  id="popup-full-name"
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="
                    w-full rounded-md
                    border border-gray-300
                    px-4 py-3
                    outline-none
                    focus:border-red-900
                    focus:ring-1
                    focus:ring-red-900
                  "
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="popup-phone"
                  className="mb-1 block font-medium text-gray-800"
                >
                  Phone Number
                </label>

                <input
                  id="popup-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                  className="
                    w-full rounded-md
                    border border-gray-300
                    px-4 py-3
                    outline-none
                    focus:border-red-900
                    focus:ring-1
                    focus:ring-red-900
                  "
                />
              </div>

              {/* PREFERRED TIME */}
              <div>
                <label
                  htmlFor="popup-preferred-time"
                  className="mb-1 block font-medium text-gray-800"
                >
                  Preferred Time
                </label>

                <input
                  id="popup-preferred-time"
                  type="text"
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                  placeholder="Example: 5 PM - 7 PM"
                  className="
                    w-full rounded-md
                    border border-gray-300
                    px-4 py-3
                    outline-none
                    focus:border-red-900
                    focus:ring-1
                    focus:ring-red-900
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="popup-message"
                  className="mb-1 block font-medium text-gray-800"
                >
                  Message
                </label>

                <textarea
                  id="popup-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  className="
                    w-full
                    resize-none
                    rounded-md
                    border border-gray-300
                    px-4 py-3
                    outline-none
                    focus:border-red-900
                    focus:ring-1
                    focus:ring-red-900
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
                  transition
                  hover:bg-red-800
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>

            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          FLOATING CALL BUTTON
      ====================================================== */}

      <a
        href="tel:9911440545"
        aria-label="Call World Wise Education"
        className="
          floating
          z-[110]
          flex
          items-center
          justify-center
        "
      >
        <img
          src={phonecall}
          alt="Call us"
          className="h-6 w-6"
        />
      </a>

      {/* =====================================================
          ROUTES
      ====================================================== */}

      <main className="relative z-0">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* COURSES */}
          <Route
            path="/courses"
            element={<Courses />}
          />

          {/* CLAT */}
          <Route
            path="/clat"
            element={<Clat />}
          />

          {/* CUET */}
          <Route
            path="/cuet"
            element={<Cuet />}
          />

          {/* MOCK TESTS */}
          <Route
            path="/mock"
            element={<Mock />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* RESOURCES */}
          <Route
            path="/resources"
            element={<Resources />}
          />

          {/* BLOGS */}
          <Route
            path="/blogs"
            element={<Blogs />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* BROCHURE */}
          <Route
            path="/brochure"
            element={<Brochure />}
          />

          {/* CLAT CONTENT */}
          <Route
            path="/clatContent"
            element={<ClatContent />}
          />

          {/* INDIVIDUAL COURSE */}
          <Route
            path="/courses/:slug"
            element={<CourseContent />}
          />

          {/* INDIVIDUAL BLOG */}
          <Route
            path="/blogs/:slug"
            element={<BlogContent />}
          />

        </Routes>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </div>
  );
};

export default App;