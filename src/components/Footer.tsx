"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // Animation refs
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const creativeStudioRef = useRef<HTMLDivElement>(null);
  const apiPlatformRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    if (footerRef.current) {
      const ctx = gsap.context(() => {
        // Logo animation
        gsap.fromTo(
          logoRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Creative Studio animation
        gsap.fromTo(
          creativeStudioRef.current,
          {
            opacity: 0,
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // API Platform animation
        gsap.fromTo(
          apiPlatformRef.current,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // About Us animation
        gsap.fromTo(
          aboutUsRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Social Icons animation
        if (socialIconsRef.current?.children) {
          const socialIcons = Array.from(socialIconsRef.current.children);
          gsap.fromTo(
            socialIcons,
            {
              opacity: 0,
              scale: 0.8,
              y: 20,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.4,
              ease: "back.out(1.7)",
              stagger: 0.1,
              delay: 0.5,
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 85%",
                end: "top 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Copyright animation
        gsap.fromTo(
          copyrightRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.7,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover animations for social icons
        if (socialIconsRef.current) {
          const socialLinks = socialIconsRef.current.querySelectorAll("a");
          socialLinks.forEach((link) => {
            link.addEventListener("mouseenter", () => {
              gsap.to(link, {
                scale: 1.2,
                rotation: 5,
                duration: 0.3,
                ease: "power2.out",
              });
            });

            link.addEventListener("mouseleave", () => {
              gsap.to(link, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            });
          });
        }

        // Hover animations for footer links
        const footerLinks =
          footerRef.current?.querySelectorAll('a:not([href="#"])');
        footerLinks?.forEach((link) => {
          link.addEventListener("mouseenter", () => {
            gsap.to(link, {
              x: 5,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          link.addEventListener("mouseleave", () => {
            gsap.to(link, {
              x: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        });
      }, footerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="text-white py-12 px-10"
      style={{ backgroundColor: "#121316" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo Section */}
          <div ref={logoRef} className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold">CortexLane</span>
            </div>
          </div>

          {/* Mobile: AI Services & Products in flex */}
          <div className="flex justify-between px-4 md:hidden col-span-1">
            {/* AI Services Column */}
            <div ref={creativeStudioRef} className="space-y-3">
              <h3 className="text-white font-semibold text-sm">
                AI Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    AI Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    AI Chatbot Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    ChatGPT Integration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    Computer Vision
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    NLP
                  </a>
                </li>
              </ul>
            </div>

            {/* Products Column */}
            <div ref={apiPlatformRef} className="space-y-3">
              <h3 className="text-white font-semibold text-sm">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    CortexLane Studio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    CortexLane Vision
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors block"
                  >
                    CortexLane Ops
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop: AI Services Column */}
          <div className="space-y-3 hidden md:block">
            <h3 className="text-white font-semibold text-sm">
              AI Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  AI Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  AI Chatbot Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  ChatGPT Integration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  Machine & Deep Learning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  Computer Vision
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  Big Data Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  Predictive Modeling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  Custom Software Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  NLP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  DevOps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  UI/UX
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop: Products Column */}
          <div className="space-y-3 hidden md:block">
            <h3 className="text-white font-semibold text-sm">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  CortexLane Studio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  CortexLane Vision
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  CortexLane Ops
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Column - Centered on mobile */}
          <div
            ref={aboutUsRef}
            className="space-y-3 flex flex-col items-center md:items-start"
          >
            <h3 className="text-white font-semibold text-sm">About Us</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors block"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors block"
                >
                  Talent Network
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors block"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors block text-center md:text-left"
                >
                  Contact Us: info@cortexlane.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons - Centered on mobile */}
          <div
            ref={socialIconsRef}
            className="flex items-start justify-center lg:justify-end space-x-4 pt-3 md:pt-0"
          >
            {/* YouTube */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.012.001z.017-.001z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div ref={copyrightRef} className="border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-xs text-center">
            © 2024-2025 CortexLane.com All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
