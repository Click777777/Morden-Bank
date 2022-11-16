import React from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="flex justify-between py-6 items-center">
      <img src={logo} alt="errorImg" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden space-x-10 ">
        {navLinks.map((link) => (
          <li
            className="text-white text-[16px] font-poppins font-normal cursor-pointer"
            key={link.id}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      {/* for moible menu */}

      <div className="flex sm:hidden">
        <img
          src={toggle ? menu : close}
          alt="err"
          className="w-[28px] h-[28px] "
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={` ${
            toggle ? "hidden" : "flex"
          } absolute top-20 right-0 min-w-[140px] sidebar rounded-xl mx-4 my-1 p-6 bg-primary z-10 justify-center transition-all `}
        >
          <ul className="flex flex-col space-y-6 ">
            {navLinks.map((link) => (
              <li
                className="text-white text-[16px] font-poppins font-normal cursor-pointer"
                key={link.id}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
