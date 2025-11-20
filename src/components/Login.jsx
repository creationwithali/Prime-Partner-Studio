"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { tgtoast } from "./TgToast";

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
        tgtoast("✅ Login successful!", { type: "success" });
        localStorage.setItem("isLoggedIn", true);
        router.push("/");
      } else {
        tgtoast("❌ " + (data?.message || "Login failed"), { type: "error" });
      }
    } catch (error) {
      tgtoast("❌ " + (error?.message || "An error occurred"), {
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/50 backdrop-blur-sm absolute inset-0">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl px-4">
        {/* Card */}
        <div className="order-1 md:order-1 w-full md:w-1/2">
          <div className="backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-2xl p-8 w-full text-left text-black transition-all duration-300">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-3 text-[#4a70a8]">
              Welcome Back 👋
            </h2>
            <p className="text-gray-700 mb-6 text-sm">
              Login to continue your journey
            </p>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div className="text-left">
                <label className="block mb-1 text-sm text-black">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 border -2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a70a8]"
                />
              </div>

              {/* Password */}
              <div className="text-left">
                <label className="block mb-1 text-sm text-black">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 border -2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a70a8]"
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() =>
                    tgtoast("🔑 Reset password flow not added yet", {
                      type: "info",
                    })
                  }
                  className="text-sm text-[#4a70a8] hover:text-black"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#4a70a8] hover:bg-[#3a5f8a] text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Log In
              </button>
            </form>

            {/* Switch to Signup */}
            <p className="text-sm text-gray-700 mt-6">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-[#4a70a8] hover:text-black font-medium hover:underline"
              >
                Create one
              </a>
            </p>
          </div>
        </div>

        {/* Video on the right for login (larger on desktop) */}
        <div className="order-2 md:order-2 w-full md:w-1/2 h-64 md:h-[520px] flex items-center justify-center overflow-hidden rounded-2xl">
          <video
            src="/home.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
      {/* Heading */}
    </div>
  );
};

export default Login;
