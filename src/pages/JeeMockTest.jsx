import { Link } from "react-router-dom";
import { getAvailableSubjects, getBankedTests } from "../data/jeeTestBank";

const subjectGuidance = {
  chemistry:
    "Use topic-wise practice to revisit concepts, reactions, calculations, and question interpretation.",
  maths:
    "Practise problem-solving step by step, and review the methods behind questions that take extra time.",
  physics:
    "Strengthen concept application by checking the principles and calculations behind each answer.",
};

const JeeMockTest = () => {
  const subjects = getAvailableSubjects().map((subject) => ({
    ...subject,
    tests: getBankedTests(subject.slug),
    guidance:
      subjectGuidance[subject.slug] ??
      `Practise ${subject.name} questions, then review your answers to identify topics to revisit.`,
  }));
  const totalTests = subjects.reduce(
    (total, subject) => total + subject.tests.length,
    0,
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-9 rounded-2xl bg-red-900 px-5 py-8 text-white sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-300">
          Practice by subject
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          JEE Mock Tests
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-100 sm:text-base">
          Choose a subject to find its available practice tests. Use each
          attempt to practise applying concepts, and review your answers to
          decide what to revise next.
        </p>
        <p className="mt-4 text-sm font-medium text-yellow-100">
          {subjects.length} {subjects.length === 1 ? "subject" : "subjects"}{" "}
          available · {totalTests}{" "}
          {totalTests === 1 ? "practice test" : "practice tests"}
        </p>
      </div>

      {subjects.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            No mock tests are available yet
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Please check back later for subject-wise practice tests.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.slug}
              to={`/jeemocktest/${subject.slug}`}
              className="
                block rounded-xl border border-gray-200
                bg-white p-5 shadow-sm no-underline
                transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900
                sm:p-6
              "
            >
              <h2 className="text-2xl font-bold text-red-900">
                {subject.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {subject.guidance}
              </p>
              <p className="mt-4 border-t border-gray-100 pt-3 text-sm font-semibold text-red-900">
                {subject.tests.length}{" "}
                {subject.tests.length === 1 ? "practice test" : "practice tests"}
                <span aria-hidden="true" className="float-right">
                  Explore tests →
                </span>
              </p>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-5 rounded-xl border border-yellow-200 bg-yellow-50 p-5 sm:grid-cols-2 sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Before you start
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Check the test duration and maximum score on the test list. Choose
            a quiet time, keep track of questions you find difficult, and
            review the result after submitting.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Make practice useful
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            An attempt is most helpful when followed by review. Note recurring
            mistakes, revisit the relevant topics, and use that list to guide
            your next revision session.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JeeMockTest;
