import React, { useState } from "react";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarListComp from "./Navbar-Components/NavbarListComp";

const Navbar = () => {
  // MenuOpen
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log();

  return (
    <div className="bg-[#6D2932] ">
      <div className="flex flex-col md:flex md:flex-row md:justify-between items-center md:mx-20 p-5   ">
        <h1 className="w-full md:w-0 font-bold text-[#F4F6F6] text-3xl">
          CodeHub
        </h1>

        {/* Mobile Menu */}
        <div className="absolute right-0 pr-5 md:hidden">
          <button className="h-10 w-10" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-[#F4F6F6] text-2xl"
            />
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mt-5 text-left w-full md:hidden text-xl ">
            <NavbarListComp />
          </div>
        ) : null}
        {/* md-xl Menu */}
        <div className="hidden md:block">
          <NavbarListComp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
