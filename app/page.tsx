"use client";

import React from "react";
import HeroSection from "@/components/landing/hero-section";
import SiteNav from "@/components/landing/site-nav";
import FeaturesSection from "@/components/landing/aboutbing-section";
import CreativitySection from "@/components/landing/tokenomics-section";
import TestimonialSection from "@/components/landing/tokendistribution-section";
import SiteFooter from "@/components/landing/site-footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteNav />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CreativitySection />
        <TestimonialSection />
      </main>
      
      <SiteFooter />
    </div>
  );
}