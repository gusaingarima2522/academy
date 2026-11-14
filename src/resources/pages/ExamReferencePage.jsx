import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { examRevisionNotes } from "../data/examRevisionNotes";
import { examSyllabus } from "../data/examSyllabus";

const ExamReferencePage = ({ resourceType }) => {
  const { examId } = useParams();
  const isSyllabus = resourceType === "syllabus";
  const [clatProgram, setClatProgram] = useState("ug");
  const content = isSyllabus
    ? examId === "clat" && clatProgram === "pg"
      ? examSyllabus.clatPg
      : examSyllabus[examId]
    : examRevisionNotes[examId];

  if (!content) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">
          Resource not found
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

  return (
    <main className="min-h-screen bg-slate-50">
      <header
        className={`bg-gradient-to-br ${content.accent} px-4 py-10 text-white sm:px-6 sm:py-14`}
      >
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-white/80">
            <Link to="/resources" className="text-white underline">
              Resources
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link to={`/resources/${examId}`} className="text-white underline">
              {content.name}
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>{isSyllabus ? "Syllabus" : "Revision Notes"}</span>
          </nav>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-yellow-200">
            {content.name} preparation
          </p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            {content.description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
        {isSyllabus && examId === "clat" && (
          <nav aria-label="CLAT syllabus programme" className="flex flex-wrap gap-3">
            {[
              ["ug", "CLAT UG"],
              ["pg", "CLAT PG"],
            ].map(([program, label]) => (
              <button
                key={program}
                type="button"
                aria-pressed={clatProgram === program}
                onClick={() => setClatProgram(program)}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                  clatProgram === program
                    ? "bg-red-900 text-white"
                    : "border border-red-900 bg-white text-red-900 hover:bg-red-50"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        )}

        {isSyllabus && content.pattern && (
          <section aria-labelledby="exam-pattern-heading">
            <h2
              id="exam-pattern-heading"
              className="mb-4 text-xl font-extrabold text-gray-900"
            >
              Exam pattern
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {content.pattern.map(([label, value]) => (
                <article
                  key={label}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm text-gray-600">{label}</p>
                  <p className="mt-1 text-lg font-extrabold text-red-900">
                    {value}
                  </p>
                </article>
              ))}
            </div>
            {content.overview && (
              <p className="mt-4 rounded-2xl border border-red-100 bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm">
                {content.overview}
              </p>
            )}
          </section>
        )}

        {isSyllabus && content.weightage && (
          <section aria-labelledby="section-weightage-heading">
            <h2
              id="section-weightage-heading"
              className="mb-4 text-xl font-extrabold text-gray-900"
            >
              Approximate section-wise weightage
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full min-w-[30rem] text-left text-sm">
                <thead className="bg-red-50 text-gray-900">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">Section</th>
                    <th scope="col" className="px-4 py-3 font-bold">Approx. questions</th>
                    <th scope="col" className="px-4 py-3 font-bold">Weightage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {content.weightage.map(([section, questions, weightage]) => (
                    <tr key={section} className={section === "Total" ? "font-bold text-gray-900" : ""}>
                      <th scope="row" className="px-4 py-3 font-semibold">{section}</th>
                      <td className="px-4 py-3">{questions}</td>
                      <td className="px-4 py-3">{weightage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {isSyllabus && content.weightageNote && (
          <section aria-labelledby="section-weightage-heading">
            <h2
              id="section-weightage-heading"
              className="mb-3 text-xl font-extrabold text-gray-900"
            >
              Section-wise weightage
            </h2>
            <p className="rounded-2xl border border-red-100 bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm">
              {content.weightageNote}
            </p>
          </section>
        )}

        <section aria-labelledby="content-heading">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-red-700">
              {isSyllabus ? "Coverage outline" : "Active recall"}
            </p>
            <h2
              id="content-heading"
              className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl"
            >
              {isSyllabus ? "What to cover" : "Quick revision by subject"}
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {content.sections?.map((section, index) => (
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
                  {section.topics.map((topic) => (
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
              </article>
            ))}

            {content.notes?.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-sm font-extrabold text-amber-900">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {section.title}
                    </h3>
                    <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-950">
                      {section.cue}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 border-t border-gray-100 pt-4">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-gray-700"
                    >
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-700"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <p className="border-t border-gray-200 pt-5 text-xs leading-5 text-gray-500">
          {content.sourceNote}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to={`/resources/${examId}/study-material`}
            className="rounded-xl bg-red-900 px-5 py-3 text-sm font-bold text-white no-underline transition hover:bg-red-800"
          >
            Open Study Material →
          </Link>
          <Link
            to={`/resources/${examId}/${isSyllabus ? "revision-notes" : "syllabus"}`}
            className="rounded-xl border border-red-900 px-5 py-3 text-sm font-bold text-red-900 no-underline transition hover:bg-red-50"
          >
            {isSyllabus ? "Open Revision Notes" : "View Syllabus"}
          </Link>
          <Link
            to={`/resources/${examId}`}
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-bold text-gray-700 no-underline transition hover:bg-white"
          >
            ← {content.name} resources
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ExamReferencePage;
