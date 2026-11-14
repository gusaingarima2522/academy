import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TESTS_PER_PAGE } from "../data/jeeMockTests";
import { getAvailableSubjects, getBankedTests } from "../data/jeeTestBank";

const JeeMockSubject = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const subject = getAvailableSubjects().find((item) => item.slug === slug);
  const [pagination, setPagination] = useState({
    slug,
    page: 1,
    pendingPage: null,
  });
  const page = pagination.slug === slug ? pagination.page : 1;
  const pendingPage =
    pagination.slug === slug ? pagination.pendingPage : null;
  const isPageLoading = pendingPage !== null;

  useEffect(() => {
    if (pendingPage === null) return undefined;

    const timer = window.setTimeout(() => {
      setPagination((current) =>
        current.slug !== slug || current.pendingPage !== pendingPage
          ? current
          : { slug, page: pendingPage, pendingPage: null }
      );
    }, 500);

    return () => window.clearTimeout(timer);
  }, [pendingPage, slug]);

  if (!subject) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-red-900">
          Subject not found
        </h1>
        <Link to="/jeemocktest" className="text-red-900 underline">
          Back to JEE Mock Tests
        </Link>
      </section>
    );
  }

  const tests = getBankedTests(subject.slug).map((test) => ({
    id: `${subject.slug}-${test.number}`,
    level: test.level,
    title: test.testName,
    duration: `${test.timeMinutes} min`,
    maxScore: test.totalMarks,
  }));
  const totalPages = Math.max(1, Math.ceil(tests.length / TESTS_PER_PAGE));
  const startIndex = (page - 1) * TESTS_PER_PAGE;
  const visibleTests = tests.slice(startIndex, startIndex + TESTS_PER_PAGE);
  const skeletonCount =
    pendingPage === null
      ? visibleTests.length
      : Math.min(TESTS_PER_PAGE, tests.length - (pendingPage - 1) * TESTS_PER_PAGE);

  const changePage = (nextPage) => {
    if (isPageLoading || nextPage === page) return;

    window.scrollTo({ top: 0, behavior: "smooth" });
    setPagination({ slug, page, pendingPage: nextPage });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold text-red-900 sm:text-4xl">
        {subject.name} Mock Tests
      </h1>
      <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
        Select a practice test to work through {subject.name} questions under
        timed conditions. Each test card shows its duration and maximum score;
        after submitting, review the result and revisit questions that need
        more work.
      </p>

      {/* <div className="mb-8 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 px-4 py-3 text-sm leading-6 text-gray-700">
        Tip: use a consistent test routine, note topics that slowed you down,
        and review those topics before your next attempt.
      </div> */}

      {tests.length === 0 && (
        <p className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-600">
          No {subject.name} tests have been added yet. Please check back later.
        </p>
      )}

      <div
        id="test-levels"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {isPageLoading
          ? Array.from({ length: skeletonCount }, (_, index) => (
            <div
              key={`test-level-skeleton-${index}`}
              className="animate-pulse rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              aria-hidden="true"
            >
              <div className="mb-5 h-5 w-3/4 rounded bg-gray-200" />
              <div className="mb-2 h-4 w-1/2 rounded bg-gray-100" />
              <div className="mb-6 h-4 w-1/3 rounded bg-gray-100" />
              <div className="mt-auto h-8 rounded bg-red-100" />
            </div>
          ))
          : visibleTests.map((test) => (
          <div
            key={test.id}
            className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            {/* <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-900">
              Level {test.level}
            </p> */}
            <h2 className="mb-3 text-base font-semibold text-gray-900">
              {test.title}
            </h2>

            <div className="mb-4 space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">Duration:</span>{" "}
                {test.duration}
              </p>
              <p>
                <span className="font-medium">Max Score:</span>{" "}
                {test.maxScore}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                const sessionKey = `academy-exam:${subject.slug}-${test.level}`;
                window.localStorage.removeItem(sessionKey);
                window.sessionStorage.removeItem(sessionKey);
                navigate(`/jeemocktest/${subject.slug}/test/${test.level}`);
              }}
              className="
                mt-auto block rounded-md
                bg-red-900 py-1.5 text-center text-sm font-semibold text-white
                transition hover:bg-red-800
              "
            >
              Start Test
            </button>
          </div>
          ))}
      </div>

      <nav
        className="mt-10 flex items-center justify-center gap-4"
        aria-label="Test level pages"
      >
        <button
          type="button"
          onClick={() => changePage(page - 1)}
          disabled={page === 1 || isPageLoading}
          aria-label="Previous levels"
          aria-controls="test-levels"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-red-900 text-lg font-semibold text-red-900 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {"<"}
        </button>

        <span className="text-sm text-gray-700" aria-live="polite">
          Levels {tests.length === 0 ? 0 : startIndex + 1}-
          {Math.min(startIndex + TESTS_PER_PAGE, tests.length)} of {tests.length}
        </span>

        <button
          type="button"
          onClick={() => changePage(page + 1)}
          disabled={page === totalPages || isPageLoading}
          aria-label="Next levels"
          aria-controls="test-levels"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-red-900 text-lg font-semibold text-red-900 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {">"}
        </button>
      </nav>
    </section>
  );
};

export default JeeMockSubject;
