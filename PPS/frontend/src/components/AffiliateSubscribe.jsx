"use client"
import React, { useState } from "react";

const AffiliateSubscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000)); // Mock API call
    alert(`Subscribed successfully with ${email}`);
    setEmail("");
    setLoading(false);
  };

  return (
    <section className="max-w-2/3 mx-auto text-center mb-5 bg-white shadow-lg rounded-2xl p-6 sm:p-8">
      {/* 🎓 Scholarship Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-indigo-100 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-indigo-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422A12.083 12.083 0 0118 14.5a12.083 12.083 0 01-6 5.25A12.083 12.083 0 016 14.5c0-.548.052-1.085.16-1.608L12 14z"
            />
          </svg>
        </div>
      </div>

      {/* 🧾 Heading */}
      <h2 className="text-2xl font-bold">Get Private Affiliate Case Studies</h2>
      <p className="text-gray-600 mt-2">
        And learn all secret methods used by Marketcall affiliates
      </p>

      {/* 📧 Email Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default AffiliateSubscribe;
