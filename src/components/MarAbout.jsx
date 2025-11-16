import React from "react";

const MarAbout = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-3/4 mx-auto my-16 px-6 py-10 bg-gray-100 rounded-2xl shadow-sm border border-gray-200">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-5 text-center md:text-left">
        <h1 className="font-extrabold text-3xl md:text-4xl text-[#1E293B]">
          Why choose <span className="text-[#4A70A9]">Marketcall?</span>
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Marketcall is the best performance marketing solution. We help match
          advertisers with suitable affiliates, pairing them for long-term
          success in maximizing profits. Our goal is to help you achieve
          continuous scalable growth. <br /> <br /> Our client-first approach
          drives us to deliver only the highest quality products for our
          customers. <br /> <br /> We release new features monthly to give
          advertisers and partners additional tools and functionality.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="fly.png"
          alt="aboutimg"
          className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default MarAbout;
