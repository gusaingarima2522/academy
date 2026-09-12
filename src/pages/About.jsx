import React from "react";

const About = () => {
  return (
    <div className="w-full bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-red-900 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-yellow-300 text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            World Wise Education
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
            About Us
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-7 sm:leading-8 md:leading-9">
            Empowering students with the right guidance, knowledge and
            preparation to move confidently towards their academic goals.
          </p>

        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16 lg:py-20">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div>

            <p className="text-red-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
              Who We Are
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5 sm:mb-6">
              From Education Guidance to Focused Academic Preparation
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mb-4 sm:mb-5">
              World Wise Education is an educational initiative extending the
              vision and experience of World Wise Education. With a strong
              understanding of student needs, academic opportunities and
              admission pathways, we aim to provide students with structured
              and meaningful educational support.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mb-4 sm:mb-5">
              While World Wise Education focuses on helping students explore
              educational opportunities, counselling and admission pathways,
              World Wise Education takes this journey one step further by
              providing focused preparation for competitive entrance
              examinations.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              Our Education currently focuses on examinations such as{" "}
              <span className="font-semibold text-red-700">
                CLAT and CUET
              </span>
              , helping students develop the concepts, skills, confidence and
              discipline required for their preparation.
            </p>

          </div>


          {/* Highlight Card */}
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border-t-4 border-yellow-400">

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">
              Our Approach
            </h3>

            <div className="space-y-5 sm:space-y-6">

              {/* Goal */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/icons/goals.png"
                    alt="Goal oriented preparation"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    Goal-Oriented Preparation
                  </h4>

                  <p className="text-gray-600 text-sm leading-6 mt-1">
                    Preparation designed around the student's target
                    examination and academic goals.
                  </p>
                </div>

              </div>


              {/* Academic */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/icons/books.png"
                    alt="Academic foundation"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    Strong Academic Foundation
                  </h4>

                  <p className="text-gray-600 text-sm leading-6 mt-1">
                    Building concepts before moving towards advanced
                    practice and examination strategy.
                  </p>
                </div>

              </div>


              {/* Guidance */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/icons/bulb.png"
                    alt="Practical guidance"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    Practical Guidance
                  </h4>

                  <p className="text-gray-600 text-sm leading-6 mt-1">
                    Helping students understand their options and make
                    informed academic decisions.
                  </p>
                </div>

              </div>


              {/* Support */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/icons/support.png"
                    alt="Student support"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    Student-Centric Support
                  </h4>

                  <p className="text-gray-600 text-sm leading-6 mt-1">
                    Supporting students throughout their preparation
                    journey with guidance and regular practice.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= EDUCATION EXTENSION ================= */}
      <section className="bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16 lg:py-20">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-red-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            The Education
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6">
            Extending the World Wise Vision
          </h2>

          <p className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mb-8 sm:mb-10">
            World Wise Education has been created with a simple objective:
            to bridge the gap between academic aspirations and effective
            preparation. Students often need more than information about an
            examination. They need a structured learning path, regular
            practice, guidance and the confidence to move forward.
          </p>


          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">

            {/* Learn */}
            <div className="
              bg-white p-5 sm:p-6 md:p-7
              rounded-xl
              shadow-md
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
            ">

              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/icons/books.png"
                  alt="Learn"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Learn
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
                Build strong concepts and understand the fundamentals
                required for competitive examinations.
              </p>

            </div>


            {/* Practice */}
            <div className="
              bg-white p-5 sm:p-6 md:p-7
              rounded-xl
              shadow-md
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
            ">

              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/icons/assessment.png"
                  alt="Practice"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Practice
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
                Strengthen preparation through questions, revision,
                mock tests and regular practice.
              </p>

            </div>


            {/* Progress */}
            <div className="
              bg-white p-5 sm:p-6 md:p-7
              rounded-xl
              shadow-md
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              sm:col-span-2 md:col-span-1
            ">

              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/icons/progress.png"
                  alt="Progress"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Progress
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
                Develop confidence, improve performance and move closer
                to your academic goals.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= OUR FOCUS ================= */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16 lg:py-20">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-8 sm:mb-10 md:mb-12">

            <p className="text-red-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
              What We Focus On
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Preparing Students for Their Next Step
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

            {/* CLAT */}
            <div className="
              border border-gray-200
              rounded-xl
              p-5 sm:p-6 md:p-8
              shadow-md
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-red-600
            ">

              <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
                CLAT Preparation
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
                Our CLAT preparation focuses on developing the skills
                required across areas such as English, Current Affairs,
                Legal Reasoning, Logical Reasoning and Quantitative
                Techniques. Students are encouraged to combine conceptual
                understanding with regular practice and examination
                strategy.
              </p>

            </div>


            {/* CUET */}
            <div className="
              border border-gray-200
              rounded-xl
              p-5 sm:p-6 md:p-8
              shadow-md
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-red-600
            ">

              <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
                CUET Preparation
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
                Our CUET preparation is designed to help students approach
                university entrance preparation in a structured manner,
                with attention to subjects, practice, mock tests and
                admission-oriented guidance.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MISSION ================= */}
      <section className="bg-black text-white px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 lg:py-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-yellow-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Our Mission
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6">
            Making the Right Guidance Accessible
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
            Our mission is to help students make informed educational
            decisions and prepare with clarity, discipline and confidence.
            We believe that the right guidance combined with consistent
            effort can help students unlock better opportunities for their
            future.
          </p>

        </div>
      </section>


      {/* ================= VISION ================= */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

          {/* Vision */}
          <div className="
            bg-red-900
            text-white
            rounded-xl
            p-5 sm:p-6 md:p-8
            shadow-lg
          ">

            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Our Vision
            </h2>

            <p className="text-gray-200 text-sm sm:text-base leading-7 sm:leading-8">
              To build an education platform where students can access
              reliable guidance, quality preparation and the confidence
              needed to pursue their academic ambitions.
            </p>

          </div>


          {/* Promise */}
          <div className="
            bg-yellow-300
            text-black
            rounded-xl
            p-5 sm:p-6 md:p-8
            shadow-lg
          ">

            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Our Promise
            </h2>

            <p className="text-sm sm:text-base leading-7 sm:leading-8">
              We aim to keep the student's learning journey focused,
              transparent and purposeful — from understanding the goal to
              preparing for the examination.
            </p>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-gray-100 px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5">
            Ready to Start Your Journey?
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 mb-6 sm:mb-8">
            Explore our courses and find the preparation path that matches
            your academic goals.
          </p>

          <a
            href="/courses"
            className="
              inline-flex
              items-center
              justify-center
              w-full sm:w-auto
              bg-red-700
              hover:bg-red-800
              text-white
              font-semibold
              px-7 sm:px-8
              py-3
              rounded-lg
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Explore Our Courses
          </a>

        </div>
      </section>

    </div>
  );
};

export default About;