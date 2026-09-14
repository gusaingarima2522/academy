import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

const Blogs = () => {
  // ==========================================
  // PAGE LOADING
  // ==========================================

  const [loading, setLoading] = useState(true);

  // ==========================================
  // IMAGE LOADING
  // ==========================================

  const [loadedImages, setLoadedImages] = useState({});

  // ==========================================
  // SHOW BLOG CONTENT AFTER 1.5 SECONDS
  // ==========================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 px-4 py-12">

      {/* ==========================================
          PAGE LOADER
          ONLY ONE SPINNER
      ========================================== */}

      {loading ? (

        <div className="flex min-h-[70vh] w-full items-center justify-center">

          <div className="flex flex-col items-center">

            {/* Spinner */}

            <div
              className="
                h-14 w-14
                animate-spin
                rounded-full
                border-4
                border-gray-300
                border-t-red-950
              "
            ></div>

            <p className="mt-4 text-sm font-semibold text-gray-600">
              Loading Blogs...
            </p>

          </div>

        </div>

      ) : (

        /* ==========================================
           BLOG CONTENT
        ========================================== */

        <>

          {/* ================= HEADER ================= */}

          <div className="mb-10 text-center">

            <h1
              className="
                text-3xl
                font-bold
                text-red-950
                md:text-4xl
              "
            >
              CLAT & CUET Guidance
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-gray-600
              "
            >
              Get expert guidance, preparation strategies and useful tips
              to begin your entrance exam journey with confidence.
            </p>

          </div>


          {/* ================= BLOG GRID ================= */}

          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-1
              gap-7
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {blogs.map((blog, index) => {

              const imageLoaded = loadedImages[index];

              return (

                <div
                  key={blog.slug}
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    shadow-md
                    transition
                    duration-300
                    hover:shadow-xl
                  "
                >

                  {/* ==========================================
                      IMAGE
                      NO SPINNER
                      ONLY GRAY SKELETON
                  ========================================== */}

                  <div
                    className="
                      relative
                      h-52
                      w-full
                      overflow-hidden
                      bg-gray-300
                    "
                  >

                    {/* Gray skeleton */}

                    {!imageLoaded && (
                      <div
                        className="
                          absolute
                          inset-0
                          animate-pulse
                          bg-gray-300
                        "
                      ></div>
                    )}

                    {/* Actual Image */}

                    <img
                      src={blog.image}
                      alt={blog.title}

                      onLoad={() => {
                        setLoadedImages((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}

                      onError={() => {
                        setLoadedImages((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}

                      className={`
                        relative
                        z-10
                        h-full
                        w-full
                        object-cover
                        transition-opacity
                        duration-500
                        ${
                          imageLoaded
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                    />

                  </div>


                  {/* ==========================================
                      CONTENT
                  ========================================== */}

                  <div className="p-6">

                    {/* CATEGORY */}

                    <span
                      className="
                        mb-4
                        inline-block
                        rounded-full
                        bg-yellow-200
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-red-950
                      "
                    >
                      {blog.category}
                    </span>


                    {/* TITLE */}

                    <h2
                      className="
                        mb-3
                        text-xl
                        font-bold
                        leading-snug
                        text-red-950
                      "
                    >
                      {blog.title}
                    </h2>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        mb-6
                        text-sm
                        leading-6
                        text-gray-600
                      "
                    >
                      {blog.description}
                    </p>


                    {/* READ BLOG */}

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="
                        font-semibold
                        text-red-950
                        transition
                        hover:text-red-700
                      "
                    >
                      Read the Guide →
                    </Link>

                  </div>

                </div>

              );

            })}

          </div>

        </>

      )}

    </div>
  );
};

export default Blogs;