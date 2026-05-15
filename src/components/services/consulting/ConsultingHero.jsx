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

  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setMounted(true);
    setStars([...Array(20)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    })));
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden bg-transparent font-poppins">
      {/* SUBTLE BACKGROUND - Space-Light Theme */}
      <div className="absolute inset-0 z-0 bg-[#CBD8E6]">
        <Image 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600" 
          alt="Strategy Background" 
          fill
          priority
          className="object-cover opacity-50 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#CBD8E6] via-[#CBD8E6]/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#CBD8E6] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>

        {/* Floating Particles - Subtle but Alive */}
        {mounted && stars.map((star) => (
           <motion.div
             key={star.id}
             animate={{ 
               opacity: [0.1, 0.4, 0.1],
               scale: [1, 1.2, 1]
             }}
             transition={{ 
               duration: star.duration,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="absolute bg-slate-900/40 rounded-full"
             style={{
               top: star.top,
               left: star.left,
               width: star.size,
               height: star.size,
             }}
           />
         ))}
      </div>

      <motion.div style={{ y: y1, rotate }} className="absolute top-1/4 right-[15%] w-32 h-32 rounded-[2.5rem] bg-white/40 border border-white/40 backdrop-blur-3xl z-10 shadow-2xl" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-white/30 border border-white/30 backdrop-blur-3xl z-10 shadow-2xl" />

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center">
         
         <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/60 border border-cyan-200 text-cyan-700 text-[10px] font-black uppercase tracking-[0.5em] mb-10 shadow-sm"
            >
              <Zap className="w-4 h-4 fill-cyan-600 animate-pulse" />
              Elite Strategy Node
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
               {/* REDUCED FONT SIZE & POPPINS FONT */}
               <h1 className="text-4xl md:text-6xl font-black mb-10 leading-[0.9] tracking-tighter text-[#0F172A] uppercase">
                  Expert <br />
                  <span className="text-cyan-600">Strategy</span> <br />
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
              className="flex flex-wrap gap-10 justify-center lg:justify-start"
            >
               <button className="group relative px-12 py-6 bg-[#0F172A] text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-[11px] border border-white/10">
                  Start Session
               </button>
               <button className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-widest text-[11px] hover:text-cyan-600 transition-colors group">
                 View Methodology <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </button>
            </motion.div>
         </div>

         <div className="relative h-[600px] flex items-center justify-center">
            <motion.div 
               style={{ y: y2 }}
               className="relative w-full max-w-[450px] aspect-[4/5] rounded-[6rem] overflow-hidden border border-black/5 shadow-2xl z-20 group"
            >
               <img 
                 src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                 alt="Vibrant Strategy" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]"
               />
               <div className="absolute inset-0 bg-[#0F172A]/5 group-hover:bg-transparent transition-colors"></div>
            </motion.div>

            <motion.div 
               style={{ y: y1 }}
               className="absolute -top-10 -right-10 z-30 bg-white/90 backdrop-blur-3xl p-10 rounded-[3.5rem] border border-black/5 shadow-2xl hidden xl:block"
            >
               <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 border border-cyan-100 shadow-sm">
                     <Globe className="text-cyan-600 w-8 h-8" />
                  </div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Success Rate</div>
                  <div className="text-4xl font-black text-cyan-600">98%</div>
               </div>
            </motion.div>
         </div>
      </div>
    </section>
  );
}
