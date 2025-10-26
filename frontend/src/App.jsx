import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PlannerPage from "./pages/PlannerPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page without Navbar */}
        <Route path="/login" element={<LoginPage />} />

        {/* All other pages use Layout (with Navbar) */}
        <Route element={<Layout />}>
          <Route index element={<HomePage />} /> {/* "/" */}
          <Route path="planner" element={<PlannerPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
