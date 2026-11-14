import { Link, useLocation, useParams } from "react-router-dom";
import ResourceSidebar, { ResourceFaq } from "./ResourceSidebar";

const examLibraries = {
  clat: {
    name: "CLAT",
    title: "CLAT Resource Library",
    description: "Build strong reading, reasoning, legal, and quantitative skills with organised CLAT preparation resources.",
    accent: "from-red-950 via-red-900 to-rose-800",
  },
  cuet: {
    name: "CUET",
    title: "CUET Resource Library",
    description: "Prepare systematically with language, domain, general aptitude, and practice resources for CUET.",
    accent: "from-yellow-500 via-amber-400 to-orange-500",
  },
  jee: {
    name: "JEE",
    title: "JEE Resource Library",
    description: "Strengthen Physics, Chemistry, and Mathematics with subject-wise notes, practice, and mock tests.",
    accent: "from-slate-950 via-red-950 to-red-800",
  },
};

const baseCards = {
  syllabus: { title: "Syllabus", icon: "/icons/syllabus.png", button: "View Syllabus" },
  notes: { title: "Study Material", icon: "/icons/books.png", button: "Open Study Material" },
  mocks: { title: "Mock Tests", icon: "/icons/test.png", button: "Start Mock Test" },
  papers: { title: "Sample Papers", icon: "/icons/education.png", button: "View Papers" },
  books: { title: "Book Notes", icon: "/icons/guide.png", button: "Browse Notes" },
  special: { title: "Revision Notes", icon: "/icons/bulb.png", button: "Open Revision Notes" },
  pyq: { title: "Previous Year Papers Online", icon: "/icons/test.png", button: "Start PYQ Online Test" },
};

const ResourceLibrary = ({ examId: routeExamId }) => {
  const params = useParams();
  const location = useLocation();
  const pathExamId = location.pathname.split("/").filter(Boolean).pop();
  const requestedExamId = String(routeExamId || params.examId || params.resourceId || pathExamId || "").toLowerCase();
  const examId = Object.prototype.hasOwnProperty.call(examLibraries, requestedExamId)
    ? requestedExamId
    : null;
  const exam = examLibraries[examId];

  if (!exam) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">Resource library not found</h1>
        <Link to="/resources" className="mt-6 inline-block rounded-lg bg-red-900 px-5 py-3 font-semibold text-white">Return to resources</Link>
      </main>
    );
  }

  const content = {
    clat: {
      syllabus: ["English Language", "Current Affairs and GK", "Legal Reasoning", "Logical Reasoning", "Quantitative Techniques"],
      notes: ["Legal principles and facts", "Reading comprehension", "Argument and inference", "Current affairs revision"],
      mocks: ["Section-wise practice", "Full mock attempts", "Accuracy and time review"],
      papers: ["Official sample questions", "Previous-year-style practice", "Timed practice papers"],
      books: ["Chapter-wise summaries", "Vocabulary lists", "Legal concepts and exercises"],
      special: ["One-line recall cues", "Common reasoning checks", "Quick quantitative reminders"],
      pyq: ["Year-wise CLAT papers", "UG paper sets A to D", "Timed online attempts with results"],
      mockTo: "/mock#clat-mock",
      resources: [
        ["clat-syllabus", "CLAT Syllabus & Exam Guide", "Understand the exam sections and create a balanced preparation plan."],
        ["clat-legal-reasoning", "Legal Reasoning Practice", "Learn principle-based application with guided examples."],
        ["clat-logical-reasoning", "Logical Reasoning Practice", "Strengthen arguments, assumptions, inferences, and critical analysis."],
        ["current-affairs", "Current Affairs & GK", "Organise news reading and recurring revision topics."],
      ],
    },
    cuet: {
      syllabus: ["Language subject", "Domain subjects", "General Aptitude Test", "Subject combinations"],
      notes: ["Language and reading", "Domain subject concepts", "General aptitude shortcuts", "Formula revision"],
      mocks: ["Subject-wise practice", "Full general-test attempts", "Performance review"],
      papers: ["Sample question papers", "Previous-year patterns", "Section-wise practice sets"],
      books: ["Chapter summaries", "NCERT-based revisions", "Important questions and examples"],
      special: ["Memory prompts", "Quick unit checks", "Last-minute review cues"],
      mockTo: "/mock#cuet-mock",
      resources: [
        ["cuet-syllabus", "CUET UG Syllabus", "Review preparation areas and build a subject-wise plan."],
        ["cuet-general-aptitude", "General Aptitude Practice", "Practise quantitative, logical, and numerical reasoning."],
        ["english-practice", "English Language Practice", "Improve comprehension, vocabulary, grammar, and written expression."],
      ],
    },
    jee: {
      syllabus: ["Physics topics", "Chemistry topics", "Mathematics topics", "Exam pattern and marking"],
      notes: ["Physics concepts and derivations", "Chemistry reactions and formulas", "Mathematics methods", "Revision sheets"],
      mocks: ["Subject-wise JEE practice", "Physics, Chemistry and Mathematics", "Answer review and analysis"],
      papers: ["Practice question sets", "Subject-wise sample questions", "Available previous-style papers"],
      books: ["Chapter summaries", "Important formula sheets", "Conceptual and numerical questions"],
      special: ["Formula reminders", "Reaction and unit checks", "Common calculation checks"],
      mockTo: "/jeemocktest",
      resources: [["mock-test-resources", "Mock Test Preparation", "Use test attempts effectively and turn results into revision goals."]],
    },
  }[examId] || null;

  if (!content) {
    return <main className="mx-auto max-w-3xl px-4 py-16 text-center"><h1 className="text-3xl font-bold text-red-900">Resource library not found</h1></main>;
  }

  const descriptions = {
    clat: {
      syllabus: "Explore the CLAT sections and the skills to practise in each one.",
      notes: "Concept explanations and guided study approaches for each CLAT section.",
      mocks: "Practise under timed conditions and review your section-wise performance.",
      papers: "Use representative and previous-year-style papers to understand the question pattern.",
      books: "Chapter-wise summaries, vocabulary, legal principles, and preparation exercises.",
      special: "Compact prompts and key reminders for quick recall before practice.",
      pyq: "Attempt real CLAT papers online, year by year, under exam-style timing.",
    },
    cuet: {
      syllabus: "Explore language, domain-subject and general-aptitude preparation areas.",
      notes: "Subject-area explanations and guidance for planning CUET preparation.",
      mocks: "Subject-specific and full practice attempts aligned with CUET preparation needs.",
      papers: "Sample sets and practice papers for question familiarity and timed preparation.",
      books: "NCERT and chapter-based summaries with important questions and revision points.",
      special: "Short memory cues and last-minute reminders for language, domains and aptitude.",
    },
    jee: {
      syllabus: "Review Physics, Chemistry and Mathematics preparation areas.",
      notes: "Guided concept study for Physics, Chemistry and Mathematics problem solving.",
      mocks: "Take subject-wise practice tests and review each attempt using the existing test interface.",
      papers: "Use sample and practice papers to build familiarity with problem types and exam pacing.",
      books: "Topic and chapter summaries with formulas, important concepts, and worked questions.",
      special: "Concise formula and concept reminders for quick PCM revision.",
    },
  }[examId] || {};

  const baseCardKeys = ["syllabus", "notes", "mocks", "papers", "books", "special"];
  const cardKeys = examId === "clat" ? ["pyq", ...baseCardKeys] : baseCardKeys;

  const cardAction = (key) => {
    if (key === "syllabus") {
      return {
        type: "internal",
        to: `/resources/${examId}/syllabus`,
        label: baseCards[key].button,
      };
    }
    if (key === "notes") {
      return {
        type: "internal",
        to: `/resources/${examId}/study-material`,
        label: baseCards[key].button,
      };
    }
    if (key === "special") {
      return {
        type: "internal",
        to: `/resources/${examId}/revision-notes`,
        label: baseCards[key].button,
      };
    }
    if (key === "pyq") return { type: "internal", to: "/clat-pyq", label: baseCards[key].button };
    if (key === "mocks") return { type: "internal", to: content.mockTo, label: baseCards[key].button };
    if (key === "papers") return { type: "internal", to: content.mockTo, label: baseCards[key].button };
    if (examId === "clat" && key === "books") return { type: "internal", to: "/resources/clat/books", label: baseCards[key].button };
    return { type: "internal", to: `/resources/${content.resources[0][0]}`, label: baseCards[key].button };
  };

  return (
    <main className="min-h-[70vh] bg-gray-50">
      <header className={`bg-gradient-to-br ${exam.accent} px-4 py-12 text-white sm:px-6 sm:py-16`}>
        <div className="mx-auto max-w-7xl">
          <Link to="/resources" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-white/20">
            <span aria-hidden="true">←</span> All resources
          </Link>
          <div className="mt-7 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-200">{exam.name} preparation</p>
            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl">{exam.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">{exam.description}</p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">Study library</p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Choose a resource type</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-600">Explore subject-wise study material, syllabus guidance, practice tests and academy resources.</p>
        </div>

        <div className="sidebar-content-layout grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cardKeys.map((key) => {
              const card = baseCards[key];
              const action = cardAction(key);
              return (
                <article key={key} className={`flex min-h-[290px] flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:p-6 ${key === "pyq" ? "sm:col-span-2 lg:col-span-3" : ""}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 ring-1 ring-red-100">
                    <img src={card.icon} alt="" className="h-9 w-9 object-contain" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{descriptions[examId]?.[key] || "Detailed preparation content will be added here."}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {(content[key] || []).slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" aria-hidden="true" /><span>{item}</span></li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <Link to={action.to} className="flex w-full items-center justify-between rounded-lg bg-red-900 px-4 py-3 text-sm font-bold text-white no-underline hover:bg-red-800">{action.label}<span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              );
            })}
          </div>
          <ResourceSidebar mode="exam" examId={examId} showFaq={false} />
        </div>

        <div className="sidebar-content-layout mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <section className="min-w-0 rounded-2xl border border-red-100 bg-white p-5 sm:p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">Recommended guides</p>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">Start with these academy resources</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(content.resources || []).map(([id, title, description]) => (
                <Link key={id} to={`/resources/${id}`} className="rounded-xl border border-gray-200 p-4 text-gray-900 no-underline transition hover:border-red-200 hover:bg-red-50">
                  <span className="font-bold">{title}</span>
                  <span className="mt-2 block text-sm leading-6 text-gray-600">{description}</span>
                  <span className="mt-3 block text-sm font-bold text-red-800">Open guide →</span>
                </Link>
              ))}
            </div>
          </section>
          <ResourceFaq mode="exam" />
        </div>
      </section>
    </main>
  );
};

export default ResourceLibrary;
