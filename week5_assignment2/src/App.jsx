// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DiaryPage from "./Diarypage/DiaryPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DiaryPage />} />
    </Routes>
  );
}

export default App;
