import { Link } from "react-router-dom";
import { getClatCategories, getClatYears } from "../data/clatPyqBank";
import {
  examPyqConfigs,
  getExamPyqCategories,
  getExamPyqYears,
} from "../data/examPyqBank";

const clatSection = {
  id: "clat-mock",
  name: "CLAT",
  fullName: "CLAT",
  description:
    "Attempt real CLAT UG and PG papers online, year by year, with timed exam-style navigation and review.",
  accent: "from-red-950 via-red-900 to-rose-800",
  yearsPath: "/clat-pyq",
  libraryPath: "/resources/clat",
  practice: "UG and PG paper sets",
  years: getClatYears(),
  setsForYear: (year) =>
    getClatCategories(year).reduce(
      (total, category) => total + category.tests.length,
      0,
    ),
  yearPath: (year) => `/clat-pyq/${year}`,
};

const genericSection = (examId) => {
  const config = examPyqConfigs[examId];
  return {
    id: `${examId}-mock`,
    name: config.name,
    fullName: config.fullName,
    description: `Review ${config.fullName} previous year papers online with timed, exam-style practice and answer review.`,
    accent: config.accent,
    yearsPath: config.routeBase,
    libraryPath: `/resources/${examId}`,
    practice: examId === "jee" ? "Paper 1 and Paper 2" : "All papers",
    years: getExamPyqYears(examId),
    setsForYear: (year) =>
      getExamPyqCategories(examId, year).reduce(
        (total, category) => total + category.tests.length,
        0,
      ),
    yearPath: (year) => `${config.routeBase}/${year}`,
  };
};

const examSections = [clatSection, genericSection("cuet"), genericSection("jee")];

const MockTest = () => {
  const totalSets = examSections.reduce(
    (total, section) =>
      total +
      section.years.reduce(
        (sectionTotal, year) => sectionTotal + section.setsForYear(year),
        0,
      ),
    0,
  );

  return (
    <main className="min-h-[70vh] bg-gray-50">
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-rose-800 px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            World Wise Education · Mock tests
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Practise like the real examination
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-red-100 sm:text-base sm:leading-8">
            Take timed online papers for CLAT, CUET and JEE. Navigate with the
            exam palette, review marked questions, and analyse your performance
            after submission.
          </p>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
            <div className="rounded-xl bg-white/10 p-4">
              <strong className="block text-2xl">{examSections.length}</strong>
              <span className="text-xs text-red-100 sm:text-sm">Exams</span>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <strong className="block text-2xl">{totalSets}</strong>
              <span className="text-xs text-red-100 sm:text-sm">Paper sets</span>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <strong className="block text-2xl">Year-wise</strong>
              <span className="text-xs text-red-100 sm:text-sm">PYQ practice</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
            Choose your exam
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Start your preparation
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            Every exam has its own year-wise previous year papers. Use the
            resource library before attempting a paper, or go directly to the
            available online tests.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {examSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-900 no-underline transition hover:bg-red-50"
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {examSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-800">
                    {section.name}
                  </span>
                  <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {section.fullName} mock tests &amp; PYQs
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                    {section.description}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {section.practice}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:flex-col sm:items-stretch">
                  <Link
                    to={section.libraryPath}
                    className="rounded-lg border border-red-900 px-4 py-2.5 text-center text-sm font-bold text-red-900 no-underline hover:bg-red-50"
                  >
                    Preparation resources
                  </Link>
                  <Link
                    to={section.yearsPath}
                    className="rounded-lg bg-red-900 px-4 py-2.5 text-center text-sm font-bold text-white no-underline hover:bg-red-800"
                  >
                    All {section.name} PYQs
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.years.map((year) => {
                  const setCount = section.setsForYear(year);
                  return (
                    <Link
                      key={year}
                      to={section.yearPath(year)}
                      className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-900 no-underline transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-white hover:shadow-md"
                    >
                      <span className="text-2xl font-extrabold text-red-900">
                        {year}
                      </span>
                      <span className="mt-2 text-sm text-gray-600">
                        {setCount > 0
                          ? `${setCount} ${setCount === 1 ? "paper set" : "paper sets"} available`
                          : "Papers coming soon"}
                      </span>
                      <span className="mt-auto pt-4 text-sm font-bold text-red-900">
                        Open {year} papers →
                      </span>
                    </Link>
                  );
                })}
              </div>

              {section.name === "JEE" && (
                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm leading-6 text-gray-700">
                    Looking for subject-wise practice instead? Take Physics,
                    Chemistry and Mathematics mock tests from the JEE test bank.
                  </p>
                  <Link
                    to="/jeemocktest"
                    className="mt-3 inline-flex rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-bold text-white no-underline hover:bg-slate-800"
                  >
                    Subject-wise JEE mock tests →
                  </Link>
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MockTest;
