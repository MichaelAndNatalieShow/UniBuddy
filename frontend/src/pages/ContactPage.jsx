import React from "react";
import Navbar from "../components/Navbar";
import pfp from "../assets/pfp.png";

export default function ContactPage() {
  return (
    <div className="font-urbanist bg-[#e6e2d4] min-h-screen">
      <Navbar />

      <div className="text-center mt-10">
        <h2 className="text-[#4375AE] text-5xl md:text-6xl font-bold">
          Contact Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-16">
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-8">
          <img
            src={pfp}
            alt="Natalie Luong Avatar"
            className="w-40 h-40 rounded-full mb-6"
          />
          <h3 className="text-2xl font-semibold text-[#334978] mb-2">
            Natalie Luong
          </h3>
          <p className="text-[#1B2845] text-lg leading-relaxed">
            Phone: 415-632-8084
            <br />
            Email:{" "}
            <a
              href="mailto:natalieluong1818@gmail.com"
              className="text-[#4375AE] hover:underline"
            >
              natalieluong1818@gmail.com
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/natalie-luong-4013b532b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4375AE] hover:underline"
            >
              Natalie Luong
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-8">
          <img
            src={pfp}
            alt="Michael Poniente Avatar"
            className="w-40 h-40 rounded-full mb-6"
          />
          <h3 className="text-2xl font-semibold text-[#334978] mb-2">
            Michael Poniente
          </h3>
          <p className="text-[#1B2845] text-lg leading-relaxed">
            Phone: 650-784-5183
            <br />
            Email:{" "}
            <a
              href="mailto:michaelwrites.biz@gmail.com"
              className="text-[#4375AE] hover:underline"
            >
              michaelwrites.biz@gmail.com
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/michael-poniente"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4375AE] hover:underline"
            >
              Michael Poniente
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
