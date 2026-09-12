import React from "react";
import "../index.css";

const ClatContent = () => {
  return (
    <div className="exam-page">

      {/* ================= HERO ================= */}
      <section className="exam-hero clat-hero">

        <div className="exam-hero-content">
          <span className="exam-badge">CLAT PREPARATION</span>

          <h1>
            Prepare for CLAT with
            <span> World Wise Academy</span>
          </h1>

          <p>
            Build strong concepts, improve your reasoning skills and prepare
            confidently for the Common Law Admission Test.
          </p>

          <div className="hero-buttons">
            <a href="#clat-enquiry" className="primary-btn">
              Enquire Now
            </a>

            <a href="#clat-courses" className="secondary-btn">
              Explore Course
            </a>
          </div>
        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="exam-about" id="clat-courses">

        <div className="exam-about-content">

          <span className="section-label">ABOUT CLAT</span>

          <h2>CLAT Preparation at World Wise Academy</h2>

          <p>
            World Wise Academy offers focused CLAT preparation designed to
            help students prepare systematically for the Common Law Admission
            Test (CLAT).
          </p>

          <p>
            Our preparation focuses on conceptual clarity, regular practice,
            reasoning ability, reading skills and effective time management.
          </p>

          <p>
            Students receive structured guidance, practice material, mock
            tests and performance-based preparation to help them improve
            throughout their CLAT journey.
          </p>

        </div>

        <div className="exam-about-box">

          <h3>CLAT Preparation Includes</h3>

          <ul>
            <li>English Language</li>
            <li>Current Affairs & General Knowledge</li>
            <li>Legal Reasoning</li>
            <li>Logical Reasoning</li>
            <li>Quantitative Techniques</li>
          </ul>

        </div>

      </section>


      {/* ================= WHAT YOU LEARN ================= */}
      <section className="subjects-section">

        <div className="section-heading">
          <span className="section-label">WHAT YOU WILL LEARN</span>

          <h2>CLAT Subjects</h2>

          <p>
            Develop the skills required to perform confidently across
            different sections of the CLAT examination.
          </p>
        </div>


        <div className="subjects-grid">

          <div className="subject-card">
            <div className="subject-number">01</div>
            <h3>English Language</h3>
            <p>
              Improve reading comprehension, vocabulary, grammar and
              language-based problem solving.
            </p>
          </div>


          <div className="subject-card">
            <div className="subject-number">02</div>
            <h3>Legal Reasoning</h3>
            <p>
              Develop legal awareness and learn how to approach
              principle-based questions.
            </p>
          </div>


          <div className="subject-card">
            <div className="subject-number">03</div>
            <h3>Logical Reasoning</h3>
            <p>
              Strengthen analytical thinking, logical ability and
              problem-solving skills.
            </p>
          </div>


          <div className="subject-card">
            <div className="subject-number">04</div>
            <h3>Current Affairs & GK</h3>
            <p>
              Stay updated with important current affairs and general
              knowledge topics.
            </p>
          </div>


          <div className="subject-card">
            <div className="subject-number">05</div>
            <h3>Quantitative Techniques</h3>
            <p>
              Build numerical ability and improve accuracy in
              quantitative questions.
            </p>
          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">

        <div className="section-heading">

          <span className="section-label">WHY WORLD WISE</span>

          <h2>Why Choose Us for CLAT?</h2>

        </div>


        <div className="why-grid">

          <div className="why-card">
            <h3>Structured Learning</h3>
            <p>
              Follow a systematic preparation plan covering the important
              areas of the examination.
            </p>
          </div>

          <div className="why-card">
            <h3>Regular Practice</h3>
            <p>
              Practice regularly to improve speed, accuracy and confidence.
            </p>
          </div>

          <div className="why-card">
            <h3>Mock Tests</h3>
            <p>
              Attempt practice and mock tests to understand your preparation
              level.
            </p>
          </div>

          <div className="why-card">
            <h3>Performance Guidance</h3>
            <p>
              Identify strengths and areas that require additional attention.
            </p>
          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="features-section">

        <div className="section-heading">
          <span className="section-label">COURSE FEATURES</span>
          <h2>Everything You Need for Preparation</h2>
        </div>


        <div className="features-grid">

          <div className="feature-box">
            <span>01</span>
            <h3>Concept Classes</h3>
            <p>Build strong fundamentals with structured learning.</p>
          </div>

          <div className="feature-box">
            <span>02</span>
            <h3>Practice Questions</h3>
            <p>Improve your understanding through regular practice.</p>
          </div>

          <div className="feature-box">
            <span>03</span>
            <h3>Mock Tests</h3>
            <p>Practice with exam-oriented tests and assessments.</p>
          </div>

          <div className="feature-box">
            <span>04</span>
            <h3>Time Management</h3>
            <p>Learn to manage time effectively during preparation.</p>
          </div>

        </div>

      </section>


      {/* ================= ENQUIRY ================= */}
      <section className="enquiry-section" id="clat-enquiry">

        <div className="enquiry-content">

          <span className="section-label">GET STARTED</span>

          <h2>Start Your CLAT Preparation</h2>

          <p>
            Have questions about our CLAT courses? Fill in your details and
            our counsellor will contact you.
          </p>

        </div>


        <form className="exam-form">

          <input
            type="text"
            placeholder="Enter Full Name"
          />

          <input
            type="email"
            placeholder="Enter Email Address"
          />

          <input
            type="tel"
            placeholder="Enter Phone Number"
          />

          <input
            type="text"
            placeholder="Preferred Time for a Call"
          />

          <textarea
            rows="4"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit">
            Submit Enquiry
          </button>

        </form>

      </section>


      {/* ================= CTA ================= */}
      <section className="exam-cta">

        <h2>Ready to Start Your CLAT Journey?</h2>

        <p>
          Take the next step towards your law entrance preparation.
        </p>

        <a href="#clat-enquiry">
          Enquire Now
        </a>

      </section>

    </div>
  );
};

export default ClatContent;