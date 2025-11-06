import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import pfp from "../assets/profilePicture2.png";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    user_name: "",
    school: "",
    major: "",
    targetColleges: [],
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching user:", error);
        setError(error.message);
      } else if (data) {
        setUserData({
          user_name: data.user_name || "",
          school: data.school || "",
          major: data.major || "",
          targetColleges: data.target_colleges || [],
        });
      }

      setLoading(false);
    };

    fetchUserData();
  }, []);

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

  const handleSave = async () => {
    setSaving(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError("User not logged in.");
      setSaving(false);
      return;
    }

    const { error: updateError } = await supabase
      .from("users")
      .update({
        user_name: userData.user_name,
        school: userData.school,
        major: userData.major,
        target_colleges: userData.targetColleges,
      })
      .eq("id", user.id);

    if (updateError) {
      console.error("Error updating profile:", updateError);
      setError(updateError.message);
    }

    setSaving(false);
  };

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div className="flex min-h-screen bg-febreeze font-urbanist">
      <aside className="w-64 fixed top-0 left-0 h-full bg-white shadow-md p-6 flex flex-col overflow-y-auto">
        <h2 className="text-2xl font-bold text-royalblue mt-48 mb-12">Dashboard</h2>
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
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col space-y-6">
            <div className="flex items-center space-x-10">
              <img src={pfp} alt="User Avatar" className="w-40 h-40 rounded-full object-cover" />
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Name</p>
                  <input
                    type="text"
                    value={userData.user_name}
                    onChange={(e) => setUserData({ ...userData, user_name: e.target.value })}
                    className="w-full border rounded-lg p-3 bg-gray-50 text-squid"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">School</p>
                  <input
                    type="text"
                    value={userData.school}
                    onChange={(e) => setUserData({ ...userData, school: e.target.value })}
                    className="w-full border rounded-lg p-3 bg-gray-50 text-squid"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Major</p>
                  <input
                    type="text"
                    value={userData.major}
                    onChange={(e) => setUserData({ ...userData, major: e.target.value })}
                    className="w-full border rounded-lg p-3 bg-gray-50 text-squid"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-32 h-12 bg-royalblue text-cream font-semibold rounded-full shadow-md hover:bg-spacecadet transition"
            >
              {saving ? "Saving..." : "Save Profile"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </section>

        <section id="targets" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-royalblue mb-6">Target Colleges</h2>
          <div className="bg-white rounded-xl shadow-md p-8 space-y-2">
            {userData.targetColleges.map((college, idx) => (
              <input
                key={idx}
                type="text"
                value={college}
                onChange={(e) => {
                  const newTargets = [...userData.targetColleges];
                  newTargets[idx] = e.target.value;
                  setUserData({ ...userData, targetColleges: newTargets });
                }}
                className="w-full border rounded-lg p-3 bg-gray-50 text-squid"
              />
            ))}
            <button
              onClick={() =>
                setUserData({ ...userData, targetColleges: [...userData.targetColleges, ""] })
              }
              className="mt-2 px-4 py-2 bg-royalblue text-cream rounded-lg"
            >
              Add College
            </button>
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
