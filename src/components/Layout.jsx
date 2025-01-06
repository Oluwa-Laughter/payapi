import { Outlet } from "react-router";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
