import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavbarListComp = () => {
  // LoginPage RouterLink
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  return (
    <ul className="md:flex md:flex-row md:justify-center md:items-center md:gap-5 cursor-pointer font-semibold text-[#F4F6F6] md:px-10">
      <li className="mb-2 md:mb-0">
        {isMainPage ? (
          <ScrollLink to="Hero Page" smooth={true} duration={100}>
            Home
          </ScrollLink>
        ) : (
          <RouterLink to="/">Home</RouterLink>
        )}
      </li>

      <li className="mb-2 md:mb-0">
        <ScrollLink to="course" smooth={true} duration={100}>
          Courses
        </ScrollLink>
      </li>
      <li className="mb-2 md:mb-0">
        <ScrollLink to="review" smooth={true} duration={100}>
          Reviews
        </ScrollLink>
      </li>
      <li className="mb-2 md:mb-0">
        <RouterLink to="/login">Login</RouterLink>
      </li>
      <RouterLink to="/login">
        <button className=" p-2 text-[#6D2932] bg-[#F4F6F6] rounded-lg  hover:scale-105  transition-all">
          Join for Free
        </button>
      </RouterLink>
    </ul>
  );
};

export default NavbarListComp;
