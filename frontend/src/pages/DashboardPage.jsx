import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pfp from "../assets/profilePicture2.png";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "targets", "settings"];
      let current = "profile";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-cream font-urbanist">
      {/* Sidebar */}
      <aside className="w-64 fixed top-0 left-0 h-full bg-white shadow-md p-6 flex flex-col overflow-y-auto">
        <h2 className="text-2xl font-bold text-royalblue mt-48">Dashboard</h2>
        <nav className="space-y-4">
          {["profile", "targets", "settings"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block px-3 py-2 rounded-lg font-medium transition ${
                activeSection === id
                  ? "bg-royalblue text-white"
                  : "text-squid hover:bg-gray-100"
              }`}
            >
              {id === "profile"
                ? "Profile"
                : id === "targets"
                ? "Target Colleges"
                : "Settings"}
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex-1 ml-64 p-10 space-y-24">
        <section id="profile" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-royalblue mb-6">Profile</h2>
          <div className="bg-white rounded-xl shadow-md p-8 flex items-center space-x-10">
            <img
              src={pfp}
              alt="User Avatar"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="space-y-4 w-full">
              <div>
                <p className="text-gray-500 text-sm">Name</p>
                <div className="border rounded-lg p-3 bg-gray-50 text-squid">
                  {/* {user.name} */}
                  User Name
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm">School</p>
                <div className="border rounded-lg p-3 bg-gray-50 text-squid">
                  {/* {user.school} */}
                  College of San Mateo
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Major</p>
                <div className="border rounded-lg p-3 bg-gray-50 text-squid">
                  {/* {user.major} */}
                  Computer Science
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Colleges Section */}
        <section id="targets" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-royalblue mb-6">
            Target Colleges
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            {/* {user.targetColleges.map(...)} */}
            <div className="border rounded-lg p-3 bg-gray-50 text-squid mb-2">
              UC Berkeley
            </div>
            <div className="border rounded-lg p-3 bg-gray-50 text-squid mb-2">
              UCLA
            </div>
            <div className="border rounded-lg p-3 bg-gray-50 text-squid">
              UC San Diego
            </div>
          </div>
        </section>

        <section id="settings" className="scroll-mt-24 mb-20">
          <h2 className="text-3xl font-bold text-royalblue mb-6">Settings</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-gray-600">Settings options will go here</p>
          </div>
        </section>
      </main>
    </div>
  );
}
