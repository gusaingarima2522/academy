import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer bg-dark text-white">

      <div className="container py-4">

        <div className="row">

          {/* Logo / About */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h4 className="footer-logo">
              My App
            </h4>

            <p className="text-secondary">
              Learn, grow and build your future with us.
            </p>
          </div>


          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">

            <h5>Quick Links</h5>

            <ul className="footer-links list-unstyled">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/courses">Courses</Link>
              </li>

              <li>
                <Link to="/blogs">Blogs</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

          </div>


          {/* Account */}
          <div className="col-12 col-md-4">

            <h5>Account</h5>

            <ul className="footer-links list-unstyled">

              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/courses/judiciary">
                  Judiciary Courses
                </Link>
              </li>

              <li>
                <Link to="/courses/clat">
                  CLAT Courses
                </Link>
              </li>

              <li>
                <Link to="/courses/du-llb">
                  DU LLB Courses
                </Link>
              </li>

            </ul>

          </div>

        </div>


        {/* Bottom */}
        <hr className="footer-line" />

        <div className="text-center">
          <p className="mb-0 text-secondary">
            © 2026 My App. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer