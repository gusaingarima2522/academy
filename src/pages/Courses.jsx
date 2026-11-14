import { Link } from "react-router-dom";
import CourseSec from "../section/CourseSec";

const Courses = () => {
  return (
    <main className="w-full overflow-hidden bg-white">
      <section className="bg-red-900 px-4 py-12 text-center text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-300">
            Find a preparation path
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Courses for your next academic step
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-100 sm:text-base">
            Explore preparation options for CLAT and CUET, along with focused
            practice in mock tests and current affairs. Compare each course
            with your target exam, subjects, and the areas where you want
            structured support.
          </p>
        </div>
      </section>

      <CourseSec />

      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-800">
              Explore by preparation goal
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Different goals call for different study plans
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              Start with the area that matches your current priority. Check
              the detailed course page for its focus, suggested study
              approach, suitability information and listed price.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-900">
                CLAT
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Build reading and reasoning skills
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                CLAT preparation involves careful reading, reasoning from
                information, current-affairs revision and practice with
                quantitative questions. Choose a foundation or broader
                preparation option depending on what you need to work on.
              </p>
              <Link
                to="/courses/clat-foundation"
                className="mt-5 inline-block text-sm font-semibold text-red-900 underline underline-offset-2"
              >
                Explore CLAT foundation
              </Link>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-900">
                CUET
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Prepare around your chosen subjects
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                CUET subject choices can depend on your target programme and
                university. Confirm their latest requirements, then organise
                study by syllabus topic, practice and revision.
              </p>
              <Link
                to="/courses/cuet-ug-preparation"
                className="mt-5 inline-block text-sm font-semibold text-red-900 underline underline-offset-2"
              >
                Explore CUET UG preparation
              </Link>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-900">
                Practice
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Make revision active
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Mock tests and current-affairs practice help you apply what
                you have studied. Reviewing answers afterwards helps turn
                mistakes and unanswered questions into revision priorities.
              </p>
              <Link
                to="/courses/clat-mock-test"
                className="mt-5 inline-block text-sm font-semibold text-red-900 underline underline-offset-2"
              >
                Explore mock test practice
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-800">
              Choosing a course
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Start with your goal, then plan your preparation
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              The right starting point depends on the examination and the
              support you are looking for. Use these questions to narrow down
              the options.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <span className="text-sm font-bold text-red-800">01</span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                Which exam are you preparing for?
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Begin with your target. The catalogue includes CLAT preparation
                options, CUET UG courses, and focused entrance-exam support.
              </p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <span className="text-sm font-bold text-red-800">02</span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                What kind of support do you need?
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Consider whether you need broader subject preparation,
                targeted revision, current-affairs study, or additional mock
                test practice.
              </p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <span className="text-sm font-bold text-red-800">03</span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                Check the course details
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Open a course to review its description and listed price. If
                you need clarification about suitability or availability,
                contact the team before enrolling.
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/resources"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-red-900 px-5 py-2.5 text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              Browse study resources
            </Link>
            <Link
              to="/contact#contact-form"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-red-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              Ask about a course
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
