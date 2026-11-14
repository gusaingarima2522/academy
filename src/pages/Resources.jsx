import { Link } from "react-router-dom";
import { studyResources } from "../data/studyResources";

const Resources = () => {
  return (
    <div className="w-full bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-red-900 text-white px-4 sm:px-6 py-14 sm:py-16 md:py-20">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-yellow-300 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
            World Wise Education
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-5">
            Study Resources
          </h1>

          <p className="max-w-3xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
            Explore useful study material, preparation guides, syllabus
            resources and practice material for CLAT, CUET and JEE preparation.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {["Clear study guides", "Quick practice checks", "Official syllabus links"].map(
              (feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white sm:text-sm"
                >
                  <span className="mr-2 text-yellow-300" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </span>
              ),
            )}
          </div>
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


      {/* ================= EXAM RESOURCE CARDS ================= */}
      <section className="bg-gray-100 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-6xl mx-auto">
          <div className="mb-7 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-700">Resource library</p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Choose your exam</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">Open a resource library for syllabus, notes, sample papers, book notes and mock tests.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-6">
            <Link to="/resources/clat" className="group flex h-full flex-col rounded-2xl bg-red-900 p-6 text-white no-underline shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900 sm:p-7">
              <img src="/icons/law.png" alt="" className="h-16 w-16 object-contain" />
              <h3 className="mt-5 text-2xl font-bold">CLAT Resources</h3>
              <p className="mt-3 text-sm leading-7 text-red-100">Reading, legal reasoning, logical reasoning and quantitative preparation.</p>
              <span className="mt-auto pt-6 font-bold">Explore CLAT <span className="ml-1 transition-transform group-hover:inline-block group-hover:translate-x-1" aria-hidden="true">→</span></span>
            </Link>

            <Link to="/resources/cuet" className="group flex h-full flex-col rounded-2xl bg-yellow-300 p-6 text-gray-900 no-underline shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900 sm:p-7">
              <img src="/icons/degree.png" alt="" className="h-16 w-16 object-contain" />
              <h3 className="mt-5 text-2xl font-bold">CUET Resources</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">Language, domain subjects, general aptitude and sample practice material.</p>
              <span className="mt-auto pt-6 font-bold text-red-900">Explore CUET <span className="ml-1 transition-transform group-hover:inline-block group-hover:translate-x-1" aria-hidden="true">→</span></span>
            </Link>

            <Link to="/resources/jee" className="group flex h-full flex-col rounded-2xl bg-gray-900 p-6 text-white no-underline shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 sm:p-7">
              <img src="/icons/assessment.png" alt="" className="h-16 w-16 object-contain" />
              <h3 className="mt-5 text-2xl font-bold">JEE Resources</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">Physics, Chemistry and Mathematics notes, papers and mock tests.</p>
              <span className="mt-auto pt-6 font-bold text-yellow-300">Explore JEE <span className="ml-1 transition-transform group-hover:inline-block group-hover:translate-x-1" aria-hidden="true">→</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= RESOURCE CARDS ================= */}
      <section className="bg-white px-4 sm:px-6 py-10 sm:py-12 md:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-red-700">
              Pick a place to begin
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Practical guides for your preparation
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Each guide includes focused takeaways and a quick activity to help
              you put the ideas into practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

            {studyResources.map((resource) => (

              <div
                key={resource.id}
                className="
                  bg-white
                  rounded-2xl
                  p-5 sm:p-6
                  shadow-sm
                  border border-gray-200
                  flex flex-col
                  h-full
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:shadow-xl
                  hover:border-red-300
                  focus-within:ring-2
                  focus-within:ring-red-700
                  focus-within:ring-offset-2
                "
              >

                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-amber-50 p-3 ring-1 ring-red-100">

                  <img
                    src={resource.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />

                </div>


                {/* Category */}
                <span className="mb-2 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-800">
                  {resource.category}
                </span>


                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {resource.title}
                </h3>


                {/* Description */}
                <p className="mb-4 text-sm leading-6 text-gray-600 sm:leading-7">
                  {resource.description}
                </p>

                <p className="mb-5 text-xs font-semibold text-gray-500">
                  {resource.highlights.length} key takeaways
                  <span className="mx-2 text-red-300" aria-hidden="true">•</span>
                  Quick practice included
                </p>

                {/* Button */}
                <div className="mt-auto">

                  <Link
                    to={`/resources/${resource.id}`}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-800 px-4 py-3 text-center text-sm font-bold text-white no-underline transition duration-300 hover:bg-red-900 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 sm:text-base"
                  >
                    {resource.button}
                    <span
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>

                </div>

              </div>

            ))}

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