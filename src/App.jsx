import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Brochure from "./pages/Brochure";
import Head from "./pages/Head";
import './index.css'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <>
      <div>
        <Head />

        {/* Navbar */}
        <nav className="bg-gray-900 text-white sticky top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link
                to="/"
                className="text-xl font-bold text-white no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                My App
              </Link>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
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
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Home
                    </Link>
                  </li>

                  {/* Courses Dropdown */}
                  <li className="relative">
                    <button
                      onClick={() => setCoursesOpen(!coursesOpen)}
                      className="flex items-center gap-1 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Courses

                      <svg
                        className={`w-4 h-4 transition-transform ${
                          coursesOpen ? "rotate-180" : ""
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
                            to="/courses/judiciary"
                            onClick={() => setCoursesOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                          >
                            Judiciary Courses
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/courses/clat"
                            onClick={() => setCoursesOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                          >
                            CLAT Courses
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/courses/du-llb"
                            onClick={() => setCoursesOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                          >
                            DU LLB Courses
                          </Link>
                        </li>

                      </ul>
                    )}
                  </li>

                  {/* Blogs */}
                  <li>
                    <Link
                      to="/blogs"
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Blogs
                    </Link>
                  </li>

                  {/* About */}
                  <li>
                    <Link
                      to="/about"
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      About
                    </Link>
                  </li>

                  {/* Login */}
                  <li>
                    <Link
                      to="/login"
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Login
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="lg:hidden pb-4">

                <ul className="space-y-1">

                  <li>
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Home
                    </Link>
                  </li>

                  {/* Mobile Courses */}
                  <li>
                    <button
                      onClick={() => setCoursesOpen(!coursesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                    >
                      Courses

                      <svg
                        className={`w-4 h-4 transition-transform ${
                          coursesOpen ? "rotate-180" : ""
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
                          to="/courses/judiciary"
                          onClick={() => setMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                          Judiciary Courses
                        </Link>

                        <Link
                          to="/courses/clat"
                          onClick={() => setMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                          CLAT Courses
                        </Link>

                        <Link
                          to="/courses/du-llb"
                          onClick={() => setMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                          DU LLB Courses
                        </Link>

                      </div>
                    )}
                  </li>

                  <li>
                    <Link
                      to="/blogs"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Blogs
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/about"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300" 
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md no-underline shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      Login
                    </Link>
                  </li>

                </ul>
              </div>
            )}

          </div>
        </nav>

        {/* Pages */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/judiciary" element={<Courses />} />
            <Route path="/courses/clat" element={<Courses />} />
            <Route path="/courses/du-llb" element={<Courses />} />

            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
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