import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
const Navbar = ({ navlinks }) => {
  return (
    <>
      <header
        className={`
        nav-default ${navState && "nav-sticky"}
      `}
      >
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="logo/img" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((val, i) => (
              <li key={i}>
                <NavLink to={"#"} className="text-lg text-slate-900">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
