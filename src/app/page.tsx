import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Possibilities from "@/components/Possibilities";
import CreativeControls from "@/components/CreativeControll";
import Initiative from "@/components/Initiative";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main className="relative bg-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Possibilities />
      <CreativeControls />
      <Initiative />
      <Products />
      <Partners />
      <Footer />
    </main>
  );
};

export default page;
