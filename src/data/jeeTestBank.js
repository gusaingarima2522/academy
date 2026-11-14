const rawTestModules = import.meta.glob("../assets/json/jee/**/*.json", {
  eager: true,
  import: "default",
});

const questionImageModules = import.meta.glob("../assets/**/*.png", {
  eager: true,
  import: "default",
});

const questionImages = Object.fromEntries(
  Object.entries(questionImageModules).map(([path, src]) => [
    path.split("/").pop(),
    src,
  ])
);

const TEST_FILE_PATTERN = /^([a-z][a-z0-9_-]*?)[\s_]*mock[\s_]*test[\s_]*(\d+)\.json$/i;

const normalizeSubjectSlug = (subject) => {
  const slug = subject
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();

  if (slug === "math") return "maths";
  if (slug === "chemistty") return "chemistry";
  return slug;
};

const formatSubjectName = (slug) => {
  if (slug === "maths") return "Maths";

  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const parseMarkingRule = (marking, rule) => {
  const match = marking.match(new RegExp(`([+-]?\\d+(?:\\.\\d+)?)\\s*for ${rule}`, "i"));
  return match ? Number(match[1]) : undefined;
};

const normalizeMarking = (marking) => {
  if (typeof marking === "object" && marking !== null) {
    return {
      ...marking,
      incorrectNumerical: marking.incorrectNumerical ?? marking.incorrect,
    };
  }

  if (typeof marking !== "string") {
    return marking;
  }

  return {
    correct: parseMarkingRule(marking, "correct"),
    incorrect: parseMarkingRule(marking, "incorrect(?!\\s+Numerical)"),
    incorrectNumerical: parseMarkingRule(marking, "incorrect\\s+Numerical"),
    description: marking,
  };
};

const normalizeTest = (test) => ({
  ...test,
  marking: normalizeMarking(test.marking),
  questions: test.questions.map((question) => ({
    ...question,
    image: question.image ? questionImages[question.image] : undefined,
    options: question.options?.map((option) => option.replace(/^\d\)\s*/, "")),
  })),
});

export const jeeTestBank = Object.fromEntries(
  Object.entries(rawTestModules).flatMap(([path, test]) => {
    const pathParts = path.split("/");
    const fileName = pathParts.pop();
    const subjectFolder = pathParts.pop();
    const match = fileName.match(TEST_FILE_PATTERN);

    if (!match) return [];

    const subjectFromFileName = match[1];
    const subject = subjectFolder === "jee" ? subjectFromFileName : subjectFolder;
    const slug = normalizeSubjectSlug(subject);

    return [[`${slug}-${match[2]}`, normalizeTest(test)]];
  })
);

export const getAvailableSubjects = () =>
  [...new Set(Object.keys(jeeTestBank).map((key) => key.slice(0, key.lastIndexOf("-"))))]
    .map((slug) => ({ slug, name: formatSubjectName(slug) }))
    .sort((a, b) => a.name.localeCompare(b.name));

export const getBankedTests = (slug) =>
  Object.entries(jeeTestBank)
    .filter(([key]) => key.startsWith(`${slug}-`))
    .map(([key, test]) => ({
      ...test,
      number: Number(key.slice(slug.length + 1)),
    }))
    .sort((a, b) => a.number - b.number)
    .map((test) => ({
      ...test,
      level: test.number,
    }));
