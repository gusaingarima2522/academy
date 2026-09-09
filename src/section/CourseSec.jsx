import React, { useRef } from "react";
import CoursesCard from "../components/CoursesCard";
import courses from "../data/courses";
import '../index.css'

const CourseSec = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="course-section">

      <div className="course-heading">
        <h2>Our Courses</h2>
      </div>

      <div className="course-carousel-wrapper">

        {/* Left button */}
        <button
          className="carousel-btn left-btn"
          onClick={scrollLeft}
        >
          ❮
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="course-carousel"
        >
          {courses.map((item) => (
            <div className="course-slide" key={item.id}>
              <CoursesCard courses={item} />
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          className="carousel-btn right-btn"
          onClick={scrollRight}
        >
          ❯
        </button>

      </div>

    </section>
  );
};

export default CourseSec;