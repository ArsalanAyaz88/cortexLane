import React from "react";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            About KlingAI
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            KlingAI represents the future of creative content generation. Our
            advanced AI technology transforms your imagination into stunning
            visual narratives, making professional-quality video creation
            accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;