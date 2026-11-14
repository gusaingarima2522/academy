const rawModules = import.meta.glob("../assets/json/clat/**/*.json", {
  eager: true,
  import: "default",
});
const questionImageModules = import.meta.glob("../assets/**/*.png", {
  eager: true,
  import: "default",
});
const questionImages = Object.fromEntries(
  Object.entries(questionImageModules).map(([path, source]) => [
    path.split("/").pop(),
    source,
  ]),
);

const FILE_PATTERN = /^CLAT_(\d{4})_(UG|PG)_SET_(.+)\.json$/i;

const normalizeQuestion = (question, passageText, sectionName) => ({
  ...question,
  sectionName,
  passageText,
  image: question.image ? questionImages[question.image] : undefined,
  options: Array.isArray(question.options)
    ? question.options.map((option) => option.replace(/^\d+\)\s*/, ""))
    : [],
  answer: String(question.answer),
});

const normalizeTest = (test, year, category, setName) => {
  const questions = test.sections.flatMap((section) =>
    section.passages.flatMap((passage) =>
      passage.questions.map((question) =>
        normalizeQuestion(question, passage.passageText, section.sectionName),
      ),
    ),
  );

  const marking = test.test_metadata.marking || "";
  const correct = Number(marking.match(/\+([\d.]+)\s*for correct/i)?.[1]);
  const incorrect = Number(marking.match(/-([\d.]+)\s*for incorrect/i)?.[1]);

  return {
    ...test.test_metadata,
    testName: `CLAT ${year} ${category.toUpperCase()} - Set ${setName}`,
    year,
    category,
    setName,
    totalQuestions: questions.length,
    sections: test.sections.map((section) => section.sectionName),
    topics: test.test_metadata.topics || [],
    instructions: [
      `This CLAT ${category.toUpperCase()} paper contains ${questions.length} questions across ${test.sections.length} section${test.sections.length === 1 ? "" : "s"}.`,
      ...(test.test_metadata.topics?.length
        ? [`Topics: ${test.test_metadata.topics.join(", ")}.`]
        : []),
    ].join(" "),
    questions,
    marking: {
      correct: Number.isFinite(correct) ? correct : 1,
      incorrect: Number.isFinite(incorrect) ? -incorrect : 0,
      description: marking || "Marking scheme not specified",
    },
  };
};

export const clatPyqBank = Object.fromEntries(
  Object.entries(rawModules).flatMap(([path, test]) => {
    const fileName = path.split("/").pop();
    const match = fileName.match(FILE_PATTERN);
    if (!match) return [];

    const [, year, category, setName] = match;
    const normalized = normalizeTest(test, Number(year), category.toLowerCase(), setName);
    return [[`${year}-${category.toLowerCase()}-${setName.toLowerCase()}`, normalized]];
  }),
);

export const getClatYears = () =>
  [...new Set(Object.values(clatPyqBank).map((test) => test.year))].sort(
    (a, b) => b - a,
  );

export const getClatCategories = (year) => ["ug", "pg"].map((category) => ({
  category,
  tests: Object.values(clatPyqBank)
    .filter((test) => test.year === Number(year) && test.category === category)
    .sort((a, b) => a.setName.localeCompare(b.setName, undefined, { numeric: true })),
}));

export const getClatTests = (year, category) =>
  getClatCategories(year).find((item) => item.category === category.toLowerCase())?.tests || [];

export const getClatTest = (year, category, setName) =>
  clatPyqBank[`${year}-${category.toLowerCase()}-${setName.toLowerCase()}`] || null;
