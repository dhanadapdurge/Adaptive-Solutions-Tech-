"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

// Course Components
import { TrainingCategoryShowcase } from "@/components/services/TrainingCategoryShowcase";
import { ToolsShowcase } from "@/components/services/ToolsShowcase";
import { LearnerShowcase } from "@/components/services/LearnerShowcase";
import { CourseMedia } from "@/components/services/CourseMedia";
import { CourseFinalCTA } from "@/components/services/CourseFinalCTA";

export default function CourseDevelopmentPage() {
  return (
    <main className="relative min-h-screen bg-[#F4F7FC] text-slate-900 overflow-hidden font-sans">
      <Navbar />

      <div className="relative z-10">
        {/* Hero Section with Background Photo */}
        <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[90vh]">
          {/* Hero Background Image - High Opacity */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
               alt="Creative Content Studio" 
               className="w-full h-full object-cover transition-opacity duration-1000"
               style={{ filter: "brightness(1.15) contrast(1.02)" }}
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7FC] via-transparent to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 text-blue-700 text-[10px] font-heading font-extrabold uppercase tracking-[0.3em] mb-8 shadow-md"
            >
              <Star className="w-3 h-3 fill-blue-600 text-blue-650" />
              Creative Content Studio
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-heading font-extrabold mb-8 tracking-tight leading-[0.85] text-[#0F172A] uppercase"
              style={{ textShadow: "0 4px 12px rgba(15, 23, 42, 0.15)" }}
            >
              PREMIUM <br />
              <span className="text-blue-600">COURSE</span> <br />
              DEVELOPMENT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-700 mb-12 max-w-xl mx-auto leading-relaxed font-sans font-medium uppercase tracking-[0.25em] opacity-90"
            >
              Beautiful and simple learning materials that help your team learn faster and better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
               <button className="px-12 py-6 bg-[#F97316] text-[#FFFFFF] font-heading font-extrabold rounded-2xl shadow-2xl hover:scale-105 hover:bg-[#EA580C] transition-all uppercase tracking-[0.3em] text-[11px] border border-white/10">
                  Start Creating
               </button>
               <button className="flex items-center gap-3 text-[#0F172A] font-heading font-extrabold uppercase tracking-[0.3em] text-[11px] hover:text-blue-600 transition-colors group">
                 View Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </motion.div>
          </div>
        </section>

        {/* Content Flow */}
        <div className="space-y-12">
          <TrainingCategoryShowcase />
          
          <div className="relative overflow-hidden">
             <ToolsShowcase />
          </div>

          <LearnerShowcase />
          
          <CourseMedia />

          <CourseFinalCTA />
        </div>
      </div>

      <Footer />
    </main>
  );
}
