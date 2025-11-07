"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Initiative = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentPanelRef = useRef<HTMLDivElement>(null);
  const listItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsData = [
    {
      title: "AI Development",
      description: "At Xeven Solutions, innovation meets intelligence. Our team of experts utilizes cutting-edge technologies to craft custom AI solutions that seamlessly integrate with your unique requirements, revolutionizing how you operate.",
      benefits: [
        { title: "Cutting-Edge Expertise:", text: "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs." },
        { title: "Seamless Integration:", text: "We are dedicated to seamlessly integrating our AI solutions with your existing infrastructure, ensuring a smooth transition." },
        { title: "Comprehensive AI Development Services:", text: "From machine learning to natural language processing, our AI Development Services elevate your organization's capabilities." },
        { title: "Empowering Organizational Capabilities:", text: "Our mission is to empower organizations like yours to not only adapt but thrive in the dynamic landscape of AI technology." }
      ],
    },
    {
      title: "AI Chatbot Development",
      description: "Transform customer engagement with intelligent chatbots that understand context and deliver personalized experiences across all channels.",
      benefits: [
        { title: "Multichannel Support:", text: "Deploy conversational AI across web, mobile, messaging platforms, and voice assistants." },
        { title: "Natural Conversations:", text: "Advanced NLP enables human-like interactions with intent recognition and entity extraction." },
        { title: "24/7 Availability:", text: "Provide instant responses and support to customers around the clock." },
        { title: "Continuous Learning:", text: "Analytics and feedback loops improve chatbot performance over time." }
      ],
    },
    {
      title: "ChatGPT Integration",
      description: "Leverage the power of GPT models to enhance your applications with advanced language understanding and generation capabilities.",
      benefits: [
        { title: "Seamless Integration:", text: "Embed GPT capabilities into your existing applications and workflows with minimal disruption." },
        { title: "Custom Prompt Engineering:", text: "Optimize prompts for your specific use cases to achieve the best results." },
        { title: "Safety & Compliance:", text: "Implement guardrails and content filtering to ensure responsible AI usage." },
        { title: "Usage Monitoring:", text: "Track API usage, costs, and performance with comprehensive analytics." }
      ],
    },
    {
      title: "Machine & Deep Learning",
      description: "Build powerful predictive models and neural networks that unlock insights from your data and drive intelligent decision-making.",
      benefits: [
        { title: "End-to-End ML Pipeline:", text: "From data preparation to model deployment, we handle the complete machine learning lifecycle." },
        { title: "Advanced Algorithms:", text: "Leverage classical ML, deep learning, and ensemble methods for optimal performance." },
        { title: "Model Optimization:", text: "Hyperparameter tuning and architecture search to maximize accuracy and efficiency." },
        { title: "Production Deployment:", text: "Scale models to handle high-volume predictions with low latency." }
      ],
    },
    {
      title: "Computer Vision",
      description: "Enable machines to see and understand visual information with state-of-the-art computer vision solutions for detection, recognition, and analysis.",
      benefits: [
        { title: "Object Detection & Recognition:", text: "Identify and classify objects, faces, and scenes with high accuracy." },
        { title: "Image Segmentation:", text: "Pixel-level analysis for medical imaging, autonomous vehicles, and more." },
        { title: "Real-Time Processing:", text: "Optimize models for edge devices and real-time video analysis." },
        { title: "Custom Dataset Creation:", text: "Data collection, annotation, and augmentation for your specific use case." }
      ],
    },
    {
      title: "Big Data Analytics",
      description: "Turn massive datasets into actionable insights with scalable data pipelines, warehousing, and advanced analytics platforms.",
      benefits: [
        { title: "Data Pipeline Engineering:", text: "Build robust ETL/ELT pipelines to ingest, transform, and load data at scale." },
        { title: "Cloud Data Warehousing:", text: "Leverage modern data warehouses like Snowflake, BigQuery, and Redshift." },
        { title: "Business Intelligence:", text: "Create interactive dashboards and reports that drive data-driven decisions." },
        { title: "Predictive Analytics:", text: "Apply statistical models and ML to forecast trends and identify opportunities." }
      ],
    },
    {
      title: "Predictive Modeling",
      description: "Forecast future outcomes and optimize decisions with advanced predictive models powered by machine learning and statistical analysis.",
      benefits: [
        { title: "Demand Forecasting:", text: "Predict customer demand, inventory needs, and resource allocation." },
        { title: "Risk Assessment:", text: "Identify and quantify risks in finance, healthcare, and operations." },
        { title: "Recommendation Systems:", text: "Personalize content, products, and services for each user." },
        { title: "Anomaly Detection:", text: "Detect fraud, defects, and unusual patterns in real-time." }
      ],
    },
    {
      title: "Custom Software Development",
      description: "Build scalable, secure, and user-friendly applications tailored to your business needs with modern development practices.",
      benefits: [
        { title: "Full-Stack Development:", text: "Web, mobile, and backend solutions using the latest frameworks and technologies." },
        { title: "API Design & Integration:", text: "RESTful and GraphQL APIs that connect your systems seamlessly." },
        { title: "Quality Assurance:", text: "Comprehensive testing strategies to ensure reliability and performance." },
        { title: "DevOps & CI/CD:", text: "Automated deployment pipelines for faster, safer releases." }
      ],
    },
    {
      title: "Natural Language Processing",
      description: "Extract meaning from text and enable intelligent language understanding with advanced NLP techniques and models.",
      benefits: [
        { title: "Text Classification:", text: "Categorize documents, emails, and customer feedback automatically." },
        { title: "Named Entity Recognition:", text: "Extract people, places, organizations, and other entities from text." },
        { title: "Sentiment Analysis:", text: "Understand customer emotions and opinions from reviews and social media." },
        { title: "Semantic Search:", text: "Build intelligent search systems that understand user intent and context." }
      ],
    },
    {
      title: "DevOps",
      description: "Accelerate software delivery and improve reliability with modern DevOps practices, automation, and infrastructure as code.",
      benefits: [
        { title: "CI/CD Pipelines:", text: "Automate build, test, and deployment processes for faster releases." },
        { title: "Infrastructure as Code:", text: "Manage cloud infrastructure with Terraform, CloudFormation, and Ansible." },
        { title: "Monitoring & Observability:", text: "Track system health, performance, and errors with comprehensive monitoring." },
        { title: "Security & Compliance:", text: "Implement security best practices and meet regulatory requirements." }
      ],
    },
    {
      title: "UI/UX",
      description: "Create intuitive, beautiful, and accessible user experiences that delight users and drive engagement.",
      benefits: [
        { title: "User Research:", text: "Understand your users through interviews, surveys, and usability testing." },
        { title: "Design Systems:", text: "Build consistent, scalable design systems with reusable components." },
        { title: "Prototyping & Testing:", text: "Validate designs early with interactive prototypes and user feedback." },
        { title: "Accessibility:", text: "Ensure your products are usable by everyone, including people with disabilities." }
      ],
    },
  ];

  // Services state fetched from API, defaults to local cardsData
  const [services, setServices] = useState(cardsData);

  // Animated indicator ref for active item
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Title animation - dramatic entrance from top
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

        // Description animation - fade in with slight delay
        gsap.fromTo(
          descriptionRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 75%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // List items stagger animation
        const validListItems = listItemRefs.current.filter((btn) => btn !== null);
        
        gsap.fromTo(
          validListItems,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: {
              amount: 0.6,
              from: "start",
            },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Content panel entrance - slide from right
        gsap.fromTo(
          contentPanelRef.current,
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
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // List item hover animations
        validListItems.forEach((btn) => {
          if (btn) {
            btn.addEventListener("mouseenter", () => {
              gsap.to(btn, { 
                x: 5,
                duration: 0.3, 
                ease: "power2.out" 
              });
            });
            btn.addEventListener("mouseleave", () => {
              gsap.to(btn, { 
                x: 0,
                duration: 0.3, 
                ease: "power2.out" 
              });
            });
          }
        });

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    if (contentPanelRef.current) {
      gsap.fromTo(
        contentPanelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  // Move active indicator to align with active list item
  useEffect(() => {
    const btn = listItemRefs.current[activeIndex];
    if (btn && indicatorRef.current) {
      const y = btn.offsetTop;
      const h = btn.offsetHeight;
      gsap.to(indicatorRef.current, {
        y,
        height: h,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);

  

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4"
          >
            CortexLane <span className="font-playfair-display italic text-blue-400">Services</span>
          </h2>
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Expert AI services to design, build, and operate production systems—
            aligned to your outcomes and delivered with reliability.
          </p>
        </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-0 mb-8 shadow-2xl">
        {/* Left Sidebar - Dark Navy */}
        <div className="bg-[#0a0e27] border-r border-gray-800/50 lg:col-span-1 relative overflow-hidden">
          <div className="flex flex-col">
            {services.map((card, index) => (
              <button
                key={index}
                ref={(el) => {
                  listItemRefs.current[index] = el;
                }}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-6 py-4 transition-all duration-200 relative ${
                  activeIndex === index
                    ? "bg-[#d946ef] text-white font-semibold"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                }`}
              >
                {card.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Panel - White */}
        <div ref={contentPanelRef} className="bg-white lg:col-span-1 relative overflow-y-auto p-8 lg:p-12">
          <div className="relative z-10">
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {services[activeIndex]?.title ?? "Loading..."}
            </h3>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              {services[activeIndex]?.description}
            </p>
            
            {/* Business Benefits Section */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-6">
              Business Benefits of Choosing Us
            </h4>
            
            {/* Benefits List */}
            <ul className="space-y-5">
              {services[activeIndex]?.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gray-900 mr-2 mt-1">■</span>
                  <div>
                    <span className="font-semibold text-gray-800">{benefit.title}</span>
                    <span className="text-gray-600"> {benefit.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Initiative;
