import React, { useState } from "react";

export default function CourseArea({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-urbanist border border-squid bg-white rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 font-semibold text-lg flex justify-between items-center bg-febreeze hover:bg-azure transition"
      >
        {title}
        <span className="text-royalblue">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 py-4 text-spacecadet leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
