import React, { useRef, useEffect, useState } from "react";
import CoursesCard from "../components/CoursesCard";
import courses from "../data/courses";
import "../index.css";

const CourseSec = () => {
  const sliderRef = useRef(null);

  const [loading, setLoading] = useState(true);

  // =====================================================
  // SKELETON LOADING
  // =====================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // =====================================================
  // SCROLL LEFT
  // =====================================================

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  // =====================================================
  // SCROLL RIGHT
  // =====================================================

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  // =====================================================
  // AUTO SCROLL
  // =====================================================

  useEffect(() => {
    if (loading) return;

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
  }, [loading]);

  // =====================================================
  // SKELETON CARD
  // =====================================================

  const SkeletonCard = () => {
    return (
      <div
        className="
          w-full
          overflow-hidden
          rounded-xl
          border
          border-gray-200
          bg-white
          shadow-md
        "
      >
        {/* IMAGE SKELETON */}

        <div className="h-48 w-full animate-pulse bg-gray-200"></div>

        {/* CONTENT */}

        <div className="space-y-4 p-5">

          {/* TITLE */}

          <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>

          {/* DESCRIPTION */}

          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>

            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>

            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
          </div>

          {/* PRICE */}

          <div className="h-5 w-1/3 animate-pulse rounded bg-gray-200"></div>

          {/* BUTTON */}

          <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200"></div>

        </div>
      </div>
    );
  };

  return (
    <section className="course-section">

      {/* =================================================
          HEADING
      ================================================== */}

      <div className="course-heading">
        <h2>Our Courses</h2>
      </div>

      <div className="course-carousel-wrapper">

        {/* =================================================
            LEFT BUTTON
        ================================================== */}

        {!loading && (
          <button
            type="button"
            className="carousel-btn left-btn"
            onClick={scrollLeft}
          >
            ❮
          </button>
        )}

        {/* =================================================
            COURSE SLIDER
        ================================================== */}

        {loading ? (

          <div className="course-carousel">

            {[1, 2, 3, 4].map((item) => (
              <div
                className="course-slide"
                key={item}
              >
                <SkeletonCard />
              </div>
            ))}

          </div>

        ) : (

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

        )}

        {/* =================================================
            RIGHT BUTTON
        ================================================== */}

        {!loading && (
          <button
            type="button"
            className="carousel-btn right-btn"
            onClick={scrollRight}
          >
            ❯
          </button>
        )}

      </div>

    </section>
  );
};

export default CourseSec