import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cta from "./Cta";

function Layout() {
  return (
    <div className="relative overflow-hidden ">
      <NavBar />
      <div className="bg-circle -z-50 -left-[202px] -top-[550px] md:left-2/3 md:-top-[172px] overflow-x-hidden " />
      <main>
        <Outlet />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
