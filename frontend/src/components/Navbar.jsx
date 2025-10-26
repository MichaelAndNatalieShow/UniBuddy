import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-cream font-urbanist shadow-md relative z-50">
      <div className="flex items-center justify-between px-10 py-6 md:py-8">
        {/* Logo */}
        <div className="text-royalblue text-3xl font-bold lowercase tracking-wide">
          <Link to="/">unibuddy</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-spacecadet font-normal items-center text-lg">
          <li>
            <Link to="/" className="hover:text-royalblue transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/planner" className="hover:text-royalblue transition">
              Planner
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-royalblue transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-royalblue transition">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-royalblue transition">
              Login
            </Link>
          </li>

        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-10 h-8 flex flex-col justify-between items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-full bg-spacecadet rounded transition-transform duration-300 ${menuOpen ? "translate-y-3 rotate-45" : ""
              }`}
          ></span>
          <span
            className={`block h-1 w-full bg-spacecadet rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block h-1 w-full bg-spacecadet rounded transition-transform duration-300 ${menuOpen ? "-translate-y-3 -rotate-45" : ""
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-squid text-cream flex flex-col justify-center items-center text-3xl space-y-8 transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <Link
          to="/"
          className="hover:text-febreeze font-normal"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/planner"
          className="hover:text-febreeze font-normal"
          onClick={() => setMenuOpen(false)}
        >
          Planner
        </Link>
        <Link
          to="/about"
          className="hover:text-febreeze font-normal"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-febreeze font-normal"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <Link
          to="/login"
          className="hover:text-febreeze font-normal"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </Link>
      </div>

      {/* Background overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-spacecadet bg-opacity-40 md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
