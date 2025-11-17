"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { tgtoast } from "./TgToast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  // ✅ Signup logic (backend version)
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      tgtoast("❌ Passwords do not match!", { type: "error" });
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        tgtoast("✅ Signup successful!", { type: "success" });
        router.push("/login");
      } else {
        tgtoast("❌ " + (data?.message || "Signup failed"), { type: "error" });
      }
    } catch (error) {
      tgtoast("❌ " + (error?.message || "An error occurred"), {
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-900 via-indigo-900 to-black">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl px-4">
        {/* Video on the left for signup */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1">
          <video
            src="/home.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-80 h-56 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Card */}
        <div className="w-full md:w-1/2 order-2 md:order-2">
          <div className="backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-2xl p-8 w-full text-left text-black transition-all duration-300">
            {/* Logo / Heading */}
            <h2 className="text-3xl font-bold mb-3 text-[#4a70a8]">
              Create Account ✨
            </h2>
            <p className="text-gray-700 mb-6 text-sm">
              Join us and get started
            </p>

            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-5">
              {/* Full Name */}
              <div className="text-left">
                <label className="block mb-1 text-sm text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a70a8]"
                />
              </div>

              {/* Email */}
              <div className="text-left">
                <label className="block mb-1 text-sm text-black">Email</label>
                <input
                  type="email"
                  placeholder="username@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a70a8]"
                />
              </div>

              {/* Password */}
              <div className="text-left">
                <label className="block mb-1 text-sm text-black">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a70a8]"
                />
              </div>

              {/* Confirm Password */}
              <div className="text-left">
                <label className="block mb-1 text-sm text-black">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a70a8]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-[#4a70a8] hover:bg-[#3a5f8a] text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Sign Up
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="grow border-gray-300" />
              <span className="px-2 text-gray-600 text-sm">
                or continue with
              </span>
              <hr className="grow border-gray-300" />
            </div>

            {/* Redirect to Login */}
            <p className="text-sm text-gray-700">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#4a70a8] hover:text-black font-medium hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
