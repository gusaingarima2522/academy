import React from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import '../index.css'

const CourseContent = () => {

  const { slug } = useParams();

  // Find the course according to URL
  const course = courses.find(
    (item) => item.slug === slug
  );

  // If course doesn't exist
  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course Not Found</h2>
        <p>The course you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="course-content-page">

      {/* ================= HERO ================= */}

      <section className="course-content-hero">

        <div className="course-content-image">
          <img
            src={course.img}
            alt={course.title}
          />
        </div>

        <div className="course-content-info">

          <span>WORLD WISE ACADEMY</span>

          <h1>{course.title}</h1>

          <p>
            {course.description}
          </p>

          <h2>₹{course.price}</h2>

          <button>
           <Link to='/contact'> Enquire Now</Link>
          </button>

        </div>

      </section>


      {/* ================= COURSE DETAILS ================= */}

      <section className="course-details">

        <h2>About This Course</h2>

        <p>
          This course is designed to help students build strong concepts,
          improve their skills and prepare effectively for their entrance
          examination.
        </p>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="course-features">

        <h2>What You Will Get</h2>

        <div className="course-feature-grid">

          <div>
            <h3>Concept Classes</h3>
            <p>
              Learn important concepts with structured guidance.
            </p>
          </div>

          <div>
            <h3>Study Material</h3>
            <p>
              Get useful study resources for your preparation.
            </p>
          </div>

          <div>
            <h3>Practice Questions</h3>
            <p>
              Improve your understanding through regular practice.
            </p>
          </div>

          <div>
            <h3>Mock Tests</h3>
            <p>
              Test your preparation with examination-oriented tests.
            </p>
          </div>

        </div>

      </section>


      {/* ================= ENQUIRY ================= */}

      <section className="course-enquiry">

        <h2>
          Interested in {course.title}?
        </h2>

        <p>
          Contact World Wise Academy to know more about this course.
        </p>

        <button>
           <Link to='/contact'> Enquire Now</Link>
        </button>

      </section>

    </div>
  );
};

export default CourseContent;