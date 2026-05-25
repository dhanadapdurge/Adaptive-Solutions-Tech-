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
  { name: "Interactive Slides", icon: ZapIcon, color: "text-orange-600" },
  { name: "3D Learning", icon: CpuIcon, color: "text-blue-600" },
  { name: "Web Apps", icon: CodeIcon, color: "text-indigo-600" },
  { name: "Design Tools", icon: PaletteIcon, color: "text-pink-600" },
  { name: "Learning Standards", icon: GlobeIcon, color: "text-emerald-600" },
  { name: "Learning Systems", icon: LayersIcon, color: "text-purple-600" },
];

export function ToolsShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-heading font-extrabold mb-8 tracking-tight text-[#0F172A] uppercase leading-tight">
              The Tools We <span className="text-[#F97316] italic font-heading font-extrabold">Use</span>
            </h2>
            <p className="text-slate-650 text-sm font-sans font-normal mb-12 max-w-xl opacity-80 leading-relaxed">
              We use the best technology to create learning that is easy, fun, and works for you.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] border border-[#E2E8F0] transition-[all] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[6px] hover:shadow-[0_20px_25px_-5px_rgba(249,115,22,0.08)] flex items-center gap-6 group bg-[#FFFFFF] relative overflow-hidden"
                >
                  {/* Thin Stylish Gradient Border Stroke */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-transparent bg-gradient-to-br from-[#F97316]/20 to-transparent opacity-60 pointer-events-none" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>

                  {/* Icon Badge: semi-transparent circular pill container with shifting vibrancy */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#F97316]/10 border border-[#F97316]/20 transition-all duration-300 group-hover:bg-[#F97316]/20 group-hover:scale-110 shadow-sm relative z-10">
                    <tool.icon className="w-6 h-6 text-[#F97316] transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  
                  <span className="text-[12px] font-sans font-semibold text-slate-800 group-hover:text-[#F97316] transition-colors uppercase tracking-[0.2em] relative z-10">
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
                  className="absolute inset-0 rounded-full border border-slate-900/10 shadow-[inset_0_0_20px_rgba(15,23,42,0.02)]"
                  style={{ transform: `scale(${scale})` }}
                ></div>
              ))}
              
              {/* SHINY ORBITING NODES - One per orbit */}
              {[
                { color: "bg-blue-500", size: "w-8 h-8", duration: 18, delay: 0, scale: 1.2, glow: "rgba(59,130,246,0.5)" },
                { color: "bg-indigo-650", size: "w-7 h-7", duration: 22, delay: -5, scale: 1.0, glow: "rgba(79,70,229,0.4)" },
                { color: "bg-pink-500", size: "w-6 h-6", duration: 26, delay: -10, scale: 0.8, glow: "rgba(236,72,153,0.4)" },
                { color: "bg-emerald-500", size: "w-5 h-5", duration: 20, delay: -15, scale: 0.6, glow: "rgba(16,185,129,0.4)" },
                { color: "bg-amber-500", size: "w-7 h-7", duration: 30, delay: -20, scale: 0.4, glow: "rgba(245,158,11,0.4)" },
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
                      boxShadow: `0 0 25px ${node.glow}, inset -2px -2px 10px rgba(0,0,0,0.15)`
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
                   className="w-24 h-24 rounded-[2.5rem] bg-white border border-slate-200 flex items-center justify-center shadow-2xl z-10 overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                   <CpuIcon className="w-10 h-10 text-blue-600 relative z-10" />
                </motion.div>
                <div className="absolute w-48 h-48 bg-blue-600/5 blur-[100px] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
