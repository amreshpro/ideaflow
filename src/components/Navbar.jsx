import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";
import { DarkColor,DarkMobileMenu,LightColor, LightMobileMenu } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { darkModeToggler } from "../store/darkModeSlice";




export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// const [isDarkModeEnable, setIsDarkModeEnable] = useState(false)

// dark mode value
const isDarkModeEnable = useSelector((state)=>state.darkMode);

const disapatch = useDispatch();

// dark mode handler
const darkModeToggleHandler=()=>{

  disapatch(darkModeToggler());
}


  return (
    <nav className={`${isDarkModeEnable ? DarkColor : LightColor} py-4 flex justify-between px-4 sm:px-2 shadow-lg`}>
      <div className="logo flex gap-2">
        <h1 className="font-sans font-extralight">IdeaFlow</h1>
        <button className="hidden sm:flex ml-2 text-xl" onClick={darkModeToggleHandler} >{ isDarkModeEnable? <BsFillSunFill/>: <BsFillMoonStarsFill/>}</button>

      </div>
      <div className="link flex gap-3 sm:hidden ">
        <button className="mr-2 text-xl" onClick={darkModeToggleHandler} >{ isDarkModeEnable? <BsFillSunFill/>: <BsFillMoonStarsFill/>}</button>
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
          to="mailto:pleasecontact@ideaflow.io"
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
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <RiMenu3Fill className="text-2xl" />
        )}
      </button>

      {/* mobile nav */}

      {isMobileMenuOpen && (
        <div className={`mobile-nav ${isDarkModeEnable ? DarkMobileMenu : LightMobileMenu}   absolute  top-16 right-1   py-4 px-4 rounded-lg `}>
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
              to="mailto:pleasecontact@ideaflow.io"
              className="hover:bg-gray-200 hover:text-gray-700 w-fit px-2 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
