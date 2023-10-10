import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";
import { DarkColor,LightColor } from "../theme";




export const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

const [isDarkModeEnable, setIsDarkModeEnable] = useState(false)

  return (
    <div className={`${isDarkModeEnable ? DarkColor : LightColor} py-4 flex justify-between px-4 sm:px-2 `}>
      <div className="logo flex gap-2">
        <h1>IdeaFlow</h1>
        <button className="hidden sm:flex ml-2 text-xl" onClick={()=>setIsDarkModeEnable(!isDarkModeEnable)} >{ isDarkModeEnable? <BsFillSunFill/>: <BsFillMoonStarsFill/>}</button>

      </div>
      <div className="link flex gap-3 sm:hidden ">
        <button className="mr-2 text-xl" onClick={()=>setIsDarkModeEnable(!isDarkModeEnable)} >{ isDarkModeEnable? <BsFillSunFill/>: <BsFillMoonStarsFill/>}</button>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? " underline underline-offset-4 " : "";
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? " underline underline-offset-4 " : "";
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) => {
            return isActive ? " underline underline-offset-4 " : "";
          }}
        >
          Career
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return isActive ? " underline underline-offset-4 " : "";
          }}
        >
          Contact
        </NavLink>
      </div>

      {/* mobile menu button */}
      <button
        className="hidden sm:flex"
        onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <RiMenu3Fill className="text-2xl" />
        )}
      </button>

      {/* mobile nav */}

      {isMobileMenuOpen && (
        <div className={`mobile-nav ${isDarkModeEnable ? DarkColor : LightColor}  absolute  top-16 right-1  bg-slate-700 py-4 px-4 m-1 rounded-lg `}>
          <div className="mobile-nav-links flex flex-col justify-center px-4 py-4 gap-4  ">
            <Link
              to="/"
              className="hover:bg-gray-200 hover:text-gray-700 w-fit px-2 py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-gray-200 hover:text-gray-700 w-fit px-2 py-2"
            >
              About
            </Link>
            <Link
              to="/career"
              className="hover:bg-gray-200 hover:text-gray-700 w-fit px-2 py-2"
            >
              Career
            </Link>
            <Link
              to="/contact"
              className="hover:bg-gray-200 hover:text-gray-700 w-fit px-2 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
