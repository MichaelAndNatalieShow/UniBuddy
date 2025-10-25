import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e6e2d4] shadow-md relative z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="text-[#4375AE] text-3xl font-extrabold">
          UniBuddy
        </div>

        <ul className="hidden md:flex space-x-10 text-[#1B2845] font-semibold">
          <li>
            <a href="/home" className="hover:text-[#4375AE] transition">
              Home
            </a>
          </li>
          <li>
            <a href="/planner" className="hover:text-[#4375AE] transition">
              Planner
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#4375AE] transition">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#4375AE] transition">
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden relative w-10 h-8 flex flex-col justify-between items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 w-full bg-[#1B2845] rounded transition-transform duration-300 ${
              menuOpen ? "translate-y-3 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-[#1B2845] rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-[#1B2845] rounded transition-transform duration-300 ${
              menuOpen ? "-translate-y-3 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-[#334978] text-white flex flex-col justify-center items-center text-3xl space-y-8 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="/home" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="/planner" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
          Planner
        </a>
        <a href="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
