import React from "react";
import { Link } from "react-router-dom";
import '../index.css'


const CoursesCard = ({ courses }) => {
  return (
    <div className="courses-card">

      <img
        src={courses.img}
        alt={courses.title}
      />

      <h3>{courses.title}</h3>

      <p>{courses.description}</p>

      <p>₹{courses.price}</p>

      <Link
        to={`/courses/${courses.slug}`}
        className="inline-block bg-red-900 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-red-800 hover:text-black hover:-translate-y-1 hover:shadow-lg"
      >
        Browse
      </Link>    </div>
  );
};

export default CoursesCard;