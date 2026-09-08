import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo / About */}
          <div>
            <h4 className="text-2xl font-bold mb-3">
              My App
            </h4>

            <p className="text-gray-400">
              Learn, grow and build your future with us.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">
              Quick Links
            </h5>

            <ul className="space-y-2 list-none p-0 m-0">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>


          {/* Account */}
          <div>
            <h5 className="text-lg font-semibold mb-4">
              Account
            </h5>

            <ul className="space-y-2 list-none p-0 m-0">

              <li>
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/judiciary"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  Judiciary Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/clat"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  CLAT Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/du-llb"
                  className="text-gray-400 hover:text-white transition no-underline"
                >
                  DU LLB Courses
                </Link>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom Line */}
        <hr className="border-gray-700 my-8" />

        <div className="text-center">
          <p className="m-0 text-gray-400 text-sm">
            © 2026 My App. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;