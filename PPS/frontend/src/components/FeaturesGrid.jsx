import React from "react";
import {
  FaChartLine,
  FaShieldHalved,
  FaMoneyBillWave,
  FaBullseye,
  FaScrewdriverWrench,
  FaUserTie,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaChartLine />,
    title: "Advanced Analytics",
    desc: "Track every call, conversion, and commission with our real-time reporting dashboard. Get detailed insights into your campaigns.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Fraud Protection",
    desc: "Our advanced fraud detection system ensures you only pay for quality calls and legitimate conversions.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Weekly Payouts",
    desc: "Get paid on time, every time. We offer weekly payouts with multiple payment methods for your convenience.",
  },
  {
    icon: <FaBullseye />,
    title: "Quality Offers",
    desc: "Access exclusive, high-converting offers across multiple verticals including insurance, home services, and finance.",
  },
  {
    icon: <FaScrewdriverWrench />,
    title: "Marketing Tools",
    desc: "Get access to professional landing pages, banners, and marketing materials optimized for conversion.",
  },
  {
    icon: <FaUserTie />,
    title: "Dedicated Support",
    desc: "Work with experienced account managers who are committed to helping you maximize your revenue.",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="flex justify-center">
      <section className="py-16 px-6 md:px-12 lg:px-24 w-3/4 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#1E293B] mb-3">
            Why Choose Marketcall?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to scale your performance marketing
            campaigns and maximize ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-[#4A70A9]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A70A9] to-[#8FABD4] rounded-xl flex items-center justify-center text-white text-2xl mb-4 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesGrid;
