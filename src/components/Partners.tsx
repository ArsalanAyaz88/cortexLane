"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(4); // Start with CEO in center
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Animation refs
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const partnersRowRef = useRef<HTMLDivElement>(null);
  const partnerImagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const ceoImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const ourPartnersRef = useRef<HTMLDivElement>(null);
  const ourPartnersTitleRef = useRef<HTMLHeadingElement>(null);
  const partnerCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const allPartnerImages = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/imgCEO.png", // CEO at index 4 (center)
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
  ];

  const leftPartnerImages = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
  ];
  const rightPartnerImages = [
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allPartnerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allPartnerImages.length]);

  // Scroll to center image
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / allPartnerImages.length;
      const scrollPosition =
        currentIndex * itemWidth - container.clientWidth / 2 + itemWidth / 2;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  }, [allPartnerImages.length, currentIndex]);

  // GSAP Animations
  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Header animations
        gsap.fromTo(
          titleRef.current,
          {
            y: -60,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          [descriptionRef.current?.children],
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            delay: 0.3,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 75%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Partner images animation (desktop)
        const validPartnerImages = partnerImagesRef.current.filter(
          (img) => img !== null
        );

        gsap.fromTo(
          validPartnerImages,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: {
              amount: 0.8,
              from: "edges",
            },
            scrollTrigger: {
              trigger: partnersRowRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // CEO image special animation
        gsap.fromTo(
          ceoImageRef.current,
          {
            opacity: 0,
            scale: 0.5,
            rotation: -10,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            delay: 0.5,
            scrollTrigger: {
              trigger: partnersRowRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Text content animation
        gsap.fromTo(
          textContentRef.current,
          {
            opacity: 0,
            x: -80,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textContentRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Video animation
        gsap.fromTo(
          videoRef.current,
          {
            opacity: 0,
            x: 80,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: videoRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Our Partners section animation
        if (ourPartnersTitleRef.current) {
          gsap.fromTo(
            ourPartnersTitleRef.current,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ourPartnersRef.current,
                start: "top 85%",
                end: "top 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Partner cards stagger animation
        const validPartnerCards = partnerCardsRef.current.filter(
          (card) => card !== null
        );

        gsap.fromTo(
          validPartnerCards,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: {
              amount: 1,
              from: "start",
            },
            scrollTrigger: {
              trigger: ourPartnersRef.current,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover animations for partner images
        validPartnerImages.forEach((img) => {
          if (img) {
            img.addEventListener("mouseenter", () => {
              gsap.to(img, {
                scale: 1.15,
                rotation: 5,
                duration: 0.3,
                ease: "power2.out",
              });
            });

            img.addEventListener("mouseleave", () => {
              gsap.to(img, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            });
          }
        });

        // Hover animations for partner cards
        validPartnerCards.forEach((card) => {
          if (card) {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, {
                scale: 1.08,
                y: -5,
                duration: 0.3,
                ease: "power2.out",
              });
            });

            card.addEventListener("mouseleave", () => {
              gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            });
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-4 relative overflow-hidden pb-[150px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 max-w-4xl mx-auto">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            CortexLane <span className="font-playfair-display italic text-blue-400">Partners</span>
          </h2>
          <div ref={descriptionRef}>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We empower creators to push boundaries, explore new possibilities,
              and bring their ideas to life like never before.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Get inspired by some of our featured creatives!
            </p>
          </div>
        </div>

        {/* Partners Row - Desktop (lg and above) */}
        <div ref={partnersRowRef} className="relative mb-8 hidden lg:block">
          <div className="flex items-center justify-center gap-4">
            {/* Left Partners */}
            {leftPartnerImages.map((img, index) => (
              <div
                key={index}
                ref={(el) => {
                  partnerImagesRef.current[index] = el;
                }}
                className="group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
            ))}

            {/* CEO Image - Much larger and centered */}
            <div ref={ceoImageRef} className="group cursor-pointer mx-4">
              <img
                src="/imgCEO.png"
                alt="CEO"
                className="w-40 h-40 object-cover rounded-lg border-2 border-white"
              />
            </div>

            {/* Right Partners */}
            {rightPartnerImages.map((img, index) => (
              <div
                key={index + 4}
                ref={(el) => {
                  partnerImagesRef.current[index + 4] = el;
                }}
                className="group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Partner ${index + 5}`}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partners Carousel - Mobile & Tablet (below lg) */}
        <div className="relative mb-8 lg:hidden">
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allPartnerImages.map((img, index) => {
              const isCEO = index === 4;
              const isCenter = index === currentIndex;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 snap-center transition-all duration-300 ${
                    isCenter ? "scale-110" : "scale-90 opacity-70"
                  }`}
                  style={{ scrollSnapAlign: "center" }}
                >
                  <img
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className={`w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg transition-all duration-300 ${
                      isCEO ? "border-2 border-white" : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {allPartnerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text and Video Section - Responsive Layout */}
        <div className="px-4 md:px-10 lg:px-20 -mt-4 lg:-mt-20 relative">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Side - Text Content */}
            <div
              ref={textContentRef}
              className="w-full lg:w-1/2 space-y-2 pt-8 lg:pt-24"
            >
              <h3 className="text-xl md:text-2xl font-bold">
                Samuele Poggi (@visualsk2)
              </h3>
              <p className="text-gray-300 text-sm">
                AI filmmaker artist; Content creator with over 360,000 followers
                on Instagram
              </p>
              <div>
                <p className="text-white font-semibold text-sm">
                  Showcase:{" "}
                  <span className="text-blue-400">Elley duhé - Free Me</span>
                </p>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                I use Aika AI daily to push the limits of AI filmmaking. It
                allows me to create highly cinematic content, boosting AI and
                VFX in develop innovative projects. It has significantly
                impacted my creative process, enabling me to achieve complex
                animations that would otherwise require high-production budgets.
              </p>
            </div>

            {/* Right Side - Video with overlap */}
            <div ref={videoRef} className="w-full lg:w-1/2 relative z-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-2xl"
              >
                <source src="https://res.cloudinary.com/dsqozxvwm/video/upload/v1761576052/klingaiclone/partnervid_lw5xrn.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Our Partners Section */}
        <div
          ref={ourPartnersRef}
          className="mt-16 md:mt-20 lg:mt-24 text-center px-4"
        >
          <h3
            ref={ourPartnersTitleRef}
            className="text-2xl md:text-3xl mb-8 md:mb-12 font-playfair-display font-bold italic"
          >
            Our Partners
          </h3>
          
          {/* Auto-scrolling partner logos */}
          <div className="relative overflow-hidden">
            {/* Left gradient shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            
            {/* Right gradient shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-6 animate-scroll-rtl">
              {/* First set of partners */}
              {[
                { name: "fal", logo: "/partners/fal.png" },
                { name: "FREEPIK", logo: "/partners/freepik.png" },
                { name: "Pollo.ai", logo: "/partners/pollo.png" },
                { name: "AI MIRROR", logo: "/partners/aimirror.png" },
                { name: "wonder space", logo: "/partners/wonderspace.png" },
                { name: "HUBX", logo: "/partners/hubx.png" },
                { name: "CWITRI", logo: "/partners/cwitri.png" },
                { name: "Monica", logo: "/partners/monica.png" },
                { name: "Replicate", logo: "/partners/replicate.png" },
              ].map((partner, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    partnerCardsRef.current[index] = el;
                  }}
                  className="flex-shrink-0 px-8 py-6 rounded-xl bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300 cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 md:h-16 w-auto object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = 'none';
                      const textSpan = document.createElement('span');
                      textSpan.className = 'text-white font-semibold text-base md:text-lg whitespace-nowrap';
                      textSpan.textContent = partner.name;
                      e.currentTarget.parentElement?.appendChild(textSpan);
                    }}
                  />
                  <span className="text-white font-semibold text-base md:text-lg whitespace-nowrap hidden">
                    {partner.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                { name: "fal", logo: "/partners/fal.png" },
                { name: "FREEPIK", logo: "/partners/freepik.png" },
                { name: "Pollo.ai", logo: "/partners/pollo.png" },
                { name: "AI MIRROR", logo: "/partners/aimirror.png" },
                { name: "wonder space", logo: "/partners/wonderspace.png" },
                { name: "HUBX", logo: "/partners/hubx.png" },
                { name: "CWITRI", logo: "/partners/cwitri.png" },
                { name: "Monica", logo: "/partners/monica.png" },
                { name: "Replicate", logo: "/partners/replicate.png" },
              ].map((partner, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 px-8 py-6 rounded-xl bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300 cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 md:h-16 w-auto object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = 'none';
                      const textSpan = document.createElement('span');
                      textSpan.className = 'text-white font-semibold text-sm md:text-base whitespace-nowrap';
                      textSpan.textContent = partner.name;
                      e.currentTarget.parentElement?.appendChild(textSpan);
                    }}
                  />
                  <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap hidden">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 30s linear infinite;
        }
        
        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
