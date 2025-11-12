import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "330,815", label: "Successful ad campaigns" },
    { number: "$213,128,353", label: "Earned so far by our affiliates" },
    { number: "13,972,881", label: "Calls attracted" },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A70A9] mb-2">
                {item.number}
              </h2>
              <p className="text-gray-600 font-medium text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
