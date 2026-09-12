import React, { useRef, useEffect } from "react";
import CoursesCard from "../components/CoursesCard";
import courses from "../data/courses";
import "../index.css";

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

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (sliderRef.current) {
        const slider = sliderRef.current;

        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 10
        ) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          slider.scrollBy({
            left: 320,
            behavior: "smooth",
          });
        }
      }
    }, 2000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="course-section">

      <div className="course-heading">
        <h2>Our Courses</h2>
      </div>

      <div className="course-carousel-wrapper">

        <button
          className="carousel-btn left-btn"
          onClick={scrollLeft}
        >
          ❮
        </button>

        <div
          ref={sliderRef}
          className="course-carousel"
        >
          {courses.map((item) => (
            <div
              className="course-slide"
              key={item.id}
            >
              <CoursesCard courses={item} />
            </div>
          ))}
        </div>

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