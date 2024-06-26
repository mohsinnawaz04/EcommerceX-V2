import React from "react";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const link = ({ isActive }) =>
    isActive
      ? "bg-zinc-900 p-2 px-3 rounded-md text-white  hover:bg-zinc-950"
      : "p-2 px-3 text-white hover:text-gray-300";
  return (
    <>
      <nav className="hidden sm:flex justify-between items-center p-5 bg-blue-600 overflow-hidden">
        <div className="text-white text-xl font-bold">EcommerceX</div>
        <div className="flex space-x-2 lg:mr-10">
          <NavLink to="" className={link}>
            Home
          </NavLink>
          <NavLink to="/about" className={link}>
            About
          </NavLink>
          <NavLink to="/contact" className={link}>
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Mobile Nav */}

      <nav className="sm:hidden">
        <MobileNavbar />
      </nav>
    </>
  );
};

export default Navbar;
