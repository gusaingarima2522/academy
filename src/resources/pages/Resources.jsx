import { Link } from "react-router-dom";
import ResourceSidebar, { ResourceFaq } from "./ResourceSidebar";

const suggestedResources = [
  {
    exam: "CLAT",
    title: "Legal Reasoning Practice",
    description:
      "Practise applying legal principles to new facts and strengthen your CLAT reasoning skills.",
    icon: "/icons/law.png",
    link: "/resources/clat-legal-reasoning",
    action: "Explore CLAT resource",
  },
  {
    exam: "CUET",
    title: "General Aptitude Practice",
    description:
      "Practise quantitative ability, logical reasoning, general knowledge, and aptitude questions.",
    icon: "/icons/bulb.png",
    link: "/resources/cuet-general-aptitude",
    action: "Explore CUET resource",
  },
  {
    exam: "JEE",
    title: "JEE Mock Tests",
    description:
      "Attempt subject-wise Physics, Chemistry, and Mathematics tests and review your performance.",
    icon: "/icons/test.png",
    link: "/jeemocktest",
    action: "Start JEE practice",
  },
];

const Resources = () => {
  return (
    <div className="w-full overflow-x-clip bg-white">

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
            {["In-house study guides", "Quick practice checks", "Topic-by-topic pages"].map(
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

      {/* ================= SUGGESTED RESOURCES ================= */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-700">
              A good place to start
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Suggested resources
            </h2>
          </div>
          <div className="sidebar-content-layout grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
              {suggestedResources.map((resource) => (
                <article
                  key={resource.exam}
                  className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 p-3 ring-1 ring-red-100">
                    <img src={resource.icon} alt="" className="h-full w-full object-contain" />
                  </div>
                  <span className="mb-3 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-800">
                    {resource.exam}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {resource.description}
                  </p>
                  <Link
                    to={resource.link}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-red-900 px-4 py-3 text-center text-sm font-bold text-white no-underline transition hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                  >
                    {resource.action}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
            <ResourceSidebar mode="all" showFaq={false} />
          </div>
        </div>
      </section>

      {/* ================= EXAM RESOURCE CARDS ================= */}
      <section className="bg-gray-100 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-700">Resource library</p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Choose your exam</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">Open a resource library for syllabus, notes, sample papers, book notes and mock tests.</p>
          </div>

          <div className="sidebar-content-layout grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 sm:gap-6">
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
            <ResourceFaq mode="all" />
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