import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-cream shadow-md relative z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="text-royalblue text-3xl font-bold">
          UniBuddy
        </div>

        <ul className="hidden md:flex space-x-10 hover:text-royaleblue transition text-spacecadet font-semibold">
          <li>
            <a href="/home">
              Home
            </a>
          </li>
          <li>
            <a href="/planner">
              Planner
            </a>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden relative w-10 h-8 flex flex-col justify-between items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 w-full bg-spacecadet rounded transition-transform duration-300 ${
              menuOpen ? "translate-y-3 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-spacecadet rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-spacecadet rounded transition-transform duration-300 ${
              menuOpen ? "-translate-y-3 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-squid text-cream flex flex-col justify-center items-center text-3xl space-y-8 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="/home" className="hover:febreeze" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="/planner" className="hover:febreeze" onClick={() => setMenuOpen(false)}>
          Planner
        </a>
        <a href="/about" className="hover:febreeze" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="/contact" className="hover:febreeze" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-spacecadet bg-opacity-40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
