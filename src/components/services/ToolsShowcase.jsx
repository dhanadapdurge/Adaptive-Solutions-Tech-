"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  Cpu as CpuIcon, 
  Code2 as CodeIcon, 
  Palette as PaletteIcon, 
  Globe as GlobeIcon, 
  Layers as LayersIcon, 
  Zap as ZapIcon 
} from "lucide-react";

const tools = [
  { name: "Interactive Slides", icon: ZapIcon, color: "text-orange-400" },
  { name: "3D Learning", icon: CpuIcon, color: "text-blue-400" },
  { name: "Web Apps", icon: CodeIcon, color: "text-cyan-400" },
  { name: "Design Tools", icon: PaletteIcon, color: "text-pink-400" },
  { name: "Learning Standards", icon: GlobeIcon, color: "text-emerald-400" },
  { name: "Learning Systems", icon: LayersIcon, color: "text-purple-400" },
];

export function ToolsShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter font-poppins text-[#0F172A] uppercase leading-[0.85]">
              The <span className="text-cyan-600">Tools We Use</span>
            </h2>
            <p className="text-slate-700 text-[11px] font-black uppercase tracking-[0.4em] mb-12 max-w-xl opacity-80 font-poppins">
              We use the best technology to create learning that is easy, fun, and works for you.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] border border-black/5 transition-all shadow-xl flex items-center gap-6 group bg-[#0F172A] hover:border-cyan-400/50"
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg bg-white/5 border border-white/10",
                    tool.color
                  )}>
                    <tool.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[12px] font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] font-poppins">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square flex items-center justify-center max-w-[500px] mx-auto">
              
              {/* ENHANCED VISIBLE ORBITS */}
              {[1.2, 1.0, 0.8, 0.6, 0.4].map((scale, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 rounded-full border border-slate-900/20 shadow-[inset_0_0_20px_rgba(15,23,42,0.05)]"
                  style={{ transform: `scale(${scale})` }}
                ></div>
              ))}
              
              {/* SHINY ORBITING NODES - One per orbit */}
              {[
                { color: "bg-cyan-500", size: "w-8 h-8", duration: 18, delay: 0, scale: 1.2, glow: "rgba(6,182,212,0.6)" },
                { color: "bg-blue-600", size: "w-7 h-7", duration: 22, delay: -5, scale: 1.0, glow: "rgba(37,99,235,0.5)" },
                { color: "bg-pink-500", size: "w-6 h-6", duration: 26, delay: -10, scale: 0.8, glow: "rgba(236,72,153,0.5)" },
                { color: "bg-emerald-500", size: "w-5 h-5", duration: 20, delay: -15, scale: 0.6, glow: "rgba(16,185,129,0.5)" },
                { color: "bg-amber-500", size: "w-7 h-7", duration: 30, delay: -20, scale: 0.4, glow: "rgba(245,158,11,0.5)" },
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
                    <div className={cn(
                      "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full relative overflow-hidden",
                      node.size,
                      node.color
                    )}
                    style={{ 
                      boxShadow: `0 0 25px ${node.glow}, inset -2px -2px 10px rgba(0,0,0,0.2)`
                    }}>
                      {/* SHINY REFLECTION EFFECT */}
                      <div className="absolute top-1 left-1 w-[40%] h-[40%] bg-white/60 rounded-full blur-[1px]"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
                    </div>
                  </motion.div>
                </div>
              ))}

              {/* Animated Center Core */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                   animate={{ 
                      rotate: 360,
                      scale: [1, 1.05, 1]
                   }}
                   transition={{ 
                     rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                     scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                   }}
                   className="w-24 h-24 rounded-[2.5rem] bg-[#0F172A] border border-white/10 flex items-center justify-center shadow-2xl z-10 overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
                   <CpuIcon className="w-10 h-10 text-cyan-400 relative z-10" />
                </motion.div>
                <div className="absolute w-48 h-48 bg-cyan-600/10 blur-[100px] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
