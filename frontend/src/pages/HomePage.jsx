import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/homeImage.png";

export default function HomePage() {
  return (
    <div className="font-urbanist bg-febreeze w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full text-center md:text-left mt-20 px-6 md:px-12 lg:px-20">
        <div className="space-y-6 max-w-lg">
          <h1 className="text-squid text-5xl md:text-6xl font-bold leading-tight">
            Tired of guessing which classes to take?
          </h1>
          <p className="text-[#1B2845] text-lg md:text-xl">
            Let’s plan your transfer in minutes. Your buddy for a seamless move
            from community college to university.
          </p>

          <Link
            to="/planner"
            className="inline-block bg-royalblue text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-md hover:bg-squid transition-all"
          >
            Build My Future →
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src={homeImage}
            alt="Student planning their future"
            className="w-[320px] md:w-[450px] lg:w-[500px] drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
