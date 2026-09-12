import React from "react";
import "./section.css";

const MockTest = () => {
  return (
    <section className="mock-hero">

      {/* Dark Overlay */}
      <div className="mock-overlay"></div>

      <div className="mock-hero-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}
        <div className="mock-hero-content">

          <h1>
            MOCK TEST
            <br />
            SERIES
          </h1>

          <div className="mock-line"></div>

          <p>
            Prepare for your competitive examinations with World Wise
            Academy's carefully designed mock test series. Our mock tests
            provide an exam-like experience to help students improve their
            speed, accuracy, time management, and overall performance.
          </p>

          <p>
            Practice questions based on the latest examination pattern,
            identify your strengths and weaknesses, and build the confidence
            required to perform your best on the actual exam day.
          </p>

        </div>


        {/* =================================
            RIGHT CONTENT
        ================================= */}
        <div className="mock-contact-wrapper">

          <div className="mock-contact-form">

            <h2>Start Your Mock Test</h2>

            <div className="mock-form-line"></div>

            <p>
              Test your preparation and take the next step towards your
              examination success.
            </p>

            <div className="mock-test-option">
              <h3>CLAT Mock Tests</h3>

              <p>
                Practice English, Current Affairs, Legal Reasoning,
                Logical Reasoning, and Quantitative Techniques.
              </p>

              <button type="button">
                Start CLAT Test
              </button>
            </div>


            <div className="mock-test-option">
              <h3>CUET Mock Tests</h3>

              <p>
                Practice English, General Test, and subject-specific
                questions according to your preparation requirements.
              </p>

              <button type="button">
                Start CUET Test
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MockTest;