import clat2024PdfUrl from "../../assets/Actual-clat-2024-ug.pdf?url";
import clat2024PgPdfUrl from "../../assets/clat2024-question-papers-all-sets--027a050561e27.pdf?url";
import clat2025PdfUrl from "../../assets/clat-2025-question-paper.pdf?url";
import clat2026PdfUrl from "../../assets/2026.pdf?url";

export const clatPyqPapers = {
  2024: {
    programs: {
      UG: {
        url: clat2024PdfUrl,
        paperStartPage: 3,
        sourceLabel: "Uploaded CLAT 2024 UG paper",
        answerKeyPages: { A: 147, B: 149, C: 151, D: 153 },
      },
      PG: {
        url: clat2024PgPdfUrl,
        paperStartPage: 3,
        paperStartPages: { A: 3, B: 47, C: 91, D: 135 },
        sourceLabel: "Uploaded CLAT 2024 PG question papers",
      },
    },
  },
  2025: {
    programs: {
      UG: {
        url: clat2025PdfUrl,
        paperStartPage: 3,
        sourceLabel: "Uploaded CLAT 2025 paper and answer keys",
        answerKeyPages: { A: 163, B: 165, C: 167, D: 169 },
      },
      PG: {
        url: clat2025PdfUrl,
        paperStartPage: 171,
        sourceLabel: "Uploaded CLAT 2025 paper and answer keys",
        answerKeyPages: { A: 347, B: 349, C: 351, D: 353 },
      },
    },
  },
  2026: {
    programs: {
      UG: {
        url: clat2026PdfUrl,
        paperStartPage: 3,
        sourceLabel: "Uploaded CLAT 2026 paper and answer keys",
        answerKeyPages: { A: 163, B: 165, C: 167, D: 169 },
      },
      PG: {
        url: clat2026PdfUrl,
        paperStartPage: 171,
        sourceLabel: "Uploaded CLAT 2026 paper and answer keys",
        answerKeyPages: { A: 363, B: 365, C: 367, D: 369 },
      },
    },
  },
};

export const clatPyqYears = Object.keys(clatPyqPapers)
  .map(Number)
  .sort((left, right) => right - left);
