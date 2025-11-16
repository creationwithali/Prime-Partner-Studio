import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 1️⃣ Product Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                For advertisers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                For affiliates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Marketing Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Fraud prevention
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Automatization
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Payouts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Lead generation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                24/7 support
              </a>
            </li>
          </ul>
        </div>

        {/* 2️⃣ Industries Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Industries</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Insurance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Finance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Home Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Real Estate
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Travel
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Rehab
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Company Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Vacancy
              </a>
            </li>
          </ul>

          <h3 className="text-white text-lg font-semibold mt-6 mb-2">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact support
              </a>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Contact & Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <div className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt className="text-indigo-400" />
            <span>+1 (417) 241-7574</span>
          </div>

          <div className="flex items-center gap-2 text-sm mb-4">
            <FaEnvelope className="text-indigo-400" />
            <span>Primepartnerstudio@gmail.com</span>
          </div>

          <h3 className="text-white text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <a href="#" className="hover:text-white">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>

          <h3 className="text-white text-lg font-semibold mb-2">Follow</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-indigo-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-indigo-400 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Marketcall. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
