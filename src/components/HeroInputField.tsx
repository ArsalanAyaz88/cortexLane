import React from "react";
import AnimatedInputField from "./AnimatedInputField";

const HeroInputField = () => {
  return (
    <div className="relative w-full">
      {/* Responsive input field background */}
      <div className="bg-black/20 backdrop-blur-sm rounded-[25px] xs:rounded-[35px] sm:rounded-[45px] md:rounded-[50px] p-0.5 sm:p-1 shadow-[0_2px_8px_rgba(0,0,0,0.1)] sm:shadow-[0_3px_12px_rgba(0,0,0,0.15)] md:shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-white/10 sm:border-white/15">
        <div className="relative">
          <AnimatedInputField />
        </div>
      </div>
    </div>
  );
};

export default HeroInputField;