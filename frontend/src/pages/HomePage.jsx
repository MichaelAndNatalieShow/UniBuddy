import React from "react";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="font-urbanist bg-[#e6e2d4] min-h-screen overflow-hidden">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-10 py-20 md:py-28 gap-10">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-[#334978] text-5xl md:text-6xl font-bold">
            Welcome to UniBuddy!
          </h2>
          <p className="text-[#1B2845] text-lg md:text-xl">
            Your buddy helping you transition from CC to Uni.
          </p>
        </div>

        <div>
          <img
            src="/homeimage.png"
            alt="A girl sitting"
            className="w-[300px] md:w-[400px] lg:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
