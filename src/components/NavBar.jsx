import { useState } from "react";
import { NavLink } from "react-router";

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  function handleMenu() {
    setNavOpen(!navOpen);
  }
  function hadleNavClick() {
    setNavOpen(false);
  }

  return (
    <header className="z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-0 ">
        <NavLink to="/">
          <img
            src="./assets/shared/desktop/logo.svg"
            className="w-full h-full"
            alt="logo"
          />
        </NavLink>

        <div
          className={` ${
            navOpen
              ? "flex flex-col space-y-8 absolute top-3 right-2 w-[60vw] z-50 h-[50vh] rounded-lg bg-mirageBlue "
              : "hidden md:flex md:flex-row md:ml-12 md:justify-between"
          }  items-center md:w-full py-6`}
          onClick={hadleNavClick}
        >
          <div className="flex flex-col space-y-6 pt-6 md:flex-row md:space-y-0 md:space-x-10 md:pt-0 items-center ">
            <NavLink
              to="/pricing"
              className="text-md text-gray-100 hover:text-lightSanJuanBlue md:text-lightSanJuanBlue md:hover:text-mirageBlue"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className="text-md text-gray-100 hover:text-lightSanJuanBlue md:text-lightSanJuanBlue md:hover:text-mirageBlue"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-md text-gray-100 hover:text-lightSanJuanBlue md:text-lightSanJuanBlue md:hover:text-mirageBlue"
            >
              Contact
            </NavLink>
          </div>

          <button className="w-[173px] bg-darkPink hover:bg-currentcharmPink font-semibold text-sm text-linkWaterWhite p-3 rounded-full">
            Schedule a demo
          </button>
        </div>

        {navOpen ? (
          <button className="md:hidden block z-50" onClick={handleMenu}>
            <img src="assets/shared/mobile/close.svg" alt="" />
          </button>
        ) : (
          <button className="md:hidden block" onClick={handleMenu}>
            <img src="assets/shared/mobile/menu.svg" alt="" />
          </button>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
