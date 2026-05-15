"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-white font-poppins">
      {/* Background Image - MAXIMUM VISIBILITY */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000" 
          alt="Student Learning" 
          fill
          priority
          className="object-cover opacity-90 transition-opacity duration-1000"
        />
        {/* Soft-Light Cinematic Overlays - Minimal obstruction */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
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
            <span className="text-cyan-600 drop-shadow-md">Made Simple.</span>
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
            <div className="p-10 rounded-[3.5rem] border border-black/5 text-left hover:border-cyan-500/50 transition-all group bg-white/60 backdrop-blur-3xl shadow-2xl">
               <h3 className="text-2xl font-black text-cyan-600 mb-4 uppercase tracking-tighter group-hover:text-cyan-500 transition-colors">Custom Solutions</h3>
               <p className="text-slate-900 leading-relaxed text-[11px] font-black uppercase tracking-[0.3em] opacity-80">
                 Tailored systems designed for unique organizational mission goals.
               </p>
            </div>
            <div className="p-10 rounded-[3.5rem] border border-black/5 text-left hover:border-blue-500/50 transition-all group bg-white/60 backdrop-blur-3xl shadow-2xl">
               <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase tracking-tighter group-hover:text-blue-500 transition-colors">EdTech Innovation</h3>
               <p className="text-slate-900 leading-relaxed text-[11px] font-black uppercase tracking-[0.3em] opacity-80">
                 Strategic technology layers to scale global education impact.
               </p>
            </div>
          </div>
          
          <div className="flex justify-center">
             <button className="group relative px-14 py-6 bg-[#0F172A] text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-[11px] border border-white/10">
               Establish Mission <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
