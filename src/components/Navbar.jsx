"use client";
import React, { useState } from "react"; // <-- add this line
import { Menu, X } from "lucide-react"; // ✅ For icons (install via: npm i lucide-react)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logout, setlogout] = useState(false);
  function handleLogout() {
    setlogout(true);
  }

  return (
    <nav className="bg-black text-[#4A70A9] h-16 w-full flex items-center justify-between px-6 md:px-10 relative">
      {/* Logo */}
      <div>
        <a href="/" aria-label="Home">
          <img
            src="/logo.jpg"
            alt="logo"
            className="h-12 w-auto rounded-full"
          />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 font-bold">
        <a href="/" className="hover:text-[#ffffff] transition-colors">
          Home
        </a>
        <a href="/product" className="hover:text-[#ffffff] transition-colors">
          Product
        </a>
       
      
        <a
          href="/industries"
          className="hover:text-[#ffffff] transition-colors"
        >
          Industries
        </a>
        <a href="/company" className="hover:text-[#ffffff] transition-colors">
          About
        </a>
        <a href="/blog" className="hover:text-[#ffffff] transition-colors">
          Blog
        </a>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button
          onClick={handleLogout}
          className="bg-[#4A70A9] text-black font-bold px-4 py-2 rounded hover:bg-[#ffffff] transition-colors"
        >
          <a href="/login">{logout ? "Log out" : "Log in"}</a>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#5eff00] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-5 py-6 border-t border-gray-800 md:hidden z-10">
          <a href="/" className="hover:text-[#FEB21A] font-bold">
            Home
          </a>
          <a href="/product" className="hover:text-[#FEB21A] font-bold">
            Product
          </a>
          <a href="/help" className="hover:text-[#FEB21A] font-bold">
            Help
          </a>
          <a href="/center" className="hover:text-[#FEB21A] font-bold">
            Center
          </a>
          <a href="/industries" className="hover:text-[#FEB21A] font-bold">
            Industries
          </a>
          <a href="/company" className="hover:text-[#FEB21A] font-bold">
            Company
          </a>
          <a href="/blog" className="hover:text-[#FEB21A] font-bold">
            Blog
          </a>

          <a
            href="/signup"
            className="bg-[#5eff00] text-black font-bold px-4 py-2 rounded hover:bg-[#FEB21A] transition-colors"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
