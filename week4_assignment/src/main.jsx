// src/main.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import MyLayout from "./layouts/MyLayout";
import MyAccount from "./pages/MyAccount";
import EditProfile from "./pages/EditProfile";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
      </Route>
        
        <Route path="account" element={<MyLayout />}>
          <Route index element={<MyAccount />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>
    </Routes>
  </BrowserRouter>
);

