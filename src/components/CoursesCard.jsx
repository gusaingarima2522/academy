import React from "react";
import { useCart } from "../context/CartContext";

const CoursesCard = ({ courses }) => {
  const { addToCart } = useCart();

  return (
    <div className="courses-card">

      <img
        src={courses.image}
        alt={courses.name}
      />

      <h3>{courses.name}</h3>

      <p>₹{courses.price}</p>

      <button onClick={() => addToCart(courses)}>
        Browse
      </button>

    </div>
  );
};

export default CoursesCard;