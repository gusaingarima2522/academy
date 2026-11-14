import { Link, useParams } from "react-router-dom";
import { examStudyMaterial } from "../data/examStudyMaterial";

const ExamStudyMaterial = () => {
  const { examId } = useParams();
  const material = examStudyMaterial[examId];

  if (!material) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">
          Study material not found
        </h1>
        <Link
          to="/resources"
          className="mt-6 inline-block font-semibold text-red-900 underline"
        >
          Return to resources
        </Link>
      </main>
    );
  }

  const mockPath = {
    clat: "/mock#clat-mock",
    cuet: "/mock#cuet-mock",
    jee: "/jeemocktest",
  }[examId];

  return (
    <main className="min-h-screen bg-slate-50">
      <header
        className={`bg-gradient-to-br ${material.accent} px-4 py-10 text-white sm:px-6 sm:py-14`}
      >
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-white/80">
            <Link to="/resources" className="text-white underline">
              Resources
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link
              to={`/resources/${examId}`}
              className="text-white underline"
            >
              {material.name}
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span>Study Material</span>
          </nav>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-yellow-200">
            {material.name} preparation
          </p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            {material.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            {material.description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section aria-labelledby="study-areas-heading">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-red-700">
              Guided learning
            </p>
            <h2
              id="study-areas-heading"
              className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl"
            >
              Choose a study area
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {material.areas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-sm font-extrabold text-red-900">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {area.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 border-t border-gray-100 pt-4">
                  {area.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex gap-3 text-sm leading-6 text-gray-700"
                    >
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400"
                        aria-hidden="true"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-800">
                    How to study this area
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {area.approach}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-9 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
            Make a routine
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-gray-900">
            Study, practise, review
          </h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {material.studyPlan.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-xl bg-white p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-900 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-7 border-t border-gray-200 pt-5 text-xs leading-5 text-gray-500">
          {material.sourceNote}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to={`/resources/${examId}`}
            className="rounded-xl border border-red-900 px-5 py-3 text-sm font-bold text-red-900 no-underline transition hover:bg-red-50"
          >
            ← {material.name} resources
          </Link>
          <Link
            to={mockPath}
            className="rounded-xl bg-red-900 px-5 py-3 text-sm font-bold text-white no-underline transition hover:bg-red-800"
          >
            Go to mock tests →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ExamStudyMaterial;
