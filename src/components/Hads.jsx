"use client";

import React from "react";
import BlurText from "./BlurText";

const Hads = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="bg-gray-100 h-32 flex justify-center items-center">
      <BlurText
        text="Boost your digital presence with PPS"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-bold text-3xl md:text-5xl text-center"
      />
    </div>
  );
};

export default Hads;