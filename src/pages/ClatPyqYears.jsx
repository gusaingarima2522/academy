import { Link } from "react-router-dom";
import { getClatYears } from "../data/clatPyqBank";

const ClatPyqYears = () => {
  const years = getClatYears();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-9 rounded-2xl bg-red-900 px-5 py-8 text-white sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-300">
          CLAT previous year papers
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Choose an examination year</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-red-100 sm:text-base">
          Select a year to practise the available CLAT UG and CLAT PG question paper sets.
        </p>
      </div>

      {years.length === 0 ? (
        <p className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center text-gray-600">
          No CLAT previous year papers are available yet.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {years.map((year) => (
            <Link
              key={year}
              to={`/clat-pyq/${year}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-red-900 no-underline shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-red-700">
                CLAT PYQs
              </span>
              <h2 className="mt-2 text-3xl font-bold">{year}</h2>
              <span className="mt-5 block text-sm font-semibold">View UG and PG papers →</span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default ClatPyqYears;
