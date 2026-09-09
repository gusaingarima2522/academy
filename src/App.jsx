import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import logoo from './assets/logoo.jpg'

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
// import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Brochure from "./pages/Brochure";
import Head from "./pages/Head";
import './index.css'
import Resources from "./pages/Resources";
import Clat from "./section/Clat";
import Cuet from "./section/Cuet";
import Mock from "./section/Mock";



const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white">
        <Head />

        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-red-900 text-white w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between gap-2 h-16">

              {/* Logo */}
              {/* Logo + Company Name */}
              <div className="flex items-center gap-2">

                <Link to="/" className="shrink-0">
                  <img
                    src={logoo}
                    alt="World Wise Education"
                    className="h-10 w-10 sm:h-12 sm:w-12 left-0 object-cover rounded-full border-2 border-white"
                  />
                </Link>

                <Link
                  to="/"
                  className="text-lg sm:text-xl font-bold text-white no-underline whitespace-nowrap"
                >
                  World Wise
                  <span className="text-red-400"> Education</span>
                </Link>

              </div>              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
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

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center">
                <ul className="flex items-center space-x-2">

                  {/* Home */}
                  <li>
                    <Link
                      to="/"
                      className="block px-3 py-2 text-white  hover:text-white hover:bg-gray-800 no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Home
                    </Link>
                  </li>

                  {/* Courses Dropdown */}
                  <li className="relative">
                    <button
                      onClick={() => setCoursesOpen(!coursesOpen)}
                      className="flex items-center gap-1 px-3 py-2 text-white  hover:text-white hover:bg-gray-800 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Courses

                      <svg
                        className={`w-4 h-4 transition-transform ${coursesOpen ? "rotate-180" : ""
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
                      <ul className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">

                        <li>
                          <Link
                            to="/clat"
                            onClick={() => setCoursesOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                          >
                            Clat Courses
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/cuet"
                            onClick={() => setCoursesOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                          >
                            Cuet Courses
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/mock"
                            onClick={() => setCoursesOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                          >
                            Mock Tests
                          </Link>
                        </li>

                      </ul>
                    )}
                  </li>

                  {/* Blogs */}
                  <li>
                    <Link
                      to="/blogs"
                      className="block px-3 py-2 text-white  hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Blogs
                    </Link>
                  </li>

                  {/* About */}
                  <li>
                    <Link
                      to="/about"
                      className="block px-3 py-2 text-white  hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources"
                      className="block px-3 py-2 text-white  hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Resources
                    </Link>
                  </li>

                  {/* contact */}
                  <li>
                    <Link
                      to="/contact"
                      className="block px-3 py-2 text-white  hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Contact
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            {menuOpen && (
              <div className="lg:hidden pb-4 relative z-50 bg-red-900">

                <ul className="space-y-1">

                  {/* Home */}
                  <li>
                    <Link
                      to="/"
                      onClick={() => {
                        setMenuOpen(false);
                        setCoursesOpen(false);
                      }}
                      className="block px-3 py-2 text-white hover:text-white hover:bg-gray-800 rounded-md no-underline transition"
                    >
                      Home
                    </Link>
                  </li>

                  {/* Courses */}
                  <li>
                    <button
                      type="button"
                      onClick={() => setCoursesOpen(!coursesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 text-white hover:bg-gray-800 rounded-md"
                    >
                      <span>Courses</span>

                      <svg
                        className={`w-4 h-4 transition-transform ${coursesOpen ? "rotate-180" : ""
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

                        {/* CUET */}
                        <Link
                          to="/cuet"
                          onClick={() => {
                            setMenuOpen(false);
                            setCoursesOpen(false);
                          }}
                          className="block px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-800 rounded-md no-underline"
                        >
                          CUET Courses
                        </Link>

                        {/* CLAT */}
                        <Link
                          to="/clat"
                          onClick={() => {
                            setMenuOpen(false);
                            setCoursesOpen(false);
                          }}
                          className="block px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-800 rounded-md no-underline"
                        >
                          CLAT Courses
                        </Link>

                        {/* Mock */}
                        <Link
                          to="/mock"
                          onClick={() => {
                            setMenuOpen(false);
                            setCoursesOpen(false);
                          }}
                          className="block px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-gray-800 rounded-md no-underline"
                        >
                          Mock Tests
                        </Link>

                      </div>
                    )}
                  </li>

                  {/* Blogs */}
                  <li>
                    <Link
                      to="/blogs"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md no-underline"
                    >
                      Blogs
                    </Link>
                  </li>

                  {/* About */}
                  <li>
                    <Link
                      to="/about"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md no-underline"
                    >
                      About
                    </Link>
                  </li>

                </ul>
              </div>
            )}
          </div>
        </nav>
        <a
          href="tel:9911440545"
          className="floating flex items-center justify-center"
        >
          ☎
        </a>

        {/* Pages */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/clat" element={<Clat />} />
            <Route path="/cuet" element={<Cuet />} />
            <Route path="/mock" element={<Mock />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brochure" element={<Brochure />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;