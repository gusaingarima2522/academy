import React from "react";
import "./section.css";

const Cuet = () => {
  return (
    <section className="cuet-hero">

      {/* Dark Overlay */}
      <div className="cuet-overlay"></div>

      <div className="cuet-hero-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}
        <div className="cuet-hero-content">

          <h1>
            BEST CUET COACHING IN
            <br />
            DELHI
          </h1>

          <div className="cuet-line"></div>

          <p>
            CUET is the Common University Entrance Test conducted for
            admission to undergraduate programmes in universities across
            India. Preparing for CUET requires strong concepts, regular
            practice, proper time management, and a focused strategy for
            different sections of the examination.
          </p>

        </div>


        {/* =================================
            RIGHT FORM
        ================================= */}
        <div className="cuet-contact-wrapper">

          <form className="cuet-contact-form">

            <h2>Get in Touch</h2>

            <div className="cuet-form-line"></div>

            <div className="cuet-field">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
              />
            </div>

            <div className="cuet-field">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="cuet-field">
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="cuet-field">
              <input
                type="text"
                name="callTime"
                placeholder="Preferred Time for a Call"
              />
            </div>

            <div className="cuet-field">
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="3"
              ></textarea>
            </div>

            <button type="submit">
              Submit
            </button>

          </form>

        </div>

      </div>



    </section>
  );
};

export default Cuet;