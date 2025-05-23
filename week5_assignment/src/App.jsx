import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import DiaryPage from "./pages/DiaryPage";
import RootLayout from "./RootLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/project" element={ <ProjectPage /> } />
          <Route path="/diary" element={<DiaryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}