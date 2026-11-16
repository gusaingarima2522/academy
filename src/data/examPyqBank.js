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

const rawModules = {
  jee: import.meta.glob("../assets/json/pyq/jee/**/*.json", {
    eager: true,
    import: "default",
  }),
  cuet: import.meta.glob("../assets/json/pyq/cuet/**/*.json", {
    eager: true,
    import: "default",
  }),
};

const formatCategory = (category) =>
  category
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

export const examPyqConfigs = {
  jee: {
    name: "JEE",
    fullName: "JEE Main",
    routeBase: "/jee-pyq",
    practicePath: "/jeemocktest",
    accent: "from-slate-950 via-red-950 to-red-800",
    fallbackYears: [2026, 2025, 2024],
    defaultCategory: "paper-1",
    categories: [
      { category: "paper-1", label: "Paper 1 (B.E. / B.Tech)" },
      { category: "paper-2", label: "Paper 2 (B.Arch / B.Plan)" },
    ],
    categoryAliases: {
      "paper-1": ["paper1", "paper-1", "paper_1", "p1"],
      "paper-2": ["paper2", "paper-2", "paper_2", "p2"],
    },
  },
  cuet: {
    name: "CUET",
    fullName: "CUET UG",
    routeBase: "/cuet-pyq",
    practicePath: "/cuet-pyq",
    accent: "from-yellow-500 via-amber-400 to-orange-500",
    fallbackYears: [2026, 2025, 2024],
    defaultCategory: "general",
    categories: [{ category: "general", label: "All papers" }],
    categoryAliases: {
      general: ["general", "all"],
    },
  },
};

const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildFileNamePattern = (config) => {
  const aliases = Object.values(config.categoryAliases)
    .flat()
    .sort((left, right) => right.length - left.length)
    .map(escapeRegExp)
    .join("|");

  return new RegExp(
    `^.*?(\\d{4})[_-](?:(${aliases})[_-])?(.+?)\\.json$`,
    "i",
  );
};

const buildAliasLookup = (config) =>
  Object.fromEntries(
    Object.entries(config.categoryAliases).flatMap(([category, aliases]) =>
      aliases.map((alias) => [alias.toLowerCase(), category]),
    ),
  );

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const parseFileName = (path, config, aliasLookup, pattern) => {
  const fileName = path.split("/").pop();
  const match = fileName.match(pattern);

  if (!match) return null;

  const year = Number(match[1]);
  const alias = match[2]?.toLowerCase();
  const category = (alias && aliasLookup[alias]) || config.defaultCategory;
  const setName = slugify(match[3]);

  if (!Number.isFinite(year) || !setName) return null;

  return { year, category, setName };
};

const normalizeMarking = (test, meta) => {
  const marking = test.marking ?? meta?.marking;

  if (marking && typeof marking === "object") {
    return {
      ...marking,
      incorrectNumerical: marking.incorrectNumerical ?? marking.incorrect,
      description: marking.description ?? "Marking scheme provided",
    };
  }

  const text = String(marking ?? "").trim();

  if (!text) {
    return {
      correct: 1,
      incorrect: 0,
      description: "Marking scheme not specified",
    };
  }

  const correct = Number(text.match(/\+?([\d.]+)\s*for correct/i)?.[1]);
  const incorrect = Number(text.match(/-([\d.]+)\s*for incorrect/i)?.[1]);

  return {
    correct: Number.isFinite(correct) ? correct : 1,
    incorrect: Number.isFinite(incorrect) ? -incorrect : 0,
    description: text,
  };
};

const normalizeQuestion = (question, sectionName, passageText) => ({
  ...question,
  sectionName,
  passageText,
  image: question.image ? questionImages[question.image] : undefined,
  options: Array.isArray(question.options)
    ? question.options.map((option) => String(option).replace(/^\d+\)\s*/, ""))
    : [],
  answer: String(question.answer),
});

const normalizeTest = (test, parsed, config) => {
  const meta = test.test_metadata ?? test;

  const questions = Array.isArray(test.sections)
    ? test.sections.flatMap((section) =>
        (section.passages ?? []).flatMap((passage) =>
          (passage.questions ?? []).map((question) =>
            normalizeQuestion(question, section.sectionName, passage.passageText),
          ),
        ),
      )
    : (test.questions ?? []).map((question) => normalizeQuestion(question));

  const sectionNames = Array.isArray(test.sections)
    ? test.sections.map((section) => section.sectionName)
    : Array.isArray(meta.sections)
      ? meta.sections
      : undefined;

  const testName =
    meta.testName ??
    meta.title ??
    `${config.fullName} ${parsed.year} · ${formatCategory(parsed.category)} · ${parsed.setName.toUpperCase()}`;

  return {
    ...meta,
    testName,
    year: parsed.year,
    category: parsed.category,
    setName: parsed.setName,
    timeMinutes: meta.timeMinutes ?? meta.duration_minutes,
    totalMarks: meta.totalMarks ?? meta.total_marks,
    topics: meta.topics ?? [],
    totalQuestions: questions.length,
    marking: normalizeMarking(test, meta),
    sections: sectionNames ?? meta.sections,
    questions,
    instructions:
      meta.instructions ??
      `This ${config.fullName} paper contains ${questions.length} question${questions.length === 1 ? "" : "s"}.`,
  };
};

const buildBank = (examId) => {
  const config = examPyqConfigs[examId];
  const modules = rawModules[examId] ?? {};
  const aliasLookup = buildAliasLookup(config);
  const pattern = buildFileNamePattern(config);

  return Object.fromEntries(
    Object.entries(modules).flatMap(([path, test]) => {
      const parsed = parseFileName(path, config, aliasLookup, pattern);
      if (!parsed) return [];

      return [
        [
          `${parsed.year}-${parsed.category}-${parsed.setName}`,
          normalizeTest(test, parsed, config),
        ],
      ];
    }),
  );
};

const banks = {
  jee: buildBank("jee"),
  cuet: buildBank("cuet"),
};

export const getExamPyqYears = (examId) => {
  const config = examPyqConfigs[examId];
  if (!config) return [];

  const years = new Set(config.fallbackYears);
  Object.values(banks[examId] ?? {}).forEach((test) => years.add(test.year));

  return [...years].sort((left, right) => right - left);
};

export const getExamPyqCategories = (examId, year) => {
  const config = examPyqConfigs[examId];
  const numericYear = Number(year);

  if (!config) return [];

  const tests = Object.values(banks[examId] ?? {}).filter(
    (test) => test.year === numericYear,
  );
  const categories = config.categories.map((item) => ({ ...item }));

  tests.forEach((test) => {
    if (!categories.some((item) => item.category === test.category)) {
      categories.push({
        category: test.category,
        label: formatCategory(test.category),
      });
    }
  });

  return categories.map((item) => ({
    ...item,
    tests: tests
      .filter((test) => test.category === item.category)
      .sort((left, right) =>
        left.setName.localeCompare(right.setName, undefined, { numeric: true }),
      ),
  }));
};

export const getExamPyqTests = (examId, year, category) =>
  getExamPyqCategories(examId, year).find(
    (item) => item.category.toLowerCase() === String(category).toLowerCase(),
  )?.tests ?? [];

export const getExamPyqTest = (examId, year, category, setName) =>
  banks[examId]?.[
    `${year}-${String(category).toLowerCase()}-${String(setName).toLowerCase()}`
  ] ?? null;

export const getExamPyqCategoryLabel = (examId, category) =>
  examPyqConfigs[examId]?.categories.find(
    (item) => item.category === category,
  )?.label ?? formatCategory(category);
