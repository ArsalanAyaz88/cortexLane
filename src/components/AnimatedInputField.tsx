"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedInputField = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPlaceholderRef = useRef<HTMLDivElement>(null);
  const nextPlaceholderRef = useRef<HTMLDivElement>(null);
  const placeholderContainerRef = useRef<HTMLDivElement>(null);

  const placeholderTexts = [
    "A whale dives into the desert, stirring up huge sand waves",
    "A dragon soaring through neon-lit city streets at midnight",
    "An astronaut surfing on Saturn's rings with cosmic waves",
    "A giant octopus playing piano in an underwater concert hall",
    "A steampunk locomotive racing through the clouds above mountains",
  ];

  useEffect(() => {
    // Initialize placeholder positions
    if (currentPlaceholderRef.current && nextPlaceholderRef.current) {
      gsap.set(currentPlaceholderRef.current, { y: 0, opacity: 1 });
      gsap.set(nextPlaceholderRef.current, { y: 30, opacity: 0 });
    }
  }, []);

  useEffect(() => {
    const animatePlaceholder = () => {
      if (isInputFocused || inputValue !== "") {
        return;
      }

      const nextIndex = (currentIndex + 1) % placeholderTexts.length;

      if (
        currentPlaceholderRef.current &&
        nextPlaceholderRef.current &&
        nextPlaceholderRef.current
      ) {
        // Set the next text
        if (nextPlaceholderRef.current) {
          nextPlaceholderRef.current.textContent = placeholderTexts[nextIndex];
        }

        // Position next placeholder below
        gsap.set(nextPlaceholderRef.current, { y: 30, opacity: 0 });

        // Create timeline for smooth animation
        const tl = gsap.timeline();

        // Animate current placeholder out (up)
        tl.to(currentPlaceholderRef.current, {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        });

        // Animate next placeholder in (from bottom)
        tl.to(
          nextPlaceholderRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );

        // After animation completes, swap the elements
        tl.call(() => {
          if (currentPlaceholderRef.current) {
            currentPlaceholderRef.current.textContent =
              placeholderTexts[nextIndex];
            gsap.set(currentPlaceholderRef.current, { y: 0, opacity: 1 });
          }
          if (nextPlaceholderRef.current) {
            gsap.set(nextPlaceholderRef.current, { y: 30, opacity: 0 });
          }
          setCurrentIndex(nextIndex);
        });
      }
    };

    const interval = setInterval(animatePlaceholder, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isInputFocused, inputValue, placeholderTexts]);

  const handleFocus = () => {
    setIsInputFocused(true);
    if (placeholderContainerRef.current) {
      gsap.to(placeholderContainerRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  const handleBlur = () => {
    setIsInputFocused(false);
    if (inputValue === "" && placeholderContainerRef.current) {
      gsap.to(placeholderContainerRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (placeholderContainerRef.current) {
      if (e.target.value !== "") {
        gsap.to(placeholderContainerRef.current, {
          opacity: 0,
          duration: 0.3,
        });
      } else if (!isInputFocused) {
        gsap.to(placeholderContainerRef.current, {
          opacity: 1,
          duration: 0.3,
        });
      }
    }
  };

  const handleGenerate = () => {
    console.log("Generate clicked with input:", inputValue);
    // Add your generate logic here
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Animated Placeholder Container */}
        <div
          ref={placeholderContainerRef}
          className="absolute left-[20px] sm:left-[30px] top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden h-[25px] w-[calc(100%-120px)] sm:w-[calc(100%-180px)]"
        >
          <div
            ref={currentPlaceholderRef}
            className="absolute text-white/70 text-sm sm:text-base font-medium whitespace-nowrap text-left left-0 top-0"
          >
            {placeholderTexts[0]}
          </div>
          <div
            ref={nextPlaceholderRef}
            className="absolute text-white/70 text-sm sm:text-base font-medium whitespace-nowrap text-left left-0 top-0"
          />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full bg-transparent border-none outline-none px-[20px] sm:px-[30px] py-3 text-sm sm:text-base text-white font-medium"
        />

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 sm:px-7 py-2 sm:py-2.5 rounded-[40px] text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] active:scale-[0.98]"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default AnimatedInputField;
