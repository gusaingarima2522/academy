import { Link, useParams } from "react-router-dom";
import { studyResources } from "../data/studyResources";
import ResourceSidebar from "./ResourceSidebar";
import ClatReasoningCentre from "./ClatReasoningCentre";
import ClatGkCurrentAffairsCentre from "./ClatGkCurrentAffairsCentre";

const ResourceContent = () => {
  const { resourceId } = useParams();
  const resource = studyResources.find((item) => item.id === resourceId);

  if (!resource) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">Resource not found</h1>
        <p className="mt-3 text-gray-600">
          This study resource may have moved or is no longer available.
        </p>
        <Link
          to="/resources"
          className="mt-6 inline-block font-semibold text-red-900 underline"
        >
          Back to study resources
        </Link>
      </section>
    );
  }

  const resourceExamId =
    resource.category === "CLAT" || resource.category === "General Knowledge"
      ? "clat"
      : resource.category === "CUET"
        ? "cuet"
        : resource.category === "Mock Tests"
          ? "jee"
          : undefined;

  if (resource.id === "clat-logical-reasoning") {
    return <ClatReasoningCentre key="clat-logical-reasoning" />;
  }

  if (resource.id === "clat-legal-reasoning") {
    return <ClatReasoningCentre key="clat-legal-reasoning" track="legal" />;
  }

  if (resource.id === "current-affairs") {
    return <ClatGkCurrentAffairsCentre />;
  }

  if (resource.id === "clat-syllabus") {
    return (
      <main className="min-h-screen bg-slate-50">
        <header className="bg-gradient-to-br from-red-950 via-red-900 to-rose-800 px-4 py-10 text-white sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white no-underline transition hover:bg-white/20"
            >
              <span aria-hidden="true">←</span> All study resources
            </Link>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-yellow-200">
              CLAT 2027 · Undergraduate
            </p>
            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Syllabus &amp; Exam Guide
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              A section-by-section study guide to the skills tested in CLAT UG.
              The exam focuses on comprehension and reasoning, with questions
              based on passages and information provided.
            </p>
          </div>
        </header>

        <div className="sidebar-content-layout mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-10">
          <section aria-labelledby="exam-pattern-heading">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700">
                At a glance
              </p>
              <h2
                id="exam-pattern-heading"
                className="mt-1 text-2xl font-extrabold text-gray-900"
              >
                CLAT 2027 exam pattern
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {resource.examPattern.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
                >
                  <p className="text-sm font-medium text-gray-600">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xl font-extrabold text-red-900 sm:text-2xl">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Each correct answer earns one mark. A wrong answer loses 0.25
              marks; unanswered questions do not incur a penalty.
            </p>
          </section>

          <section aria-labelledby="syllabus-sections-heading">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700">
                The syllabus
              </p>
              <h2
                id="syllabus-sections-heading"
                className="mt-1 text-2xl font-extrabold text-gray-900"
              >
                Five sections, five skill sets
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
                Use these summaries to understand what to practise in each
                section and how to approach its questions.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {resource.syllabusSections.map((section, index) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-sm font-extrabold text-red-900">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {section.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 border-t border-gray-100 pt-4">
                    {section.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex gap-3 text-sm leading-6 text-gray-700"
                      >
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400"
                          aria-hidden="true"
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Make a study plan
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-gray-900">
              A practical way to use the syllabus
            </h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {resource.preparationSteps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl bg-white p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-900 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-gray-700">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <p className="border-t border-gray-200 pt-5 text-xs leading-5 text-gray-500">
            {resource.sourceNote}
          </p>
          </div>
          <ResourceSidebar mode="topic" examId={resourceExamId} resource={resource} />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-rose-800 px-4 py-12 text-white sm:px-6 sm:py-16">
        <div
          className="pointer-events-none absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full border-[40px] border-white/5"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white no-underline transition hover:bg-white/20"
          >
            <span aria-hidden="true">←</span> All study resources
          </Link>

          <div className="mt-9 grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-950">
                  {resource.category}
                </span>
                <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-red-50">
                  Student study guide
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                {resource.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-red-50 sm:text-base sm:leading-8">
                {resource.introduction}
              </p>
            </div>
            <div className="hidden h-36 w-36 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur sm:flex">
              <img
                src={resource.icon}
                alt=""
                className="h-full w-full object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="sidebar-content-layout mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-lg text-amber-800" aria-hidden="true">
                ✦
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-red-700">
                  Your learning outcomes
                </p>
                <h2 className="text-xl font-bold text-gray-900">
                  What you&apos;ll take away
                </h2>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {resource.highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="rounded-xl bg-rose-50 p-4"
                >
                  <span className="text-xs font-extrabold text-red-700">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-6 text-gray-800">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {resource.sections.map((section, index) => (
            <section
              key={section.heading}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 sm:px-7">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-900 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {section.heading}
                </h2>
              </div>
              <ul className="space-y-4 px-5 py-5 sm:px-7 sm:py-6">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-gray-700 sm:text-base"
                  >
                    <span
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400 ring-4 ring-amber-50"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm sm:p-7">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Quick check
            </p>
            <h2 className="mt-1 text-xl font-bold text-gray-900">
              Put it into practice
            </h2>
            <p className="mt-4 rounded-xl border border-amber-100 bg-white p-4 text-sm leading-7 text-gray-800 sm:text-base">
              {resource.quickTask.prompt}
            </p>
            <details className="group mt-3 rounded-xl border border-amber-100 bg-white">
              <summary className="cursor-pointer list-none rounded-xl px-4 py-3 text-sm font-bold text-red-800 outline-none transition hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-red-700 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  <span>Show suggested answer</span>
                  <span
                    className="transition group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </span>
              </summary>
              <p className="border-t border-amber-100 px-4 py-4 text-sm leading-7 text-gray-700 sm:text-base">
                {resource.quickTask.answer}
              </p>
            </details>
          </section>
        </div>

        <ResourceSidebar
          mode="topic"
          examId={resourceExamId}
          resource={resource}
        />
      </div>
    </main>
  );
};

export default ResourceContent;
