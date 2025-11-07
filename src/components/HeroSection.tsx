import React from "react";
import HeroInputField from "@/components/HeroInputField";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full bg-green-400">
        <iframe
          className="w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/eBMtNqmOsV8?autoplay=1&mute=1&loop=1&playlist=eBMtNqmOsV8&controls=0&modestbranding=1&playsinline=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        {/* Fallback gradient if video doesn't load */}
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 sm:bg-black/30"></div>
        
        {/* Bottom gradient shadow to prevent cut-off appearance */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-4 xl:px-12 text-center">
        {/* Main Heading */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-6 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
          <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-2 lg:mb-1 xl:mb-1 tracking-tight leading-tight">
            CortexLane
          </h1>
          <h2 className="text-lg xs:text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-7xl font-playfair-display font-bold italic text-white/90 leading-relaxed">
            Build intelligence that builds business
          </h2>
        </div>

        {/* Animated Input Field Container */}
        <div className="w-full sm:w-3/5 mx-auto mb-4 sm:mb-6 md:mb-8 px-4 sm:px-0">
          <HeroInputField />
        </div>

        {/* Optional subtitle */}
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          We design, deploy, and operate production AI systems for your business.
        </p>

        {/* Primary CTA */}
        <div className="mt-6">
          <a
            href="#contact"
            className="inline-block bg-gray-700/80 text-white px-8 py-3 rounded-xl text-sm font-semibold border border-gray-600/50 hover:bg-gray-600/80 transition-all duration-300"
          >
            Book a demo
          </a>
        </div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
      <div className="hidden xs:block absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-8 sm:w-5 sm:h-9 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-0.5 h-2 sm:w-1 sm:h-2.5 md:w-1 md:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
