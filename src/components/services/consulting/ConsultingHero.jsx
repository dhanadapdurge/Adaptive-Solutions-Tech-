"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Globe, Zap } from "lucide-react";
import Image from "next/image";

export function ConsultingHero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section
      ref={containerRef}
      className="relative w-full block overflow-hidden pt-24 px-6 font-heading min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay — protects left-side text, reveals image on right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#F4F7FC]/95 via-[#F4F7FC]/75 to-[#F4F7FC]/40" />
      <div className="absolute inset-0 z-0 bg-[#0F172A]/10" />

      {/* Decorative orbs — kept far from text & image columns */}
      <motion.div style={{ y: y1, rotate }} className="absolute top-[10%] right-[5%] w-24 h-24 rounded-[2rem] bg-white/50 border border-white/60 backdrop-blur-2xl z-[5] shadow-lg pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-[8%] left-[3%] w-32 h-32 rounded-full bg-white/40 border border-white/40 backdrop-blur-2xl z-[5] shadow-lg pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-center lg:max-w-3xl">

         <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/60 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-[0.5em] mb-10 shadow-sm"
            >
              <Zap className="w-4 h-4 fill-blue-600 animate-pulse text-blue-600" />
              Elite Strategy Node
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
               {/* Main heading with text-shadow for contrast over background photo */}
               <h1
                 className="text-4xl md:text-6xl font-black mb-10 leading-[0.9] tracking-tighter text-[#0F172A] uppercase"
                 style={{ textShadow: '0 2px 10px rgba(15, 23, 42, 0.2), 0 4px 20px rgba(255, 255, 255, 0.6)' }}
               >
                   Expert <br />
                   <span className="text-blue-600">Strategy</span> <br />
                   For Teams
               </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base text-slate-900 mb-14 max-w-lg mx-auto lg:mx-0 leading-relaxed font-black uppercase tracking-[0.3em] text-[10px] opacity-70"
            >
              Building the most powerful and simple learning paths for your global organization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-10 justify-center items-center"
            >
               <button className="group relative px-12 py-6 bg-[#0F172A] text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-[11px] border border-white/10">
                  Start Session
               </button>
               <button className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-widest text-[11px] hover:text-blue-600 transition-colors group">
                 View Methodology <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </button>
            </motion.div>

            {/* Stat badge — floating inline below buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-14 bg-white/85 backdrop-blur-xl px-8 py-5 rounded-[2rem] border border-[#E2E8F0] shadow-xl flex items-center gap-5 w-fit"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                <Globe className="text-[#F97316] w-6 h-6" />
              </div>
              <div>
                <div className="text-[9px] font-sans font-semibold text-slate-400 uppercase tracking-widest">Success Rate</div>
                <div className="text-3xl font-heading font-black text-[#0F172A] leading-none">98%</div>
              </div>
            </motion.div>
         </div>

      </div>
    </section>
  );
}
