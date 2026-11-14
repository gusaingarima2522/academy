import { Link, useLocation } from "react-router-dom";
import { studyResources } from "../data/studyResources";

const exams = {
  clat: { name: "CLAT", library: "/resources/clat", mock: "/mock#clat-mock", course: "/clat" },
  cuet: { name: "CUET", library: "/resources/cuet", mock: "/mock#cuet-mock", course: "/cuet" },
  jee: { name: "JEE", library: "/resources/jee", mock: "/jeemocktest", course: "/courses" },
};

const generalLinks = [
  { label: "CLAT resources", to: "/resources/clat" },
  { label: "CUET resources", to: "/resources/cuet" },
  { label: "JEE resources", to: "/resources/jee" },
  { label: "Courses", to: "/courses" },
  { label: "Contact us", to: "/contact#contact-form" },
];

const faqSets = {
  all: [
    ["Where should I start?", "Choose your exam to browse its syllabus, study material, and practice options."],
    ["Can I find practice tests here?", "Yes. Use the exam-specific mock test links in the Quick links sidebar."],
    ["Need help choosing a resource?", "Contact the academy and share your target exam and preparation needs."],
  ],
  course: [
    ["How do I choose a course?", "Review the course focus areas and compare related courses for your exam."],
    ["Can I ask about this course?", "Use Contact us to enquire about course coverage and availability."],
  ],
  exam: [
    ["Where can I find exam-specific material?", "Choose a resource type or open one of the recommended guides on this page."],
    ["Where are the mock tests?", "Use the Mock tests link above to open practice for this exam."],
  ],
  topic: [
    ["How should I use this guide?", "Read the sections in order, try the quick practice, and note topics to revisit."],
    ["What should I study next?", "Open a related guide or return to the exam resource library for more options."],
  ],
};

export const ResourceFaq = ({ mode = "all" }) => (
  <section className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
    <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
      Helpful answers
    </p>
    <h2 className="mt-2 text-lg font-extrabold text-gray-900">FAQs</h2>
    <div className="mt-3 divide-y divide-amber-200">
      {faqSets[mode].map(([question, answer]) => (
        <details key={question} className="group py-3">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-gray-800 [&::-webkit-details-marker]:hidden">
            <span>{question}</span>
            <span className="shrink-0 text-red-800 transition-transform group-open:rotate-180" aria-hidden="true">⌄</span>
          </summary>
          <p className="pt-2 text-sm leading-6 text-gray-600">{answer}</p>
        </details>
      ))}
    </div>
  </section>
);

const ResourceSidebar = ({
  mode = "all",
  examId,
  resource,
  course,
  courseCatalog = [],
  showFaq = true,
}) => {
  const location = useLocation();
  const courseExamId = course
    ? course.slug.startsWith("cuet")
      ? "cuet"
      : course.slug.startsWith("jee")
        ? "jee"
        : "clat"
    : undefined;
  const currentExamId = examId || courseExamId;
  const exam = exams[currentExamId];
  const examCategories = {
    clat: ["CLAT", "General Knowledge"],
    cuet: ["CUET", "Practice"],
    jee: ["Mock Tests"],
  };
  const relatedResources = resource
    ? studyResources.filter(
        (item) =>
          item.id !== resource.id &&
          (item.category === resource.category ||
            (resource.category === "General Knowledge" &&
              item.category === "CLAT")),
      )
    : [];
  const examResources = currentExamId
    ? studyResources.filter((item) =>
        examCategories[currentExamId].includes(item.category),
      )
    : [];

  const relatedCourses = course
    ? courseCatalog.filter(
        (item) =>
          item.id !== course.id &&
          (item.slug.startsWith(currentExamId) ||
            (currentExamId === "clat" && item.slug.startsWith("law"))),
      )
    : [];
  const links = mode === "all"
    ? generalLinks
    : mode === "course"
      ? [
          { label: `${exam?.name || "Exam"} course resources`, to: exam?.library || "/resources" },
          ...relatedCourses.slice(0, 1).map((item) => ({
            label: item.title,
            to: `/courses/${item.slug}`,
            courseId: item.id,
          })),
          { label: `${exam?.name || "Exam"} mock tests`, to: exam?.mock || "/jeemocktest" },
          { label: "All courses", to: "/courses" },
          { label: "Contact us", to: "/contact#contact-form" },
        ]
      : mode === "exam"
        ? [
            ...examResources.slice(0, 2).map((item) => ({
              label: item.title,
              to: `/resources/${item.id}`,
              resourceId: item.id,
            })),
            { label: "Mock tests", to: exam?.mock || "/jeemocktest" },
            { label: "Courses", to: exam?.course || "/courses" },
            { label: "Contact us", to: "/contact#contact-form" },
          ]
        : [
            { label: `${exam?.name || "Exam"} resource library`, to: exam?.library || "/resources" },
            ...relatedResources.slice(0, 2).map((item) => ({
              label: item.title,
              to: `/resources/${item.id}`,
              resourceId: item.id,
            })),
            { label: "Mock tests", to: exam?.mock || "/jeemocktest" },
            { label: "Contact us", to: "/contact#contact-form" },
          ];
  const fallbackLinks =
    mode === "course"
      ? [
          { label: `${exam?.name || "Exam"} mock tests`, to: exam?.mock || "/jeemocktest" },
          { label: "All resources", to: "/resources" },
          { label: "Contact us", to: "/contact#contact-form" },
        ]
      : mode === "topic"
        ? [
            { label: `${exam?.name || "Exam"} mock tests`, to: exam?.mock || "/jeemocktest" },
            { label: "Courses", to: exam?.course || "/courses" },
            { label: "All resources", to: "/resources" },
            { label: "Contact us", to: "/contact#contact-form" },
          ]
        : [
            { label: `${exam?.name || "Exam"} resource library`, to: exam?.library || "/resources" },
            { label: "All resources", to: "/resources" },
            { label: "Contact us", to: "/contact#contact-form" },
          ];
  const visibleLinks = [...links, ...fallbackLinks]
    .filter(
      (link, index, allLinks) =>
        allLinks.findIndex((candidate) => candidate.to === link.to) === index,
    )
    .slice(0, 5);

  return (
    <div className={`order-last h-fit ${showFaq ? "space-y-5" : ""} lg:sticky lg:top-24 lg:self-start`}>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-red-700">
          {mode === "topic" || mode === "course" ? "Keep learning" : mode === "exam" ? "Useful links" : "Explore"}
        </p>
        <h2 className="mt-2 text-lg font-extrabold text-gray-900">
          {mode === "topic" ? "Related resources" : mode === "course" ? "Related courses & links" : mode === "exam" ? "Continue your preparation" : "Quick links"}
        </h2>
        <nav aria-label="Resource navigation" className="mt-4 space-y-1">
          {visibleLinks.map((link) => {
            const active =
              link.resourceId === resource?.id ||
              link.courseId === course?.id ||
              (!link.resourceId && !link.courseId && location.pathname === link.to);

            return (
              <Link
                key={`${link.label}-${link.to}`}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold no-underline transition ${
                  active
                    ? "bg-red-50 text-red-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-red-900"
                }`}
              >
                <span>{link.label}</span>
                <span aria-hidden="true" className="text-red-700">→</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {showFaq && <ResourceFaq mode={mode} />}
    </div>
  );
};

export default ResourceSidebar;
