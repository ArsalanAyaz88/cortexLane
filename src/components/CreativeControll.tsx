"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreativeControls = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const cardsData = [
    {
      title: "AI Model Training",
      description: "Train custom AI models tailored to your specific business needs",
      videoSrc: "https://res.cloudinary.com/dsqozxvwm/video/upload/v1761576022/klingaiclone/crt1_gmfhfr.mp4",
    },
    {
      title: "Real-Time Analytics",
      description: "Get instant insights from your data with advanced AI analytics",
      videoSrc: "https://res.cloudinary.com/dsqozxvwm/video/upload/v1761576010/klingaiclone/crt2_jsg1um.mp4",
    },
    {
      title: "Intelligent Automation",
      description:
        "Automate complex workflows with AI-powered decision making",
      videoSrc: "https://res.cloudinary.com/dsqozxvwm/video/upload/v1761576011/klingaiclone/crt3_sy3vxa.mp4",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Header animation from top
        gsap.fromTo(
          headerRef.current,
          { y: -80, opacity: 0 },
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

        // Cards animation - staggered from bottom
        const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

        gsap.fromTo(
          cards,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-16 px-4 overflow-x-hidden"
    >
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
          Powerful
        </h2>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair-display font-bold italic text-white/90 mb-6">
          AI Capabilities
        </h3>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
          Advanced AI tools to transform your business operations
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
        {cardsData.map((card, index) => {
          const cardRef =
            index === 0 ? card1Ref : index === 1 ? card2Ref : card3Ref;

          return (
            <div
              key={index}
              ref={cardRef}
              className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden p-6 hover:border-gray-600/70 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="mb-4">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Video Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-800/50 w-3/5 mx-auto">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={card.videoSrc} type="video/mp4" />
                  {/* Fallback gradient if video doesn't load */}
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CreativeControls;
