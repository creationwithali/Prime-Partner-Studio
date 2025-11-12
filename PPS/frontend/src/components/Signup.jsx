"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
      alert("❌ Passwords do not match!");
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
        alert("✅ Signup successful!");
        router.push("/login");
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      {/* Card */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-md text-center text-gray-100 transition-all duration-300 hover:scale-[1.02]">
        {/* Logo / Heading */}
        <h2 className="text-3xl font-bold mb-3 text-white">
          Create Account ✨
        </h2>
        <p className="text-gray-300 mb-8 text-sm">Join us and get started</p>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <div className="text-left">
            <label className="block mb-1 text-sm text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

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

          {/* Confirm Password */}
          <div className="text-left">
            <label className="block mb-1 text-sm text-gray-200">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="grow border-gray-500" />
          <span className="px-2 text-gray-300 text-sm">or continue with</span>
          <hr className="grow border-gray-500" />
        </div>

        {/* Social Logins */}
        {/* <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={handleGoogleSignup}
            className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
          >
            <FaGoogle className="text-white text-lg" />
          </button>
          <button
            className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            onClick={() => alert("🔒 GitHub signup not set up yet")}
          >
            <FaGithub className="text-white text-lg" />
          </button>
          <button
            onClick={handleFacebookSignup}
            className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
          >
            <FaFacebookF className="text-white text-lg" />
          </button>
        </div> */}

        {/* Redirect to Login */}
        <p className="text-sm text-gray-300">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
