import { Route, Routes, useLocation } from "react-router-dom";
import ClatBookNotes from "./pages/ClatBookNotes";
import ExamReferencePage from "./pages/ExamReferencePage";
import ExamStudyMaterial from "./pages/ExamStudyMaterial";
import ResourceContent from "./pages/ResourceContent";
import ResourceLibrary from "./pages/ResourceLibrary";
import Resources from "./pages/Resources";

const ResourceRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route index element={<Resources />} />
      <Route path="clat" element={<ResourceLibrary examId="clat" />} />
      <Route
        path="clat/books"
        element={<ClatBookNotes key={location.pathname} />}
      />
      <Route
        path="clat/books/category/:categorySlug"
        element={<ClatBookNotes key={location.pathname} />}
      />
      <Route
        path="clat/books/:topicSlug"
        element={<ClatBookNotes key={location.pathname} />}
      />
      <Route path="cuet" element={<ResourceLibrary examId="cuet" />} />
      <Route path="jee" element={<ResourceLibrary examId="jee" />} />
      <Route
        path=":examId/study-material"
        element={<ExamStudyMaterial />}
      />
      <Route
        path=":examId/syllabus"
        element={<ExamReferencePage resourceType="syllabus" />}
      />
      <Route
        path=":examId/revision-notes"
        element={<ExamReferencePage resourceType="revision-notes" />}
      />
      <Route path=":resourceId" element={<ResourceContent />} />
    </Routes>
  );
};

export default ResourceRoutes;
