import React from "react";
import "./section.css";

const Clat = () => {
  return (
    <section className="clat-hero">

      {/* Dark Overlay */}
      <div className="clat-overlay"></div>

      <div className="clat-hero-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}
        <div className="clat-hero-content">

          <h1>
            BEST CLAT COACHING IN
            <br />
            DELHI
          </h1>

          <div className="clat-line"></div>

          <p>
            CLAT 2027 is the exam for admission in undergraduate and
            postgraduate law programs of India. There are 120 questions in
            CLAT and the test duration is 2 hours, which means that you have
            1 minute per question to crack the exam. The CLAT preparation is
            no joke and needs to be done in the best way as every section
            requires a specific strategy or trick for the question to be
            completed within a minute.
          </p>

        </div>


        {/* =================================
            RIGHT FORM
        ================================= */}
        <div className="clat-contact-wrapper">

          <form className="clat-contact-form">

            <h2>Get in Touch</h2>

            <div className="clat-form-line"></div>

            <div className="clat-field">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
              />
            </div>

            <div className="clat-field">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="clat-field">
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="clat-field">
              <input
                type="text"
                name="callTime"
                placeholder="Preferred Time for a Call"
              />
            </div>

            <div className="clat-field">
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


      {/* =================================
          FLOATING CALL BUTTON

      {/* =================================
          FLOATING WHATSAPP BUTTON
      ================================= */}

    </section>
  );
};

export default Clat;