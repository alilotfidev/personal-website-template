"use client";
import { useState } from "react";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={`bg-black-color sticky top-0 z-30 px-10 py-5 text-white `}>
      <ul className="flex items-center justify-between">
        <li className="nav-logo text-xl font-medium">
          CALLUM __
          <br />
          GLOVER
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
        className={`side-menu bg-black-color absolute z-10 flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden px-10 py-8 text-6xl font-bold transition-all duration-300 ${
          !showMenu ? "-top-[100vh]" : "left-0 top-0"
        }`}
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
