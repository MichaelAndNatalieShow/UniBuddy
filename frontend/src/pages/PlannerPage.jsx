import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function PlannerPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [major, setMajor] = useState("option0");
  const [uc, setUc] = useState("option0");

  return (
    <div className="font-urbanist bg-[#e6e2d4] min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-[450px] bg-[#334978] text-white flex flex-col justify-center items-center text-4xl transition-all duration-300 z-20 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-8 text-center">
          <li>
            <a href="/home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/planner" className="hover:text-gray-300">
              Planner
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center px-6 py-16 space-y-10">
        {/* Title */}
        <h2 className="text-[#4375AE] text-5xl md:text-6xl font-bold">
          My Planner
        </h2>

        {/* Summary Box */}
        <div className="bg-white rounded-xl shadow-md w-full max-w-3xl p-8 text-center">
          <h1 className="text-[#334978] text-3xl font-semibold mb-2">
            My Summary
          </h1>
          <p className="text-[#1B2845] text-lg">
            Select your major and target UC to get started.
          </p>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Major Dropdown */}
          <div className="flex flex-col text-center md:text-left">
            <label
              htmlFor="majorDropdown"
              className="text-[#334978] text-xl font-semibold mb-2"
            >
              My Major:
            </label>
            <select
              id="majorDropdown"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="rounded-lg border border-[#334978] bg-white px-4 py-2 text-[#1B2845] focus:outline-none focus:ring-2 focus:ring-[#4375AE]"
            >
              <option value="option0">Select a Major</option>
              <option value="option1">
                Electrical Engineering and Computer Science
              </option>
              <option value="option2">Mechanical Engineering</option>
              <option value="option3">Computer Science</option>
              <option value="option4">Mathematics</option>
              <option value="option5">Applied Mathematics</option>
              <option value="option6">Economics</option>
              <option value="option7">Business Administration</option>
              <option value="option8">Psychology</option>
              <option value="option9">Computer Engineering</option>
              <option value="option10">
                Molecular, Cell, and Development Biology
              </option>
            </select>
          </div>

          {/* UC Dropdown */}
          <div className="flex flex-col text-center md:text-left">
            <label
              htmlFor="ucDropdown"
              className="text-[#334978] text-xl font-semibold mb-2"
            >
              My Target UC:
            </label>
            <select
              id="ucDropdown"
              value={uc}
              onChange={(e) => setUc(e.target.value)}
              className="rounded-lg border border-[#334978] bg-white px-4 py-2 text-[#1B2845] focus:outline-none focus:ring-2 focus:ring-[#4375AE]"
            >
              <option value="option0">Select a UC Campus</option>
              <option value="option1">UC Berkeley</option>
              <option value="option2">UC Los Angeles</option>
              <option value="option3">UC San Diego</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
