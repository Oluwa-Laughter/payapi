import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cta from "./Cta";

function Layout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
