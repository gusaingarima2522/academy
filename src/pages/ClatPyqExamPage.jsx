import { useParams } from "react-router-dom";
import JeeMockTestPage from "../assets/JeeMockTestPage";
import { getClatTest } from "../data/clatPyqBank";

const ClatPyqExamPage = () => {
  const { year, category, setName } = useParams();
  const test = getClatTest(year, category, setName);

  return (
    <JeeMockTestPage
      testOverride={test}
      sessionKeyOverride={`academy-clat-pyq:${year}-${category}-${setName}`}
      backTo={`/clat-pyq/${year}/${category}`}
      examLabel={`CLAT ${year} ${category.toUpperCase()} · Set ${setName}`}
    />
  );
};

export default ClatPyqExamPage;
