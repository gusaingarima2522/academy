import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

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

import "./index.css";

const App = () => {

  // =====================================================
  // NAVBAR STATES
  // =====================================================

  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);


  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMobileMenu = () => {

    setMenuOpen(false);
    setCoursesOpen(false);

  };



  return (

    <>

      <div className="min-h-screen bg-white">


        {/* =====================================================
            HEAD
        ====================================================== */}

        <div className="relative z-[9998] pointer-events-auto">
          <Head />
        </div>

        {/* =====================================================
            NAVBAR
        ====================================================== */}

        <nav className="sticky top-0 z-[9998] relative w-full bg-red-900 text-white pointer-events-auto">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex h-16 items-center justify-between gap-2">


              {/* =================================================
                  LOGO
              ================================================== */}

              <div className="flex items-center gap-2">

                <Link
                  to="/"
                  className="shrink-0"
                  onClick={closeMobileMenu}
                >

                  <img
                    src={logo}
                    alt="World Wise Education"
                    className="h-10 w-10 rounded-full border-2 border-white bg-white object-cover sm:h-12 sm:w-12"
                  />

                </Link>


                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="whitespace-nowrap text-lg font-bold text-white no-underline sm:text-xl"
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
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none lg:hidden"
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

              <div className="relative z-[9998] hidden items-center lg:flex pointer-events-auto">
                <ul className="flex items-center space-x-2">

                  {/* HOME */}

                  <li>

                    <Link
                      to="/"
                      className="block rounded-md px-3 py-2 text-white no-underline shadow-md transition-shadow duration-300 hover:bg-gray-100 hover:text-black hover:shadow-xl"
                    >
                      Home
                    </Link>

                  </li>


                  {/* COURSES */}

<li
  className="relative"
  onMouseEnter={() => setCoursesOpen(true)}
  onMouseLeave={() => setCoursesOpen(false)}
>
  {/* Courses Button */}
  <button
    type="button"
    className="flex items-center gap-1 rounded-md px-3 py-2 text-white
               shadow-md transition-all duration-300
               hover:bg-gray-100 hover:text-black hover:shadow-xl"
  >
    Courses

    <svg
      className={`h-4 w-4 transition-transform duration-300 ease-in-out ${
        coursesOpen ? "rotate-180" : "rotate-0"
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

  {/* Dropdown */}
  <ul
    className={`
      absolute right-0 mt-2 w-56 rounded-md bg-white py-2 shadow-xl
      transition-all duration-300 ease-out
      ${
        coursesOpen
          ? "visible translate-y-0 scale-100 opacity-100"
          : "invisible -translate-y-2 scale-95 opacity-0"
      }
    `}
  >
    <li>
      <Link
        to="/clat"
        className="block px-4 py-2 text-gray-700 no-underline
                   transition-all duration-200
                   hover:bg-gray-100 hover:pl-6 hover:text-red-900"
      >
        CLAT Courses
      </Link>
    </li>

    <li>
      <Link
        to="/cuet"
        className="block px-4 py-2 text-gray-700 no-underline
                   transition-all duration-200
                   hover:bg-gray-100 hover:pl-6 hover:text-red-900"
      >
        CUET Courses
      </Link>
    </li>

    <li>
      <Link
        to="/mock"
        className="block px-4 py-2 text-gray-700 no-underline
                   transition-all duration-200
                   hover:bg-gray-100 hover:pl-6 hover:text-red-900"
      >
        Mock Tests
      </Link>
    </li>
  </ul>
</li>
                  {/* BLOGS */}

                    <li>

                      <Link
                        to="/blogs"
                        className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
                      >
                        Blogs
                      </Link>

                    </li>


                    {/* ABOUT */}

                    <li>

                      <Link
                        to="/about"
                        className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
                      >
                        About
                      </Link>

                    </li>


                    {/* RESOURCES */}

                    <li>

                      <Link
                        to="/resources"
                        className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
                      >
                        Resources
                      </Link>

                    </li>


                    {/* CONTACT */}

                    <li>

                      <Link
                        to="/contact"
                        className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
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

              <div className="relative z-50 bg-red-900 pb-4 lg:hidden">

                <ul className="space-y-1">

                  {/* HOME */}

                  <li>

                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
                    >
                      Home
                    </Link>

                  </li>


                  {/* MOBILE COURSES */}

                  <li>

                    <button
                      type="button"
                      onClick={() =>
                        setCoursesOpen(!coursesOpen)
                      }
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-white hover:bg-gray-100 hover:text-black"
                    >

                      <span>
                        Courses
                      </span>


                      <svg
                        className={`h-4 w-4 transition-transform ${coursesOpen
                          ? "rotate-180"
                          : ""
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
                          to="/cuet"
                          onClick={closeMobileMenu}
                          className="block rounded-md px-3 py-2 text-sm text-gray-200 no-underline hover:bg-gray-100 hover:text-black"
                        >
                          CUET Courses
                        </Link>


                        <Link
                          to="/clat"
                          onClick={closeMobileMenu}
                          className="block rounded-md px-3 py-2 text-sm text-gray-200 no-underline hover:bg-gray-100 hover:text-black"
                        >
                          CLAT Courses
                        </Link>


                        <Link
                          to="/mock"
                          onClick={closeMobileMenu}
                          className="block rounded-md px-3 py-2 text-sm text-gray-200 no-underline hover:bg-gray-100 hover:text-black"
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
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
                    >
                      Blogs
                    </Link>

                  </li>


                  {/* ABOUT */}

                  <li>

                    <Link
                      to="/about"
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
                    >
                      About
                    </Link>

                  </li>


                  {/* RESOURCES */}

                  <li>

                    <Link
                      to="/resources"
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
                    >
                      Resources
                    </Link>

                  </li>


                  {/* CONTACT */}

                  <li>

                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-white no-underline hover:bg-gray-100 hover:text-black"
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
            REQUEST FOR CALL POPUP
        ====================================================== */}

        {/* {popupOpen && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4"
            style={{
              pointerEvents: "auto",
            }}
          >
            {/* Popup Form */}
            {/* <div
              className="relative z-[100000] w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              {/* <button
                type="button"
                onClick={closePopup}
                className="absolute right-4 top-3 text-2xl font-bold text-gray-600 hover:text-red-900"
              >
                ×
              </button> */}

              {/* Heading */}
              {/* <h2 className="mb-2 text-2xl font-bold text-red-900">
                Request a Call
              </h2>

              <p className="mb-5 text-gray-600">
                Fill in your details and our team will contact you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name */}
                {/* <div>
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
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-red-900"
                  />
                </div> */}

                {/* Phone */}
                {/* <div>
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
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-red-900"
                  />
                </div> */}

                {/* Preferred Time */}
                {/* <div>
                  <label className="mb-1 block font-medium text-gray-800">
                    Preferred Time
                  </label>

                  <input
                    type="text"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    placeholder="Example: 5 PM - 7 PM"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-red-900"
                  />
                </div> */}

                {/* Message */}
                {/* <div>
                  <label className="mb-1 block font-medium text-gray-800">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-red-900"
                  />
                </div> */}

                {/* Error */}
                {/* {error && (
                  <p className="rounded-md bg-red-100 p-2 text-sm text-red-700">
                    {error}
                  </p>
                )} */}

                {/* Success */}
                {/* {success && (
                  <p className="rounded-md bg-green-100 p-2 text-sm text-green-700">
                    {success}
                  </p>
                )} */}

                {/* Submit */}
                {/* <button
                  type="submit"
                  className="w-full rounded-md bg-red-900 py-3 font-semibold text-white transition hover:bg-red-800"
                >
                  Submit Request
                </button> */}

              {/* </form>
            </div> 
          </div>  */}
        

        {/* =====================================================
            FLOATING CALL BUTTON
        ====================================================== */}

        <a
          href="tel:9911440545"
          className="floating z-[110] flex items-center bg-white justify-center"
        >

          <img
            src={phonecall}
            alt="Call us"
            className="h-6 w-6 "
          />

        </a>


        {/* =====================================================
            PAGES
        ====================================================== */}

        <main className="relative z-0">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/courses"
              element={<Courses />}
            />

            <Route
              path="/clat"
              element={<Clat />}
            />

            <Route
              path="/cuet"
              element={<Cuet />}
            />

            <Route
              path="/mock"
              element={<Mock />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/resources"
              element={<Resources />}
            />

            <Route
              path="/blogs"
              element={<Blogs />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/brochure"
              element={<Brochure />}
            />

            <Route
              path="/clatContent"
              element={<ClatContent />}
            />

            <Route
              path="/courses/:slug"
              element={<CourseContent />}
            />

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

    </>

  );

};

export default App;
