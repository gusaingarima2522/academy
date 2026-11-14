import { Link, useParams } from "react-router-dom";
import { getClatTests } from "../data/clatPyqBank";

const ClatPyqCategory = () => {
  const { year, category } = useParams();
  const tests = getClatTests(year, category);
  const title = category?.toLowerCase() === "ug" ? "Undergraduate" : "Postgraduate";

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link to={`/clat-pyq/${year}`} className="text-sm font-semibold text-red-900 underline">← CLAT {year} categories</Link>
      <h1 className="mt-5 text-3xl font-bold text-red-900 sm:text-4xl">CLAT {year} {category?.toUpperCase()}</h1>
      <p className="mt-3 text-sm leading-7 text-gray-600">
        {title} examination · Select an available question paper set to begin practice.
      </p>

      {tests.length === 0 ? (
        <p className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center text-gray-600">
          No {category?.toUpperCase()} sets are available for {year}.
        </p>
      ) : (
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tests.map((test) => {
            const setPath = test.setName.toLowerCase();
            return (
              <article key={setPath} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">{test.testName}</h2>
                {test.topics?.length > 0 && (
                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {test.topics.join(" · ")}
                  </p>
                )}
                <dl className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between gap-3"><dt>Questions</dt><dd className="font-semibold text-gray-900">{test.questions.length}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Maximum marks</dt><dd className="font-semibold text-gray-900">{test.totalMarks}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Duration</dt><dd className="font-semibold text-gray-900">{test.timeMinutes} min</dd></div>
                  <div className="flex justify-between gap-3"><dt>Marking</dt><dd className="text-right font-semibold text-gray-900">{test.marking.description}</dd></div>
                </dl>
                <Link
                  to={`/clat-pyq/${year}/${category}/${setPath}`}
                  className="mt-6 rounded-lg bg-red-900 px-4 py-3 text-center text-sm font-bold text-white no-underline hover:bg-red-800"
                >
                  Practice Test
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default ClatPyqCategory;
