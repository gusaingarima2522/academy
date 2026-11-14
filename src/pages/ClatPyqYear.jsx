import { Link, useParams } from "react-router-dom";
import { getClatCategories, getClatYears } from "../data/clatPyqBank";

const ClatPyqYear = () => {
  const { year } = useParams();
  const numericYear = Number(year);
  const validYear = getClatYears().includes(numericYear);

  if (!validYear) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">Exam year not found</h1>
        <Link to="/clat-pyq" className="mt-5 inline-block text-red-900 underline">Back to CLAT PYQs</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link to="/clat-pyq" className="text-sm font-semibold text-red-900 underline">← All years</Link>
      <h1 className="mt-5 text-3xl font-bold text-red-900 sm:text-4xl">CLAT {year}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
        Choose an examination category. Undergraduate and postgraduate papers are kept completely separate.
      </p>

      <div className="mt-9 grid gap-6 md:grid-cols-2">
        {getClatCategories(numericYear).map(({ category, tests }) => (
          <Link
            key={category}
            to={`/clat-pyq/${year}/${category}`}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 text-gray-900 no-underline shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:p-8"
          >
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-red-700">CLAT {category.toUpperCase()}</span>
            <h2 className="mt-3 text-2xl font-bold">{category === "ug" ? "Undergraduate examination" : "Postgraduate examination"}</h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
              {tests.length} {tests.length === 1 ? "set" : "sets"} available for {year}.
            </p>
            <span className="mt-6 font-bold text-red-900">View available sets →</span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ClatPyqYear;
