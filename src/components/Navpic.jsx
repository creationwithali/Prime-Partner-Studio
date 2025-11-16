import React from "react";

const Navpic = () => {
  return (
    <section className="flex flex-col md:flex-row w-full overflow-hidden">
      {/* Left Side - Blue Background */}
      <div className="bg-[#4A70A9] text-white flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-10 md:w-1/2 space-y-5 text-center md:text-left">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
          New standard <br /> in performance <br /> marketing
        </h1>

        <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-md">
          Marketcall is the best affiliate network to get new clients. <br />
          We make millions of conversions every year.
        </p>

        <button className="bg-[#8FABD4] text-black font-bold text-lg sm:text-xl px-6 py-3 rounded-xl hover:bg-white transition-all duration-300 shadow-md">
          Get Clients
        </button>
      </div>

      {/* Right Side - White Background with Video */}
      <div className="bg-white flex items-center justify-center md:w-1/2 w-full h-64 sm:h-80 md:h-auto">
        <video
          src="home.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-t-2xl md:rounded-none"
        />
      </div>
    </section>
  );
};

export default Navpic;
