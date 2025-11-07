"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Calculate dropdown height when activeDropdown changes
  useEffect(() => {
    if (activeDropdown && dropdownRefs.current[activeDropdown]) {
      const element = dropdownRefs.current[activeDropdown];
      if (element) {
        const height = element.offsetHeight;
        setDropdownHeight(height + 16); // Add some padding (pt-2 = 8px top + 8px bottom)
      }
    } else {
      setDropdownHeight(0);
    }
  }, [activeDropdown]);

  // Handle scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Show background after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiServicesItems = [
    {
      title: "Core Services",
      items: ["AI Development", "Machine Learning", "Computer Vision"],
    },
    {
      title: "Specialized",
      items: [
        "ChatGPT Integration",
        "NLP Solutions",
        "Predictive Modeling",
      ],
    },
    {
      title: "Support",
      items: ["DevOps", "MLOps"],
    },
  ];

  const productsItems = [
    {
      title: "AI Products",
      items: [
        "CortexLane Studio",
        "CortexLane Vision",
        "CortexLane Ops",
      ],
    },
    {
      title: "Solutions",
      items: ["Enterprise AI", "Custom Development"],
    },
  ];

  const aboutUsItems = [
    {
      title: "Company",
      items: [
        "User Guide",
        "Talent Network",
        "Affiliate Program",
        "Contact Us",
      ],
    },
  ];

  const languageOptions = [
    { code: "en", name: "English", display: "English" },
    { code: "ja", name: "Japanese", display: "日本語" },
    { code: "ko", name: "Korean", display: "한국어" },
  ];

  const navItems = [
    { name: "AI Services", path: "/services", hasDropdown: true },
    { name: "Products", path: "/products", hasDropdown: true },
    { name: "About Us", path: "/about-us", hasDropdown: true },
    { name: "Blog", path: "/blog" },
  ];

  const getDropdownContent = (dropdownName: string) => {
    switch (dropdownName) {
      case "AI Services":
        return aiServicesItems;
      case "Products":
        return productsItems;
      case "About Us":
        return aboutUsItems;
      default:
        return [];
    }
  };

  const getDropdownColumns = (dropdownName: string) => {
    switch (dropdownName) {
      case "AI Services":
        return "grid-cols-3";
      case "Products":
        return "grid-cols-2";
      case "About Us":
        return "grid-cols-1";
      default:
        return "grid-cols-1";
    }
  };

  const handleNavItemHover = (itemName: string) => {
    setHoveredItem(itemName);
    if (navItems.find((item) => item.name === itemName)?.hasDropdown) {
      setActiveDropdown(itemName);
    }
  };

  const handleNavItemLeave = () => {
    setHoveredItem(null);
  };

  const handleLanguageSelect = (language: {
    code: string;
    name: string;
    display: string;
  }) => {
    setSelectedLanguage(language.display);
    setActiveDropdown(null);
    setMobileLanguageOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => {
        setIsHeaderHovered(false);
        setActiveDropdown(null);
        setHoveredItem(null);
      }}
    >
      {/* Main Header Container */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isHeaderHovered ||
          isScrolled ||
          (activeDropdown && activeDropdown !== "language") ||
          mobileMenuOpen
            ? "bg-black/85 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        } ${mobileMenuOpen ? "min-h-16 max-h-screen" : "h-16"}`}
      >
        {/* Main Header Bar - Fixed height */}
        <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 relative">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 5L25 15L35 20L25 25L20 35L15 25L5 20L15 15L20 5Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <circle cx="20" cy="20" r="3" fill="black" />
                </svg>
              </div>
              <span className="text-white text-xl font-semibold tracking-wide">
                CortexLane
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleNavItemHover(item.name)}
                  onMouseLeave={handleNavItemLeave}
                >
                  <button className="cursor-pointer px-4 py-2 text-white/90 hover:text-white transition-all duration-200">
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.name}
                    </span>
                  </button>

                  {/* Individual Dropdown for each nav item - Content only */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 pt-2 z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div
                        className="min-w-max"
                        ref={(el) => {
                          dropdownRefs.current[item.name] = el;
                        }}
                      >
                        <div
                          className={`grid ${getDropdownColumns(
                            item.name
                          )} gap-8 lg:gap-12 py-6 lg:py-8`}
                        >
                          {getDropdownContent(item.name).map((section, idx) => (
                            <div key={idx}>
                              <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-4">
                                {section.title}
                              </h3>
                              <ul className="space-y-3">
                                {section.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <a
                                      href="#"
                                      className="text-white/90 hover:text-white text-sm font-medium transition-colors block hover:translate-x-1 duration-200 whitespace-nowrap cursor-pointer"
                                    >
                                      {subItem}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right Side Actions */}
            <div className="hidden md:flex items-center gap-2">
              {/* Language Selector */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem("language");
                  setActiveDropdown("language");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
              >
                <button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md cursor-pointer">
                  <span className="text-sm font-medium">
                    {selectedLanguage}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Language Dropdown */}
                {activeDropdown === "language" && (
                  <div
                    className="absolute top-full right-0 pt-2 z-50"
                    onMouseEnter={() => setActiveDropdown("language")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div
                      className="w-28 bg-gray-700 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl"
                      ref={(el) => {
                        dropdownRefs.current["language"] = el;
                      }}
                    >
                      <div className="py-2">
                        {languageOptions.map((language) => (
                          <button
                            key={language.code}
                            onClick={() => handleLanguageSelect(language)}
                            className={`w-full text-center px-3 py-2 text-sm transition-colors cursor-pointer ${
                              selectedLanguage === language.display
                                ? "text-white"
                                : "text-white/90 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {language.display}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Get Started Button */}
              <button className="px-6 py-2 text-sm font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 whitespace-nowrap cursor-pointer">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Full-width dropdown background overlay */}
        {activeDropdown && activeDropdown !== "language" && (
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 bg-black/85 backdrop-blur-md border-b border-white/10 z-40 transition-all duration-500 ease-in-out"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
            style={{
              height: dropdownHeight > 0 ? `${dropdownHeight}px` : "auto",
            }}
          ></div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 py-4 space-y-2 border-t border-white/10 mt-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileDropdownOpen === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown Content */}
                    {mobileDropdownOpen === item.name && (
                      <div className="mt-2 ml-4 space-y-4 pb-2">
                        {getDropdownContent(item.name).map((section, idx) => (
                          <div key={idx}>
                            <h4 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2 px-4">
                              {section.title}
                            </h4>
                            <ul className="space-y-1">
                              {section.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/5 rounded transition-colors cursor-pointer"
                                  >
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.path}
                    className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Language Selector */}
            <div>
              <button
                onClick={() => setMobileLanguageOpen(!mobileLanguageOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all mt-2 cursor-pointer"
              >
                <span className="text-sm font-medium">{selectedLanguage}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Language Dropdown */}
              {mobileLanguageOpen && (
                <div className="mt-2 ml-4 space-y-1 pb-2">
                  {languageOptions.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer rounded ${
                        selectedLanguage === language.display
                          ? "text-white bg-white/10"
                          : "text-white/90 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {language.display}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Get Started Button */}
            <div className="pt-4 pb-2">
              <button className="w-full px-6 py-3 text-sm font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
