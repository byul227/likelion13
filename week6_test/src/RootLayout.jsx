import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./assets/footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Footer />
      <Outlet />
    </>
  );
}