import { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

import logo from "./assets/logo.png";
import phonecall from "./assets/phonecall.png";

import whatsapp from "./assets/whatsapp.png";
import BlogContent from "./pages/BlogContent";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Brochure from "./pages/Brochure";
import Head from "./pages/Head";
import { ResourceRoutes } from "./resources";
import JeeMockTest from "./pages/JeeMockTest";
import JeeMockSubject from "./pages/JeeMockSubject";
import JeeMockTestPage from "./assets/JeeMockTestPage";
import ClatPyqYears from "./pages/ClatPyqYears";
import ClatPyqYear from "./pages/ClatPyqYear";
import ClatPyqCategory from "./pages/ClatPyqCategory";
import ClatPyqExamPage from "./pages/ClatPyqExamPage";
import ExamPyqYears from "./pages/ExamPyqYears";
import ExamPyqYear from "./pages/ExamPyqYear";
import ExamPyqCategory from "./pages/ExamPyqCategory";
import ExamPyqExamPage from "./pages/ExamPyqExamPage";

import Clat from "./section/Clat";
import Cuet from "./section/Cuet";
import Mock from "./section/Mock";
import ScrollToHash from "./section/ScrolltoHash";

import ClatContent from "./pages/ClatContent";
import CourseContent from "./pages/CourseContent";
import LegalPage from "./pages/LegalPage";
import NotificationDetailPage from "./pages/NotificationDetailPage";
import Notifications from "./pages/Notifications";
import CookieConsent from "./components/CookieConsent";
import SeoManager from "./components/SeoManager";

import "./index.css";

const App = () => {
  const location = useLocation();
  const isExamRoute = /^\/(?:jeemocktest\/[^/]+\/test\/\d+|clat-pyq\/\d+\/(?:ug|pg)\/[^/]+|(?:jee|cuet)-pyq\/\d+\/[^/]+\/[^/]+)\/?$/.test(
    location.pathname
  );
  const hideSiteChrome = isExamRoute;

  useEffect(() => {
    if (!isExamRoute) return undefined;

    const root = document.documentElement;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverscroll = root.style.overscrollBehavior;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;

    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    root.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";

    return () => {
      root.style.overflow = previousRootOverflow;
      document.body.style.overflow = previousBodyOverflow;
      root.style.overscrollBehavior = previousRootOverscroll;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
    };
  }, [isExamRoute]);

  // =====================================================
  // NAVBAR STATES
  // =====================================================

  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mockOpen, setMockOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [whatsappVisible, setWhatsappVisible] = useState(true);
  const [callVisible, setCallVisible] = useState(true);
  const [finishedPageKey, setFinishedPageKey] = useState(null);
  const pageLoading = finishedPageKey !== location.key;

  useEffect(() => {
    const timer = window.setTimeout(
      () => setFinishedPageKey(location.key),
      1000
    );

    return () => window.clearTimeout(timer);
  }, [location.key]);

  useEffect(() => {
    if (location.pathname === "/contact") return;

    window.scrollTo(0, 0);
  }, [location.key, location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setCoursesOpen(false);
        setMockOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // =====================================================
  // ROUTE NAVIGATION HELPER
  // =====================================================

  const handleNavigation = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
    setMockOpen(false);
    setResourceOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <SeoManager />
      {/* =================================================
          TOP HEAD
      ================================================== */}

      {!hideSiteChrome && <Head />}

      {/* =================================================
          NAVBAR
      ================================================== */}

      {!isExamRoute && (
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
                MOBILE NOTIFICATIONS + HAMBURGER
            ================================================== */}

              <div className="flex items-center gap-1 lg:hidden">
                <Link
                  to="/notifications"
                  onClick={handleNavigation}
                  aria-label="View all notifications"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white no-underline hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
                  </svg>
                </Link>

                <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                  setCoursesOpen(false);
                  setMockOpen(false);
                  setResourceOpen(false);
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
              </div>

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

                  <li className="relative">
                    <button
                      type="button"
                      aria-controls="desktop-courses-menu"
                      aria-expanded={coursesOpen}
                      onClick={() => {
                        setCoursesOpen((prev) => !prev);
                        setMockOpen(false);
                        setResourceOpen(false);
                      }}
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
                      focus-visible:outline focus-visible:outline-2
                      focus-visible:outline-offset-2 focus-visible:outline-yellow-300
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
                        id="desktop-courses-menu"
                        aria-label="Course links"
                        className="
                        absolute right-0 top-full z-[10000]
                        w-64 overflow-hidden
                        rounded-xl border border-gray-100
                        bg-white p-2 text-gray-800
                        shadow-2xl shadow-black/20
                        ring-1 ring-black/5
                      "
                      >
                        <li>
                          <Link
                            to="/courses"
                            onClick={handleNavigation}
                            className="
                            block rounded-lg px-4 py-3
                            text-sm font-bold text-red-900 no-underline
                            transition-colors hover:bg-red-50
                            focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-red-800
                          "
                          >
                            <span className="block">All Courses</span>
                            <span className="mt-1 block text-xs font-normal text-gray-500">
                              Browse every preparation option
                            </span>
                          </Link>
                        </li>
                        <li className="my-1 border-t border-gray-100" aria-hidden="true" />
                        <li>
                          <Link
                            to="/clat"
                            onClick={handleNavigation}
                            className="
                            block rounded-lg px-4 py-3
                            text-sm font-semibold text-gray-700 no-underline
                            transition-colors hover:bg-red-50 hover:text-red-900
                            focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-red-800
                          "
                          >
                            CLAT Preparation
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/cuet"
                            onClick={handleNavigation}
                            className="
                            block rounded-lg px-4 py-3
                            text-sm font-semibold text-gray-700 no-underline
                            transition-colors hover:bg-red-50 hover:text-red-900
                            focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-red-800
                          "
                          >
                            CUET Preparation
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

                  {/* MOCK TESTS DROPDOWN */}
                  <li className="relative">
                    <button
                      type="button"
                      aria-controls="desktop-mock-menu"
                      aria-expanded={mockOpen}
                      onClick={() => {
                        setMockOpen((prev) => !prev);
                        setCoursesOpen(false);
                        setResourceOpen(false);
                      }}
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
                      focus-visible:outline focus-visible:outline-2
                      focus-visible:outline-offset-2 focus-visible:outline-yellow-300
                    "
                    >
                      Mock Tests

                      <svg
                        className={`h-4 w-4 transition-transform ${mockOpen ? "rotate-180" : ""
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

                    {mockOpen && (
                      <ul
                        id="desktop-mock-menu"
                        aria-label="Mock test links"
                        className="
                        absolute right-0 top-full z-[10000]
                        w-64 overflow-hidden
                        rounded-xl border border-gray-100
                        bg-white p-2 text-gray-800
                        shadow-2xl shadow-black/20
                        ring-1 ring-black/5
                      "
                      >
                        <li>
                          <Link
                            to="/mock#clat-mock"
                            onClick={handleNavigation}
                            className="
                            block rounded-lg px-4 py-3
                            text-sm font-semibold text-gray-700 no-underline
                            transition-colors hover:bg-red-50 hover:text-red-900
                            focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-red-800
                          "
                          >
                            CLAT Mock Tests
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/mock#cuet-mock"
                            onClick={handleNavigation}
                            className="
                            block rounded-lg px-4 py-3
                            text-sm font-semibold text-gray-700 no-underline
                            transition-colors hover:bg-red-50 hover:text-red-900
                            focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-red-800
                          "
                          >
                            CUET Mock Tests
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/jeemocktest"
                            onClick={handleNavigation}
                            className="
                            block rounded-lg px-4 py-3
                            text-sm font-semibold text-gray-700 no-underline
                            transition-colors hover:bg-red-50 hover:text-red-900
                            focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-red-800
                          "
                          >
                            JEE Mock Tests
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* RESOURCES DROPDOWN */}
                  <li className="relative">
                    <button
                      type="button"
                      aria-controls="desktop-resources-menu"
                      aria-expanded={resourceOpen}
                      onClick={() => {
                        setResourceOpen((prev) => !prev);
                        setCoursesOpen(false);
                        setMockOpen(false);
                      }}
                      className="flex items-center gap-1 rounded-md px-3 py-2 text-white shadow-md transition-shadow duration-300 hover:bg-gray-100 hover:text-black hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                    >
                      Resources
                      <svg className={`h-4 w-4 transition-transform ${resourceOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {resourceOpen && (
                      <ul
                        id="desktop-resources-menu"
                        aria-label="Study resource links"
                        className="absolute right-0 top-full z-[10000] w-64 overflow-hidden rounded-xl border border-gray-100 bg-white p-2 text-gray-800 shadow-2xl shadow-black/20 ring-1 ring-black/5"
                      >
                        <li>
                          <Link to="/resources" onClick={handleNavigation} className="block rounded-lg px-4 py-3 text-sm font-bold text-red-900 no-underline transition-colors hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-800">
                            <span className="block">All Resources</span>
                            <span className="mt-1 block text-xs font-normal text-gray-500">Browse every study resource</span>
                          </Link>
                        </li>
                        <li className="my-1 border-t border-gray-100" aria-hidden="true" />
                        <li><Link to="/resources/clat" onClick={handleNavigation} className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 no-underline transition-colors hover:bg-red-50 hover:text-red-900">CLAT</Link></li>
                        <li><Link to="/resources/cuet" onClick={handleNavigation} className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 no-underline transition-colors hover:bg-red-50 hover:text-red-900">CUET</Link></li>
                        <li><Link to="/resources/jee" onClick={handleNavigation} className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 no-underline transition-colors hover:bg-red-50 hover:text-red-900">JEE</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* CONTACT */}
                  <li>
                    <Link
                      to="/contact#contact-form"

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

                  {/* NOTIFICATIONS */}
                  <li>
                    <Link
                      to="/notifications"
                      onClick={handleNavigation}
                      aria-label="View all notifications"
                      title="All notifications"
                      className="relative flex h-10 w-10 items-center justify-center rounded-md text-white no-underline hover:bg-gray-100 hover:text-red-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
                      </svg>
                      <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border border-red-900 bg-yellow-300" aria-hidden="true" />
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
                      aria-controls="mobile-courses-menu"
                      aria-expanded={coursesOpen}
                      onClick={() => {
                        setCoursesOpen((prev) => !prev);
                        setMockOpen(false);
                        setResourceOpen(false);
                      }}
                      className="
                      flex w-full
                      items-center justify-between
                      rounded-md
                      px-3 py-2
                      text-white
                      hover:bg-gray-100
                      hover:text-black
                      focus-visible:outline focus-visible:outline-2
                      focus-visible:outline-offset-2 focus-visible:outline-yellow-300
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
                      <div
                        id="mobile-courses-menu"
                        className="ml-2 mt-2 space-y-1 rounded-xl border border-white/10 bg-white/10 p-2"
                      >

                        <Link
                          to="/courses"
                          onClick={handleNavigation}
                          className="
                          block rounded-lg
                          px-4 py-3
                          text-sm font-semibold text-white
                          no-underline transition-colors
                          hover:bg-white hover:text-red-900
                          focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-yellow-300
                        "
                        >
                          All Courses
                        </Link>

                        <Link
                          to="/clat"
                          onClick={handleNavigation}
                          className="
                          block rounded-lg
                          px-4 py-3
                          text-sm text-gray-100
                          no-underline transition-colors
                          hover:bg-white hover:text-red-900
                          focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-yellow-300
                        "
                        >
                          CLAT Preparation
                        </Link>

                        <Link
                          to="/cuet"
                          onClick={handleNavigation}
                          className="
                          block rounded-lg
                          px-4 py-3
                          text-sm text-gray-100
                          no-underline transition-colors
                          hover:bg-white hover:text-red-900
                          focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-yellow-300
                        "
                        >
                          CUET Preparation
                        </Link>

                      </div>
                    )}
                  </li>

                  {/* MOBILE MOCK TESTS */}
                  <li>
                    <button
                      type="button"
                      aria-controls="mobile-mock-menu"
                      aria-expanded={mockOpen}
                      onClick={() => {
                        setMockOpen((prev) => !prev);
                        setCoursesOpen(false);
                        setResourceOpen(false);
                      }}
                      className="
                      flex w-full
                      items-center justify-between
                      rounded-md
                      px-3 py-2
                      text-white
                      hover:bg-gray-100
                      hover:text-black
                      focus-visible:outline focus-visible:outline-2
                      focus-visible:outline-offset-2 focus-visible:outline-yellow-300
                    "
                    >
                      <span>Mock Tests</span>

                      <svg
                        className={`h-4 w-4 transition-transform ${mockOpen ? "rotate-180" : ""
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

                    {mockOpen && (
                      <div
                        id="mobile-mock-menu"
                        className="ml-2 mt-2 space-y-1 rounded-xl border border-white/10 bg-white/10 p-2"
                      >

                        <Link
                          to="/mock#clat-mock"
                          onClick={handleNavigation}
                          className="
                          block rounded-lg
                          px-4 py-3
                          text-sm text-gray-100
                          no-underline transition-colors
                          hover:bg-white hover:text-red-900
                          focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-yellow-300
                        "
                        >
                          CLAT Mock Tests
                        </Link>

                        <Link
                          to="/mock#cuet-mock"
                          onClick={handleNavigation}
                          className="
                          block rounded-lg
                          px-4 py-3
                          text-sm text-gray-100
                          no-underline transition-colors
                          hover:bg-white hover:text-red-900
                          focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-yellow-300
                        "
                        >
                          CUET Mock Tests
                        </Link>

                        <Link
                          to="/jeemocktest"
                          onClick={handleNavigation}
                          className="
                          block rounded-lg
                          px-4 py-3
                          text-sm text-gray-100
                          no-underline transition-colors
                          hover:bg-white hover:text-red-900
                          focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-yellow-300
                        "
                        >
                          JEE Mock Tests
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

                  {/* MOBILE RESOURCES */}
                  <li>
                    <button
                      type="button"
                      aria-controls="mobile-resources-menu"
                      aria-expanded={resourceOpen}
                      onClick={() => {
                        setResourceOpen((prev) => !prev);
                        setCoursesOpen(false);
                        setMockOpen(false);
                      }}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-white hover:bg-gray-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                    >
                      <span>Resources</span>
                      <svg className={`h-4 w-4 transition-transform ${resourceOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {resourceOpen && (
                      <div id="mobile-resources-menu" className="ml-2 mt-2 space-y-1 rounded-xl border border-white/10 bg-white/10 p-2">
                        <Link to="/resources" onClick={handleNavigation} className="block rounded-lg px-4 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-white hover:text-red-900">All Resources</Link>
                        <Link to="/resources/clat" onClick={handleNavigation} className="block rounded-lg px-4 py-3 text-sm text-gray-100 no-underline transition-colors hover:bg-white hover:text-red-900">CLAT</Link>
                        <Link to="/resources/cuet" onClick={handleNavigation} className="block rounded-lg px-4 py-3 text-sm text-gray-100 no-underline transition-colors hover:bg-white hover:text-red-900">CUET</Link>
                        <Link to="/resources/jee" onClick={handleNavigation} className="block rounded-lg px-4 py-3 text-sm text-gray-100 no-underline transition-colors hover:bg-white hover:text-red-900">JEE</Link>
                      </div>
                    )}
                  </li>

                  {/* CONTACT */}
                  <li>
                    <Link
                      to="/contact#contact-form"
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
      )}

      {/* =====================================================
          FLOATING WHATSAPP BUTTON
      ====================================================== */}
      {whatsappVisible && (
        <div className="floating-item floating-item--whatsapp">
          <a
            href="https://wa.me/919911440545"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with World Wise Education on WhatsApp"
            className="floating"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
            />
          </a>
          <div className="floating-close-wrap">
            <button
              type="button"
              className="floating-close"
              aria-label="Close WhatsApp button"
              onClick={() => setWhatsappVisible(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}


      {/* =====================================================
          FLOATING CALL BUTTON
      ====================================================== */}

      {!isExamRoute && callVisible && (
        <div className="floating-item">
          <a
            href="tel:9911440545"
            aria-label="Call World Wise Education"
            className="floating"
          >
            <img
              src={phonecall}
              alt="Call us"
            />
          </a>
          <div className="floating-close-wrap">
            <button
              type="button"
              className="floating-close"
              aria-label="Close call button"
              onClick={() => setCallVisible(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          ROUTES
      ====================================================== */}

      <main className={isExamRoute ? "" : "relative z-0"}>
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

          <Route path="/clat-pyq" element={<ClatPyqYears />} />
          <Route path="/clat-pyq/:year" element={<ClatPyqYear />} />
          <Route path="/clat-pyq/:year/:category" element={<ClatPyqCategory />} />
          <Route path="/clat-pyq/:year/:category/:setName" element={<ClatPyqExamPage key={location.pathname} />} />

          {/* JEE / CUET PYQ ONLINE */}
          <Route path="/jee-pyq" element={<ExamPyqYears examId="jee" />} />
          <Route path="/jee-pyq/:year" element={<ExamPyqYear examId="jee" />} />
          <Route path="/jee-pyq/:year/:category" element={<ExamPyqCategory examId="jee" />} />
          <Route path="/jee-pyq/:year/:category/:setName" element={<ExamPyqExamPage examId="jee" key={location.pathname} />} />

          <Route path="/cuet-pyq" element={<ExamPyqYears examId="cuet" />} />
          <Route path="/cuet-pyq/:year" element={<ExamPyqYear examId="cuet" />} />
          <Route path="/cuet-pyq/:year/:category" element={<ExamPyqCategory examId="cuet" />} />
          <Route path="/cuet-pyq/:year/:category/:setName" element={<ExamPyqExamPage examId="cuet" key={location.pathname} />} />

          {/* JEE MOCK TESTS */}
          <Route
            path="/jeemocktest"
            element={<JeeMockTest />}
          />

          <Route
            path="/jeemocktest/:slug"
            element={<JeeMockSubject />}
          />

          <Route
            path="/jeemocktest/:slug/test/:number"
            element={<JeeMockTestPage key={location.pathname} />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* RESOURCES */}
          <Route path="/resources/*" element={<ResourceRoutes />} />

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

          {/* NOTIFICATIONS */}
          <Route
            path="/notifications"
            element={<Notifications />}
          />
          <Route
            path="/notifications/:slug"
            element={<NotificationDetailPage />}
          />

          {/* LEGAL INFORMATION */}
          <Route
            path="/privacy-policy"
            element={<LegalPage type="privacy" />}
          />
          <Route
            path="/cookie-policy"
            element={<LegalPage type="cookies" />}
          />
          <Route
            path="/terms-of-service"
            element={<LegalPage type="terms" />}
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

      {!hideSiteChrome && <Footer />}

      <ScrollToHash />

      {pageLoading && !isExamRoute && (
        <div
          className="page-loading-overlay"
          role="status"
          aria-live="polite"
          aria-label="Loading page"
        >
          <div className="page-loading-header">
            <div className="page-loading-brand">
              <span className="page-skeleton-shimmer page-loading-logo" />
              <span className="page-skeleton-shimmer page-loading-brand-name" />
            </div>
            <div className="page-loading-nav">
              <span className="page-skeleton-shimmer" />
              <span className="page-skeleton-shimmer" />
              <span className="page-skeleton-shimmer" />
              <span className="page-skeleton-shimmer" />
              <span className="page-skeleton-shimmer" />
            </div>
          </div>
          <div className="page-loading-content">
            <span className="page-skeleton-shimmer page-loading-eyebrow" />
            <span className="page-skeleton-shimmer page-loading-title" />
            <span className="page-skeleton-shimmer page-loading-description" />
            <div className="page-loading-hero page-skeleton-shimmer" />
            <div className="page-loading-cards">
              {[1, 2, 3].map((item) => (
                <div className="page-loading-card" key={item}>
                  <span className="page-skeleton-shimmer page-loading-card-image" />
                  <span className="page-skeleton-shimmer page-loading-card-title" />
                  <span className="page-skeleton-shimmer page-loading-card-line" />
                  <span className="page-skeleton-shimmer page-loading-card-line page-loading-card-line-short" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <CookieConsent />
    </div>
  );
};

export default App;
