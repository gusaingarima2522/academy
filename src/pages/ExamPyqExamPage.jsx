import { Link, useParams } from "react-router-dom";
import JeeMockTestPage from "../assets/JeeMockTestPage";
import { examPyqConfigs, getExamPyqTest } from "../data/examPyqBank";

const ExamPyqExamPage = ({ examId }) => {
  const { year, category, setName } = useParams();
  const config = examPyqConfigs[examId];
  const test = getExamPyqTest(examId, year, category, setName);
  const backTo = `${config.routeBase}/${year}/${category}`;

  if (!test) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">Paper not available</h1>
        <p className="mt-3 text-gray-600">
          This {config.fullName} {year} paper set has not been uploaded yet.
        </p>
        <Link
          to={backTo}
          className="mt-6 inline-block rounded-lg bg-red-900 px-5 py-3 font-semibold text-white no-underline"
        >
          Back to {config.name} {year} sets
        </Link>
      </main>
    );
  }

  return (
    <JeeMockTestPage
      testOverride={test}
      sessionKeyOverride={`academy-${examId}-pyq:${year}-${category}-${setName}`}
      backTo={backTo}
      examLabel={`${config.fullName} ${year} · ${setName.replace(/-/g, " ").toUpperCase()}`}
    />
  );
};

export default ExamPyqExamPage;
