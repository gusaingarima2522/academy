import { Link, useParams } from "react-router-dom";
import { studyResources } from "../data/studyResources";

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

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
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

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-2xl bg-gray-900 p-5 text-white shadow-lg sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Make this count
            </p>
            <h2 className="mt-2 text-xl font-bold">A simple study routine</h2>
            <ol className="mt-5 space-y-4">
              {[
                ["Read", "Work through one section without rushing."],
                ["Practise", "Try the quick check before revealing the answer."],
                ["Review", "Write down one idea you want to revisit."],
              ].map(([step, description], index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-amber-200">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-gray-200">
                    <strong className="text-white">{step}:</strong>{" "}
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {(resource.officialUrl || resource.actionTo) && (
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-gray-900">
                Keep learning
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Continue with an official source or explore related practice.
              </p>
              <div className="mt-5 space-y-3">
                {resource.officialUrl && (
                  <a
                    href={resource.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-red-800 px-4 py-3 text-center text-sm font-bold text-white no-underline transition hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                  >
                    {resource.officialLabel}
                    <span className="ml-2" aria-hidden="true">↗</span>
                  </a>
                )}
                {resource.actionTo && (
                  <Link
                    to={resource.actionTo}
                    className="block rounded-xl border border-red-800 px-4 py-3 text-center text-sm font-bold text-red-800 no-underline transition hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                  >
                    {resource.actionLabel}
                    <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </section>
          )}

          <Link
            to="/resources"
            className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-red-800 no-underline transition hover:bg-red-50"
          >
            Explore all resources <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default ResourceContent;
