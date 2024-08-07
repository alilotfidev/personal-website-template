"use client";
import { useState } from "react";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={`sticky top-0 z-30 bg-black-color px-10 py-5 text-white`}>
      <ul className="flex items-center justify-between">
        <li className="nav-logo font-medium uppercase sm:text-xl">
          Katrin __
          <br />
          Schroder
        </li>
        <div
          className={`menu-button z-20 p-4 ${
            showMenu && "fixed right-10 top-8"
          }`}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <div
            className={`burgur-menu-icon ${
              showMenu && "open-menu"
            } bg-white before:bg-white after:bg-white`}
          ></div>
        </div>
      </ul>

      {/* menu */}
      <section
        className={`side-menu z-10 flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden bg-black-color px-10 py-8 text-2xl font-bold transition-all duration-300 sm:text-4xl md:text-6xl ${
          !showMenu ? "-top-[100vh]" : "left-0 top-0"
        } ${showMenu ? "fixed top-0" : "absolute"}`}
      >
        <a
          href="#"
          className="side-menu-link cursor-pointer tracking-wider text-white opacity-70 transition-opacity hover:opacity-100"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="side-menu-link my-20 cursor-pointer tracking-wider text-white opacity-70 transition-opacity hover:opacity-100"
        >
          Instagram
        </a>
        <a
          href="mailto:theEmail@emailprovider.com"
          className="side-menu-link cursor-pointer tracking-wider text-white opacity-70 transition-opacity hover:opacity-100"
        >
          Email
        </a>
      </section>
    </nav>
  );
}
