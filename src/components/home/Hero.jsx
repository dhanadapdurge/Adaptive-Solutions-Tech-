"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full block overflow-hidden py-16 bg-transparent font-poppins mt-0 mb-8">
      {/* Subtle Gradient Glows (Light Pink, Light Violet, Light Teal) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#FDF2F8] rounded-full blur-[130px] opacity-80"></div>
        <div className="absolute top-[20%] right-[-10%] w-[70%] h-[70%] bg-[#EEF2FF] rounded-full blur-[150px] opacity-85"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-[#ECFDF5] rounded-full blur-[130px] opacity-80"></div>
      </div>

      {/* Background Image - with modern soft premium overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000" 
          alt="Student Learning" 
          fill
          priority
          className="object-cover transition-opacity duration-1000"
          style={{ filter: "brightness(1.2) contrast(1.03)" }}
        />
        {/* Soft-Light Premium Overlays - protecting readability while letting pastels shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FC]/95 via-white/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7FC] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* HIGH CONTRAST HEADERS */}
          <h1 className="text-5xl md:text-8xl font-black mb-12 text-[#0F172A] tracking-tighter leading-[0.85] uppercase drop-shadow-lg">
            Learning <br />
            <span className="text-blue-600 drop-shadow-md">Made Simple.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            {/* LIGHT THEME CARDS - REFINED FOR MAX VISIBILITY */}
            <div className="p-10 rounded-2xl border border-[#E2E8F0] text-left hover:bg-[#F5F3FF]/40 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group bg-white shadow-[0_4px_12px_rgba(15,23,42,0.03)] relative overflow-hidden">
               {/* 3px gradient top border (Electric Blue to Teal) */}
               <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#0D9488] rounded-t-2xl"></div>
               <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase tracking-tighter group-hover:text-blue-500 transition-colors">Custom Solutions</h3>
               <p className="text-slate-650 leading-relaxed text-sm font-normal">
                 Tailored systems designed for unique organizational mission goals.
               </p>
            </div>
            <div className="p-10 rounded-2xl border border-[#E2E8F0] text-left hover:bg-[#F5F3FF]/40 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group bg-white shadow-[0_4px_12px_rgba(15,23,42,0.03)] relative overflow-hidden">
               {/* 3px gradient top border (Purple to Pink) */}
               <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-2xl"></div>
               <h3 className="text-2xl font-black text-indigo-600 mb-4 uppercase tracking-tighter group-hover:text-indigo-500 transition-colors">EdTech Innovation</h3>
               <p className="text-slate-650 leading-relaxed text-sm font-normal">
                 Strategic technology layers to scale global education impact.
               </p>
            </div>
          </div>
          
          <div className="flex justify-center">
             <button className="group relative px-14 py-6 bg-[#0F172A] text-white font-bold rounded-2xl shadow-sm hover:scale-105 transition-all uppercase tracking-widest text-xs">
               Establish Mission <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
