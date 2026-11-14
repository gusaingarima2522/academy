import clatMock from "./clat_mock_test_1.json";

const questions = clatMock.sections.flatMap((section) =>
  section.passages.flatMap((passage) =>
    passage.questions.map((question) => {
      const optionKeys = Object.keys(question.options);
      const answer = optionKeys.indexOf(question.correct_option) + 1;

      if (answer === 0) {
        throw new Error(
          `CLAT question ${question.question_id} has an invalid correct option.`
        );
      }

      return {
        question: question.question_text,
        options: optionKeys.map((key) => question.options[key]),
        answer,
        section: section.section_name,
        passage: passage.text,
      };
    })
  )
);

const clatTest = {
  testName: clatMock.test_details.title,
  timeMinutes: clatMock.test_details.duration_minutes,
  totalMarks: clatMock.test_details.total_marks,
  marking: clatMock.test_details.marking_scheme,
  sections: clatMock.sections.length,
  questions,
};

export const getClatTests = () => [{ ...clatTest, level: 1 }];

export const getClatTest = (level) =>
  level === 1 ? { ...clatTest, level: 1 } : undefined;
