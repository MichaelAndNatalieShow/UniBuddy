import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      console.log("Login success:", data);
      navigate("/home");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center font-urbanist"
      style={{ backgroundImage: "url('/background2.jpg')" }}
    >
      <div className="w-[420px] text-white bg-cream border border-white/30 backdrop-blur-xl rounded-xl p-8 shadow-lg">
        <h2 className="text-center text-lg font-bold mb-4">UniBuddy</h2>

        <form onSubmit={handleLogin}>
          <h1 className="text-3xl text-center font-semibold mb-8">Login</h1>

          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 bg-transparent border border-white/20 rounded-full px-5 pr-12 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <i className="bx bxs-user absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 bg-transparent border border-white/20 rounded-full px-5 pr-12 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <i className="bx bxs-lock-alt absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          {error && (
            <p className="text-red-300 text-center text-sm mb-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-white text-squid font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-sm text-center mt-6">
            <p>
              Don’t have an account?{" "}
              <a href="/signup" className="font-semibold hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>

        <h3 className="text-center text-sm font-light mt-6">
          Other questions?{" "}
          <a href="/contact" className="font-semibold hover:underline">
            Contact Us
          </a>
        </h3>
      </div>
    </div>
  );
}
