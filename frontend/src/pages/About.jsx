import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="font-urbanist bg-[#e6e2d4] min-h-screen">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">
        <h2 className="text-[#4375AE] text-5xl md:text-6xl font-bold mb-6">
          About Us
        </h2>
        <p className="text-[#1B2845] text-lg md:text-xl max-w-2xl leading-relaxed">
          UniBuddy is your bridge from Community College to University.
        </p>
      </section>
    </div>
  );
}
