"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// LMS Specific Sections
import { LMSHero } from "@/components/services/lms/LMSHero";
import { LMSServicesBento } from "@/components/services/lms/LMSServicesBento";
import { LMSFeaturesBento } from "@/components/services/lms/LMSFeaturesBento";
import { LMSMobile } from "@/components/services/lms/LMSMobile";
import { IntegrationCloud } from "@/components/services/lms/IntegrationCloud";
import { LMSProcess } from "@/components/services/lms/LMSProcess";
import { LMSVideo } from "@/components/services/lms/LMSVideo";
import { LMSTestimonials } from "@/components/services/lms/LMSTestimonials";
import { LMSFinalCTA } from "@/components/services/lms/LMSFinalCTA";

export default function CustomLMSPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <Navbar />

      <div className="relative z-10 space-y-12">
        <LMSHero />
        
        <div className="max-w-7xl mx-auto px-6">
          <LMSServicesBento />
        </div>

        <LMSFeaturesBento />

        <LMSMobile />

        <LMSVideo />

        <div className="max-w-7xl mx-auto px-6">
          <IntegrationCloud />
        </div>

        <LMSProcess />
        
        <LMSTestimonials />
        
        <LMSFinalCTA />
      </div>

      <Footer />
    </main>
  );
}
