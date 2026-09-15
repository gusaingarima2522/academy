import React from "react";
import { Link } from "react-router-dom";


const resources = [
  {
    title: "CLAT Syllabus & Exam Guide",
    category: "CLAT",
    description:
      "Understand the major sections of CLAT and start your preparation with a clear study plan.",
    icon: "/icons/guide.png",
    link: "https://clat2027.consortiumofnlus.ac.in/clat-2027/ug-syllabus.html",
    button: "View Syllabus",
  },

  {
    title: "CLAT Legal Reasoning Practice",
    category: "CLAT",
    description:
      "Practice principle-based questions and improve your ability to analyse legal situations.",
    icon: "/icons/assessment.png",
    button: "Study Material",
  },

  {
    title: "CLAT Logical Reasoning",
    category: "CLAT",
    description:
      "Improve arguments, inference, assumptions and critical reasoning through regular practice.",
    icon: "/icons/reasoning.png",
    button: "Study Material",
  },

  {
    title: "Current Affairs & GK",
    category: "General Knowledge",
    description:
      "Keep track of important national and international events and strengthen your general awareness.",
    icon: "/icons/gk.png",
    button: "Read More",
  },

  {
    title: "CUET UG Syllabus",
    category: "CUET",
    description:
      "Access the official CUET UG subject-wise syllabus and understand what you need to prepare.",
    icon: "/icons/syllabus.png",
    link: "https://cuet.nta.nic.in/cuetug-2026-syllabus/",
    button: "View Syllabus",
  },

  {
    title: "CUET General Aptitude",
    category: "CUET",
    description:
      "Practice quantitative ability, reasoning, general knowledge and other aptitude-based questions.",
    icon: "/icons/bulb.png",
    button: "Study Material",
  },

  {
    title: "English Language Practice",
    category: "Practice",
    description:
      "Improve vocabulary, comprehension, grammar and reading skills through regular practice.",
    icon: "/icons/language.png",
    button: "Practice Now",
  },

  {
    title: "Mock Test Resources",
    category: "Mock Tests",
    description:
      "Use mock tests to improve your speed, accuracy and examination strategy.",
    icon: "/icons/test.png",
    button: "Start Practice",
  },
];

const Resources = () => {
  return (
    <div className="w-full bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-red-900 text-white px-4 sm:px-6 py-14 sm:py-16 md:py-20">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-yellow-300 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
            World Wise Education
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5">
            Study Resources
          </h1>

          <p className="max-w-3xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
            Explore useful study material, preparation guides, syllabus
            resources and practice material to support your CLAT and CUET
            preparation.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="px-4 sm:px-6 py-10 sm:py-12 md:py-14">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
            Learn. Practice. Improve.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
            We have organised useful resources in one place so that students
            can easily find material related to their examination preparation.
            Use these resources along with your regular classes, revision and
            mock-test practice.
          </p>

        </div>

      </section>


      {/* ================= RESOURCE CARDS ================= */}
      <section className="bg-gray-100 px-4 sm:px-6 py-10 sm:py-12 md:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

            {resources.map((resource, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-xl
                  p-5 sm:p-6
                  shadow-md
                  border border-gray-200
                  flex flex-col
                  h-full
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-red-600
                "
              >

                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center">

                  <img
                    src={resource.icon}
                    alt={resource.title}
                    className="w-full h-full object-contain"
                  />

                </div>


                {/* Category */}
                <span className="inline-block text-xs sm:text-sm font-semibold text-red-700 mb-2">
                  {resource.category}
                </span>


                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {resource.title}
                </h3>


                {/* Description */}
                <p className="text-gray-600 text-sm leading-6 sm:leading-7 mb-6">
                  {resource.description}
                </p>


                {/* Button */}
                <div className="mt-auto">

                  {resource.link ? (

                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-block
                        w-full
                        text-center
                        bg-red-700
                        hover:bg-red-800
                        text-white
                        font-semibold
                        px-4
                        py-2.5
                        rounded-lg
                        text-sm
                        sm:text-base
                        transition-all
                        duration-300
                        hover:shadow-lg
                      "
                    >
                      {resource.button}
                    </a>

                  ) : (

                    <button
                      type="button"
                      className="
                        w-full
                        bg-red-700
                        hover:bg-red-800
                        text-white
                        font-semibold
                        px-4
                        py-2.5
                        rounded-lg
                        text-sm
                        sm:text-base
                        transition-all
                        duration-300
                        hover:shadow-lg
                      "
                    >
                      {resource.button}
                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CLAT + CUET ================= */}
      <section className="px-4 sm:px-6 py-10 sm:py-12 md:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">


            {/* CLAT */}
            <div className="bg-red-900 text-white rounded-2xl p-6 sm:p-8">

              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5">

                <img
                  src="/icons/law.png"
                  alt="CLAT preparation"
                  className="w-full h-full object-contain"
                />

              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
                CLAT Preparation
              </h2>

              <p className="text-gray-200 text-sm sm:text-base leading-7 sm:leading-8 mb-6">
                Focus on comprehension, reasoning and regular practice across
                the major CLAT sections.
              </p>

              <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
                <li>✓ English Language</li>
                <li>✓ Current Affairs & General Knowledge</li>
                <li>✓ Legal Reasoning</li>
                <li>✓ Logical Reasoning</li>
                <li>✓ Quantitative Techniques</li>
              </ul>

            </div>


            {/* CUET */}
            <div className="bg-yellow-300 text-black rounded-2xl p-6 sm:p-8">

              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5">

                <img
                  src="/icons/degree.png"
                  alt="CUET preparation"
                  className="w-full h-full object-contain"
                />

              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
                CUET Preparation
              </h2>

              <p className="text-sm sm:text-base leading-7 sm:leading-8 mb-6">
                Explore subject-wise resources and build a structured
                preparation routine for CUET UG.
              </p>

              <ul className="space-y-3 text-sm sm:text-base">
                <li>✓ Language preparation</li>
                <li>✓ Domain subjects</li>
                <li>✓ General Aptitude</li>
                <li>✓ Practice questions</li>
                <li>✓ Mock tests</li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DOWNLOAD MATERIAL ================= */}
      <section className="bg-black text-white px-4 sm:px-6 py-12 sm:py-14 md:py-16">

        <div className="max-w-4xl mx-auto text-center">

          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5">

            {/* <img
              src="/icons/download.png"
              alt="Download study material"
              className="w-full h-full object-contain"
            /> */}

          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
            Looking for Study Material?
          </h2>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 mb-7 sm:mb-8">
            More preparation material, practice sheets, mock tests and
            academic resources can be added here as they are released by
            World Wise Education.
          </p>

<Link
  to="/contact#contact-form"
  className="
    inline-block
    bg-yellow-400
    hover:bg-yellow-300
    text-black
    font-bold
    px-6
    sm:px-8
    py-2.5
    sm:py-3
    rounded-lg
    text-sm
    sm:text-base
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>
  Contact Us
</Link>         

        </div>

      </section>

    </div>
  );
};

export default Resources;