import { Link } from "react-router-dom";
import { examPyqConfigs, getExamPyqYears } from "../data/examPyqBank";

const ExamPyqYears = ({ examId }) => {
  const config = examPyqConfigs[examId];
  const years = getExamPyqYears(examId);

  if (!config) return null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className={`mb-9 rounded-2xl bg-gradient-to-br ${config.accent} px-5 py-8 text-white sm:px-8`}>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-200">
          {config.fullName} previous year papers
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Choose an examination year
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
          Select a year to practise the available {config.fullName} question
          paper sets.
        </p>
      </div>

      {years.length === 0 ? (
        <p className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center text-gray-600">
          No {config.fullName} previous year papers are available yet.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {years.map((year) => (
            <Link
              key={year}
              to={`${config.routeBase}/${year}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-red-900 no-underline shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-red-700">
                {config.name} PYQs
              </span>
              <h2 className="mt-2 text-3xl font-bold">{year}</h2>
              <span className="mt-5 block text-sm font-semibold">
                View available papers →
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default ExamPyqYears;
