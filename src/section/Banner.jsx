import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="w-full min-h-[300px] bg-gray-100 flex flex-col  shadow-[0_4px_12px_rgba(77,75,75,0.12)] transition-all duration-300 ease-in-out
  overflow-hidden hover:-translate-y-[1px] hover:shadow-[0_5px_10px_rgba(0,0,0,0.18)] box-border justify-center items-center text-center px-4 py-10">

      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
        Make Your Career Successful With Us
        <br />
        Book Your Seats Now!
      </h1>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
        <Link to='/contact#contact-section'>   
               Get In Touch
        </Link>
      </button>

    </div>
  )
}

export default Banner