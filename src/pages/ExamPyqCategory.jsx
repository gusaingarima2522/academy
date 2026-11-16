import { Link, useParams } from "react-router-dom";
import {
  examPyqConfigs,
  getExamPyqCategoryLabel,
  getExamPyqTests,
} from "../data/examPyqBank";

const ExamPyqCategory = ({ examId }) => {
  const { year, category } = useParams();
  const config = examPyqConfigs[examId];
  const tests = getExamPyqTests(examId, year, category);
  const label = getExamPyqCategoryLabel(examId, category);

  if (!config) return null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        to={`${config.routeBase}/${year}`}
        className="text-sm font-semibold text-red-900 underline"
      >
        ← {config.name} {year} papers
      </Link>
      <h1 className="mt-5 text-3xl font-bold text-red-900 sm:text-4xl">
        {config.fullName} {year} · {label}
      </h1>
      <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
        Select an available question paper set to begin practice.
      </p>

      {tests.length === 0 ? (
        <p className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center text-gray-600">
          No {label} sets have been added for {year} yet.
        </p>
      ) : (
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tests.map((test) => (
            <article
              key={test.setName}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {test.testName}
              </h2>
              {test.topics?.length > 0 && (
                <p className="mt-2 text-xs leading-5 text-gray-500">
                  {test.topics.join(" · ")}
                </p>
              )}
              <dl className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between gap-3">
                  <dt>Questions</dt>
                  <dd className="font-semibold text-gray-900">
                    {test.questions.length}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Maximum marks</dt>
                  <dd className="font-semibold text-gray-900">
                    {test.totalMarks ?? "—"}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Duration</dt>
                  <dd className="font-semibold text-gray-900">
                    {test.timeMinutes ? `${test.timeMinutes} min` : "—"}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Marking</dt>
                  <dd className="text-right font-semibold text-gray-900">
                    {test.marking?.description ?? "—"}
                  </dd>
                </div>
              </dl>
              <Link
                to={`${config.routeBase}/${year}/${category}/${test.setName}`}
                className="mt-6 rounded-lg bg-red-900 px-4 py-3 text-center text-sm font-bold text-white no-underline hover:bg-red-800"
              >
                Practice Test
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default ExamPyqCategory;
