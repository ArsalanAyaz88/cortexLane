"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Possibilities = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Button label will follow the placeholder topic; no independent index needed

  const currentPlaceholderRef = useRef<HTMLDivElement>(null);
  const nextPlaceholderRef = useRef<HTMLDivElement>(null);
  const placeholderContainerRef = useRef<HTMLDivElement>(null);
  const currentButtonTextRef = useRef<HTMLDivElement>(null);
  const nextButtonTextRef = useRef<HTMLDivElement>(null);
  const buttonTextContainerRef = useRef<HTMLDivElement>(null);

  // Animation refs
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const leftVideoRef = useRef<HTMLDivElement>(null);
  const rightVideoRef = useRef<HTMLDivElement>(null);

  const placeholderTexts = [
    "Build a RAG app over Confluence, GitHub, and Drive.",
    "Fine‑tune an LLM on support logs with evals + guardrails.",
    "Real‑time object tracking on edge devices with alerts.",
    "Multi‑agent orchestration for operations workflows.",
    "Prompt/Model CI with drift detection and rollback.",
  ];

  const buttonTexts = ["RAG", "MLOps", "Agents"];

  // Map each placeholder to the appropriate topic label shown on the button
  const topicForIndex = ["RAG", "MLOps", "Vision", "Agents", "MLOps"];

  useEffect(() => {
    // Initialize placeholder positions
    if (currentPlaceholderRef.current && nextPlaceholderRef.current) {
      gsap.set(currentPlaceholderRef.current, { y: 0, opacity: 1 });
      gsap.set(nextPlaceholderRef.current, { y: 30, opacity: 0 });
    }

    // Initialize button text positions
    if (currentButtonTextRef.current && nextButtonTextRef.current) {
      gsap.set(currentButtonTextRef.current, { y: 0, opacity: 1 });
      gsap.set(nextButtonTextRef.current, { y: 20, opacity: 0 });
    }

    // Scroll animations
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Header animation from top
        gsap.fromTo(
          headerRef.current,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Input field animation from bottom
        gsap.fromTo(
          inputRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Left video animation from left
        gsap.fromTo(
          leftVideoRef.current,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Right video animation from right
        gsap.fromTo(
          rightVideoRef.current,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    const animatePlaceholder = () => {
      if (isInputFocused || inputValue !== "") {
        return;
      }

      const nextIndex = (currentIndex + 1) % placeholderTexts.length;

      if (currentPlaceholderRef.current && nextPlaceholderRef.current) {
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

        // Sync button label with the topic for the upcoming placeholder
        const nextTopic = topicForIndex[nextIndex];
        if (currentButtonTextRef.current && nextButtonTextRef.current) {
          // Prepare next button text
          nextButtonTextRef.current.textContent = nextTopic;
          gsap.set(nextButtonTextRef.current, { y: 20, opacity: 0 });

          // Animate current button text out and next in
          tl.to(
            currentButtonTextRef.current,
            { y: -20, opacity: 0, duration: 0.3, ease: "power2.in" },
            0
          );
          tl.to(
            nextButtonTextRef.current,
            { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
            "-=0.1"
          );
        }

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
          // Finalize button text swap
          if (currentButtonTextRef.current && nextButtonTextRef.current) {
            currentButtonTextRef.current.textContent = topicForIndex[nextIndex];
            gsap.set(currentButtonTextRef.current, { y: 0, opacity: 1 });
            gsap.set(nextButtonTextRef.current, { y: 20, opacity: 0 });
          }
          setCurrentIndex(nextIndex);
        });
      }
    };

    const interval = setInterval(animatePlaceholder, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isInputFocused, inputValue, placeholderTexts]);

  // Button text is now synced with placeholder; no separate rotation

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
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-16 px-4"
    >
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
          Endless
        </h2>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair-display font-bold italic text-white/90 mb-6">
          Possibilities
        </h3>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
          One concept, infinite ways to bring it to life
        </p>
      </div>

      {/* Input Field Section */}
      <div ref={inputRef} className="w-full max-w-4xl mx-auto mb-16">
        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
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
              className="w-full bg-transparent border-none outline-none px-[20px] sm:px-[30px] py-4 text-sm sm:text-base text-white font-medium"
            />

            {/* Animated Button */}
            <button
              onClick={handleGenerate}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700/80 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300 border border-gray-600/50 hover:bg-gray-600/80 hover:scale-105 active:scale-[0.98] overflow-hidden"
            >
              <div
                ref={buttonTextContainerRef}
                className="relative h-[20px] flex items-center justify-center"
              >
                <div ref={currentButtonTextRef} className="absolute">
                  {buttonTexts[0]}
                </div>
                <div ref={nextButtonTextRef} className="absolute" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Video */}
        <div
          ref={leftVideoRef}
          className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900/50"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dsqozxvwm/video/upload/v1761576011/klingaiclone/poss1_sdpkbe.mp4" type="video/mp4" />
            {/* Fallback gradient if video doesn't load */}
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Right Video */}
        <div
          ref={rightVideoRef}
          className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900/50"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dsqozxvwm/video/upload/v1761576009/klingaiclone/poss2_o1kpkb.mp4" type="video/mp4" />
            {/* Fallback gradient if video doesn't load */}
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
