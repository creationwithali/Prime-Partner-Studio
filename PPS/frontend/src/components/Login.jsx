"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // ✅ Backend-based login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful!");
        localStorage.setItem("isLoggedIn", true);
        router.push("/");
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-md text-center text-gray-100 transition-all duration-300 hover:scale-[1.02]">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-3 text-white">Welcome Back 👋</h2>
        <p className="text-gray-300 mb-8 text-sm">
          Login to continue your journey
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div className="text-left">
            <label className="block mb-1 text-sm text-gray-200">Email</label>
            <input
              type="email"
              placeholder="username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="block mb-1 text-sm text-gray-200">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              onClick={() => alert("🔑 Reset password flow not added yet")}
              className="text-sm text-indigo-300 hover:text-indigo-400"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Log In
          </button>
        </form>

        {/* Switch to Signup */}
        <p className="text-sm text-gray-300 mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
