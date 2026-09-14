import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

const Blogs = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4">

      {/* ================= HEADER ================= */}

      <div className="text-center mb-10">

        {loading ? (
          <>
            {/* Heading Skeleton */}
            <div className="mx-auto h-10 w-72 rounded-md bg-gray-300 animate-pulse"></div>

            {/* Description Skeleton */}
            <div className="mx-auto mt-4 h-4 w-96 max-w-full rounded bg-gray-300 animate-pulse"></div>
            <div className="mx-auto mt-2 h-4 w-80 max-w-full rounded bg-gray-300 animate-pulse"></div>
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-red-950">
              CLAT & CUET Guidance
            </h1>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Get expert guidance, preparation strategies and useful tips
              to begin your entrance exam journey with confidence.
            </p>
          </>
        )}

      </div>


      {/* ================= BLOG GRID ================= */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        {loading
          ? Array.from({ length: 6 }).map((_, index) => (

              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden
                           border border-gray-200 shadow-md"
              >

                {/* IMAGE SKELETON */}
                <div className="w-full h-52 bg-gray-300 animate-pulse"></div>


                {/* CONTENT SKELETON */}
                <div className="p-6">

                  {/* Category */}
                  <div className="h-7 w-24 rounded-full bg-gray-300 animate-pulse mb-4"></div>

                  {/* Title */}
                  <div className="h-6 w-full rounded bg-gray-300 animate-pulse mb-2"></div>

                  <div className="h-6 w-4/5 rounded bg-gray-300 animate-pulse mb-4"></div>


                  {/* Description */}
                  <div className="h-4 w-full rounded bg-gray-200 animate-pulse mb-2"></div>

                  <div className="h-4 w-full rounded bg-gray-200 animate-pulse mb-2"></div>

                  <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse mb-6"></div>


                  {/* Read Blog */}
                  <div className="h-5 w-32 rounded bg-gray-300 animate-pulse"></div>

                </div>

              </div>

            ))
          : blogs.map((blog) => (

              <div
                key={blog.slug}
                className="bg-white rounded-xl overflow-hidden
                           border border-gray-200 shadow-md
                           hover:shadow-xl transition duration-300"
              >

                {/* ================= IMAGE ================= */}

                <div className="w-full h-52 overflow-hidden">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-fit
                               hover:scale-105 transition duration-300"
                  />

                </div>


                {/* ================= CONTENT ================= */}

                <div className="p-6">

                  {/* Category */}

                  <span
                    className="inline-block
                               bg-yellow-200
                               text-red-950
                               text-sm font-semibold
                               px-3 py-1
                               rounded-full
                               mb-4"
                  >
                    {blog.category}
                  </span>


                  {/* Title */}

                  <h2
                    className="text-xl font-bold
                               text-red-950
                               leading-snug
                               mb-3"
                  >
                    {blog.title}
                  </h2>


                  {/* Description */}

                  <p
                    className="text-gray-600
                               text-sm
                               leading-6
                               mb-6"
                  >
                    {blog.description}
                  </p>


                  {/* Read Blog */}

                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="text-red-950
                               font-semibold
                               hover:text-red-700
                               transition"
                  >
                    Read the Guide →
                  </Link>

                </div>

              </div>

            ))
        }

      </div>

    </div>
  );
};

export default Blogs;