import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav
        className={`
        ${styles.paddingX} w-full flex iteems-center py-5 fixed top-0 z-20 bg-primary `}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image
              src={logo}
              alt="logo image"
              width={100}
              height={100}
              className=" object-contain"
            />
            <p className="text-white text-lg font-bold cursor-pointer flex">
              Mohit Raut &nbsp;
              <span className="sm:block hidden">| Web Developer</span>
            </p>
          </Link>
          <ul className="list-none sm:flex hidden flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-lg font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex-1 flex justify-end items-center ">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              width={30}
              height={30}
              className="object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-36 z-10 rounded-xl `}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4 ">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins  text-base font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
