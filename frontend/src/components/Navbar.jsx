import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-cream shadow-md relative z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="text-royalblue text-3xl font-bold">
          <Link to="/">UniBuddy</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-spacecadet font-semibold">
          <li><Link to="/" className="hover:text-royalblue transition">Home</Link></li>
          <li><Link to="/planner" className="hover:text-royalblue transition">Planner</Link></li>
          <li><Link to="/about" className="hover:text-royalblue transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-royalblue transition">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-10 h-8 flex flex-col justify-between items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-full bg-spacecadet rounded transition-transform duration-300 ${menuOpen ? "translate-y-3 rotate-45" : ""}`}></span>
          <span className={`block h-1 w-full bg-spacecadet rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-full bg-spacecadet rounded transition-transform duration-300 ${menuOpen ? "-translate-y-3 -rotate-45" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu (higher z than overlay) */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-squid text-cream flex flex-col justify-center items-center text-3xl space-y-8 transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to="/" className="hover:text-febreeze" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/planner" className="hover:text-febreeze" onClick={() => setMenuOpen(false)}>Planner</Link>
        <Link to="/about" className="hover:text-febreeze" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" className="hover:text-febreeze" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Background overlay (below the menu) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-spacecadet bg-opacity-40 md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
