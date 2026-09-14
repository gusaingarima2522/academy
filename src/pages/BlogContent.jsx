import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../data/blogs";
import "./Blogs.css";

const BlogContent = () => {

  const { slug } = useParams();

  // Find blog according to URL
  const blog = blogs.find(
    (item) => item.slug === slug
  );

  // Blog not found
  if (!blog) {
    return (
      <div className="blog-not-found">

        <h2>Blog Not Found</h2>

        <p>
          The blog you are looking for does not exist.
        </p>

        <Link to="/blogs">
          Back to Blogs
        </Link>

      </div>
    );
  }

  return (
    <div className="blog-content-page">

      {/* ================= BLOG HEADER ================= */}

      <section className="blog-content-header">

        {/* Blog Image */}

        <div className="blog-image">

          {/* <img
            src={blog.image}
            alt={blog.title}
          /> */}

        </div>


        {/* Category */}

        <span className="blog-category">
          {blog.category}
        </span>


        {/* Title */}

        <h1>
          {blog.title}
        </h1>


        {/* Description */}

        <p>
          {blog.description}
        </p>

      </section>


      {/* ================= BLOG CONTENT ================= */}

      <section className="blog-content">

        {blog.content.split("\n").map((paragraph, index) => {

          if (paragraph.trim() === "") {
            return null;
          }

          return (
            <p key={index}>
              {paragraph.trim()}
            </p>
          );

        })}


        {/* ================= PREPARATION POINTS ================= */}

        <h2>
          {blog.sectionTitle}
        </h2>


        <div className="blog-points">

          {blog.points.map((point, index) => (

            <div key={index}>

              <span>
                {index + 1}
              </span>

              <p>
                {point}
              </p>

            </div>

          ))}

        </div>


        {/* ================= CTA ================= */}

        <div className="blog-cta">

          <h2>
            {blog.ctaTitle}
          </h2>

          <p>
            {blog.ctaDescription}
          </p>

          <Link to='/contact#contact-section'>
            Enquire Now
          </Link>

          <Link to="/Mock">
            Book Your Test
          </Link>

        </div>


        {/* ================= BACK ================= */}

        <Link
          to="/blogs"
          className="back-to-blogs"
        >
          ← Back to Blogs
        </Link>

      </section>

    </div>
  );
};

export default BlogContent;