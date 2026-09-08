
import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Blog 1 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 bg-gray-100 rounded-lg h-full">

            <h5 className="text-xl font-semibold text-gray-900 mb-4">
              How to Start Your Judiciary Exam Preparation from Scratch
            </h5>

            <p className="text-gray-600 leading-relaxed">
              A complete beginner's guide to judiciary exam preparation,
              including syllabus understanding, study planning, bare acts,
              current affairs, and revision strategy. Starting your
              preparation with a clear plan can help you stay consistent
              and focused throughout your journey.
            </p>

          </div>
        </div>


        {/* Blog 2 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 h-full">

            <h5 className="text-xl font-semibold text-gray-900 mb-4">
              CLAT Preparation Strategy: How to Prepare for CLAT Effectively
            </h5>

            <p className="text-gray-600 leading-relaxed">
              Learn how to prepare for CLAT with a practical study plan
              covering Legal Reasoning, English, Logical Reasoning,
              Quantitative Techniques, and Current Affairs. Regular
              practice, mock tests, and proper time management can help
              students improve their performance.
            </p>

          </div>
        </div>


        {/* Blog 3 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 h-full">

            <h5 className="text-xl font-semibold text-gray-900 mb-4">
              Bare Acts: Why They Are Important for Judiciary Aspirants
            </h5>

            <p className="text-gray-600 leading-relaxed">
              Understand what Bare Acts are, why they are important for
              judiciary preparation, and how to read, understand, and
              revise important legal provisions effectively. Developing
              the habit of reading Bare Acts regularly can strengthen
              your understanding of the law.
            </p>

          </div>
        </div>


        {/* Blog 4 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 h-full">

            <h5 className="text-xl font-semibold text-gray-900 mb-4">
              How to Manage Time During Competitive Exams
            </h5>

            <p className="text-gray-600 leading-relaxed">
              Discover practical time-management techniques to balance
              lectures, self-study, revision, mock tests, and daily
              practice. Creating a realistic timetable and following
              it consistently can make exam preparation more effective
              and less stressful.
            </p>

          </div>
        </div>


        {/* Blog 5 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 h-full">

            <h5 className="text-xl font-semibold text-gray-900 mb-4">
              Common Mistakes Students Make While Preparing for Law Exams
            </h5>

            <p className="text-gray-600 leading-relaxed">
              Learn about common preparation mistakes such as inconsistent
              study schedules, skipping revision, ignoring mock tests,
              and depending only on shortcuts. Identifying these mistakes
              early can help students develop a more effective preparation
              strategy.
            </p>

          </div>
        </div>


        {/* Blog 6 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 h-full">

            <h5 className="text-xl font-semibold text-gray-900 mb-4">
              How Mock Tests Can Improve Your Exam Preparation
            </h5>

            <p className="text-gray-600 leading-relaxed">
              Learn why regular mock tests are important, how to analyze
              your mistakes, improve your speed and accuracy, and build
              confidence before the actual examination. Mock tests also
              help you understand your strengths and identify areas that
              require more practice.
            </p>

          </div>
        </div>


        {/* Blog 7 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 h-full">

            <h5 className="text-xl font-semibold text-gray-900 mb-4">
              Career Opportunities After Completing a Law Degree
            </h5>

            <p className="text-gray-600 leading-relaxed">
              Explore different career opportunities after law, including
              Judiciary, Litigation, Corporate Law, Legal Consultancy,
              Government Jobs, and Legal Research. Understanding different
              career paths can help law students make informed decisions
              about their professional future.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Blogs;
