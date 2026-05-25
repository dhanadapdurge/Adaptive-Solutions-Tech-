"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function LMSHero() {
  return (
    <section className="relative pt-8 pb-16 px-6 min-h-[90vh] overflow-hidden flex items-center bg-transparent">
      {/* Background Hero Photo optimized */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600" 
          alt="LMS Platform" 
          fill
          priority
          className="object-cover opacity-[0.15] mix-blend-multiply"
        />
        {/* Space-Light Atmospheric Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mt-4 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Smart Teaching Helper
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-8 leading-[0.95] tracking-tighter text-[#0F172A] font-heading uppercase"
          >
            <span className="font-medium text-[#0F172A]">Custom LMS</span> <br />
            <span className="font-extrabold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-sm">Made Easy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-950 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-black uppercase tracking-[0.25em] text-[10px] opacity-80"
          >
            Grow your teaching goals with an easy-to-use platform. Built for learning, speed, and great results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
          >
            <button className="group relative px-12 py-5 bg-[#0F172A] text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-[11px] border border-white/10">
               Book A Demo
            </button>
            
            <button className="flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:text-blue-600 transition-colors group">
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white/60 backdrop-blur-xl group-hover:border-blue-600 transition-all shadow-sm">
                <Play className="w-4 h-4 fill-slate-900 group-hover:fill-blue-600" />
              </div>
              Explore Platform
            </button>
          </motion.div>
        </div>

        {/* Right Side: Enhanced Orbit Visual with SHINY EFFECT */}
        <div className="relative h-[500px] lg:h-[650px] flex items-center justify-center pointer-events-none pt-20">
           <div className="relative w-full max-w-[420px] aspect-square">
              {/* Concentric Rings */}
              {[1.4, 1.2, 1.0, 0.85, 0.7, 0.55, 0.4].map((scale, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 rounded-full border border-slate-900/20 shadow-[inset_0_0_20px_rgba(15,23,42,0.05)]"
                  style={{ transform: `scale(${scale})` }}
                ></div>
              ))}
              
              {/* Shiny Orbiting Nodes */}
              {[
                { color: "bg-blue-500", size: "w-8 h-8", duration: 18, delay: 0, scale: 1.4, glow: "rgba(59,130,246,0.6)" },
                { color: "bg-pink-500", size: "w-6 h-6", duration: 25, delay: -5, scale: 1.2, glow: "rgba(236,72,153,0.5)" },
                { color: "bg-blue-600", size: "w-7 h-7", duration: 20, delay: -10, scale: 1.0, glow: "rgba(37,99,235,0.6)" },
                { color: "bg-emerald-500", size: "w-5 h-5", duration: 15, delay: -2, scale: 0.85, glow: "rgba(16,185,129,0.5)" },
                { color: "bg-amber-500", size: "w-7 h-7", duration: 22, delay: -15, scale: 0.7, glow: "rgba(245,158,11,0.5)" },
                { color: "bg-indigo-600", size: "w-6 h-6", duration: 12, delay: -8, scale: 0.55, glow: "rgba(79,70,229,0.5)" },
                { color: "bg-purple-500", size: "w-5 h-5", duration: 28, delay: -20, scale: 0.4, glow: "rgba(168,85,247,0.5)" },
              ].map((node, i) => (
                <div 
                  key={i} 
                  className="absolute inset-0" 
                  style={{ transform: `scale(${node.scale})` }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: node.duration, repeat: Infinity, ease: "linear", delay: node.delay }}
                    className="absolute inset-0"
                  >
                    {/* Glowing Aura Behind Orbiting Node */}
                    <div 
                      className={cn(
                        "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[12px] opacity-80 animate-pulse pointer-events-none",
                        node.size
                      )}
                      style={{ 
                        background: node.glow.replace(/0\.\d+/, "0.85"),
                        transform: "translate(-50%, -50%) scale(1.4)"
                      }}
                    />
                    
                    <div className={cn(
                      "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full relative overflow-hidden border border-white/30 shadow-lg",
                      node.size,
                      node.color
                    )}
                    style={{ 
                      boxShadow: `0 0 25px ${node.glow}, inset -3px -3px 8px rgba(0,0,0,0.4), inset 3px 3px 8px rgba(255,255,255,0.4)`
                    }}>
                      {/* SHINY REFLECTION EFFECT */}
                      <div className="absolute top-1 left-1 w-[40%] h-[40%] bg-white/60 rounded-full blur-[1px]"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
                      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black/20 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              ))}
              
              {/* Center Core with soft ambient glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                 {/* Warm orange ambient glow at 10% opacity */}
                 <div className="absolute w-32 h-32 bg-[#F97316] rounded-full blur-[30px] opacity-10 animate-pulse pointer-events-none"></div>
                 
                 {/* Layered soft ambient gradient glow behind center core */}
                 <div className="absolute w-44 h-44 bg-gradient-to-tr from-[#4F46E5] via-[#7C3AED] to-[#2DD4BF] rounded-full blur-[35px] opacity-65 animate-pulse pointer-events-none"></div>
                 <div className="absolute w-36 h-36 bg-gradient-to-tr from-[#7C3AED] via-[#E0E7FF] to-[#4F46E5] rounded-full blur-[20px] opacity-40 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
 
                 <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: ["0 0 35px rgba(79,70,229,0.4)", "0 0 55px rgba(124,58,237,0.6)", "0 0 35px rgba(79,70,229,0.4)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-16 h-16 bg-[#0F172A] rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl relative overflow-hidden"
                 >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                    {/* Core Neural Pulse */}
                    <div className="relative">
                       <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-[0_0_15px_#3b82f6]"></div>
                       <div className="absolute inset-0 bg-white/40 rounded-full blur-[1px] scale-50 -translate-y-0.5 -translate-x-0.5"></div>
                    </div>
                  </motion.div>
              </div>
              
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-blue-600/5 blur-[150px] rounded-full animate-pulse"></div>
           </div>
        </div>
      </div>
    </section>
  );
}
