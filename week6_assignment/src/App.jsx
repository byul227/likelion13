// App.jsx

import RootLayout from "./RootLayout";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
