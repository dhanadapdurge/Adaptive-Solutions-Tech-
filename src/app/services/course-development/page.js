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
    <main className="relative min-h-screen bg-transparent text-slate-900 overflow-hidden font-poppins">
      <Navbar />

      <div className="relative z-10">
        {/* Hero Section with Background Photo */}
        <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[90vh]">
          {/* Hero Background Image - High Opacity */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
               alt="Creative Content Studio" 
               className="w-full h-full object-cover opacity-80 transition-opacity duration-1000"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/5 text-cyan-700 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-md"
            >
              <Star className="w-3 h-3 fill-cyan-600" />
              Creative Content Studio
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85] text-[#0F172A] drop-shadow-sm uppercase"
            >
              PREMIUM <br />
              <span className="text-cyan-700">COURSE</span> <br />
              DEVELOPMENT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-900 mb-12 max-w-2xl mx-auto leading-relaxed font-black uppercase tracking-[0.3em] text-[11px] opacity-80"
            >
              Beautiful and simple learning materials that help your team learn faster and better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
               <button className="px-12 py-6 bg-[#0F172A] text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-[11px] border border-white/10">
                  Start Creating
               </button>
               <button className="flex items-center gap-3 text-[#0F172A] font-black uppercase tracking-[0.3em] text-[11px] hover:text-cyan-600 transition-colors group">
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
