import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

export default function DefaultLayout() {
  return (
    <div>
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
}
