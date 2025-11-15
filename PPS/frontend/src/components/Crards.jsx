import React from "react";
import { Check } from "lucide-react"; // ✅ Install with: npm i lucide-react

const Cards = () => {
  return (
    <div className=" flex justify-center  bg-gray-100">
      <section className="flex flex-col md:flex-row w-3/4 justify-center items-stretch gap-8 ">
        {/* 🔹 Advertisers Card */}

        <div
          id="advertisers"
          className="bg-white p-3 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-[#000000] flex-1"
        >
          <h2 className="text-2xl font-bold text-[#4A70A9] mb-4">
            Advertisers
          </h2>
          <p className="text-gray-600 mb-6">
            I am an advertiser, app developer, service provider or agency
            looking to reach the right customers and maximize profits.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Get promoted by super affiliates",
              "Easy to use platform",
              "Pay only for qualified calls",
              "Detailed statistics and analytics",
              "Real-time reporting dashboard",
              "Fraud detection system",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="text-[#4A70A9] mt-1 mr-3 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="block w-full bg-[#4A70A9] text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-[#000000] transition-colors"
          >
            See All Features
          </a>
        </div>

        {/* 🔸 Partners Card */}
        <div
          id="affiliates"
          className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-[#000000] flex-1"
        >
          <h2 className="text-2xl font-bold text-[#4A70A9] mb-4">Partners</h2>
          <p className="text-gray-600 mb-6">
            I am a publisher, website owner, influencer, or app developer
            looking to promote brands and maximize my revenue.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Only top converting offers",
              "Weekly payouts guaranteed",
              "Free advertising tools",
              "Exclusive verticals access",
              "High conversion landing pages for each offer",
              "Dedicated account manager",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="text-[#4A70A9] mt-1 mr-3 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="block w-full bg-[#4A70A9] text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-[#000000] transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cards;
