import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="w-full min-h-[300px] bg-gray-100 flex flex-col justify-center items-center text-center px-4 py-10">

      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
        Make Your Career Successful With Us
        <br />
        Book Your Seats Now!
      </h1>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
        <Link to="/contact">
          Get In Touch
        </Link>
      </button>

    </div>
  )
}

export default Banner