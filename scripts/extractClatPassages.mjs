import fs from "node:fs";
import path from "node:path";
import { PDFParse } from "pdf-parse";

const root = process.cwd();
const sourceRoot = "C:\\Users\\ASD\\Downloads";
const outputRoot = path.join(root, "src", "assets", "json", "clat");

const sourceDefinitions = [
  {
    year: 2024,
    file: "Actual-clat-2024-ug.pdf",
    ranges: {
      ug: [
        [4, 38],
        [40, 74],
        [76, 110],
        [112, 146],
      ],
    },
  },
  {
    year: 2025,
    file: "clat-2025-question-paper.pdf",
    ranges: {
      ug: [
        [3, 42],
        [43, 82],
        [83, 122],
        [123, 162],
      ],
      pg: [
        [171, 214],
        [215, 258],
        [259, 302],
        [303, 346],
      ],
    },
  },
  {
    year: 2026,
    file: "2026.pdf",
    ranges: {
      ug: [
        [3, 42],
        [43, 82],
        [83, 122],
        [123, 162],
      ],
      pg: [
        [171, 218],
        [219, 266],
        [267, 314],
        [315, 362],
      ],
    },
  },
];

const romanPassageStart = /^\s*(?=[IVXLCDM]+\.\s)/i;
const questionStart = /^\s*\d{1,3}\.\s/;

const cleanText = (value) =>
  value
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const extractPassages = (pages) => {
  const text = pages.map((page) => page.text).join("\n");
  const lines = text.split("\n");
  const starts = lines.reduce((result, line, index) => {
    if (romanPassageStart.test(line)) result.push(index);
    return result;
  }, []);

  const passages = starts
    .map((start, index) => {
      const end = starts[index + 1] ?? lines.length;
      const block = lines.slice(start, end);
      const firstQuestion = block.findIndex((line, lineIndex) =>
        lineIndex > 0 && questionStart.test(line),
      );
      if (firstQuestion < 0) return null;

      const passage = cleanText(block.slice(0, firstQuestion).join("\n"));
      const questionStartNumber = Number(
        block[firstQuestion].match(/\d{1,3}/)?.[0],
      );
      return {
        text: passage.replace(/^[IVXLCDM]+\.\s*/i, "").trim(),
        questionStart: questionStartNumber,
      };
    })
    .filter(Boolean);

  return passages.filter((passage, index) =>
    index === 0 || passage.questionStart > passages[index - 1].questionStart,
  );
};

const readJsonPassageCounts = (year, category, set) => {
  const file = path.join(
    outputRoot,
    category,
    `CLAT_${year}_${category.toUpperCase()}_SET_${set}.json`,
  );
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  return {
    file,
    total: data.sections.reduce((sum, section) => sum + section.passages.length, 0),
  };
};

const updateJsonSet = (year, category, set, passages) => {
  const { file } = readJsonPassageCounts(year, category, set);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const questionCount = data.sections.reduce(
    (sum, section) =>
      sum + section.passages.reduce((passageSum, passage) => passageSum + passage.questions.length, 0),
    0,
  );
  const sectionRanges =
    category === "pg"
      ? data.sections.map(() => [1, questionCount])
      : year === 2026
        ? (() => {
            let rangeStart = 1;
            return data.sections.map((section) => {
              const count = section.passages.reduce(
                (sum, passage) => sum + passage.questions.length,
                0,
              );
              const range = [rangeStart, rangeStart + count - 1];
              rangeStart += count;
              return range;
            });
          })()
        : data.sections.map((section) => {
            const name = section.sectionName.toLowerCase();
            if (name.includes("english")) return [1, 24];
            if (name.includes("current")) return [25, 52];
            if (name.includes("legal")) return [53, 84];
            if (name.includes("logical")) return [85, 108];
            return [109, 120];
          });

  const questionCounts = passages.map((passage, index) =>
    (passages[index + 1]?.questionStart ?? questionCount + 1) - passage.questionStart,
  );
  if (
    passages[0]?.questionStart !== 1 ||
    questionCounts.reduce((sum, count) => sum + count, 0) !== questionCount
  ) {
    throw new Error(`${year} ${category} ${set}: source questions do not cover 1-${questionCount}`);
  }

  for (let sectionIndex = 0; sectionIndex < data.sections.length; sectionIndex += 1) {
    const section = data.sections[sectionIndex];
    const [rangeStart, rangeEnd] = sectionRanges[sectionIndex];
    const sectionSourcePassages = passages.filter(
      (passage) =>
        passage.questionStart >= rangeStart && passage.questionStart <= rangeEnd,
    );
    const sectionPassages = [];
    let questionIndex = 0;
    for (const sourcePassage of sectionSourcePassages) {
      const sourceIndex = passages.indexOf(sourcePassage);
      const count = questionCounts[sourceIndex];
      const questions = section.passages
        .flatMap((passage) => passage.questions)
        .slice(questionIndex, questionIndex + count);
      if (questions.length !== count) {
        throw new Error(`${year} ${category} ${set}: question partition failed`);
      }
      sectionPassages.push({
        passageText: passages[sourceIndex].text,
        questions,
      });
      questionIndex += count;
    }
    if (questionIndex !== rangeEnd - rangeStart + 1) {
      throw new Error(`${year} ${category} ${set}: section partition failed`);
    }
    section.passages = sectionPassages;
  }

  if (
    data.sections.reduce(
      (sum, section) => sum + section.passages.length,
      0,
    ) !== passages.length
  ) {
    throw new Error(`${year} ${category} ${set}: unused source passages remain`);
  }
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
};

const shouldWrite = process.argv.includes("--write");

for (const definition of sourceDefinitions) {
  const parser = new PDFParse({
    data: fs.readFileSync(path.join(sourceRoot, definition.file)),
  });
  const document = await parser.getText();
  await parser.destroy();

  for (const [category, ranges] of Object.entries(definition.ranges)) {
    for (const [index, [start, end]] of ranges.entries()) {
      const passages = extractPassages(document.pages.slice(start - 1, end));
      const set = String.fromCharCode(65 + index);
      const expected = readJsonPassageCounts(definition.year, category, set);
      console.log(
        `${definition.year} ${category.toUpperCase()} SET ${set}: ${passages.length}/${expected.total}`,
      );
      passages.forEach((passage, passageIndex) => {
        console.log(
          `  ${passageIndex + 1} (Q${passage.questionStart}): ${passage.text.slice(0, 100)}`,
        );
      });
      if (shouldWrite) updateJsonSet(definition.year, category, set, passages);
    }
  }
}
