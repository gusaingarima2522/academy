import { Link } from "react-router-dom";
import { getClatCategories, getClatYears } from "../data/clatPyqBank";

const MockTest = () => {
  const years = getClatYears();
  const availableSets = years.reduce(
    (total, year) =>
      total +
      getClatCategories(year).reduce(
        (categoryTotal, category) => categoryTotal + category.tests.length,
        0,
      ),
    0,
  );

  return (
    <main id="clat-mock" className="min-h-[70vh] bg-gray-50">
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-rose-800 px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            World Wise Education · CLAT practice
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Practise like the real CLAT examination
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-red-100 sm:text-base sm:leading-8">
            Take timed online papers, navigate questions with the exam palette,
            review marked questions, and analyse your performance after submission.
          </p>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
            <div className="rounded-xl bg-white/10 p-4"><strong className="block text-2xl">{years.length}</strong><span className="text-xs text-red-100 sm:text-sm">Years</span></div>
            <div className="rounded-xl bg-white/10 p-4"><strong className="block text-2xl">{availableSets}</strong><span className="text-xs text-red-100 sm:text-sm">Paper sets</span></div>
            <div className="rounded-xl bg-white/10 p-4"><strong className="block text-2xl">UG + PG</strong><span className="text-xs text-red-100 sm:text-sm">Categories</span></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">Choose your route</p>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Start your CLAT preparation</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">Use preparation resources before attempting a paper, or go directly to the available online PYQ tests.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50">
              <img src="/icons/guide.png" alt="" className="h-9 w-9 object-contain" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-gray-900">CLAT preparation resources</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">Review the syllabus, notes, sample papers, and guided preparation material before you begin timed practice.</p>
            <Link to="/resources/clat" className="mt-6 inline-flex w-fit rounded-lg border border-red-900 px-5 py-3 text-sm font-bold text-red-900 no-underline hover:bg-red-50">Explore resources <span className="ml-2">→</span></Link>
          </article>

          <article className="flex flex-col rounded-2xl bg-red-900 p-6 text-white shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
              <img src="/icons/test.png" alt="" className="h-9 w-9 object-contain" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">CLAT PYQ online practice</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-red-100">Choose a year, select UG or PG, open a paper set, and attempt it using the full JEE-style online examination interface.</p>
            <Link to="/clat-pyq" className="mt-6 inline-flex w-fit rounded-lg bg-yellow-300 px-5 py-3 text-sm font-bold text-red-950 no-underline hover:bg-yellow-200">Browse previous papers <span className="ml-2">→</span></Link>
          </article>
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-red-100 bg-white p-5 sm:grid-cols-3 sm:p-6">
          {[
            ["01", "Choose a year", "Latest available year appears first."],
            ["02", "Select your paper", "Keep UG and PG sets separate."],
            ["03", "Attempt and review", "Submit, see your score, and review answers."],
          ].map(([number, title, description]) => (
            <div key={number} className="flex gap-3">
              <span className="text-lg font-extrabold text-red-700">{number}</span>
              <div><h3 className="font-bold text-gray-900">{title}</h3><p className="mt-1 text-sm leading-6 text-gray-600">{description}</p></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MockTest;
