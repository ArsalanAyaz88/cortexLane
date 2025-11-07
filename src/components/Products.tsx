"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const productItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const products = [
    {
      name: "CortexLane Studio",
      tagline: "Build Agentic apps fast",
      description: "Accelerate your AI development with our comprehensive studio platform. Build, test, and deploy agentic applications with intuitive tools and pre-built components.",
      features: [
        "Visual workflow builder for AI agents",
        "Pre-built templates and components",
        "Real-time collaboration tools",
        "One-click deployment to production"
      ],
      cta: "Try demo",
      href: "#demo",
    },
    {
      name: "CortexLane Vision",
      tagline: "Real‑time detection & tracking",
      description: "Advanced computer vision solutions for real-time object detection, tracking, and analysis. Process video streams with state-of-the-art AI models.",
      features: [
        "Real-time object detection and tracking",
        "Custom model training and fine-tuning",
        "Multi-camera support and analytics",
        "Edge deployment capabilities"
      ],
      cta: "See use cases",
      href: "#use-cases",
    },
    {
      name: "CortexLane Ops",
      tagline: "MLOps for LLMs and CV",
      description: "Complete MLOps platform for managing, monitoring, and scaling your AI models. Streamline your ML lifecycle from training to production.",
      features: [
        "Model versioning and experiment tracking",
        "Automated model deployment pipelines",
        "Performance monitoring and alerts",
        "Resource optimization and scaling"
      ],
      cta: "Book a demo",
      href: "#contact",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: -80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        descriptionRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate product items from left
      const validItems = productItemsRef.current.filter(Boolean) as HTMLDivElement[];
      gsap.fromTo(
        validItems,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate content panel from right
      gsap.fromTo(
        contentRef.current,
        { x: 50, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate content change when active product changes
  React.useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black flex flex-col items-center justify-center py-12 px-4"
    >
      {/* Header */}
      <div ref={headerRef} className="text-center mb-12 max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4"
        >
          CortexLane <span className="font-playfair-display italic text-blue-400">Products</span>
        </h2>
        <p
          ref={descriptionRef}
          className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          Ship faster with our ready-to-run AI product stack.
        </p>
      </div>

      {/* Products Layout - Left: List, Right: Details */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 mb-8">
        {/* Left Sidebar - Product List */}
        <div className="bg-[#0a0e27] border border-gray-800/50 rounded-2xl p-6 overflow-y-auto max-h-[600px]">
          <h3 className="text-xl font-bold text-white mb-6">Our Products</h3>
          <div className="space-y-3">
            {products.map((product, index) => (
              <div
                key={index}
                ref={(el) => {
                  productItemsRef.current[index] = el;
                }}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#d946ef] text-white"
                    : "bg-gray-800/30 text-white/70 hover:bg-gray-800/50 hover:text-white"
                }`}
              >
                <h4 className="font-semibold text-base mb-1">{product.name}</h4>
                <p className="text-sm opacity-90">{product.tagline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Product Details */}
        <div
          ref={contentRef}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {products[activeIndex].name}
          </h2>
          <p className="text-lg text-blue-600 mb-6">
            {products[activeIndex].tagline}
          </p>
          
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            {products[activeIndex].description}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {products[activeIndex].features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={products[activeIndex].href}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            {products[activeIndex].cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
