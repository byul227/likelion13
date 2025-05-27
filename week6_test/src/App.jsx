import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import RootLayout from "./RootLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}