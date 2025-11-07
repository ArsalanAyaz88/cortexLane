"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const section = sectionRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const image3 = image3Ref.current;
    const image4 = image4Ref.current;

    // Set initial states
    if (image1) {
      gsap.set(image1, {
        y: 200,
        x: 0,
        opacity: 0,
        scale: 0.8,
      });
    }

    if (image2) {
      gsap.set(image2, {
        x: 300,
        opacity: 0,
        scale: 0.8,
      });
    }

    if (image3) {
      gsap.set(image3, {
        x: 500,
        opacity: 0,
        scale: 0.8,
      });
    }

    if (image4) {
      gsap.set(image4, {
        x: -300,
        opacity: 0,
        scale: 0.8,
      });
    }

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        markers: false,
      },
    });

    // Image 1: Comes to center first
    tl.to(image1, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Image 2: Appears and Image 1 moves left
    tl.to(
      image1,
      {
        x: -180,
        duration: 1,
        ease: "power2.out",
      },
      "+=0.3"
    ).to(
      image2,
      {
        x: 120,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );

    // Image 3: Appears overlapping image 2 on right
    tl.to(
      image3,
      {
        x: 280,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      "+=0.3"
    );

    // Image 4: Appears overlapping image 1 on left
    tl.to(
      image4,
      {
        x: -280,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      "+=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mt-35 mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            <span className="font-playfair-display italic text-blue-400">AI Platform</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions from development to deployment
          </p>
        </div>

        {/* Images and text container - relative positioning for overlapping */}
        <div
          ref={containerRef}
          className="relative flex justify-center items-center min-h-[600px] lg:min-h-[700px] -mt-20"
        >
          {/* Image 1 - Main center image (16:9 ratio like 1920x1080) - BACKGROUND */}
          <div
            ref={image1Ref}
            className="absolute rounded-2xl overflow-hidden shadow-2xl"
            style={{ zIndex: 5 }}
          >
            <div className="relative h-48 w-[340px] sm:h-56 sm:w-[400px] lg:h-72 lg:w-[640px]">
              <Image
                src="/S2I1.jpg"
                alt="Main landscape"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Image 2 - Second image (desktop size - medium large) - ON TOP OF IMAGE 1 */}
          <div
            ref={image2Ref}
            className="absolute rounded-2xl overflow-hidden shadow-2xl"
            style={{ zIndex: 15 }}
          >
            <div className="relative h-56 w-80 sm:h-72 sm:w-[420px] lg:h-80 lg:w-[480px]">
              <Image
                src="/S2I1.jpg"
                alt="Secondary landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 3 - Third image (mobile/tablet size - portrait) */}
          <div
            ref={image3Ref}
            className="absolute rounded-2xl overflow-hidden shadow-2xl"
            style={{ zIndex: 20 }}
          >
            <div className="relative h-72 w-40 sm:h-80 sm:w-44 lg:h-[400px] lg:w-52">
              <Image
                src="/S2I1.jpg"
                alt="Mobile view landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 4 - Fourth image (desktop size - medium) - ON TOP OF IMAGE 1 */}
          <div
            ref={image4Ref}
            className="absolute rounded-2xl overflow-hidden shadow-2xl"
            style={{ zIndex: 12 }}
          >
            <div className="relative h-60 w-80 sm:h-72 sm:w-96 lg:h-80 lg:w-[450px]">
              <Image
                src="/S2I1.jpg"
                alt="Fourth landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Fixed Text card - Always visible on top with highest z-index, positioned in center */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 50 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg px-6 py-4 lg:px-8 lg:py-5 w-80 sm:w-[450px] lg:w-[520px] shadow-xl">
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-light text-center">
                Build, train, and deploy AI models across web, mobile, and cloud platforms with our unified AI development environment.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to explore indicator */}
        <div className="text-center">
          <div className="inline-flex items-center text-white/60 text-sm font-medium">
            <span className="italic">Scroll to explore</span>
            <svg
              className="ml-2 w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
